'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Award, 
  FileCheck2, 
  Users, 
  Headphones, 
  ArrowRight
} from 'lucide-react';

interface WhyUsSectionProps {
  onOpenQuote: () => void;
}

const PILLARS = [
  {
    icon: Clock,
    title: '99.8% On-Time SLA Guarantee',
    description: 'Disciplined dual-driver relay protocols and dedicated border transit expedite teams minimize dwell time at all major SADC border crossings.',
    color: '#2B5EB8'
  },
  {
    icon: ShieldCheck,
    title: 'Uncompromised Cargo Safety & Full Insurance',
    description: 'Comprehensive Goods-in-Transit (GIT) multi-million dollar insurance backing every trip, reinforced by tamper-evident satellite electronic seals.',
    color: '#F58220'
  },
  {
    icon: FileCheck2,
    title: 'Pre-Cleared SADC Customs & Bonded Corridors',
    description: 'Direct EDI interfaces with ZIMRA, SARS, and ZRA ensuring that duty bonds and transit declarations are processed before trucks hit the border.',
    color: '#059669'
  },
  {
    icon: Headphones,
    title: 'Dedicated 24/7 Dispatch Control Room',
    description: 'Human logistics coordinators on watch 24 hours a day, 365 days a year, providing real-time transit updates and instant contingency response.',
    color: '#2563EB'
  },
  {
    icon: Award,
    title: 'ISO 9001 & SQAS Compliant Operations',
    description: 'Standardized safety management system with strict preventative vehicle maintenance and certified hazardous materials (Hazchem ADR) protocol.',
    color: '#D97706'
  },
  {
    icon: Users,
    title: 'Master Heavy Haulage Drivers',
    description: 'Every operator undergoes rigorous defensive driving certifications, fatigue management tracking, and specialized route topography training.',
    color: '#047857'
  }
];

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ onOpenQuote }) => {
  return (
    <section 
      id="about"
      style={{
        padding: '100px 0',
        background: '#FFFFFF',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
          <div className="badge-tag-orange" style={{ marginBottom: '14px' }}>
            <Award size={14} />
            <span>Why Priority Hauliers</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', marginBottom: '16px', color: '#0F172A' }}>
            The Gold Standard in <span className="gradient-text-blue">African Freight Haulage</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569' }}>
            We bridge the trade corridors of Zimbabwe, South Africa, Mozambique, Zambia, and beyond with unmatched speed, transparency, and dependability.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '60px'
          }}
        >
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <div 
                key={i}
                className="glass-panel glass-panel-hover"
                style={{
                  padding: '30px',
                  borderTop: `4px solid ${p.color}`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  background: '#FFFFFF',
                  boxShadow: '0 4px 20px rgba(15, 23, 42, 0.05)'
                }}
              >
                <div 
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: '#EFF6FF',
                    border: '1px solid #BFDBFE',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: p.color
                  }}
                >
                  <Icon size={24} />
                </div>

                <h3 style={{ fontSize: '1.25rem', color: '#0F172A' }}>
                  {p.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Big Assurance Callout Box */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #EFF6FF 0%, #FFF7ED 100%)',
            border: '2px solid #BFDBFE',
            borderRadius: '20px',
            padding: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            boxShadow: '0 10px 30px rgba(43, 94, 184, 0.08)'
          }}
        >
          <div style={{ maxWidth: '650px' }}>
            <span style={{ fontSize: '0.8rem', color: '#C2410C', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              CONTRACT HAULAGE & TENDER LOGISTICS
            </span>
            <h3 style={{ fontSize: '1.8rem', color: '#0F172A', margin: '8px 0 12px' }}>
              Looking for a Long-Term Dedicated Fleet Partner?
            </h3>
            <p style={{ color: '#475569', fontSize: '0.96rem', margin: 0 }}>
              We partner with mining corporations, agricultural cartels, and multinational retailers with guaranteed volume capacity, dedicated liveried trucks, and customized SLA reporting.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenQuote}
              className="btn-orange"
              style={{ padding: '14px 28px', fontSize: '0.95rem' }}
            >
              <span>Request Corporate Proposal</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
