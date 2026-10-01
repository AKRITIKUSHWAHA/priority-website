'use client';

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  X, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Thermometer, 
  Navigation, 
  PhoneCall
} from 'lucide-react';

interface TrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTrackingId?: string;
}

interface TrackingData {
  id: string;
  origin: string;
  destination: string;
  sender: string;
  consignee: string;
  cargoType: string;
  tonnage: string;
  currentStatus: string;
  statusBadge: 'in-transit' | 'customs' | 'delivered' | 'dispatched';
  eta: string;
  currentLocation: string;
  driverName: string;
  truckReg: string;
  temperature?: string;
  progressPercent: number;
  timeline: {
    title: string;
    location: string;
    timestamp: string;
    status: 'completed' | 'current' | 'pending';
    note: string;
  }[];
}

const SAMPLE_DATABASE: Record<string, TrackingData> = {
  'PH-88942-ZW': {
    id: 'PH-88942-ZW',
    origin: 'Durban Port Container Terminal (South Africa)',
    destination: 'Harare Heavy Industrial Logistics Hub (Zimbabwe)',
    sender: 'Anglo Global Mining Equipment Ltd',
    consignee: 'Zim-Plat Resources Corp',
    cargoType: 'Heavy Mining Excavator Components & Hydraulics',
    tonnage: '38.5 Metric Tons (Tri-Axle Lowbed Escort)',
    currentStatus: 'In-Transit via Beitbridge Border Corridor',
    statusBadge: 'in-transit',
    eta: 'Tomorrow, 14:30 CAT',
    currentLocation: 'Masvingo Highway (Southbound Segment - Km 182)',
    driverName: 'Tendai Moyo (Hazchem & Heavy Haul Certified)',
    truckReg: 'AFK-4921-ZW / Trailer TL-904',
    progressPercent: 72,
    timeline: [
      {
        title: 'Cargo Dispatched & Weighed',
        location: 'Durban Port Pier 2, SA',
        timestamp: 'Sep 22, 2026 - 06:15 CAT',
        status: 'completed',
        note: 'Security seal #ZW-99214 verified. GPS transponder synchronized.'
      },
      {
        title: 'Pre-Clearance SADC SADC Cross-Border Filing',
        location: 'ZIMRA Electronic EDI System',
        timestamp: 'Sep 22, 2026 - 18:40 CAT',
        status: 'completed',
        note: 'CD1 Form & Commercial Invoices stamped.'
      },
      {
        title: 'Border Post Inspection & Escort Handover',
        location: 'Beitbridge One-Stop Border Post',
        timestamp: 'Sep 23, 2026 - 11:20 CAT',
        status: 'completed',
        note: 'Physical inspection completed in 42 mins. Priority lane release.'
      },
      {
        title: 'En Route to Harare Hub',
        location: 'Masvingo Corridor (Speed: 68 km/h)',
        timestamp: 'Sep 24, 2026 - 08:45 CAT',
        status: 'current',
        note: 'Driver on schedule. Next mandatory driver fatigue break in 45km.'
      },
      {
        title: 'Final Delivery & Offloading',
        location: 'Harare Industrial Zone, Zimbabwe',
        timestamp: 'Estimated: Sep 25, 2026 - 14:30 CAT',
        status: 'pending',
        note: 'Crane offloading team notified on standby.'
      }
    ]
  },
  'PH-77219-ZA': {
    id: 'PH-77219-ZA',
    origin: 'Johannesburg Cold Chain Central (South Africa)',
    destination: 'Lusaka Distribution Center (Zambia)',
    sender: 'Agri-Fresh Export Logistics',
    consignee: 'SuperFresh Supermarkets Lusaka',
    cargoType: 'Chilled Agricultural Produce & Dairy',
    tonnage: '26.0 Metric Tons (Thermo King Reefer)',
    currentStatus: 'Chirundu Border Clearance Protocol',
    statusBadge: 'customs',
    eta: 'Sep 25, 2026 - 10:00 CAT',
    currentLocation: 'Chirundu Border Inspection Yard',
    driverName: 'Charles Ndlovu',
    truckReg: 'VOL-8832-SA / Reefer RF-44',
    temperature: '-3.2°C (Optimal Setpoint: -4.0°C)',
    progressPercent: 55,
    timeline: [
      {
        title: 'Reefer Pre-Cooling & Loading',
        location: 'Johannesburg Cold Hub',
        timestamp: 'Sep 22, 2026 - 14:00 CAT',
        status: 'completed',
        note: 'Temperature locked at -4.0°C. Cold-chain seal active.'
      },
      {
        title: 'Crossed Beitbridge Corridor',
        location: 'Beitbridge Entry Hub',
        timestamp: 'Sep 23, 2026 - 09:30 CAT',
        status: 'completed',
        note: 'Transit bond issued.'
      },
      {
        title: 'Zambia Border Customs Formalities',
        location: 'Chirundu One-Stop Border Post',
        timestamp: 'Sep 24, 2026 - 07:15 CAT',
        status: 'current',
        note: 'Phytosanitary inspection in progress. Continuous power plugged.'
      },
      {
        title: 'Lusaka Final Delivery',
        location: 'Lusaka Central Warehouse',
        timestamp: 'Estimated: Sep 25, 2026 - 10:00 CAT',
        status: 'pending',
        note: 'Scheduled for immediate temperature log verification.'
      }
    ]
  },
  'PH-99410-ZM': {
    id: 'PH-99410-ZM',
    origin: 'Beira Port Marine Gateway (Mozambique)',
    destination: 'Ndola Copperbelt Refinery (Zambia)',
    sender: 'Global Mineral & Metal Logistics',
    consignee: 'Copperbelt Smelting & Refining Works',
    cargoType: 'Refined Industrial Reagents & Sodium Cyanide',
    tonnage: '34.0 Metric Tons (Dangerous Goods ADR/Hazchem)',
    currentStatus: 'Dispatched & Fast-Tracking Beira Corridor',
    statusBadge: 'dispatched',
    eta: 'Sep 27, 2026 - 16:00 CAT',
    currentLocation: 'Machipanda Border Gate',
    driverName: 'Kudakwashe Shumba (ADR Hazchem Master)',
    truckReg: 'SCN-9104-ZW / Hazchem Tanker',
    progressPercent: 35,
    timeline: [
      {
        title: 'Hazchem Port Discharge & Placarding',
        location: 'Beira Port Terminal 4',
        timestamp: 'Sep 23, 2026 - 16:00 CAT',
        status: 'completed',
        note: 'ADR Class 6.1 Certification verified. Hazchem emergency response escort attached.'
      },
      {
        title: 'Mozambique - Zimbabwe Transit',
        location: 'Machipanda / Forbes Border Post',
        timestamp: 'Sep 24, 2026 - 09:10 CAT',
        status: 'current',
        note: 'Customs escort clearance in process.'
      },
      {
        title: 'Transit via Harare-Chirundu Link',
        location: 'Northern Corridor',
        timestamp: 'Pending: Sep 25, 2026',
        status: 'pending',
        note: 'Designated hazardous transport route.'
      },
      {
        title: 'Ndola Refinery Receipt',
        location: 'Ndola Industrial Zone',
        timestamp: 'Estimated: Sep 27, 2026 - 16:00 CAT',
        status: 'pending',
        note: 'Final Hazchem discharge.'
      }
    ]
  }
};

