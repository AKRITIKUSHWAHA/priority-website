export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const statsData: StatItem[] = [
  {
    id: "years",
    value: 6,
    suffix: "+",
    label: "Years in Industry",
    description: "Delivering reliable freight and haulage across Zimbabwe & SADC",
  },
  {
    id: "tonnes",
    value: 18500,
    suffix: "+",
    label: "Tonnes Transported",
    description: "Safe delivery of dry bulk, containerized, and industrial cargo",
  },
  {
    id: "countries",
    value: 8,
    suffix: "",
    label: "SADC Countries Covered",
    description: "Seamless cross-border logistics network in Southern Africa",
  },
  {
    id: "ontime",
    value: 99.8,
    suffix: "%",
    label: "On-Time Dispatch Rate",
    description: "Backed by 24/7 telematics, route planning & dedicated drivers",
  },
];
