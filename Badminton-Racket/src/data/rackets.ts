
export interface Racket {
  id: string;
  name: string;
  brand: string;
  series: string;
  weight: "3U" | "4U" | "5U";
  balance: "Head Heavy" | "Head Light" | "Balanced";
  stiffness: "Stiff" | "Medium" | "Flexible";
  price: number;
  image: string;
  tags: string[];
  description: string;
}

export const RACKET_DATA: Racket[] = [
  {
    id: "1",
    name: "Astrox 99 Pro",
    brand: "Yonex",
    series: "Astrox",
    weight: "4U",
    balance: "Head Heavy",
    stiffness: "Stiff",
    price: 220,
    image: "https://images.unsplash.com/photo-1716155249759-b5f068f74e63?q=80&w=800&auto=format&fit=crop",
    tags: ["Power", "Smash", "Pro"],
    description: "Designed for power hitters, the Astrox 99 Pro delivers steep smashes and overwhelming control."
  },
  {
    id: "2",
    name: "Nanoflare 800",
    brand: "Yonex",
    series: "Nanoflare",
    weight: "3U",
    balance: "Head Light",
    stiffness: "Stiff",
    price: 190,
    image: "https://images.unsplash.com/photo-1613918431551-b2ef2720387c?q=80&w=800&auto=format&fit=crop",
    tags: ["Speed", "Control", "Defense"],
    description: "Built for speed, the Nanoflare 800 allows for rapid-fire drives and quick defensive reactions."
  },
  {
    id: "3",
    name: "Ryuga II",
    brand: "Victor",
    series: "Thruster",
    weight: "4U",
    balance: "Head Heavy",
    stiffness: "Medium",
    price: 180,
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=800&auto=format&fit=crop",
    tags: ["Offense", "Dragons", "Power"],
    description: "The Ryuga II enhances the swing weight for devastating power while maintaining good handling."
  },
  {
    id: "4",
    name: "Arcsaber 11 Pro",
    brand: "Yonex",
    series: "Arcsaber",
    weight: "3U",
    balance: "Balanced",
    stiffness: "Stiff",
    price: 210,
    image: "https://images.unsplash.com/photo-1613918431551-b2ef2720387c?q=80&w=800&auto=format&fit=crop",
    tags: ["Control", "All-around", "Accuracy"],
    description: "The ultimate control racket. The Arcsaber 11 Pro offers extended shuttle hold time for precise shot-making."
  },
  {
    id: "5",
    name: "Halberd 9000",
    brand: "Li-Ning",
    series: "Halberd",
    weight: "4U",
    balance: "Balanced",
    stiffness: "Medium",
    price: 160,
    image: "https://images.unsplash.com/photo-1716155249759-b5f068f74e63?q=80&w=800&auto=format&fit=crop",
    tags: ["Versatile", "Mid-range", "Doubles"],
    description: "A versatile racket suitable for both attacking and defensive playstyles in doubles."
  },
  {
    id: "6",
    name: "Tectonic 9",
    brand: "Li-Ning",
    series: "Tectonic",
    weight: "5U",
    balance: "Head Heavy",
    stiffness: "Flexible",
    price: 200,
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=800&auto=format&fit=crop",
    tags: ["Power", "Elasticity", "Aggressive"],
    description: "Features a unique frame structure that maximizes energy transfer for explosive shots."
  },
  {
    id: "7",
    name: "Auraspeed 90K",
    brand: "Victor",
    series: "Auraspeed",
    weight: "4U",
    balance: "Head Light",
    stiffness: "Stiff",
    price: 175,
    image: "https://images.unsplash.com/photo-1613918431551-b2ef2720387c?q=80&w=800&auto=format&fit=crop",
    tags: ["Speed", "Fast", "Rally"],
    description: "Designed for the fast-paced flat game, giving you the edge in rapid exchanges."
  },
  {
    id: "8",
    name: "G-Force Superlite",
    brand: "Li-Ning",
    series: "G-Force",
    weight: "5U",
    balance: "Head Heavy",
    stiffness: "Flexible",
    price: 80,
    image: "https://images.unsplash.com/photo-1716155249759-b5f068f74e63?q=80&w=800&auto=format&fit=crop",
    tags: ["Budget", "Lightweight", "Beginner"],
    description: "An ultra-lightweight racket that punches above its weight class. Great for beginners wanting power."
  }
];

export const BRANDS = Array.from(new Set(RACKET_DATA.map(r => r.brand)));
export const WEIGHTS = ["3U", "4U", "5U"];
export const BALANCES = ["Head Heavy", "Balanced", "Head Light"];
export const STIFFNESS = ["Stiff", "Medium", "Flexible"];
