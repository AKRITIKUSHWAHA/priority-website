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
  googleMapsUrl?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  timeline: ShipmentStep[];
}

const clientLiveShipment: ShipmentData = {
  trackingId: "AGL1598",
  status: "In Transit",
  currentStepIndex: 2,
  origin: "Durban Port Container Terminal (South Africa)",
  destination: "Harare Marlborough Distribution Depot, Zimbabwe",
  cargoType: "Commercial Palletized Freight & Industrial Line-Haul",
  weight: "34 Metric Tonnes (Superlink Tri-Axle)",
  vehicleReg: "AGL1598 (SinoTrack ID: 3009296479)",
  driverName: "Priority Hauliers Assigned Line-Haul Driver",
  eta: "Today, 17:45 CAT",
  currentLocation: "A1 Harare-Chirundu Highway Corridor (Chinhoyi, Zimbabwe)",
  lastUpdated: "Active Live SinoTrack GPS Feed",
  googleMapsUrl: "https://goo.gl/maps/5kcPU4r84boQAkWb7?g_st=aw",
  coordinates: {
    lat: -17.385858,
    lng: 30.182772,
  },
  timeline: [
    {
      label: "Dispatched from Port Depot",
      status: "completed",
      timestamp: "Sep 28, 06:30 CAT",
      location: "Durban Container Terminal, SA",
      description: "Superlink loaded, cargo lashed with high-tensile chains, GPS telematics activated.",
    },
    {
      label: "Beitbridge Border Clearance",
      status: "completed",
      timestamp: "Sep 29, 21:15 CAT",
      location: "Beitbridge Commercial Clearance Gate",
      description: "ZIMRA electronic bond stamped, customs release verified with zero demurrage.",
    },
    {
      label: "A1 Corridor Transit (Live Telematics)",
      status: "current",
      timestamp: "Today, Real-Time GPS Pinpoint",
      location: "Chinhoyi Corridor Checkpoint (-17.385858, 30.182772)",
      description: "Cruising at constant speed along northern corridor. Live telematics signal green.",
    },
    {
      label: "Harare Depot Staging & Inspection",
      status: "upcoming",
      description: "Arrival at 17 Mansfield Road, Marlborough depot for forklift unloading.",
    },
    {
      label: "Final Destination Handover & POD",
      status: "upcoming",
      description: "Recipient inspection and electronic Proof of Delivery (POD) sign-off.",
    },
  ],
};

const mockShipments: Record<string, ShipmentData> = {
  "AGL1598": clientLiveShipment,
  "3009296479": clientLiveShipment,
  "PH-8942-ZW": {
    ...clientLiveShipment,
    trackingId: "PH-8942-ZW",
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
    googleMapsUrl: "https://goo.gl/maps/5kcPU4r84boQAkWb7?g_st=aw",
    coordinates: {
      lat: -22.216667,
      lng: 29.983333,
    },
    timeline: [
      {
        label: "Order Received & Staged",
        status: "completed",
        timestamp: "Sep 28, 14:00 CAT",
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
    coordinates: {
      lat: -21.05,
      lng: 31.6667,
    },
    timeline: [
      {
        label: "Order Received & Staged",
        status: "completed",
        timestamp: "Sep 27, 10:00 CAT",
        location: "Maputo Container Terminal",
        description: "Secured to Lowbed multi-axle trailer.",
      },
      {
        label: "Customs Border Clearance",
        status: "completed",
        timestamp: "Sep 28, 11:20 CAT",
        location: "Sango / Chicualacuala Border",
        description: "Abnormal load permits verified.",
      },
      {
        label: "In Transit (Corridor Line-Haul)",
        status: "completed",
        timestamp: "Sep 29, 17:00 CAT",
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
  await new Promise((resolve) => setTimeout(resolve, 400));

  const normalized = trackingId.trim().toUpperCase().replace(/[\s-]/g, "");

  // Match against direct keys or normalized keys
  for (const [key, val] of Object.entries(mockShipments)) {
    const keyNorm = key.toUpperCase().replace(/[\s-]/g, "");
    if (keyNorm === normalized || key === trackingId.trim().toUpperCase()) {
      return val;
    }
  }

  // Fallback default client truck if searching general queries
  if (normalized.includes("AGL") || normalized.includes("3009") || normalized.includes("1598")) {
    return clientLiveShipment;
  }

  return null;
}
