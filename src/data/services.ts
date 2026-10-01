export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  gallery: string[];
  bannerImage: string;
  features: string[];
  benefits: { title: string; desc: string }[];
  specs: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "land-transport",
    slug: "land-transport",
    title: "Land Transport & Road Haulage",
    shortDesc:
      "Heavy haulage, regional SADC line-hauls, superlink flatdecks, tautliners, and consolidated freight across Southern Africa.",
    fullDesc:
      "Priority Hauliers specializes in high-tonnage road haulage across Zimbabwe and all critical SADC transit corridors. Operating a modern fleet equipped with live satellite telematics, dual-driver options for urgent express shipments, and heavy-duty tri-axle & superlink combinations, we ensure safe, on-time delivery from primary regional ports (Durban, Beira, Walvis Bay) right to your factory or warehouse doorstep.",
    iconName: "Truck",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    bannerImage: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Full Truckload (FTL) & Less-than-Truckload (LTL) consolidation",
      "Tri-axle, Superlink Flatdeck, Tautliner, & Lowbed configurations",
      "SADC Cross-Border Permits & Bonded Cargo escorts",
      "Real-time 24/7 GPS Fleet Telematics with geo-fencing",
      "Hazchem / Dangerous Goods certified transport",
      "Rapid turnaround cross-border border clearance handling",
    ],
    benefits: [
      {
        title: "Dedicated Fleet Operations",
        desc: "Strictly maintained prime movers ensure minimal transit delays and maximum payload reliability.",
      },
      {
        title: "Regional SADC Reach",
        desc: "Seamless connectivity connecting Zimbabwe, South Africa, Mozambique, Zambia, Botswana, and DRC.",
      },
      {
        title: "Total Cargo Security",
        desc: "Comprehensive transit insurance, armed escort options, and calibrated load-securing straps & chains.",
      },
    ],
    specs: [
      { label: "Max Payload Capacity", value: "Up to 34 Metric Tonnes per rig" },
      { label: "Coverage Corridors", value: "Harare, Bulawayo, Beira, Durban, Lusaka, Lubumbashi" },
      { label: "Fleet Telematics", value: "Live 24/7 Satellite & Temperature Monitoring" },
      { label: "Transit Clearance", value: "Pre-cleared SADC customs protocols" },
    ],
    faqs: [
      {
        question: "What SADC routes does Priority Hauliers cover on road haulage?",
        answer:
          "We operate primary routes between Harare/Bulawayo and major border posts including Beitbridge (South Africa), Forbes/Machipanda (Mozambique), Chirundu (Zambia), Plumtree (Botswana), and Kasumbalesa (DRC).",
      },
      {
        question: "Do you handle specialized or abnormal loads?",
        answer:
          "Yes. Our lowbed and specialized heavy-haul rigs cater to mining machinery, oversized agricultural equipment, structural steel, and industrial plant relocations.",
      },
    ],
  },
  {
    id: "cargo-storage",
    slug: "cargo-storage",
    title: "Cargo Storage & Warehousing",
    shortDesc:
      "Secure warehousing, container handling, forklift certified staging, inventory tracking, and cross-docking facilities in Harare.",
    fullDesc:
      "Our Harare logistics hub at 17 Mansfield Road, Marlborough provides high-security warehousing, bonded storage, palletized distribution, and rapid cross-docking. Manned by certified forklift operators and round-the-clock armed security, we ensure your valuable goods remain pristine, safe, and ready for swift dispatch.",
    iconName: "Warehouse",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    bannerImage: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Covered & open-yard heavy cargo storage in Harare",
      "Certified forklift loading, de-stuffing, and heavy rigging",
      "Real-time digital Warehouse Management System (WMS)",
      "24/7 CCTV surveillance, biometric access, and perimeter security",
      "Cross-docking and container transshipment",
      "Pick, pack, shrink-wrapping, and palletizing services",
    ],
    benefits: [
      {
        title: "Safe Load Management",
        desc: "Every pallet is handled with certified material handling gear, preventing packaging damage.",
      },
      {
        title: "Harare Strategic Location",
        desc: "Close proximity to main arterial transport corridors for rapid dispatch across Zimbabwe.",
      },
      {
        title: "Flexible Storage Terms",
        desc: "Short-term transit staging, seasonal buffer stock, or dedicated long-term floor space.",
      },
    ],
    specs: [
      { label: "Storage Space", value: "Over 8,500 sq. meters secure facility" },
      { label: "Handling Gear", value: "Forklifts (3T - 16T capacity), overhead cranes" },
      { label: "Security Level", value: "24/7 Armed Response & 4K CCTV Recording" },
      { label: "Inventory System", value: "Barcode tracked SKU level reporting" },
    ],
    faqs: [
      {
        question: "Can I store bonded or transit cargo at your Harare depot?",
        answer:
          "Yes, we provide bonded staging and secure transit yard storage for cargo en route between South African/Mozambican ports and northern SADC destinations.",
      },
    ],
  },
  {
    id: "ocean-freight",
    slug: "ocean-freight",
    title: "Ocean Freight & Port Forwarding",
    shortDesc:
      "End-to-end maritime forwarding, FCL/LCL container shipping, and port-to-inland clearing via Beira, Durban, and Maputo.",
    fullDesc:
      "Connecting landlocked Southern Africa with major global shipping lanes. Priority Hauliers coordinates full container loads (FCL), non-containerized breakbulk, and consolidated LCL cargo moving through Beira Port (Mozambique) and Durban Port (South Africa) with fast inland road intermodal transfers.",
    iconName: "Ship",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    bannerImage: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "FCL (Full Container Load) and LCL (Less than Container Load)",
      "Direct corridor links: Beira-Machipanda-Harare & Durban-Beitbridge",
      "Customs clearing at port of discharge and inland border posts",
      "Container de-vanning, staging, and empty return management",
      "Project cargo & breakbulk heavy industrial machinery forwarding",
    ],
    benefits: [
      {
        title: "Cost-Effective Global Trade",
        desc: "Optimal carrier contracts with premier ocean shipping lines worldwide.",
      },
      {
        title: "Streamlined Intermodal Transfer",
        desc: "Vessel-to-truck transfer synchronization without costly port demurrage penalties.",
      },
      {
        title: "Complete Documentation Handling",
        desc: "Bill of Lading, Certificate of Origin, SADC certificates, and customs releases.",
      },
    ],
    specs: [
      { label: "Container Types", value: "20ft, 40ft GP, High Cube, Reefer, Open Top, Flat Rack" },
      { label: "Primary Seaports", value: "Beira (Mozambique), Durban (SA), Maputo, Walvis Bay" },
      { label: "Customs Protocols", value: "ASYCUDA World integrated clearance" },
      { label: "Tracking Support", value: "Vessel position & inland road telematics" },
    ],
    faqs: [
      {
        question: "Which port is fastest for shipping cargo into Harare?",
        answer:
          "The Beira Corridor in Mozambique is typically the most direct and cost-efficient maritime gateway for Harare and Eastern Zimbabwe, located roughly 550 km away.",
      },
    ],
  },
  {
    id: "air-freight",
    slug: "air-freight",
    title: "Air Freight & Express Cargo",
    shortDesc:
      "High-speed urgent air cargo, express charter, time-critical spare parts, and airport-to-door courier logistics.",
    fullDesc:
      "When speed is paramount, Priority Hauliers provides expedited air freight solutions connecting Robert Gabriel Mugabe International Airport (Harare), Joshua Mqabuko Nkomo International Airport (Bulawayo), OR Tambo (Johannesburg), and worldwide air hubs.",
    iconName: "Plane",
    image: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=1200&q=80",
    bannerImage: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Scheduled commercial air cargo & dedicated charter flights",
      "Time-critical mining spares, medical supplies & perishable freight",
      "Airport ramp handling and swift airport customs processing",
      "Last-mile express direct delivery across Zimbabwe",
      "Temperature-controlled sensitive pharmaceutical transport",
    ],
    benefits: [
      {
        title: "Fastest Transit Times",
        desc: "Door-to-door delivery within 24 to 48 hours from regional and global hubs.",
      },
      {
        title: "High Value Security",
        desc: "Dedicated handling protocols for delicate, high-tech, and high-value consignments.",
      },
      {
        title: "Clear Milestone Tracking",
        desc: "Flight departure, airway bill status, and local delivery proof confirmations.",
      },
    ],
    specs: [
      { label: "Hub Airports", value: "Harare (HRE), Bulawayo (BUQ), Johannesburg (JNB)" },
      { label: "Service Speeds", value: "Same-Day Regional, Next-Day Priority, 3-5 Day Standard" },
      { label: "Cargo Types", value: "Urgent parts, pharmaceuticals, electronics, documents" },
      { label: "Documentation", value: "Air Waybill (AWB), customs air-manifest pre-filing" },
    ],
    faqs: [
      {
        question: "Can you handle airport clearing for goods arriving at RGM International Airport?",
        answer:
          "Yes, our customs clearance specialists handle ZIMRA airport clearance and deliver directly to your premises in Harare or other cities.",
      },
    ],
  },
];
