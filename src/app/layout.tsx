import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import {
  ScrollProgressBar,
  TopBar,
  Navbar,
  Footer,
  BackToTop,
  FloatingWhatsApp,
  PageTransition,
  PageLoader,
} from "@/components/layout";

const fontHeading = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0D192E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Logistics",
    "Freight Forwarding",
    "Road Haulage",
    "Air Cargo",
    "Ocean Freight",
    "Warehousing",
    "Zimbabwe Logistics",
    "Harare Transport",
    "SADC Transport Corridor",
    "Cross-border Line-Haul",
    "Heavy Transport Fleet",
    "Customs Clearing Beitbridge",
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://priorityhauliers.com",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/hero-truck.jpg",
        width: 1280,
        height: 720,
        alt: "Priority Hauliers SADC Line-Haul Logistics",
      },
    ],
  },
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontHeading.variable} ${fontSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-accent-500 selection:text-white">
        {/* Branded Initial Page Loader */}
        <PageLoader />

        {/* Top Scroll Progress Indicator */}
        <ScrollProgressBar />

        {/* Sticky Header Navigation (with integrated TopBar) */}
        <Navbar />

        {/* Main Content with Route Transitions */}
        <main className="flex-1 flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Extra Global Floating Controls */}
        <BackToTop />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
