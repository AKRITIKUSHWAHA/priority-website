'use client';

import React, { useState } from 'react';
import BrandLogo from './BrandLogo';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  ShieldCheck, 
  ArrowUp, 
  Globe2, 
  Send, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

interface FooterProps {
  onOpenTracking: (id?: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTracking, onOpenQuote }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        background: '#151827',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        paddingTop: '80px',
        paddingBottom: '36px',
        color: '#9CA3AF',
        fontSize: '0.92rem',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}
        >
          {/* Col 1: Brand & Newsletter */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', gridColumn: 'span 1' }}>
            <BrandLogo size="md" theme="dark" />
            <p style={{ fontSize: '0.9rem', color: '#9CA3AF', lineHeight: 1.6, margin: 0 }}>
              Priority Hauliers Pty Ltd is the premier cross-border freight forwarding and heavy haulage operator servicing Zimbabwe and the SADC region.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', fontSize: '0.82rem', fontWeight: 700 }}>
              <ShieldCheck size={18} />
              <span>ISO 9001 & SADC Bonded Freight Operator</span>
            </div>
          </div>

          {/* Col 2: Company Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 800, marginBottom: '20px', borderLeft: '3px solid #FF5A1F', paddingLeft: '10px' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0 }}>
              <li>
                <a href="#about" style={{ color: '#D1D5DB', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FF5A1F')} onMouseLeave={(e) => (e.currentTarget.style.color = '#D1D5DB')}>
                  <ChevronRight size={14} color="#FF5A1F" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#services" style={{ color: '#D1D5DB', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FF5A1F')} onMouseLeave={(e) => (e.currentTarget.style.color = '#D1D5DB')}>
                  <ChevronRight size={14} color="#FF5A1F" />
                  <span>Our Services</span>
                </a>
              </li>
              <li>
                <a href="#industries" style={{ color: '#D1D5DB', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FF5A1F')} onMouseLeave={(e) => (e.currentTarget.style.color = '#D1D5DB')}>
                  <ChevronRight size={14} color="#FF5A1F" />
                  <span>Industries</span>
                </a>
              </li>
              <li>
                <button onClick={() => onOpenTracking()} style={{ background: 'none', border: 'none', color: '#D1D5DB', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.92rem' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FF5A1F')} onMouseLeave={(e) => (e.currentTarget.style.color = '#D1D5DB')}>
                  <ChevronRight size={14} color="#FF5A1F" />
                  <span>Tracking</span>
                </button>
              </li>
              <li>
                <a href="#contact" style={{ color: '#D1D5DB', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FF5A1F')} onMouseLeave={(e) => (e.currentTarget.style.color = '#D1D5DB')}>
                  <ChevronRight size={14} color="#FF5A1F" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 800, marginBottom: '20px', borderLeft: '3px solid #FF5A1F', paddingLeft: '10px' }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0 }}>
              <li>
                <a href="#services" style={{ color: '#D1D5DB', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FF5A1F')} onMouseLeave={(e) => (e.currentTarget.style.color = '#D1D5DB')}>
                  <ChevronRight size={14} color="#FF5A1F" />
                  <span>Road Transportation</span>
                </a>
              </li>
              <li>
                <a href="#services" style={{ color: '#D1D5DB', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FF5A1F')} onMouseLeave={(e) => (e.currentTarget.style.color = '#D1D5DB')}>
                  <ChevronRight size={14} color="#FF5A1F" />
                  <span>Freight Forwarding</span>
                </a>
              </li>
              <li>
                <a href="#services" style={{ color: '#D1D5DB', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FF5A1F')} onMouseLeave={(e) => (e.currentTarget.style.color = '#D1D5DB')}>
                  <ChevronRight size={14} color="#FF5A1F" />
                  <span>Warehousing & Storage</span>
                </a>
              </li>
              <li>
                <a href="#services" style={{ color: '#D1D5DB', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FF5A1F')} onMouseLeave={(e) => (e.currentTarget.style.color = '#D1D5DB')}>
                  <ChevronRight size={14} color="#FF5A1F" />
                  <span>Air Freight</span>
                </a>
              </li>
              <li>
                <a href="#services" style={{ color: '#D1D5DB', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FF5A1F')} onMouseLeave={(e) => (e.currentTarget.style.color = '#D1D5DB')}>
                  <ChevronRight size={14} color="#FF5A1F" />
                  <span>Ocean Freight</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Newsletter */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 800, marginBottom: '20px', borderLeft: '3px solid #FF5A1F', paddingLeft: '10px' }}>
              Logistics Insights
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#9CA3AF', marginBottom: '14px', lineHeight: 1.5 }}>
              Get logistics insights, corridor status and rate cards delivered to your inbox.
            </p>

            {subscribed ? (
              <div style={{ padding: '10px 14px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10B981', borderRadius: '10px', color: '#10B981', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <input
                  type="email"
                  placeholder="Enter work email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    background: '#1B1D2B',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '10px',
                    color: '#FFFFFF',
                    fontSize: '0.88rem',
                    outline: 'none'
                  }}
                />
                <button type="submit" className="btn-orange" style={{ padding: '10px 16px', fontSize: '0.88rem' }}>
                  <span>Subscribe</span>
                  <Send size={14} />
                </button>
              </form>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '16px', fontSize: '0.84rem' }}>
              <a href="tel:+263775682351" style={{ color: '#FFFFFF', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={14} color="#FF5A1F" />
                <span>+263 775 682 351</span>
              </a>
              <a href="mailto:hello@priorityhauliers.com" style={{ color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Mail size={14} color="#FF5A1F" />
                <span>hello@priorityhauliers.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div 
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '26px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.84rem'
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} <strong>Priority Hauliers Pty Ltd</strong>. All rights reserved. SADC Regional Transport Operator.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a href="#home" style={{ color: '#9CA3AF' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}>
              Privacy Policy
            </a>
            <a href="#home" style={{ color: '#9CA3AF' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}>
              Terms & Conditions
            </a>
            <button
              onClick={scrollToTop}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#FFFFFF',
                borderRadius: '8px',
                padding: '6px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer'
              }}
            >
              <span>Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
