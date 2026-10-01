export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  address: {
    street: string;
    suburb: string;
    city: string;
    country: string;
    full: string;
  };
  phones: {
    primary: string;
    display: string;
  }[];
  whatsapp: {
    number: string;
    display: string;
    link: string;
  }[];
  email: string;
  supportEmail: string;
  operatingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    operations: string;
  };
  socialLinks: {
    name: string;
    href: string;
    icon: string;
  }[];
  coverage: string[];
}

export const siteConfig: SiteConfig = {
  name: "Priority Hauliers",
  legalName: "Priority Hauliers (Private) Limited",
  tagline: "Safe & Faster Logistics Services",
  description:
    "Priority Hauliers (Private) Limited is a premier regional freight and multimodal logistics partner servicing Zimbabwe, South Africa, Mozambique, Zambia, Botswana, and the wider SADC corridor.",
  address: {
    street: "17 Mansfield Road",
    suburb: "Marlborough",
    city: "Harare",
    country: "Zimbabwe",
    full: "17 Mansfield Road, Marlborough, Harare, Zimbabwe",
  },
  phones: [
    {
      primary: "+263775682351",
      display: "+263 77 568 2351",
    },
  ],
  whatsapp: [
    {
      number: "+264818518120",
      display: "+264 81 851 8120",
      link: "https://wa.me/264818518120",
    },
    {
      number: "+61450887815",
      display: "+61 450 887 815",
      link: "https://wa.me/61450887815",
    },
  ],
  email: "hello@priorityhauliers.com",
  supportEmail: "dispatch@priorityhauliers.com",
  operatingHours: {
    weekdays: "07:30 - 17:30 CAT",
    saturday: "08:00 - 13:00 CAT",
    sunday: "Emergency Dispatch Only",
    operations: "24/7/365 GPS Fleet Monitoring & Control Room",
  },
  socialLinks: [
    { name: "LinkedIn", href: "https://linkedin.com/company/priority-hauliers", icon: "Linkedin" },
    { name: "Facebook", href: "https://facebook.com/priorityhauliers", icon: "Facebook" },
    { name: "Twitter", href: "https://twitter.com/priorityhauliers", icon: "Twitter" },
    { name: "Instagram", href: "https://instagram.com/priorityhauliers", icon: "Instagram" },
  ],
  coverage: [
    "Zimbabwe (Harare, Bulawayo, Beitbridge, Mutare, Chirundu)",
    "South Africa (Durban Port, Johannesburg / Gauteng)",
    "Mozambique (Beira Corridor, Maputo)",
    "Zambia (Lusaka, Ndola / Copperbelt)",
    "Botswana & Namibia (Walvis Bay Corridor)",
    "Democratic Republic of Congo (Lubumbashi)",
  ],
};
