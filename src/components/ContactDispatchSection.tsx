'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2
} from 'lucide-react';

export const ContactDispatchSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Cross-Border FTL Linehaul',
    route: 'Durban ➔ Harare Corridor',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  const whatsappInquiryUrl = `https://wa.me/264818518120?text=${encodeURIComponent(
    `Hello Priority Hauliers Dispatch,\n` +
    `Name: ${formData.name || 'Enterprise Client'}\n` +
    `Service: ${formData.service}\n` +
    `Route: ${formData.route}\n` +
    `Inquiry: ${formData.message || 'Need urgent freight capacity and rate card.'}`
  )}`;

  return (
    <section 
      id="contact"
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
            <Phone size={14} />
            <span>24/7 Regional Dispatch Center</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', marginBottom: '16px', color: '#0F172A' }}>
            Connect with Our <span className="gradient-text-blue">Dispatch Operations</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569' }}>
            Have an urgent load requirement, tender request, or cross-border question? Our dispatch controllers are available round the clock.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'start' }}>
          {/* Left Column: Multi-Regional Hub Directory */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {/* Zimbabwe Primary HQ */}
            <div 
              className="glass-panel"
              style={{
                padding: '24px',
                borderLeft: '4px solid #2B5EB8',
                background: '#FFFFFF',
                boxShadow: '0 4px 20px rgba(15, 23, 42, 0.05)',
                border: '1px solid #E2E8F0'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1E40AF', textTransform: 'uppercase' }}>
                  ZIMBABWE HEADQUARTERS & DEPOT
                </span>
                <span style={{ fontSize: '0.75rem', color: '#059669', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 700 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#059669' }}></span>
                  <span>Primary Fleet Yard</span>
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '8px' }}>
                Harare Central Operations Hub
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: '#475569' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MapPin size={16} color="#F58220" />
                  <span>Harare & Bulawayo Industrial Transit Yards, Zimbabwe</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Phone size={16} color="#2B5EB8" />
                  <a href="tel:+263775682351" style={{ color: '#0F172A', fontWeight: 700 }}>+263 775 682 351</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Mail size={16} color="#2B5EB8" />
                  <a href="mailto:hello@priorityhauliers.com" style={{ color: '#2B5EB8' }}>hello@priorityhauliers.com</a>
                </div>
              </div>
            </div>

            {/* Namibia & SADC Corridor Hub */}
            <div 
              className="glass-panel"
              style={{
                padding: '24px',
                borderLeft: '4px solid #F58220',
                background: '#FFFFFF',
                boxShadow: '0 4px 20px rgba(15, 23, 42, 0.05)',
                border: '1px solid #E2E8F0'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#C2410C', textTransform: 'uppercase' }}>
                  NAMIBIA & TRANS-KALAHARI DESK
                </span>
                <span style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 700 }}>Active WhatsApp Support</span>
              </div>

              <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '8px' }}>
                Windhoek & Walvis Bay Corridor Desk
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: '#475569' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MessageCircle size={16} color="#059669" />
                  <a href="https://wa.me/264818518120" target="_blank" rel="noopener noreferrer" style={{ color: '#0F172A', fontWeight: 700 }}>
                    WhatsApp Hotline: +264 81 851 8120
                  </a>
                </div>
              </div>
            </div>

            {/* Australia Regional Desk */}
            <div 
              className="glass-panel"
              style={{
                padding: '24px',
                borderLeft: '4px solid #059669',
                background: '#FFFFFF',
                boxShadow: '0 4px 20px rgba(15, 23, 42, 0.05)',
                border: '1px solid #E2E8F0'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#047857', textTransform: 'uppercase' }}>
                  AUSTRALIA & GLOBAL COORDINATION
                </span>
                <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Corporate Liaison</span>
              </div>

              <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '8px' }}>
                Perth International Operations Desk
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: '#475569' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Phone size={16} color="#059669" />
                  <a href="tel:+61450887815" style={{ color: '#0F172A', fontWeight: 700 }}>+61 450 887 815</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Priority Inquiry & WhatsApp Trigger Form */}
          <div 
            className="glass-panel"
            style={{
              padding: '36px',
              border: '2px solid #BFDBFE',
              borderRadius: '20px',
              background: '#FFFFFF',
              boxShadow: '0 16px 36px rgba(15, 23, 42, 0.08)'
            }}
          >
            {isSent ? (
              <div style={{ textAlign: 'center', padding: '30px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#ECFDF5', border: '2px solid #059669', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '1.4rem', color: '#0F172A' }}>Inquiry Transmitted to Dispatch!</h3>
                <p style={{ color: '#475569', fontSize: '0.92rem' }}>
                  Thank you, <strong>{formData.name}</strong>. An on-duty dispatch controller will connect with you immediately to confirm availability and schedule.
                </p>
                <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                  <a href={whatsappInquiryUrl} target="_blank" rel="noopener noreferrer" className="btn-orange">
                    <MessageCircle size={16} />
                    <span>Open in WhatsApp</span>
                  </a>
                  <button onClick={() => setIsSent(false)} className="btn-secondary">
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Clock size={16} color="#D8680C" />
                  <span style={{ fontSize: '0.78rem', color: '#D8680C', fontWeight: 800, textTransform: 'uppercase' }}>
                    Rapid Dispatch Request Form (Avg Response &lt; 15 Mins)
                  </span>
                </div>
                <h3 style={{ fontSize: '1.5rem', color: '#0F172A', marginBottom: '20px' }}>
                  Book Freight Capacity or Request Consultation
                </h3>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', color: '#475569', fontWeight: 700, marginBottom: '4px' }}>Full Name / Representative</label>
                      <input
                        type="text"
                        placeholder="e.g. Tendai Chikwava"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        style={{
                          width: '100%',
                          padding: '11px',
                          background: '#F8FAFC',
                          border: '1px solid #CBD5E1',
                          borderRadius: '8px',
                          color: '#0F172A',
                          fontSize: '0.88rem'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', color: '#475569', fontWeight: 700, marginBottom: '4px' }}>Work Email</label>
                      <input
                        type="email"
                        placeholder="name@company.co.zw"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        style={{
                          width: '100%',
                          padding: '11px',
                          background: '#F8FAFC',
                          border: '1px solid #CBD5E1',
                          borderRadius: '8px',
                          color: '#0F172A',
                          fontSize: '0.88rem'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', color: '#475569', fontWeight: 700, marginBottom: '4px' }}>Phone / WhatsApp Contact</label>
                      <input
                        type="tel"
                        placeholder="+263 / +27 / +264..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        style={{
                          width: '100%',
                          padding: '11px',
                          background: '#F8FAFC',
                          border: '1px solid #CBD5E1',
                          borderRadius: '8px',
                          color: '#0F172A',
                          fontSize: '0.88rem'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', color: '#475569', fontWeight: 700, marginBottom: '4px' }}>Required Service</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
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
                        <option value="Cross-Border FTL Linehaul">Cross-Border FTL Linehaul</option>
                        <option value="Mining & Abnormal Heavy Haulage">Mining & Abnormal Heavy Haulage</option>
                        <option value="Temperature-Controlled Reefer">Temperature-Controlled Reefer</option>
                        <option value="Dangerous Goods (Hazchem ADR)">Dangerous Goods (Hazchem ADR)</option>
                        <option value="Bonded Warehousing & Port Clearance">Bonded Warehousing & Port Clearance</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: '#475569', fontWeight: 700, marginBottom: '4px' }}>Load Details, Tonnage & Corridor</label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Need 4x 34-Ton Tautliners for Durban to Harare dispatch next Monday..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px',
                        background: '#F8FAFC',
                        border: '1px solid #CBD5E1',
                        borderRadius: '8px',
                        color: '#0F172A',
                        fontSize: '0.88rem',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                    <button type="submit" className="btn-primary" style={{ flex: 1, padding: '13px' }}>
                      <Send size={16} />
                      <span>Submit Priority Dispatch Request</span>
                    </button>

                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-orange"
                      style={{ padding: '13px 18px' }}
                      title="Direct WhatsApp Message"
                    >
                      <MessageCircle size={20} />
                    </a>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDispatchSection;
