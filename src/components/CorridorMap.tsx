'use client';

import React, { useState } from 'react';
import { 
  Navigation, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  Truck
} from 'lucide-react';

interface CorridorMapProps {
  onOpenQuote: () => void;
}

interface CorridorData {
  id: string;
  name: string;
  badge: string;
  primaryRoute: string;
  distanceKm: number;
  avgTransitDays: string;
  borderPosts: string[];
  keyCargo: string[];
  description: string;
  activeStatus: string;
  dispatchFrequency: string;
  color: string;
}

const CORRIDORS: CorridorData[] = [
  {
    id: 'north-south',
    name: 'North-South Corridor (Durban ⇄ Harare ⇄ Lusaka)',
    badge: 'Flagship Arterial Route',
    primaryRoute: 'Durban Port ➔ Johannesburg ➔ Beitbridge ➔ Harare ➔ Chirundu ➔ Lusaka',
    distanceKm: 2150,
    avgTransitDays: '3 - 4 Days',
    borderPosts: ['Beitbridge OSBP (SA-ZW)', 'Chirundu OSBP (ZW-ZM)'],
    keyCargo: ['Mining Heavy Plant Machinery', 'FMCG Retail Linehaul', 'Industrial Steel', 'Chemicals'],
    description: 'The backbone of Southern African international trade, connecting deep-water port of Durban with the manufacturing and mining centers of Zimbabwe and Zambia.',
    activeStatus: 'Priority Fast-Lane Clearance Active',
    dispatchFrequency: 'Daily Scheduled Departures',
    color: '#2B5EB8'
  },
  {
    id: 'beira',
    name: 'Beira Corridor (Beira Port ⇄ Mutare ⇄ Harare)',
    badge: 'Shortest Coastal Transit',
    primaryRoute: 'Beira Marine Port ➔ Machipanda / Forbes ➔ Mutare ➔ Harare',
    distanceKm: 560,
    avgTransitDays: '1 - 2 Days',
    borderPosts: ['Machipanda / Forbes Border Post (MZ-ZW)'],
    keyCargo: ['Containerized Import Cargo', 'Refined Petroleum & Chemicals', 'Agricultural Fertilizers', 'Tobacco Exports'],
    description: 'The quickest maritime gateway for Zimbabwe, delivering rapid turnarounds for breakbulk, containerized ocean freight, and agricultural exports.',
    activeStatus: 'Zero-Delay Marine Port Transfer',
    dispatchFrequency: 'Continuous 24/7 Convoys',
    color: '#F58220'
  },
  {
    id: 'trans-kalahari',
    name: 'Trans-Kalahari Corridor (Walvis Bay ⇄ Windhoek ⇄ Bulawayo)',
    badge: 'Atlantic Ocean Gateway',
    primaryRoute: 'Walvis Bay Port ➔ Windhoek ➔ Trans-Kalahari Highway ➔ Plumtree ➔ Bulawayo',
    distanceKm: 2100,
    avgTransitDays: '4 - 5 Days',
    borderPosts: ['Mamuno / Trans-Kalahari (NA-BW)', 'Plumtree Border Post (BW-ZW)'],
    keyCargo: ['Heavy Industrial Vehicles', 'Renewable Energy Equipment', 'Mining Spares', 'Frozen Marine Cargo'],
    description: 'Direct Atlantic corridor connecting European and American shipping lines via Namibia directly into Western Zimbabwe and regional mining clusters.',
    activeStatus: 'Optimized Atlantic Route',
    dispatchFrequency: 'Bi-Weekly Express Escorts',
    color: '#059669'
  },
  {
    id: 'copperbelt',
    name: 'Copperbelt & Katanga Link (Harare ⇄ Lusaka ⇄ Kolwezi)',
    badge: 'Mining & Mineral Corridor',
    primaryRoute: 'Harare Hub ➔ Chirundu ➔ Lusaka ➔ Ndola ➔ Kasumbalesa ➔ Lubumbashi / Kolwezi',
    distanceKm: 1650,
    avgTransitDays: '3 - 5 Days',
    borderPosts: ['Chirundu (ZW-ZM)', 'Kasumbalesa (ZM-CD)'],
    keyCargo: ['Copper Cathodes', 'Cobalt Concentrates', 'Mining Mill Shells', 'Mining Explosives ADR'],
    description: 'Specialized heavy haulage corridor dedicated to Central Africa’s richest mineral belt, featuring specialized multi-axle trailers and safety escort vehicles.',
    activeStatus: 'Dedicated Escort Convoys Active',
    dispatchFrequency: '3x Weekly Dedicated Runs',
    color: '#2563EB'
  },
  {
    id: 'maputo',
    name: 'Maputo Corridor (Maputo Port ⇄ Chicualacuala ⇄ Bulawayo)',
    badge: 'Direct Southeastern Link',
    primaryRoute: 'Maputo Port ➔ Chicualacuala / Sango ➔ Rutenga ➔ Bulawayo',
    distanceKm: 980,
    avgTransitDays: '2 - 3 Days',
    borderPosts: ['Sango Border Post (MZ-ZW)'],
    keyCargo: ['Bulk Sugar', 'Grain Commodities', 'Citrus Exports', 'Coal & Chrome'],
    description: 'High-tonnage corridor providing direct access to Mozambique’s deep water terminals for bulk agricultural exports and mineral ores.',
    activeStatus: 'High Volume Bulk Clearing',
    dispatchFrequency: 'Daily Bulk Unit Trains & Trucks',
    color: '#D97706'
  }
];

