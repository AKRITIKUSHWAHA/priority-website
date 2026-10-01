import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Priority Hauliers (Pvt) Ltd - Safe & Faster Logistics Services";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0D192E",
          padding: "60px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Accent Gradients */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(249,115,22,0.3) 0%, rgba(13,25,46,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(29,78,216,0.3) 0%, rgba(13,25,46,0) 70%)",
          }}
        />

        {/* Top Header: Brand Badge & Tagline */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "54px",
              height: "54px",
              borderRadius: "12px",
              backgroundColor: "#F97316",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontSize: "32px",
              fontWeight: 800,
              transform: "skewX(-10deg)",
            }}
          >
            P
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "28px",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "1px",
              }}
            >
              PRIORITY HAULIERS
            </span>
            <span
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#F97316",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Road Freight & Logistics • Zimbabwe & SADC
            </span>
          </div>
        </div>

        {/* Middle Main Copy */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Safe & <span style={{ color: "#F97316" }}>Faster</span> Logistics Services
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "#94A3B8",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Dependable road haulage, breakbulk transport, fuel tankering & cross-border freight forwarding across Zimbabwe, Zambia, South Africa & SADC.
          </p>
        </div>

        {/* Bottom Bar: Stats & Location */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "32px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: 800, color: "#F97316" }}>6+</span>
              <span style={{ fontSize: "14px", color: "#CBD5E1" }}>Years Experience</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: 800, color: "#3B82F6" }}>24/7</span>
              <span style={{ fontSize: "14px", color: "#CBD5E1" }}>GPS Tracking</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: 800, color: "#10B981" }}>100%</span>
              <span style={{ fontSize: "14px", color: "#CBD5E1" }}>SADC Corridor</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#94A3B8",
              fontSize: "16px",
            }}
          >
            <span>📍 Marlborough, Harare, Zimbabwe</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
