'use client';

import React from 'react';
import { Truck, ArrowRight, ShieldCheck, CheckCircle2, Cpu } from 'lucide-react';

interface FleetSectionProps {
  onOpenQuote: () => void;
}

const FLEET_ITEMS = [
  {
    title: 'Heavy Prime Movers',
    category: 'Scania R580 & Volvo FH16 6x4 / 8x4',
    capacity: 'Up to 120T Gross Combination Mass',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop',
    specs: ['Euro 5/6 Eco-Compliant Powertrain', 'Dual In-Cab AI Driver Fatigue Monitors', 'Dual Long-Range Fuel Tanks (1,400L)', 'Heavy Hydraulic Winch System']
  },
  {
    title: 'Superlink Tautliners & Dry Vans',
    category: 'Full Truckload (FTL) Commercial Linehaul',
    capacity: '34 Metric Tons / 140 m³ Volume',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop',
    specs: ['Curtain-Side Quick Loading & Strapping', 'Tamper-Evident Satellite E-Seals', 'Reinforced Air Suspension System', 'Daily Scheduled SADC Departures']
  },
  {
    title: 'Container & Flatdeck Skeletals',
    category: 'Port Maritime & Breakbulk Transport',
    capacity: '20ft & 40ft High-Cube Shipping Containers',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    specs: ['Integrated Twist-Locks & Heavy Bolsters', 'High-Tensile Domex Steel Chassis', 'Electronic Brake Monitoring (EBS)', 'Beira & Durban Port Clearance Passes']
  },
  {
    title: 'Multi-Axle Modular Lowbeds',
    category: 'Abnormal Heavy Mining & Plant Machinery',
    capacity: 'Up to 90 Metric Tons Single Payload',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop',
    specs: ['4 to 10 Hydraulic Steering Axles', 'Extendable Low-Deck Deck Height', 'Certified Escort Convoys Included', 'Route Engineering & Bridge Surveys']
  }
];

export const FleetSection: React.FC<FleetSectionProps> = ({ onOpenQuote }) => {
  return (
    <section 
      id="fleet"
      style={{
        padding: '100px 0',
        background: '#F5F6F8',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
          <div className="badge-orange" style={{ marginBottom: '14px' }}>
            ENGINEERED FOR ENDURANCE
          </div>
          <h2 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)', color: '#171923', marginBottom: '16px' }}>
            Our Fleet, <span className="text-orange">Built to Deliver</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#6B7280', margin: 0 }}>
            Modern European prime movers, specialized multi-axle trailers, and precision refrigeration units backed by 24/7 telemetry.
          </p>
        </div>

        {/* Fleet Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px'
          }}
        >
          {FLEET_ITEMS.map((item, i) => (
            <div
              key={i}
              className="fleet-card"
              onClick={onOpenQuote}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid #E5E7EB',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'all 0.35s ease'
              }}
            >
              {/* Image Container */}
              <div 
                style={{
                  position: 'relative',
                  height: '220px',
                  overflow: 'hidden',
                  background: '#151827'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="fleet-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease'
                  }}
                  loading="lazy"
                />
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 50%, rgba(21, 24, 39, 0.75) 100%)'
                  }}
                />

                <div 
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: 'rgba(21, 24, 39, 0.85)',
                    backdropFilter: 'blur(8px)',
                    color: '#FF7744',
                    padding: '4px 12px',
                    borderRadius: '8px',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    textTransform: 'uppercase'
                  }}
                >
                  {item.category}
                </div>
              </div>

              {/* Card Content */}
              <div style={{ padding: '26px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', gap: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: '#171923', fontWeight: 800, marginBottom: '6px' }}>
                    {item.title}
                  </h3>
                  <div style={{ fontSize: '0.88rem', color: '#FF5A1F', fontWeight: 800, marginBottom: '14px' }}>
                    {item.capacity}
                  </div>

                  {/* Specs List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {item.specs.map((spec, sIdx) => (
                      <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#6B7280' }}>
                        <CheckCircle2 size={14} color="#10B981" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#FF5A1F',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    paddingTop: '12px',
                    borderTop: '1px solid #F3F4F6'
                  }}
                >
                  <span>View Fleet & Book</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .fleet-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(21, 24, 39, 0.12);
          border-color: rgba(255, 90, 31, 0.35);
        }
        .fleet-card:hover .fleet-img {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
};

export default FleetSection;