export const CorridorMap: React.FC<CorridorMapProps> = ({ onOpenQuote }) => {
  const [selectedCorridor, setSelectedCorridor] = useState<CorridorData>(CORRIDORS[0]);

  return (
    <section 
      id="corridors"
      style={{
        padding: '100px 0',
        background: '#F8FAFC',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <div className="badge-tag" style={{ marginBottom: '14px' }}>
            <Navigation size={14} />
            <span>Cross-Border Trade Network</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', marginBottom: '16px', color: '#0F172A' }}>
            Strategic SADC Trade Corridors & <span className="gradient-text-orange">Route Network</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569' }}>
            Operating seamlessly across 14 high-density regional trade corridors with pre-cleared customs bonds, dedicated border escort teams, and 24/7 satellite telemetry.
          </p>
        </div>

        {/* Corridor Interactive Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'start' }}>
          {/* Corridor Tabs List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {CORRIDORS.map((corridor) => {
              const isSelected = selectedCorridor.id === corridor.id;
              return (
                <div
                  key={corridor.id}
                  onClick={() => setSelectedCorridor(corridor)}
                  style={{
                    padding: '18px 20px',
                    background: isSelected ? '#EFF6FF' : '#FFFFFF',
                    border: isSelected ? `2px solid #2B5EB8` : '1px solid #E2E8F0',
                    borderRadius: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isSelected ? '0 8px 20px rgba(43, 94, 184, 0.12)' : '0 2px 6px rgba(0,0,0,0.02)'
                  }}
                  className="glass-panel-hover"
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span 
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        background: isSelected ? '#DBEAFE' : '#F1F5F9',
                        color: isSelected ? '#1E40AF' : '#475569',
                        border: '1px solid #CBD5E1'
                      }}
                    >
                      {corridor.badge}
                    </span>
                    <span style={{ fontSize: '0.82rem', color: '#64748B', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                      ~{corridor.distanceKm} km
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.08rem', color: '#0F172A', marginBottom: '6px' }}>
                    {corridor.name}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#64748B' }}>
                    <Clock size={13} color="#F58220" />
                    <span>Average Transit: <strong style={{ color: '#0F172A' }}>{corridor.avgTransitDays}</strong></span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Corridor Deep-Dive Showcase Card */}
          <div 
            className="glass-panel"
            style={{
              padding: '32px',
              border: '2px solid #BFDBFE',
              background: '#FFFFFF',
              borderRadius: '20px',
              boxShadow: '0 16px 36px rgba(15, 23, 42, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}
          >
            {/* Top Corridor Banner */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
                <span className="badge-tag-orange" style={{ fontSize: '0.78rem' }}>
                  {selectedCorridor.badge}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.82rem', fontWeight: 700 }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#059669' }}></span>
                  <span>{selectedCorridor.activeStatus}</span>
                </div>
              </div>

              <h3 style={{ fontSize: '1.6rem', color: '#0F172A', marginBottom: '8px' }}>
                {selectedCorridor.name}
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6 }}>
                {selectedCorridor.description}
              </p>
            </div>

            {/* Visual Route Flow Diagram */}
            <div 
              style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}
            >
              <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
                Corridor Route Path & Transit Nodes
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', color: '#0F172A', fontSize: '0.92rem', fontWeight: 700 }}>
                <Truck size={18} color="#F58220" />
                <span>{selectedCorridor.primaryRoute}</span>
              </div>
            </div>

            {/* Corridor Metrics Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px' }}>
              <div style={{ background: '#F1F5F9', padding: '14px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                <span style={{ fontSize: '0.72rem', color: '#64748B', display: 'block', fontWeight: 600 }}>TOTAL DISTANCE</span>
                <strong style={{ fontSize: '1.25rem', color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
                  {selectedCorridor.distanceKm} <span style={{ fontSize: '0.8rem', color: '#64748B' }}>KM</span>
                </strong>
              </div>

              <div style={{ background: '#FFF7ED', padding: '14px', borderRadius: '10px', border: '1px solid #FED7AA' }}>
                <span style={{ fontSize: '0.72rem', color: '#C2410C', display: 'block', fontWeight: 600 }}>ESTIMATED TRANSIT</span>
                <strong style={{ fontSize: '1.25rem', color: '#C2410C', fontFamily: 'var(--font-heading)' }}>
                  {selectedCorridor.avgTransitDays}
                </strong>
              </div>

              <div style={{ background: '#EFF6FF', padding: '14px', borderRadius: '10px', border: '1px solid #BFDBFE' }}>
                <span style={{ fontSize: '0.72rem', color: '#1E40AF', display: 'block', fontWeight: 600 }}>DISPATCH FREQUENCY</span>
                <strong style={{ fontSize: '0.9rem', color: '#1E40AF' }}>
                  {selectedCorridor.dispatchFrequency}
                </strong>
              </div>
            </div>

            {/* Border Posts & Cargo Tags */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
                  Border Posts Serviced
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {selectedCorridor.borderPosts.map((bp, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.84rem', color: '#334155' }}>
                      <CheckCircle2 size={14} color="#059669" />
                      <span>{bp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
                  Frequent Cargo Hauled
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {selectedCorridor.keyCargo.map((kc, i) => (
                    <span 
                      key={i}
                      style={{
                        fontSize: '0.75rem',
                        padding: '4px 8px',
                        background: '#F1F5F9',
                        border: '1px solid #E2E8F0',
                        borderRadius: '6px',
                        color: '#334155',
                        fontWeight: 500
                      }}
                    >
                      {kc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Instant Booking Trigger */}
            <div style={{ paddingTop: '8px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={onOpenQuote}
                className="btn-orange"
                style={{ flex: 1, padding: '13px 20px', fontSize: '0.9rem' }}
              >
                <span>Calculate Rate For This Corridor</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="https://wa.me/264818518120?text=Hello%20Priority%20Hauliers,%20I%20need%20corridor%20dispatch%20for%20this%20route"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '13px 20px', fontSize: '0.9rem' }}
              >
                <span>Direct Route Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorridorMap;