export const TrackingModal: React.FC<TrackingModalProps> = ({
  isOpen,
  onClose,
  initialTrackingId = 'PH-88942-ZW'
}) => {
  const [searchInput, setSearchInput] = useState(initialTrackingId);
  const [activeData, setActiveData] = useState<TrackingData | null>(null);

  useEffect(() => {
    if (initialTrackingId) {
      setSearchInput(initialTrackingId);
      lookupTracking(initialTrackingId);
    }
  }, [initialTrackingId]);

  const lookupTracking = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (SAMPLE_DATABASE[cleanCode]) {
      setActiveData(SAMPLE_DATABASE[cleanCode]);
    } else {
      setActiveData({
        id: cleanCode || 'PH-LIVE-CONSIGNMENT',
        origin: 'Harare Regional Distribution Logistics Hub (Zimbabwe)',
        destination: 'Johannesburg Cross-Border Gateway (South Africa)',
        sender: 'Enterprise Client Cargo # ' + (cleanCode || 'PH-LIVE'),
        consignee: 'Priority Freight Express Forwarding',
        cargoType: 'Consolidated Commercial Linehaul Freight',
        tonnage: '32.0 Metric Tons (Superlink Tautliner)',
        currentStatus: 'Live Tracking Active — In-Transit SADC Corridor',
        statusBadge: 'in-transit',
        eta: 'In 36 Hours (On Schedule)',
        currentLocation: 'Southern Transit Corridor - Satellite Verified',
        driverName: 'Priority Certified Senior Operator',
        truckReg: 'PRI-774-EXP / Escort GPS Unit #9',
        progressPercent: 65,
        timeline: [
          {
            title: 'Origin Loading & Weight Manifest Verified',
            location: 'Central Distribution Depot',
            timestamp: 'Yesterday - 08:30 CAT',
            status: 'completed',
            note: 'Electronic seal fastened and recorded in dispatch manifest.'
          },
          {
            title: 'Border Pre-Clearance & Transit Clearance',
            location: 'SADC Customs Terminal',
            timestamp: 'Today - 06:15 CAT',
            status: 'completed',
            note: 'Green lane customs clearance protocol cleared.'
          },
          {
            title: 'En Route to Destination Terminal',
            location: 'National Highway Highway Segment',
            timestamp: 'Live Active Telematics',
            status: 'current',
            note: 'Satellite transponder active. Telematics reporting normal speeds.'
          },
          {
            title: 'Arrival & Offload Inspection',
            location: 'Consignee Receiving Bay',
            timestamp: 'Estimated: Next Business Day',
            status: 'pending',
            note: 'Proof of Delivery (POD) will be instantly uploaded upon signature.'
          }
        ]
      });
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      lookupTracking(searchInput.trim());
    }
  };

  if (!isOpen) return null;

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
        {/* Header Bar */}
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
                background: '#EFF6FF',
                border: '1px solid #BFDBFE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2B5EB8'
              }}
            >
              <Navigation size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#D8680C', fontWeight: 800 }}>
                Priority Satellite Command Telematics
              </div>
              <h3 style={{ fontSize: '1.25rem', margin: 0, color: '#0F172A' }}>Live Consignment Track & Trace</h3>
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

        {/* Search & Sample Bar */}
        <div style={{ padding: '16px 24px', background: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', flex: 1, minWidth: '240px' }}>
              <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#64748B' }} />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Enter Consignment Number (e.g., PH-88942-ZW)"
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 42px',
                  background: '#F8FAFC',
                  border: '1px solid #CBD5E1',
                  borderRadius: '10px',
                  color: '#0F172A',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.95rem'
                }}
              />
            </div>
            <button type="submit" className="btn-primary" style={{ padding: '12px 24px' }}>
              <span>Locate Consignment</span>
            </button>
          </form>

          {/* Quick Sample IDs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px', fontSize: '0.8rem', color: '#64748B', flexWrap: 'wrap' }}>
            <span>Quick Samples:</span>
            {Object.keys(SAMPLE_DATABASE).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => { setSearchInput(code); lookupTracking(code); }}
                style={{
                  background: activeData?.id === code ? '#FFF7ED' : '#F1F5F9',
                  border: activeData?.id === code ? '1px solid #F58220' : '1px solid #E2E8F0',
                  color: activeData?.id === code ? '#C2410C' : '#334155',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600
                }}
              >
                {code}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Body Content */}
        {activeData && (
          <div style={{ padding: '24px', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Top Status Banner */}
            <div 
              style={{
                background: '#EFF6FF',
                border: '1px solid #BFDBFE',
                borderRadius: '14px',
                padding: '18px 20px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Consignment Reference</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 900, fontFamily: 'var(--font-mono)', color: '#1E40AF' }}>
                  {activeData.id}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Current Stage</div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#059669' }}></span>
                  <strong style={{ color: '#047857', fontSize: '0.95rem' }}>{activeData.currentStatus}</strong>
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Estimated Time of Arrival</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#C2410C' }}>
                  {activeData.eta}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>GPS Live Speed & Telematics</div>
                <div style={{ fontSize: '0.9rem', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
                  <ShieldCheck size={16} color="#059669" />
                  <span>24/7 Monitored Escort</span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', marginBottom: '8px', fontWeight: 600 }}>
                <span style={{ color: '#64748B' }}>Transit Journey Progress</span>
                <span style={{ color: '#D8680C' }}>{activeData.progressPercent}% Completed</span>
              </div>
              <div style={{ width: '100%', height: '10px', background: '#E2E8F0', borderRadius: '5px', overflow: 'hidden' }}>
                <div 
                  style={{
                    width: `${activeData.progressPercent}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #2B5EB8 0%, #F58220 100%)',
                    borderRadius: '5px',
                    transition: 'width 0.6s ease'
                  }}
                />
              </div>
            </div>

            {/* Route & Cargo Specs Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {/* Origin / Destination Card */}
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontSize: '0.8rem', color: '#C2410C', fontWeight: 800, marginBottom: '12px', textTransform: 'uppercase' }}>
                  Origin & Destination Routing
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#2B5EB8', marginTop: '4px', flexShrink: 0 }}></div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>PICKUP / DEPARTURE POINT</div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0F172A' }}>{activeData.origin}</div>
                    </div>
                  </div>

                  <div style={{ width: '2px', height: '18px', background: '#CBD5E1', marginLeft: '5px' }}></div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F58220', marginTop: '4px', flexShrink: 0 }}></div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>DESTINATION DELIVERY HUB</div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0F172A' }}>{activeData.destination}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cargo & Driver Card */}
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontSize: '0.8rem', color: '#C2410C', fontWeight: 800, marginBottom: '12px', textTransform: 'uppercase' }}>
                  Freight Manifest & Telematics
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85rem' }}>
                  <div>
                    <span style={{ color: '#64748B', fontSize: '0.75rem', display: 'block', fontWeight: 600 }}>CARGO CLASSIFICATION</span>
                    <strong style={{ color: '#0F172A' }}>{activeData.cargoType}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748B', fontSize: '0.75rem', display: 'block', fontWeight: 600 }}>TONNAGE & FLEET</span>
                    <strong style={{ color: '#0F172A' }}>{activeData.tonnage}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748B', fontSize: '0.75rem', display: 'block', fontWeight: 600 }}>PRIMARY OPERATOR</span>
                    <span style={{ color: '#334155' }}>{activeData.driverName}</span>
                  </div>
                  <div>
                    <span style={{ color: '#64748B', fontSize: '0.75rem', display: 'block', fontWeight: 600 }}>TRUCK & TRAILER ID</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: '#0F172A' }}>{activeData.truckReg}</span>
                  </div>
                </div>

                {activeData.temperature && (
                  <div style={{ marginTop: '12px', padding: '8px 12px', background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', color: '#047857', fontSize: '0.84rem', fontWeight: 700 }}>
                    <Thermometer size={16} />
                    <span>Live Reefer Chamber: <strong>{activeData.temperature}</strong></span>
                  </div>
                )}
              </div>
            </div>

            {/* Checkpoint Timeline */}
            <div>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#0F172A' }}>
                <Clock size={18} color="#2B5EB8" />
                <span>Corridor Checkpoints & Border Transits</span>
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', position: 'relative', paddingLeft: '14px' }}>
                <div style={{ position: 'absolute', left: '20px', top: '10px', bottom: '10px', width: '2px', background: '#CBD5E1' }}></div>

                {activeData.timeline.map((item, index) => {
                  const isDone = item.status === 'completed';
                  const isCurrent = item.status === 'current';
                  return (
                    <div key={index} style={{ display: 'flex', gap: '16px', position: 'relative', zIndex: 2 }}>
                      <div 
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          background: isDone ? '#059669' : isCurrent ? '#F58220' : '#E2E8F0',
                          border: `2px solid ${isDone ? '#059669' : isCurrent ? '#F58220' : '#CBD5E1'}`,
                          marginTop: '4px',
                          flexShrink: 0
                        }}
                      />

                      <div 
                        style={{
                          flex: 1,
                          background: isCurrent ? '#FFF7ED' : '#F8FAFC',
                          border: isCurrent ? '1px solid #FED7AA' : '1px solid #E2E8F0',
                          borderRadius: '10px',
                          padding: '12px 16px'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
                          <strong style={{ color: isCurrent ? '#C2410C' : '#0F172A', fontSize: '0.92rem' }}>{item.title}</strong>
                          <span style={{ fontSize: '0.78rem', color: '#64748B', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{item.timestamp}</span>
                        </div>
                        <div style={{ fontSize: '0.84rem', color: '#334155', marginTop: '3px' }}>
                          <MapPin size={13} style={{ display: 'inline', marginRight: '4px', color: '#2B5EB8' }} />
                          {item.location}
                        </div>
                        <p style={{ fontSize: '0.82rem', color: '#64748B', marginTop: '6px', marginBottom: 0 }}>
                          {item.note}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer Bar */}
        <div 
          style={{
            padding: '16px 24px',
            background: '#F8FAFC',
            borderTop: '1px solid #E2E8F0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <div style={{ fontSize: '0.84rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <PhoneCall size={14} color="#059669" />
            <span>Need Dispatch Assistance? Harare Line: <strong>+263 775 682 351</strong></span>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <a 
              href={`https://wa.me/264818518120?text=Hello%20Priority%20Hauliers,%20I%20am%20inquiring%20about%20consignment%20status%20for%20${activeData?.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange"
              style={{ padding: '8px 18px', fontSize: '0.84rem' }}
            >
              <span>Contact Dispatch Controller</span>
            </a>
            <button
              onClick={onClose}
              className="btn-secondary"
              style={{ padding: '8px 18px', fontSize: '0.84rem' }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingModal;
