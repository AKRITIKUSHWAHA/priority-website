export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
  serviceUsed: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Farai Mataranyika",
    role: "Supply Chain Director",
    company: "Zambezi Mining Supplies",
    location: "Harare, Zimbabwe",
    rating: 5,
    comment:
      "Priority Hauliers has been instrumental in keeping our heavy mining equipment running. Their road haulage from Durban to our mine site in Kwekwe was executed without a single hitch. Exceptional communication and 100% on-time delivery.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    serviceUsed: "Land Transport (Superlink Flatdeck)",
  },
  {
    id: "2",
    name: "Gerald Van der Merwe",
    role: "Logistics Manager",
    company: "Southern Agri Feeds",
    location: "Johannesburg / Harare",
    rating: 5,
    comment:
      "Cross-border shipping through Beitbridge can be daunting, but Priority Hauliers' bonded permits and proactive customs liaison cut our border turnaround time by nearly 40%. Highly professional team.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    serviceUsed: "SADC Cross-Border Freight",
  },
  {
    id: "3",
    name: "Memory Chirwa",
    role: "Operations Head",
    company: "Apex Agro Chemicals Ltd",
    location: "Beira / Harare",
    rating: 5,
    comment:
      "We store seasonal fertilizer stock at their Marlborough Harare warehouse. Their forklift operators and staging protocols are first-class, and cargo security is unmatched. Couldn't recommend them higher.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    serviceUsed: "Cargo Storage & Warehousing",
  },
  {
    id: "4",
    name: "Kelvin Mutale",
    role: "Procurement Lead",
    company: "Copperbelt Industrial Spares",
    location: "Lusaka, Zambia",
    rating: 5,
    comment:
      "When we faced critical plant downtime, Priority Hauliers coordinated an urgent express shipment from Harare right to our Lusaka workshop in under 30 hours. Their 24/7 support desk was transparent every single hour.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    serviceUsed: "Air Freight & Express Dispatch",
  },
];
