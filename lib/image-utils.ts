/**
 * Shared image optimization constants.
 * 
 * The shimmer placeholder creates a lightweight animated gradient
 * that displays while the actual image loads, giving a premium
 * perceived performance boost.
 */

// Tiny SVG shimmer placeholder — renders as a subtle animated gradient
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#111" offset="0%"/>
      <stop stop-color="#222" offset="50%"/>
      <stop stop-color="#111" offset="100%"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#111"/>
  <rect width="${w}" height="${h}" fill="url(#g)">
    <animate attributeName="x" from="-${w}" to="${w}" dur="1.5s" repeatCount="indefinite"/>
  </rect>
</svg>`;

function toBase64(str: string) {
  return typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
}

/**
 * Generate a blur data URL for Next.js Image placeholder="blur".
 * Use as: placeholder="blur" blurDataURL={blurDataURL(width, height)}
 */
export function blurDataURL(w = 700, h = 475): string {
  return `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;
}

/** Default quality for below-fold images (saves bandwidth) */
export const IMAGE_QUALITY_DEFAULT = 75;

/** Higher quality for hero/above-fold images */
export const IMAGE_QUALITY_HIGH = 85;
