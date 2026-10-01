import React from "react";
import { siteConfig } from "@/data/siteConfig";

export function JsonLd() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://priorityhauliers.com/#organization",
        "name": siteConfig.legalName,
        "alternateName": siteConfig.name,
        "url": "https://priorityhauliers.com",
        "logo": "https://priorityhauliers.com/logo-full.png",
        "email": siteConfig.email,
        "telephone": siteConfig.phones[0].primary,
        "sameAs": siteConfig.socialLinks.map((s) => s.href),
        "description": siteConfig.description,
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://priorityhauliers.com/#localbusiness",
        "name": siteConfig.legalName,
        "image": "https://priorityhauliers.com/images/about-1.jpg",
        "telephone": siteConfig.phones[0].primary,
        "email": siteConfig.email,
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteConfig.address.street,
          "addressLocality": siteConfig.address.suburb,
          "addressRegion": siteConfig.address.city,
          "addressCountry": "ZW",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -17.755416,
          "longitude": 30.985472,
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "07:30",
            "closes": "17:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "08:00",
            "closes": "13:00",
          },
        ],
        "areaServed": siteConfig.coverage,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}
