export interface ShipmentStep {
  label: string;
  status: "completed" | "current" | "upcoming";
  timestamp?: string;
  location?: string;
  description: string;
}

export interface ShipmentData {
  trackingId: string;
  status: "In Transit" | "At Border" | "Out for Delivery" | "Delivered" | "Order Received";
  currentStepIndex: number;
  origin: string;
  destination: string;
  cargoType: string;
  weight: string;
  vehicleReg: string;
  driverName: string;
  eta: string;
  currentLocation: string;
  lastUpdated: string;
  timeline: ShipmentStep[];
}

const mockShipments: Record<string, ShipmentData> = {
  "PH-8942-ZW": {
    trackingId: "PH-8942-ZW",
    status: "In Transit",
    currentStepIndex: 2,
    origin: "Beira Port (Mozambique)",
    destination: "Harare (Marlborough Depot)",
    cargoType: "Mining Machinery Spares (Palletized)",
    weight: "28 Metric Tonnes",
    vehicleReg: "AEG-4819 / ZW-TL04",
    driverName: "Farai Sithole",
    eta: "Today, 18:30 CAT",
    currentLocation: "Beitbridge Highway / Mutare Corridor Checkpoint",
    lastUpdated: "10 mins ago via GPS Telematics",
    timeline: [
      {
        label: "Order Received & Staged",
        status: "completed",
        timestamp: "Yesterday, 08:00 CAT",
        location: "Beira Port Terminal",
        description: "Cargo loaded onto Tri-Axle Superlink trailer.",
      },
      {
        label: "Customs Border Clearance",
        status: "completed",
        timestamp: "Yesterday, 16:45 CAT",
        location: "Forbes / Machipanda Border Post",
        description: "ASYCUDA World pre-clearance verified by ZIMRA.",
      },
      {
        label: "In Transit (Corridor Line-Haul)",
        status: "current",
        timestamp: "Today, 10:15 CAT",
        location: "Mutare - Harare Corridor Highway",
        description: "Cruising at constant speed; telematics green.",
      },
      {
        label: "Depot Inspection & Out for Delivery",
        status: "upcoming",
        description: "Arrival at Harare Marlborough staging yard.",
      },
      {
        label: "Destination Handover & POD",
        status: "upcoming",
        description: "Final unloading and digital proof of delivery sign-off.",
      },
    ],
  },
  "PH-7721-SA": {
    trackingId: "PH-7721-SA",
    status: "At Border",
    currentStepIndex: 1,
    origin: "Johannesburg (City Deep)",
    destination: "Bulawayo Industrial Park",
    cargoType: "FMCG Commercial Merchandise",
    weight: "32 Metric Tonnes",
    vehicleReg: "ZWL-9012 / SA-LK88",
    driverName: "Tinashe Shumba",
    eta: "Tomorrow, 12:00 CAT",
    currentLocation: "Beitbridge Border Facility (South Africa / Zimbabwe)",
    lastUpdated: "4 mins ago via Border Relay",
    timeline: [
      {
        label: "Order Received & Staged",
        status: "completed",
        timestamp: "Sep 22, 14:00 CAT",
        location: "Johannesburg Logistics Yard",
        description: "Loaded & sealed in Tautliner curtain-side trailer.",
      },
      {
        label: "Customs Border Clearance",
        status: "current",
        timestamp: "Today, 06:30 CAT",
        location: "Beitbridge Commercial Clearance Yard",
        description: "Undergoing ZIMRA physical seal & bond verification.",
      },
      {
        label: "In Transit (Corridor Line-Haul)",
        status: "upcoming",
        description: "Overland dispatch towards Gwanda - Bulawayo highway.",
      },
      {
        label: "Out for Delivery",
        status: "upcoming",
        description: "Staging at Bulawayo regional distribution hub.",
      },
      {
        label: "Destination Handover & POD",
        status: "upcoming",
        description: "Final client unloading.",
      },
    ],
  },
  "PH-5120-MZ": {
    trackingId: "PH-5120-MZ",
    status: "Out for Delivery",
    currentStepIndex: 3,
    origin: "Maputo Port (Mozambique)",
    destination: "Chiredzi Agricultural Complex",
    cargoType: "Abnormal Heavy Plant Equipment",
    weight: "42 Metric Tonnes",
    vehicleReg: "ZWV-3301 / LB-02",
    driverName: "Kudakwashe Mutasa",
    eta: "Today, 16:00 CAT",
    currentLocation: "Chiredzi Approach Road (Escort Vehicle Lead)",
    lastUpdated: "Just now via Live Radio",
    timeline: [
      {
        label: "Order Received & Staged",
        status: "completed",
        timestamp: "Sep 21, 10:00 CAT",
        location: "Maputo Container Terminal",
        description: "Secured to Lowbed multi-axle trailer.",
      },
      {
        label: "Customs Border Clearance",
        status: "completed",
        timestamp: "Sep 22, 11:20 CAT",
        location: "Sango / Chicualacuala Border",
        description: "Abnormal load permits verified.",
      },
      {
        label: "In Transit (Corridor Line-Haul)",
        status: "completed",
        timestamp: "Sep 23, 17:00 CAT",
        location: "Chiredzi Highway",
        description: "Lowbed escort convoy in position.",
      },
      {
        label: "Out for Delivery",
        status: "current",
        timestamp: "Today, 14:00 CAT",
        location: "Chiredzi Plant Gate",
        description: "Arriving at plant facility for unloading.",
      },
      {
        label: "Destination Handover & POD",
        status: "upcoming",
        description: "Final sign-off.",
      },
    ],
  },
};

export async function fetchShipmentStatus(trackingId: string): Promise<ShipmentData | null> {
  // Simulate network latency for realistic feel
  await new Promise((resolve) => setTimeout(resolve, 600));

  const normalized = trackingId.trim().toUpperCase();
  return mockShipments[normalized] || null;
}
