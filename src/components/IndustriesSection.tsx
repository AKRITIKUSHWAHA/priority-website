'use client';

import React from 'react';
import { 
  HardHat, 
  ShoppingBag, 
  Factory, 
  Pickaxe, 
  Wheat, 
  Car, 
  UtensilsCrossed, 
  Globe, 
  ArrowRight 
} from 'lucide-react';

interface IndustriesSectionProps {
  onOpenQuote: () => void;
}

const INDUSTRIES = [
  {
    name: 'Mining & Resources',
    desc: 'Heavy ball mills, crushers, reagents, and minerals hauled across the Copperbelt and Great Dyke.',
    icon: Pickaxe
  },
  {
    name: 'Agriculture & Commodities',
    desc: 'Grain, sugar, tobacco, fertilizers, and export citrus with seasonal surge capacity.',
    icon: Wheat
  },
  {
    name: 'Manufacturing & Industrial',
    desc: 'Raw materials, fabricated steel, machinery, and factory supplies moving continuously.',
    icon: Factory
  },
  {
    name: 'Construction & Infrastructure',
    desc: 'Cement, earthmoving plant equipment, structural beams, and mega-project staging.',
    icon: HardHat
  },
  {
    name: 'Retail & E-commerce',
    desc: 'Scheduled FTL linehaul and rapid inventory replenishment for leading African supermarket chains.',
    icon: ShoppingBag
  },
  {
    name: 'Food & Beverage',
    desc: 'Temperature-controlled reefers guaranteeing shelf life and zero cold-chain compromises.',
    icon: UtensilsCrossed
  },
  {
    name: 'Automotive & Heavy Plant',
    desc: 'Commercial vehicle transport, machinery spares, and industrial engines delivered on-demand.',
    icon: Car
  },
  {
    name: 'International Trade & Ports',
    desc: 'Bonded maritime container clearing from Durban and Beira with direct customs inland transit.',
    icon: Globe
  }
];

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenQuote }) => {
  return (
    <section 
      id="industries"
      style={{
        padding: '100px 0',
        background: '#FFFFFF',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
          <div className="badge-orange" style={{ marginBottom: '14px' }}>
            SPECIALIZED SECTOR EXPERTISE
          </div>
          <h2 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)', color: '#171923', marginBottom: '16px' }}>
            Logistics for <span className="text-orange">Every Industry</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#6B7280', margin: 0 }}>
            Tailored supply chain workflows, specialized equipment, and dedicated compliance protocols for Africa’s key commercial sectors.
          </p>
        </div>

        {/* 8 Industries Card Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}
        >
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={i}
                onClick={onOpenQuote}
                className="industry-card"
                style={{
                  background: '#F5F6F8',
                  border: '1px solid #E5E7EB',
                  borderRadius: '18px',
                  padding: '28px 24px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '16px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div>
                  <div 
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '12px',
                      background: '#FFFFFF',
                      border: '1px solid #E5E7EB',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FF5A1F',
                      marginBottom: '16px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                    }}
                    className="industry-icon"
                  >
                    <Icon size={24} />
                  </div>

                  <h3 style={{ fontSize: '1.18rem', color: '#171923', fontWeight: 800, marginBottom: '8px' }}>
                    {ind.name}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.55, margin: 0 }}>
                    {ind.desc}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FF5A1F', fontWeight: 700, fontSize: '0.86rem' }}>
                  <span>Request Capacity</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .industry-card:hover {
          background: #FFFFFF !important;
          border-color: #FF5A1F !important;
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(21, 24, 39, 0.08);
        }
        .industry-card:hover .industry-icon {
          background: #FF5A1F !important;
          color: #FFFFFF !important;
          border-color: #FF5A1F !important;
        }
      `}</style>
    </section>
  );
};

export default IndustriesSection;
