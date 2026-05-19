// Image Configuration for Travel With Sohan
// Centralized image paths for easy management

export const IMAGES = {
    hero: {
        // Main hero background - download from Unsplash: "sri lanka mountains fog"
        background: '/images/hero/hero-background.png',
        // Glowing map - create using guide or download PNG
        mapGlow: '/images/hero/sri-lanka-map-glow.png',
    },
    tours: {
        // Tour 1: Sigiriya - search "sigiriya sunset"
        sigiriya: '/images/tours/sigiriya-sunset.png',
        // Tour 2: Ella - search "ella train sri lanka"
        ella: '/images/tours/ella-train.png',
        // Tour 3: Yala - search "yala coast sri lanka"
        yala: '/images/tours/yala-coast.png',
        // Tour 4: Galle/Mirissa - search "mirissa whale"
        galle: '/images/tours/galle-whale.png',
        hiking: '/images/tours/hiking.png',
        surf: '/images/tours/surf.png',
    },
    discovery: {
        // Main waterfall - search "sri lanka waterfall"
        waterfall: '/images/discovery/waterfall.png',
        // Thumbnail 1 - tea plantations
        nature: '/images/discovery/discovery-nature.jpg',
        // Thumbnail 2 - wildlife
        wildlife: '/images/discovery/discovery-wildlife.jpg',
        // Thumbnail 3 - beach scene
        beach: '/images/discovery/discovery-beach.jpg',
    },
    // Fallback placeholders from Unsplash (current)
    placeholders: {
        hero: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920',
        sigiriya: 'https://images.unsplash.com/photo-1588417865884-b2c1c8e9d5c5?q=80&w=800',
        ella: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
        yala: 'https://images.unsplash.com/photo-1534567110243-e2c6ecf0d4c8?q=80&w=800',
        galle: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800',
        waterfall: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200',
        nature: 'https://images.unsplash.com/photo-1588417865884-b2c1c8e9d5c5?q=80&w=400',
        wildlife: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=400',
        beach: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=400',
    }
} as const;

// Helper function to get image with fallback
export function getImage(path: string, fallback: string): string {
    // Priority: Return the local path if it exists/is provided
    return path || fallback;
}
