# Quick Start - Image Setup for Travel With Sohan

## 📥 Download Images

Follow these steps to get all required images:

### Step 1: Hero Background
1. Go to [Unsplash](https://unsplash.com/s/photos/sri-lanka-mountains-fog)
2. Search: **"sri lanka mountains fog valley person"**
3. Find an image showing:
   - Misty mountain valley
   - Dramatic lighting (dawn/dusk)
   - Optional: lone person viewing the landscape
4. Download in **1920x1080px** or larger
5. Save as: `public/images/hero/hero-background.jpg`

### Step 2: Tour Images

#### Tour 1: Sigiriya (600x400px)
- Search: **"sigiriya rock fortress sunset"**
- Save as: `public/images/tours/sigiriya-sunset.jpg`

#### Tour 2: Ella Train (600x400px)
- Search: **"ella train sri lanka tea plantations"**
- Save as: `public/images/tours/ella-train.jpg`

#### Tour 3: Yala Safari (600x400px)
- Search: **"yala national park coast sri lanka"**
- Save as: `public/images/tours/yala-coast.jpg`

#### Tour 4: Galle/Mirissa (600x400px)
- Search: **"mirissa whale sri lanka"** or **"galle fort coast"**
- Save as: `public/images/tours/galle-whale.jpg`

### Step 3: Discovery Section

#### Main Waterfall (800x500px)
- Search: **"sri lanka waterfall jungle"** (try Ravana Falls or Diyaluma)
- Save as: `public/images/discovery/waterfall-main.jpg`

#### Thumbnails (250x150px each)
1. **Nature**: Tea plantation hills
   - Save as: `public/images/discovery/discovery-nature.jpg`

2. **Wildlife**: Elephant or leopard
   - Save as: `public/images/discovery/discovery-wildlife.jpg`

3. **Beach**: Palm beach or coastal sunset
   - Save as: `public/images/discovery/discovery-beach.jpg`

---

## 🎨 Optional: Glowing Sri Lanka Map

### Option A: Create with SVG (Recommended)
The glowing map is already implemented in code using SVG. No download needed!

### Option B: Download PNG Version
1. Visit: https://www.amcharts.com/svg-maps/?map=sriLanka
2. Download SVG
3. Use Canva or Photoshop to:
   - Apply teal stroke (`#00d9ff`)
   - Add glow effect (multiple drop shadows)
   - Export as PNG with transparency
4. Save as: `public/images/hero/sri-lanka-map-glow.png`

---

## ⚡ Optimize Images

Before using, compress all images:

### Online Tools (Easy):
- **TinyPNG**: https://tinypng.com
- **Squoosh**: https://squoosh.app

### Settings:
- **JPG Quality**: 85%
- **Color Enhancement**: Increase contrast +15%, decrease brightness -10%
- **Vignette**: Add subtle darkening to edges

---

## 🔄 Switch to Local Images

Once downloaded and optimized:

1. Open `config/images.ts`
2. Change this function:
```typescript
export function getImage(path: string, fallback: string): string {
  return fallback; // Change this line
}
```

To:
```typescript
export function getImage(path: string, fallback: string): string {
  return path; // Now uses local images!
}
```

3. Update components to use `getImage()`:
```typescript
// In each component, change:
IMAGES.placeholders.hero
// To:
getImage(IMAGES.hero.background, IMAGES.placeholders.hero)
```

---

## ✅ Checklist

- [ ] Download hero background
- [ ] Download 4 tour images
- [ ] Download main waterfall image
- [ ] Download 3 discovery thumbnails
- [ ] Optimize all images via TinyPNG/Squoosh
- [ ] Apply color grading (contrast, teal shadows)
- [ ] Place images in correct directories
- [ ] Update `config/images.ts` to use local paths
- [ ] Test all pages to ensure images load

---

## 🆘 Need Help?

**Current Status**: All components are configured with Unsplash placeholders.

**Next Step**: Download images following the guide above, or continue development with placeholders.

The site will work perfectly with placeholders during development!
