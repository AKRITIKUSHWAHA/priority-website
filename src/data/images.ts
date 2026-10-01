export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
  caption?: string;
  category: "hero" | "service" | "about" | "fleet" | "blog" | "cta" | "avatar";
}

// Fallback high-contrast SVG base64 gradient in brand primary and accent colors
export const brandGradientPlaceholder =
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23446CB3'/%3E%3Cstop offset='100%25' stop-color='%230D192E'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3C/svg%3E";

export const images = {
  hero: {
    main: {
      src: "/images/hero-truck.jpg",
      alt: "Priority Hauliers semi-truck cruising on highway during sunset",
      width: 1280,
      height: 720,
      category: "hero",
      caption: "Cross-border line-haul road transport across SADC",
    },
    fleet: {
      src: "/images/hero-2.jpg",
      alt: "Fleet of commercial transport haulage trucks in convoy",
      width: 1280,
      height: 853,
      category: "hero",
      caption: "High-capacity commercial carrier fleet",
    },
  },
  about: {
    operations: {
      src: "/images/about-1.jpg",
      alt: "Priority Hauliers logistics operations and warehouse hub",
      width: 1280,
      height: 853,
      category: "about",
      caption: "Modern sorting, dispatch, and transit facilities",
    },
    driverInspection: {
      src: "/images/about-2.jpg",
      alt: "Professional driver performing safety pre-trip vehicle inspection",
      width: 1280,
      height: 853,
      category: "about",
      caption: "Zero-compromise fleet safety and compliance protocols",
    },
    depot: {
      src: "/images/why-choose.jpg",
      alt: "Priority Hauliers regional distribution depot and container park",
      width: 1280,
      height: 853,
      category: "about",
      caption: "Centralized Harare marshalling and transit depot",
    },
  },
  services: {
    air: {
      src: "/images/service-air.jpg",
      alt: "Air freight cargo aircraft loaded on airport tarmac",
      width: 1280,
      height: 853,
      category: "service",
      caption: "Express international and regional air cargo handling",
    },
    ocean: {
      src: "/images/service-ocean.jpg",
      alt: "Ocean container ship arriving at deepwater port",
      width: 1280,
      height: 853,
      category: "service",
      caption: "Intermodal port-to-door seafreight solutions",
    },
    land: {
      src: "/images/service-land.jpg",
      alt: "Heavy line-haul freight truck moving cargo over highway",
      width: 1280,
      height: 853,
      category: "service",
      caption: "Reliable cross-border overland road freight",
    },
    storage: {
      src: "/images/service-storage.jpg",
      alt: "Warehouse racks and forklifts in temperature-controlled storage facility",
      width: 1280,
      height: 853,
      category: "service",
      caption: "Secure bonded and free-circulation warehousing",
    },
  },
  fleet: {
    flatbed: {
      src: "/images/fleet-1.jpg",
      alt: "Heavy duty flatbed trailer transport truck",
      width: 1280,
      height: 853,
      category: "fleet",
      caption: "Flatbed trailers for steel, timber, and machinery",
    },
    tautliner: {
      src: "/images/fleet-2.jpg",
      alt: "Tautliner curtain-side weather-sealed logistics truck",
      width: 1280,
      height: 853,
      category: "fleet",
      caption: "Curtain-sided tautliners for FMCG and palletized goods",
    },
    tanker: {
      src: "/images/fleet-3.jpg",
      alt: "Bulk fuel and liquid chemical transport tanker truck",
      width: 1280,
      height: 853,
      category: "fleet",
      caption: "Certified tankers for bulk fuel and petroleum",
    },
    heavyHaulage: {
      src: "/images/fleet-4.jpg",
      alt: "Heavy haulage multi-axle lowbed transporter for abnormal cargo",
      width: 1280,
      height: 853,
      category: "fleet",
      caption: "Lowbed and step-deck trailers for abnormal loads",
    },
  },
  blog: {
    driver: {
      src: "/images/blog-1.jpg",
      alt: "Long-haul driver behind the wheel with GPS telematics",
      width: 1280,
      height: 853,
      category: "blog",
      caption: "Driver safety standards and fatigue management in logistics",
    },
    forklift: {
      src: "/images/blog-2.jpg",
      alt: "Forklift operator loading palletized freight into trailer",
      width: 1280,
      height: 853,
      category: "blog",
      caption: "Optimizing turnaround times at cross-border transit depots",
    },
    customs: {
      src: "/images/blog-3.jpg",
      alt: "Customs declaration paperwork, bill of lading, and freight manifests",
      width: 1280,
      height: 853,
      category: "blog",
      caption: "Demystifying SADC customs clearing and Beitbridge transit",
    },
    packing: {
      src: "/images/blog-4.jpg",
      alt: "Industrial cargo packaging, strapping, and export palletizing",
      width: 1280,
      height: 853,
      category: "blog",
      caption: "Damage prevention through engineered load-securing techniques",
    },
  },
  cta: {
    highway: {
      src: "/images/cta-bg.jpg",
      alt: "Long-exposure night lights on highway transport corridor",
      width: 1280,
      height: 853,
      category: "cta",
      caption: "Connecting southern Africa with relentless precision",
    },
  },
  avatars: {
    grace: {
      src: "/images/avatars/avatar-1.jpg",
      alt: "Grace Moyo - Chief Operations Officer",
      width: 400,
      height: 400,
      category: "avatar",
      caption: "Grace Moyo",
    },
    tinashe: {
      src: "/images/avatars/avatar-2.jpg",
      alt: "Tinashe Shumba - Managing Director",
      width: 400,
      height: 400,
      category: "avatar",
      caption: "Tinashe Shumba",
    },
    rutendo: {
      src: "/images/avatars/avatar-3.jpg",
      alt: "Rutendo Chiwenga - Fleet Safety Controller",
      width: 400,
      height: 400,
      category: "avatar",
      caption: "Rutendo Chiwenga",
    },
    kudakwashe: {
      src: "/images/avatars/avatar-4.jpg",
      alt: "Kudakwashe Mutasa - Senior Dispatch Lead",
      width: 400,
      height: 400,
      category: "avatar",
      caption: "Kudakwashe Mutasa",
    },
    chipo: {
      src: "/images/avatars/avatar-5.jpg",
      alt: "Chipo Ndlovu - Customs Clearance Specialist",
      width: 400,
      height: 400,
      category: "avatar",
      caption: "Chipo Ndlovu",
    },
    farai: {
      src: "/images/avatars/avatar-6.jpg",
      alt: "Farai Sithole - Cross-Border Freight Manager",
      width: 400,
      height: 400,
      category: "avatar",
      caption: "Farai Sithole",
    },
  },
} as const;

export type ImageKey = keyof typeof images;
