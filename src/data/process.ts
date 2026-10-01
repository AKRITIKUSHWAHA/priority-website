export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  description: string;
  details: string[];
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    number: "01",
    title: "Instant Quote & Route Assessment",
    description: "Submit your freight specifications, origin, and destination. Our logistics planners analyze optimal corridor routes, payload weights, and required permits within minutes.",
    details: ["Payload & axle-weight calculation", "Permit & border road clearances", "Competitive transparent pricing"],
  },
  {
    step: "02",
    number: "02",
    title: "Secure Loading & Certified Rigging",
    description: "Cargo is loaded using certified forklifts and heavy material handling gear at our Harare depot or client premises, secured with high-tensile lashing and corner buffers.",
    details: ["Forklift certified loading crews", "Grade 80 lashing chains & straps", "Pre-trip cargo inspection checklist"],
  },
  {
    step: "03",
    number: "03",
    title: "Real-Time Telematics & Transit Clearance",
    description: "Your consignment embarks with live 24/7 GPS satellite tracking, temperature logs (for reefers), and synchronized electronic customs pre-clearance at border checkpoints.",
    details: ["24/7 dispatch monitoring center", "Electronic customs pre-filing", "Milestone SMS & email status updates"],
  },
  {
    step: "04",
    number: "04",
    title: "Safe On-Time Doorstep Delivery",
    description: "Final arrival at destination with calibrated offloading, recipient verification, physical goods inspection, and immediate digital Proof of Delivery (e-POD) sign-off.",
    details: ["Precise offloading & staging", "Signed electronic Proof of Delivery", "Post-delivery cargo audit"],
  },
];
