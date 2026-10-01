export interface TrackingMilestone {
  date: string;
  time: string;
  status: string;
  location: string;
  completed: boolean;
  active?: boolean;
  description: string;
}

export interface ShipmentRecord {
  trackingId: string;
  status: "In Transit" | "Delivered" | "Customs Clearance" | "Out for Delivery" | "Staged at Depot";
  origin: string;
  destination: string;
  carrierType: string;
  cargoDescription: string;
  estimatedDelivery: string;
  weight: string;
  driver: string;
  vehicleReg: string;
  progressPercent: number;
  milestones: TrackingMilestone[];
}

export const mockTrackingRecords: Record<string, ShipmentRecord> = {
  "PH-8942-ZW": {
    trackingId: "PH-8942-ZW",
    status: "In Transit",
    origin: "Beira Port, Mozambique",
    destination: "17 Mansfield Rd, Marlborough, Harare, Zimbabwe",
    carrierType: "Superlink Flatdeck (Tri-Axle)",
    cargoDescription: "Commercial Machinery Spares & Steel Components (28MT)",
    estimatedDelivery: "Tomorrow, 14:30 CAT",
    weight: "28,450 kg",
    driver: "M. Moyo (Senior Haulier)",
    vehicleReg: "AFZ 4892 / TL 9021",
    progressPercent: 75,
    milestones: [
      {
        date: "23 Sep 2026",
        time: "08:15 CAT",
        status: "Vessel Discharge & Port Loading",
        location: "Beira Container Terminal, Mozambique",
        completed: true,
        description: "Container de-vanning completed, cargo strapped to superlink flatdeck.",
      },
      {
        date: "23 Sep 2026",
        time: "19:40 CAT",
        status: "Cross-Border Transit Cleared",
        location: "Forbes / Machipanda Border Post",
        completed: true,
        description: "Customs electronic release stamped, transit bond processed.",
      },
      {
        date: "24 Sep 2026",
        time: "06:00 CAT",
        status: "Inland Highway Transit",
        location: "Mutare to Harare Highway (A3)",
        completed: true,
        active: true,
        description: "En route to Harare depot. Speed 72 km/h, telemetry normal.",
      },
      {
        date: "24 Sep 2026",
        time: "14:30 CAT (Est.)",
        status: "Final Destination Arrival",
        location: "Marlborough Depot, Harare",
        completed: false,
        description: "Forklift offloading and recipient sign-off scheduled.",
      },
    ],
  },
  "PH-7721-SA": {
    trackingId: "PH-7721-SA",
    status: "Customs Clearance",
    origin: "City Deep Terminal, Johannesburg, South Africa",
    destination: "Bulawayo Industrial Park, Zimbabwe",
    carrierType: "Tautliner Superlink (Enclosed Curtainsider)",
    cargoDescription: "Fast Moving Consumer Goods & Dry Foods (32MT)",
    estimatedDelivery: "25 Sep 2026, 11:00 CAT",
    weight: "32,100 kg",
    driver: "S. Sibanda (Dangerous Goods Certified)",
    vehicleReg: "BHT 1109 / SA 4410",
    progressPercent: 45,
    milestones: [
      {
        date: "22 Sep 2026",
        time: "14:00 CAT",
        status: "Cargo Dispatched from Depot",
        location: "City Deep, Johannesburg",
        completed: true,
        description: "Loaded and sealed with high-security tamper seals.",
      },
      {
        date: "23 Sep 2026",
        time: "22:30 CAT",
        status: "Arrived at Beitbridge Border",
        location: "Beitbridge Border Commercial Gate",
        completed: true,
        active: true,
        description: "ZIMRA & SARS electronic scanning and documentation clearance in progress.",
      },
      {
        date: "24 Sep 2026",
        time: "12:00 CAT (Est.)",
        status: "Departing Border for Bulawayo",
        location: "Beitbridge Highway (A6)",
        completed: false,
        description: "Direct highway line-haul to Bulawayo.",
      },
      {
        date: "25 Sep 2026",
        time: "11:00 CAT (Est.)",
        status: "Delivered to Customer Warehouse",
        location: "Bulawayo Industrial Park",
        completed: false,
        description: "Delivery completion and e-POD signature.",
      },
    ],
  },
  "PH-5120-MZ": {
    trackingId: "PH-5120-MZ",
    status: "Delivered",
    origin: "Maputo Port, Mozambique",
    destination: "Chiredzi Sugar Estates, Zimbabwe",
    carrierType: "Tri-Axle Heavy Haul Lowbed",
    cargoDescription: "Heavy Agricultural Harvester & Irrigation Pump Units",
    estimatedDelivery: "Delivered on 22 Sep 2026",
    weight: "24,800 kg",
    driver: "C. Ndlovu (Heavy Haul Specialist)",
    vehicleReg: "AFZ 2201 / LB 118",
    progressPercent: 100,
    milestones: [
      {
        date: "19 Sep 2026",
        time: "09:00 CAT",
        status: "Ramped onto Lowbed & Rigged",
        location: "Maputo Port Heavy Yard",
        completed: true,
        description: "Rigging certified with Grade 80 heavy chains.",
      },
      {
        date: "20 Sep 2026",
        time: "16:15 CAT",
        status: "Border Escort Clearance",
        location: "Sango Border Post",
        completed: true,
        description: "Abnormal load permits verified and stamped.",
      },
      {
        date: "22 Sep 2026",
        time: "11:45 CAT",
        status: "Delivered & Signed Off",
        location: "Chiredzi Sugar Estates, Zimbabwe",
        completed: true,
        description: "Delivered in perfect condition. Proof of Delivery received.",
      },
    ],
  },
};

export function getShipmentByTrackingId(id: string): ShipmentRecord {
  const normalized = id.trim().toUpperCase();
  if (mockTrackingRecords[normalized]) {
    return mockTrackingRecords[normalized];
  }
  // Generate realistic simulated shipment for any other valid or typed query
  return {
    trackingId: normalized || "PH-LIVE-ZW",
    status: "In Transit",
    origin: "Regional Logistics Corridor (SADC Hub)",
    destination: "17 Mansfield Road, Marlborough, Harare",
    carrierType: "Express Freight Line-Haul Rig",
    cargoDescription: "Commercial Freight & Consignments",
    estimatedDelivery: "In 24-48 Hours",
    weight: "22,000 kg",
    driver: "Priority Hauliers Regional Fleet Team",
    vehicleReg: "ZW 7781 / TL 204",
    progressPercent: 65,
    milestones: [
      {
        date: "Active Dispatch",
        time: "08:00 CAT",
        status: "Consignment Dispatched",
        location: "Origin Transit Hub",
        completed: true,
        description: "Cargo inspected, weighed, and sealed for express haulage.",
      },
      {
        date: "En Route",
        time: "Current",
        status: "In Transit via Primary Corridor",
        location: "Regional SADC Highway",
        completed: true,
        active: true,
        description: "Vehicle moving at regulated highway speed with live telematics active.",
      },
      {
        date: "Upcoming",
        time: "Within 24 Hours",
        status: "Scheduled Arrival & Verification",
        location: "Harare Receiving Terminal",
        completed: false,
        description: "Unloading and electronic delivery confirmation.",
      },
    ],
  };
}
