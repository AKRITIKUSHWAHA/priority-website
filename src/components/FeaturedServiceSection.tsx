'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Navigation, 
  Clock, 
  MessageSquare, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface FeaturedServiceSectionProps {
  onOpenQuote: () => void;
}

export const FeaturedServiceSection: React.FC<FeaturedServiceSectionProps> = ({ onOpenQuote }) => {
  const milestones = [
    {
      title: 'Safety & Regulatory Compliance',
      desc: 'ISO 9001 and SQAS accredited with certified Hazchem ADR escorts and multi-million dollar transit insurance.',
      percent: '100%',
      icon: ShieldCheck,
      color: '#FF5A1F'
    },
    {
      title: 'Real-Time Satellite Telematics',
      desc: 'Sub-second GPS positional tracking, automated geofence border alerts, and live cabin dashcam telemetry.',
      percent: '24/7',
      icon: Navigation,
      color: '#38BDF8'
    },
    {
      title: 'Corridor On-Time Delivery Record',
      desc: 'Dual-driver non-stop relay systems ensuring rapid turnarounds at Beitbridge, Chirundu, and Forbes border posts.',
      percent: '99.8%',
      icon: Clock,
      color: '#10B981'
    },
    {
      title: 'Dedicated Dispatch Communication',
      desc: 'Direct WhatsApp and hotline access to named logistics controllers overseeing your consignment from dispatch to POD.',
      percent: '<15m',
      icon: MessageSquare,
      color: '#F59E0B'
    }
  ];

  return (
    <section 
      style={{
        padding: '110px 0',
        background: '#151827',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Ambient background glow */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255, 90, 31, 0.12) 0%, rgba(21, 24, 39, 0) 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '60px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Rich Cargo & Fleet Visual */}
          <div style={{ position: 'relative' }}>
            <div 
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                aspectRatio: '4/3',
                background: '#1B1D2B'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
                alt="Complex Cross-Border Heavy Haulage Logistics"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
                loading="lazy"
              />
            </div>

            {/* Overlapping Key Fact Badge */}
            <div 
              style={{
                position: 'absolute',
                bottom: '-25px',
                left: '25px',
                background: '#1B1D2B',
                border: '1px solid rgba(255, 90, 31, 0.4)',
                borderRadius: '16px',
                padding: '18px 24px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              <div 
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: '#FF5A1F',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Sparkles size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1 }}>
                  500k+ Tons
                </div>
                <div style={{ fontSize: '0.8rem', color: '#9CA3AF', marginTop: '3px' }}>
                  Annual Heavy Cargo Handled
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission Indicators & CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div>
              <div 
                className="badge-orange" 
                style={{ 
                  background: 'rgba(255, 90, 31, 0.15)', 
                  borderColor: 'rgba(255, 90, 31, 0.35)', 
                  color: '#FF7744',
                  marginBottom: '14px' 
                }}
              >
                BUILT FOR COMPLEX LOGISTICS
              </div>
              <h2 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)', color: '#FFFFFF', lineHeight: 1.15 }}>
                From First Mile <br />
                <span className="text-orange">to Final Delivery.</span>
              </h2>
            </div>

            <p style={{ fontSize: '1.02rem', color: '#9CA3AF', lineHeight: 1.65, margin: 0 }}>
              We architect customized freight solutions for high-stakes industrial operations. Whether mobilizing mining equipment across the Zambezi or distributing FMCG perishables across Harare, our integrated systems give you complete control.
            </p>

            {/* Progress-style Feature Indicators */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '6px' }}>
              {milestones.map((m, i) => {
                const Icon = m.icon;
                return (
                  <div 
                    key={i}
                    style={{
                      background: 'rgba(27, 29, 43, 0.75)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '14px',
                      padding: '16px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div 
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          background: `${m.color}20`,
                          color: m.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <Icon size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.96rem', fontWeight: 800, color: '#FFFFFF' }}>
                          {m.title}
                        </div>
                        <div style={{ fontSize: '0.82rem', color: '#9CA3AF', marginTop: '2px' }}>
                          {m.desc}
                        </div>
                      </div>
                    </div>

                    <div 
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 900,
                        color: m.color,
                        fontFamily: 'var(--font-mono)',
                        flexShrink: 0
                      }}
                    >
                      {m.percent}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div style={{ paddingTop: '10px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/264818518120?text=Hello%20Priority%20Hauliers,%20I%20would%20like%20to%20talk%20with%20your%20logistics%20team"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orange"
                style={{ padding: '15px 32px' }}
              >
                <span>Talk to Our Logistics Team</span>
                <ArrowRight size={18} />
              </a>

              <button
                onClick={onOpenQuote}
                className="btn-white-outline"
                style={{ padding: '15px 28px' }}
              >
                <span>Request Custom Capacity</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServiceSection;
