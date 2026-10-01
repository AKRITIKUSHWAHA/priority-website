'use client';

import React, { useState } from 'react';
import { 
  X, 
  Calculator, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles
} from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CITIES = [
  { id: 'harare', name: 'Harare (Zimbabwe)', country: 'ZW' },
  { id: 'bulawayo', name: 'Bulawayo (Zimbabwe)', country: 'ZW' },
  { id: 'beitbridge', name: 'Beitbridge Border (Zimbabwe)', country: 'ZW' },
  { id: 'durban', name: 'Durban Port (South Africa)', country: 'ZA' },
  { id: 'johannesburg', name: 'Johannesburg (South Africa)', country: 'ZA' },
  { id: 'lusaka', name: 'Lusaka (Zambia)', country: 'ZM' },
  { id: 'ndola', name: 'Ndola / Copperbelt (Zambia)', country: 'ZM' },
  { id: 'beira', name: 'Beira Port (Mozambique)', country: 'MZ' },
  { id: 'lubumbashi', name: 'Lubumbashi (DRC)', country: 'CD' },
  { id: 'walvis_bay', name: 'Walvis Bay Port (Namibia)', country: 'NA' },
  { id: 'gaborone', name: 'Gaborone (Botswana)', country: 'BW' }
];

const CARGO_TYPES = [
  { id: 'ftl_general', name: 'FTL General Freight', desc: 'Curtain-side Tautliners & Box Trailers', ratePerKmTon: 0.12, icon: '📦' },
  { id: 'mining_abnormal', name: 'Mining & Abnormal Heavy Load', desc: 'Tri-Axle / Multi-Axle Lowbed Escorts', ratePerKmTon: 0.22, icon: '🏗️' },
  { id: 'cold_chain', name: 'Temperature-Controlled Reefer', desc: '-25°C to +15°C Chilled / Frozen Food', ratePerKmTon: 0.16, icon: '❄️' },
  { id: 'hazchem', name: 'Dangerous Goods (Hazchem ADR)', desc: 'Chemicals, Fuels, Certified Reagents', ratePerKmTon: 0.19, icon: '⚠️' },
  { id: 'bulk_agri', name: 'Bulk Agricultural Commodities', desc: 'Grain, Sugar, Fertilizer, Tobacco', ratePerKmTon: 0.11, icon: '🌾' }
];

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [origin, setOrigin] = useState('durban');
  const [destination, setDestination] = useState('harare');
  const [cargoType, setCargoType] = useState('mining_abnormal');
  const [tonnage, setTonnage] = useState(34);
  const [isExpress, setIsExpress] = useState(true);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const getDistanceAndTransit = (from: string, to: string) => {
    const routeMatrix: Record<string, number> = {
      'durban-harare': 1680,
      'harare-durban': 1680,
      'johannesburg-harare': 1120,
      'harare-johannesburg': 1120,
      'beira-harare': 560,
      'harare-beira': 560,
      'beira-lusaka': 1050,
      'lusaka-beira': 1050,
      'harare-lusaka': 490,
      'lusaka-harare': 490,
      'durban-lusaka': 2150,
      'lusaka-durban': 2150,
      'johannesburg-lubumbashi': 2280,
      'walvis_bay-lusaka': 2100,
      'bulawayo-johannesburg': 840,
      'harare-lubumbashi': 1250,
      'durban-lubumbashi': 2980
    };

    const key = `${from}-${to}`;
    const dist = routeMatrix[key] || 1200;
    const transitDays = Math.max(1, Math.ceil(dist / (isExpress ? 650 : 450)));
    return { dist, transitDays };
  };

  const { dist, transitDays } = getDistanceAndTransit(origin, destination);
  const selectedCargo = CARGO_TYPES.find(c => c.id === cargoType) || CARGO_TYPES[0];
  
  const baseRate = dist * tonnage * selectedCargo.ratePerKmTon;
  const expressMultiplier = isExpress ? 1.2 : 1.0;
  const estimatedCost = Math.round(baseRate * expressMultiplier);
  const costMin = Math.round(estimatedCost * 0.92);
  const costMax = Math.round(estimatedCost * 1.08);

  const originName = CITIES.find(c => c.id === origin)?.name || origin;
  const destName = CITIES.find(c => c.id === destination)?.name || destination;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `*PRIORITY HAULIERS — INSTANT FREIGHT INQUIRY*\n` +
    `-----------------------------------------\n` +
    `• Origin: ${originName}\n` +
    `• Destination: ${destName}\n` +
    `• Cargo: ${selectedCargo.name}\n` +
    `• Tonnage: ${tonnage} Metric Tons\n` +
    `• Service: ${isExpress ? 'Express Dual-Driver Corridor Transit' : 'Standard Scheduled Linehaul'}\n` +
    `• Estimated Distance: ~${dist} km\n` +
    `• Estimated Transit: ~${transitDays} Days\n` +
    `• Approx Quote: $${costMin.toLocaleString()} - $${costMax.toLocaleString()} USD\n` +
    `• Client: ${clientName || 'Direct Logistics Request'}\n` +
    `• Phone: ${clientPhone || 'N/A'}`
  );

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.6)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        overflowY: 'auto'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '960px',
          background: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '20px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.25)',
          color: '#0F172A',
          overflow: 'hidden',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div 
          style={{
            padding: '20px 24px',
            background: '#F8FAFC',
            borderBottom: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div 
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: '#FFF7ED',
                border: '1px solid #FED7AA',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#F58220'
              }}
            >
              <Calculator size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#C2410C', fontWeight: 800 }}>
                Instant Rate Estimator
              </div>
              <h3 style={{ fontSize: '1.25rem', margin: 0, color: '#0F172A' }}>Cross-Border Freight & Haulage Quote</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: '#F1F5F9',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#64748B',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#ECFDF5', border: '2px solid #059669', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669' }}>
                <CheckCircle2 size={36} />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#0F172A' }}>Freight Quote Inquiry Submitted!</h3>
              <p style={{ maxWidth: '500px', color: '#475569', fontSize: '0.95rem' }}>
                Our dispatch controller has received your quotation request for <strong>{originName} ➔ {destName}</strong> ({tonnage}T {selectedCargo.name}). A formal stamped bill of lading and rate card will be transmitted within 15 minutes.
              </p>
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <a 
                  href={`https://wa.me/264818518120?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-orange"
                  style={{ gap: '8px' }}
                >
                  <MessageCircle size={18} />
                  <span>Instant Dispatch on WhatsApp</span>
                </a>
                <button onClick={() => setIsSubmitted(false)} className="btn-secondary">
                  Calculate Another Route
                </button>
              </div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {/* Left Column: Configurator */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {/* Route Selector */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: '#475569', fontWeight: 700, marginBottom: '6px', textTransform: 'uppercase' }}>
                      Origin Location
                    </label>
                    <select
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '11px',
                        background: '#F8FAFC',
                        border: '1px solid #CBD5E1',
                        borderRadius: '8px',
                        color: '#0F172A',
                        fontSize: '0.88rem'
                      }}
                    >
                      {CITIES.map((city) => (
                        <option key={city.id} value={city.id}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: '#475569', fontWeight: 700, marginBottom: '6px', textTransform: 'uppercase' }}>
                      Destination Hub
                    </label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '11px',
                        background: '#F8FAFC',
                        border: '1px solid #CBD5E1',
                        borderRadius: '8px',
                        color: '#0F172A',
                        fontSize: '0.88rem'
                      }}
                    >
                      {CITIES.map((city) => (
                        <option key={city.id} value={city.id}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Cargo Type Selector */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: '#475569', fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase' }}>
                    Cargo Classification
                  </label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {CARGO_TYPES.map((type) => {
                      const isSelected = cargoType === type.id;
                      return (
                        <div
                          key={type.id}
                          onClick={() => setCargoType(type.id)}
                          style={{
                            padding: '10px 14px',
                            background: isSelected ? '#FFF7ED' : '#F8FAFC',
                            border: isSelected ? '2px solid #F58220' : '1px solid #E2E8F0',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            transition: 'all 0.2s'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '1.2rem' }}>{type.icon}</span>
                            <div>
                              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: isSelected ? '#C2410C' : '#0F172A' }}>
                                {type.name}
                              </div>
                              <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{type.desc}</div>
                            </div>
                          </div>
                          {isSelected && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F58220' }}></div>}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Tonnage Slider */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <label style={{ fontSize: '0.78rem', color: '#475569', fontWeight: 700, textTransform: 'uppercase' }}>
                      Payload Weight (Tonnage)
                    </label>
                    <span style={{ color: '#D8680C', fontWeight: 800, fontSize: '1.1rem', fontFamily: 'var(--font-mono)' }}>
                      {tonnage} Metric Tons
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    step="1"
                    value={tonnage}
                    onChange={(e) => setTonnage(Number(e.target.value))}
                    style={{
                      width: '100%',
                      accentColor: '#F58220',
                      cursor: 'pointer'
                    }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748B', marginTop: '4px' }}>
                    <span>5T (Light)</span>
                    <span>34T (Standard Superlink)</span>
                    <span>100T (Heavy Haul)</span>
                  </div>
                </div>

                {/* Speed Dispatch Toggle */}
                <div 
                  onClick={() => setIsExpress(!isExpress)}
                  style={{
                    padding: '12px 14px',
                    background: isExpress ? '#EFF6FF' : '#F8FAFC',
                    border: isExpress ? '2px solid #2B5EB8' : '1px solid #E2E8F0',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Sparkles size={18} color="#2B5EB8" />
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: isExpress ? '#1E40AF' : '#0F172A' }}>
                        Priority Express Escort (Dual-Driver Corridor)
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B' }}>24/7 non-stop driver rotation + Green-lane customs fast-track</div>
                    </div>
                  </div>
                  <input type="checkbox" checked={isExpress} onChange={() => {}} style={{ accentColor: '#2B5EB8' }} />
                </div>
              </div>

              {/* Right Column: Calculated Quote & Direct Booking Form */}
              <div 
                style={{
                  background: '#F8FAFC',
                  border: '2px solid #BFDBFE',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '20px'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#C2410C', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Live Calculated Estimate
                  </div>

                  {/* Price Banner */}
                  <div style={{ marginTop: '10px', marginBottom: '16px' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-heading)', color: '#0F172A' }}>
                      ${costMin.toLocaleString()} – ${costMax.toLocaleString()} <span style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 600 }}>USD</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#047857', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px', fontWeight: 600 }}>
                      <CheckCircle2 size={14} />
                      <span>Includes SADC Road Transit Permits, GPS & Border Clearing</span>
                    </div>
                  </div>

                  {/* Route Quick Summary */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', padding: '14px', background: '#FFFFFF', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                    <div>
                      <span style={{ fontSize: '0.72rem', color: '#64748B', display: 'block', fontWeight: 600 }}>ESTIMATED CORRIDOR DISTANCE</span>
                      <strong style={{ fontSize: '1rem', color: '#0F172A' }}>~{dist} Kilometers</strong>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.72rem', color: '#64748B', display: 'block', fontWeight: 600 }}>ESTIMATED TRANSIT TIME</span>
                      <strong style={{ fontSize: '1rem', color: '#D8680C' }}>{transitDays} Business Days</strong>
                    </div>
                  </div>
                </div>

                {/* Direct Booking Form */}
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: '#475569', fontWeight: 700, marginBottom: '4px' }}>Your Name / Company Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Zimbabwe Platinum Resources"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        background: '#FFFFFF',
                        border: '1px solid #CBD5E1',
                        borderRadius: '8px',
                        color: '#0F172A',
                        fontSize: '0.88rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: '#475569', fontWeight: 700, marginBottom: '4px' }}>Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      placeholder="e.g. +263 775 682 351"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        background: '#FFFFFF',
                        border: '1px solid #CBD5E1',
                        borderRadius: '8px',
                        color: '#0F172A',
                        fontSize: '0.88rem'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                    <button type="submit" className="btn-primary" style={{ flex: 1, padding: '12px', fontSize: '0.88rem' }}>
                      <span>Lock In Freight Rate</span>
                      <ArrowRight size={16} />
                    </button>
                    
                    <a
                      href={`https://wa.me/264818518120?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-orange"
                      style={{ padding: '12px 16px', fontSize: '0.88rem' }}
                      title="Send directly to WhatsApp Dispatch"
                    >
                      <MessageCircle size={18} />
                    </a>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
