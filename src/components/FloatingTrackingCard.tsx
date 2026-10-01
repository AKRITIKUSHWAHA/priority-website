'use client';

import React, { useState } from 'react';
import { Search, ArrowRight, ShieldCheck, Navigation } from 'lucide-react';

interface FloatingTrackingCardProps {
  onOpenTracking: (trackingId?: string) => void;
}

export const FloatingTrackingCard: React.FC<FloatingTrackingCardProps> = ({ onOpenTracking }) => {
  const [trackingId, setTrackingId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenTracking(trackingId.trim() || 'PH-88942-ZW');
  };

  return (
    <div 
      id="tracking"
      style={{
        position: 'relative',
        zIndex: 10,
        marginTop: '-55px',
        padding: '0 16px',
        marginBottom: '40px'
      }}
    >
      <div 
        className="container"
        style={{
          maxWidth: '1080px',
          padding: 0
        }}
      >
        <div 
          style={{
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: '20px',
            padding: '28px 36px',
            boxShadow: '0 25px 50px -12px rgba(21, 24, 39, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div 
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(255, 90, 31, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FF5A1F'
                }}
              >
                <Navigation size={18} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#171923', fontWeight: 800, margin: 0 }}>
                Track Your Shipment
              </h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981', fontSize: '0.82rem', fontWeight: 700 }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }}></span>
              <span>GPS Telematics Live Stream</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', flex: 1, minWidth: '260px' }}>
              <Search 
                size={20} 
                style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} 
              />
              <input
                type="text"
                placeholder="Enter Tracking ID (e.g. PH-88942-ZW)"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                style={{
                  width: '100%',
                  padding: '16px 18px 16px 52px',
                  background: '#F5F6F8',
                  border: '1.5px solid #E5E7EB',
                  borderRadius: '12px',
                  color: '#171923',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => (e.target.style.borderColor = '#FF5A1F')}
                onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
              />
            </div>

            <button
              type="submit"
              className="btn-orange"
              style={{ padding: '16px 36px', fontSize: '1rem' }}
            >
              <span>Track Shipment</span>
              <ArrowRight size={18} />
            </button>
          </form>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', fontSize: '0.84rem', color: '#6B7280' }}>
            <p style={{ margin: 0, fontSize: '0.84rem', color: '#6B7280' }}>
              Real-time shipment visibility from pickup to delivery.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>Try sample:</span>
              <button
                type="button"
                onClick={() => { setTrackingId('PH-88942-ZW'); onOpenTracking('PH-88942-ZW'); }}
                style={{ background: 'none', border: 'none', color: '#FF5A1F', fontWeight: 700, cursor: 'pointer', padding: 0, textDecoration: 'underline' }}
              >
                PH-88942-ZW
              </button>
              <span>&bull;</span>
              <button
                type="button"
                onClick={() => { setTrackingId('PH-77219-ZA'); onOpenTracking('PH-77219-ZA'); }}
                style={{ background: 'none', border: 'none', color: '#FF5A1F', fontWeight: 700, cursor: 'pointer', padding: 0, textDecoration: 'underline' }}
              >
                PH-77219-ZA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingTrackingCard;
