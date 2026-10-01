export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  avatar: string;
  phone?: string;
  email?: string;
  linkedin?: string;
}

export const teamData: TeamMember[] = [
  {
    id: "tinashe-shumba",
    name: "Tinashe Shumba",
    role: "Managing Director",
    department: "Executive Leadership",
    bio: "Over 15 years directing cross-border freight operations, fleet safety, and bilateral trade compliance across the SADC commercial transport network.",
    avatar: "/images/avatars/avatar-2.jpg",
    email: "tinashe@priorityhauliers.com",
    linkedin: "https://linkedin.com/company/priority-hauliers",
  },
  {
    id: "grace-moyo",
    name: "Grace Moyo",
    role: "Chief Operations Officer",
    department: "Logistics & Fleet Operations",
    bio: "Oversees daily line-haul dispatch, containerized freight logistics, driver safety protocols, and route management between Harare, Durban, and Beira.",
    avatar: "/images/avatars/avatar-1.jpg",
    email: "operations@priorityhauliers.com",
    linkedin: "https://linkedin.com/company/priority-hauliers",
  },
  {
    id: "rutendo-chiwenga",
    name: "Rutendo Chiwenga",
    role: "Fleet Safety Controller",
    department: "Safety, Health & Environment (SHE)",
    bio: "Enforces zero-accident protocols, rigorous forklift operator certifications, axle-load compliance, and 24/7 satellite telematics supervision.",
    avatar: "/images/avatars/avatar-3.jpg",
    email: "safety@priorityhauliers.com",
    linkedin: "https://linkedin.com/company/priority-hauliers",
  },
  {
    id: "kudakwashe-mutasa",
    name: "Kudakwashe Mutasa",
    role: "Senior Dispatch & Telematics Lead",
    department: "Control Room & Tracking",
    bio: "Coordinates live GPS geofencing, round-the-clock emergency support, and route navigation across regional southern African corridors.",
    avatar: "/images/avatars/avatar-4.jpg",
    email: "dispatch@priorityhauliers.com",
    linkedin: "https://linkedin.com/company/priority-hauliers",
  },
  {
    id: "chipo-ndlovu",
    name: "Chipo Ndlovu",
    role: "Customs Clearance Specialist",
    department: "Port & Customs Liaison",
    bio: "Specializes in ASYCUDA World processing, bonded road transport documentation, and rapid Beitbridge & Machipanda border turnarounds.",
    avatar: "/images/avatars/avatar-5.jpg",
    email: "customs@priorityhauliers.com",
    linkedin: "https://linkedin.com/company/priority-hauliers",
  },
  {
    id: "farai-sithole",
    name: "Farai Sithole",
    role: "Cross-Border Freight Manager",
    department: "SADC Line-Haul Operations",
    bio: "Manages superlink flatdeck and tautliner operations connecting Harare, Lusaka, Lubumbashi, and Maputo corridors.",
    avatar: "/images/avatars/avatar-6.jpg",
    email: "freight@priorityhauliers.com",
    linkedin: "https://linkedin.com/company/priority-hauliers",
  },
];
