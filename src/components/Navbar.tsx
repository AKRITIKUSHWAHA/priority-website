'use client';

import React, { useState, useEffect } from 'react';
import BrandLogo from './BrandLogo';
import { 
  Phone, 
  Menu, 
  X, 
  ArrowRight,
  Search,
  MessageCircle
} from 'lucide-react';

interface NavbarProps {
  onOpenTracking: (trackingId?: string) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTracking, onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'industries', 'fleet', 'why-us', 'blog', 'contact'];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Industries', href: '#industries', id: 'industries' },
    { name: 'Tracking', href: '#tracking', id: 'tracking', isModal: true },
    { name: 'Fleet', href: '#fleet', id: 'fleet' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Blog', href: '#blog', id: 'blog' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.35s ease'
      }}
    >
      {/* Top Notification / Hotline Banner */}
      <div 
        style={{
          background: isScrolled ? '#151827' : 'rgba(21, 24, 39, 0.85)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '6px 0',
          fontSize: '0.82rem',
          color: '#E5E7EB',
          transition: 'all 0.3s ease'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
            <a 
              href="tel:+263775682351" 
              style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#F3F4F6', transition: 'color 0.2s', fontWeight: 600 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FF5A1F')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#F3F4F6')}
            >
              <Phone size={13} color="#FF5A1F" />
              <span>ZW Dispatch: <strong>+263 775 682 351</strong></span>
            </a>

            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>

            <a 
              href="https://wa.me/264818518120?text=Hello%20Priority%20Hauliers,%20I%20need%20freight%20inquiry" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#34D399', transition: 'color 0.2s', fontWeight: 600 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#10B981')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#34D399')}
            >
              <MessageCircle size={13} color="#34D399" />
              <span>WhatsApp: <strong>+264 81 851 8120</strong></span>
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981', fontSize: '0.78rem', fontWeight: 600 }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block', boxShadow: '0 0 8px #10B981' }}></span>
              <span>24/7 Operations Control Active</span>
            </div>

            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>

            <span style={{ color: '#FF7744', fontWeight: 700, fontSize: '0.78rem' }}>
              Zimbabwe & SADC Regional Corridors
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        style={{
          background: isScrolled ? '#FFFFFF' : 'rgba(21, 24, 39, 0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: isScrolled ? '1px solid #E5E7EB' : '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.08)' : 'none',
          padding: isScrolled ? '12px 0' : '18px 0',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center' }}>
            <BrandLogo size="md" theme={isScrolled ? 'light' : 'dark'} />
          </a>

          {/* Center Links (Desktop) */}
          <div 
            style={{ 
              display: 'none', 
              alignItems: 'center', 
              gap: '24px',
              fontWeight: 600,
              fontSize: '0.92rem'
            }}
            className="d-xl-flex"
          >
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              const textColor = isScrolled 
                ? (isActive ? '#FF5A1F' : '#171923') 
                : (isActive ? '#FF7744' : '#FFFFFF');

              if (item.isModal) {
                return (
                  <button
                    key={item.id}
                    onClick={() => onOpenTracking()}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: textColor,
                      fontWeight: 600,
                      fontSize: '0.92rem',
                      cursor: 'pointer',
                      padding: '6px 0',
                      position: 'relative',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FF5A1F')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
                  >
                    {item.name}
                  </button>
                );
              }

              return (
                <a
                  key={item.id}
                  href={item.href}
                  style={{
                    color: textColor,
                    padding: '6px 0',
                    position: 'relative',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FF5A1F')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
                >
                  {item.name}
                  {isActive && (
                    <span 
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: '#FF5A1F',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Quick Tracking CTA */}
            <button
              onClick={() => onOpenTracking()}
              className="btn-secondary d-md-inline-flex"
              style={{
                padding: '10px 18px',
                fontSize: '0.88rem',
                display: 'none',
                background: isScrolled ? '#F5F6F8' : 'rgba(255, 255, 255, 0.1)',
                color: isScrolled ? '#171923' : '#FFFFFF',
                borderColor: isScrolled ? '#E5E7EB' : 'rgba(255, 255, 255, 0.25)'
              }}
            >
              <Search size={15} color="#FF5A1F" />
              <span>Track ID</span>
            </button>

            {/* Get a Quote Orange Button */}
            <button
              onClick={onOpenQuote}
              className="btn-orange"
              style={{ padding: '11px 22px', fontSize: '0.92rem' }}
            >
              <span>Get a Quote</span>
              <ArrowRight size={16} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: isScrolled ? '#F5F6F8' : 'rgba(255, 255, 255, 0.12)',
                border: isScrolled ? '1px solid #E5E7EB' : '1px solid rgba(255, 255, 255, 0.25)',
                color: isScrolled ? '#171923' : '#FFFFFF',
                borderRadius: '10px',
                padding: '9px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              className="d-xl-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide Drawer */}
        {mobileMenuOpen && (
          <div 
            style={{
              background: '#151827',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '24px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              marginTop: '12px',
              color: '#FFFFFF'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {navLinks.map((item) => {
                if (item.isModal) {
                  return (
                    <button
                      key={item.id}
                      onClick={() => { setMobileMenuOpen(false); onOpenTracking(); }}
                      style={{
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        padding: '10px 0',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#FFFFFF',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        cursor: 'pointer'
                      }}
                    >
                      {item.name}
                    </button>
                  );
                }
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      padding: '10px 0',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                      color: activeSection === item.id ? '#FF5A1F' : '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '1.05rem'
                    }}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '10px' }}>
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }}
                className="btn-orange" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Get a Free Quote</span>
                <ArrowRight size={16} />
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenTracking(); }}
                className="btn-white-outline" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Search size={16} />
                <span>Track Your Shipment</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Helper CSS styles */}
      <style jsx global>{`
        @media (min-width: 1200px) {
          .d-xl-flex { display: flex !important; }
          .d-xl-none { display: none !important; }
        }
        @media (max-width: 1199px) {
          .d-xl-flex { display: none !important; }
          .d-xl-none { display: flex !important; }
        }
        @media (min-width: 768px) {
          .d-md-inline-flex { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
