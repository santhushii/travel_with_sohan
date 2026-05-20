/**
 * DeepL JSON Translator
 * 
 * This script translates i18n JSON files (e.g. en.json) into a target language
 * using the DeepL API. It automatically preserves next-intl style interpolation 
 * placeholders like `{year}` or `{count}` by wrapping them in XML ignore tags.
 * 
 * Usage:
 *   export DEEPL_API_KEY="your-api-key"
 *   node scripts/translate-deepl.js <source_file> <target_lang> <output_file>
 * 
 * Example:
 *   node scripts/translate-deepl.js messages/en.json ES messages/es.json
 */

const fs = require('fs');
const path = require('path');

// Parse command line arguments
const args = process.argv.slice(2);
if (args.length < 3) {
  console.error('Error: Missing arguments.');
  console.log('Usage: node scripts/translate-deepl.js <source_file> <target_lang> <output_file>');
  console.log('Example: node scripts/translate-deepl.js messages/en.json ES messages/es.json');
  process.exit(1);
}

const [sourcePath, targetLang, outputPath] = args;
const apiKey = process.env.DEEPL_API_KEY;

if (!apiKey) {
  console.error('Error: DEEPL_API_KEY environment variable is not set.');
  console.log('Please set it in your terminal before running this script:');
  console.log('  Windows Command Prompt:  set DEEPL_API_KEY="your-api-key"');
  console.log('  Windows PowerShell:      $env:DEEPL_API_KEY="your-api-key"');
  console.log('  Linux/macOS Bash:        export DEEPL_API_KEY="your-api-key"');
  process.exit(1);
}

// DeepL API endpoints
const isFreeKey = apiKey.endsWith(':fx');
const apiUrl = isFreeKey
  ? 'https://api-free.deepl.com/v2/translate'
  : 'https://api.deepl.com/v2/translate';

console.log(`Using DeepL ${isFreeKey ? 'Free' : 'Pro'} API endpoint...`);

// Helper to recursively collect all values and their paths
function collectTexts(obj, currentPath = [], results = []) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const val = obj[key];
      const newPath = [...currentPath, key];
      if (typeof val === 'string') {
        results.push({ path: newPath, text: val });
      } else if (typeof val === 'object' && val !== null) {
        collectTexts(val, newPath, results);
      }
    }
  }
  return results;
}

// Helper to set a nested property in an object
function setNestedValue(obj, pathArray, value) {
  let current = obj;
  for (let i = 0; i < pathArray.length - 1; i++) {
    const key = pathArray[i];
    if (!(key in current)) {
      current[key] = {};
    }
    current = current[key];
  }
  current[pathArray[pathArray.length - 1]] = value;
}

// Helper to protect placeholders (e.g. {year} -> <keep>{year}</keep>)
function protectPlaceholders(text) {
  // Regex to match any curly brace content: {anything}
  return text.replace(/\{([^}]+)\}/g, '<keep>{$1}</keep>');
}

// Helper to restore placeholders (e.g. <keep>{year}</keep> -> {year})
function restorePlaceholders(text) {
  // DeepL might change spaces, casing, or keep tags slightly.
  // We match <keep>...</keep> or similar variations, but keep it robust
  return text.replace(/<keep>([\s\S]*?)<\/keep>/gi, (match, p1) => {
    // Trim any spaces DeepL might have added inside the tag
    return p1.trim();
  });
}

async function run() {
  try {
    const absoluteSourcePath = path.resolve(sourcePath);
    if (!fs.existsSync(absoluteSourcePath)) {
      throw new Error(`Source file does not exist: ${absoluteSourcePath}`);
    }

    const sourceData = JSON.parse(fs.readFileSync(absoluteSourcePath, 'utf8'));
    console.log(`Loaded source file: ${sourcePath}`);

    // Collect all translatable texts
    const textItems = collectTexts(sourceData);
    console.log(`Found ${textItems.length} text strings to translate.`);

    if (textItems.length === 0) {
      console.log('No text strings found. Exiting.');
      return;
    }

    // Prepare texts for DeepL (with placeholder protection)
    const preparedTexts = textItems.map(item => protectPlaceholders(item.text));

    // DeepL limits translation calls to a reasonable payload size. We batch them.
    const batchSize = 50;
    const translatedTexts = [];

    for (let i = 0; i < preparedTexts.length; i += batchSize) {
      const batch = preparedTexts.slice(i, i + batchSize);
      console.log(`Translating batch ${Math.floor(i / batchSize) + 1} of ${Math.ceil(preparedTexts.length / batchSize)}...`);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `DeepL-Auth-Key ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: batch,
          target_lang: targetLang.toUpperCase(),
          tag_handling: 'xml',
          ignore_tags: ['keep'],
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`DeepL API request failed (${response.status}): ${errorText}`);
      }

      const result = await response.json();
      if (!result.translations || !Array.isArray(result.translations)) {
        throw new Error('Invalid response format from DeepL API');
      }

      result.translations.forEach(t => {
        translatedTexts.push(restorePlaceholders(t.text));
      });
    }

    // Build the output JSON object
    const outputData = {};
    textItems.forEach((item, index) => {
      setNestedValue(outputData, item.path, translatedTexts[index]);
    });

    // Write to output file
    const absoluteOutputPath = path.resolve(outputPath);
    const outputDir = path.dirname(absoluteOutputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(absoluteOutputPath, JSON.stringify(outputData, null, 2), 'utf8');
    console.log(`Successfully translated and saved to: ${outputPath}`);

  } catch (error) {
    console.error('Translation process failed:', error.message);
    process.exit(1);
  }
}

run();
