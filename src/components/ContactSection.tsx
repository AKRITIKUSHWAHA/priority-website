'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2,
  Globe2,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: 'Road Transportation (FTL Linehaul)',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const whatsappMessage = encodeURIComponent(
    `*PRIORITY HAULIERS — NEW INQUIRY*\n` +
    `• Name: ${formData.fullName || 'Direct Client'}\n` +
    `• Company: ${formData.companyName || 'N/A'}\n` +
    `• Phone: ${formData.phone || 'N/A'}\n` +
    `• Email: ${formData.email || 'N/A'}\n` +
    `• Service: ${formData.service}\n` +
    `• Details: ${formData.message || 'Freight capacity and rate card inquiry'}`
  );

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
          <div className="badge-orange" style={{ marginBottom: '14px' }}>
            GET IN TOUCH
          </div>
          <h2 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)', color: '#171923', marginBottom: '16px' }}>
            Let&apos;s Discuss Your <span className="text-orange">Logistics Needs</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#6B7280', margin: 0 }}>
            Our regional dispatch teams in Zimbabwe, Namibia, and Australia are standing by to engineer your freight route.
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '40px',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Contact Information Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Main Office Card */}
            <div 
              style={{
                background: '#F5F6F8',
                border: '1px solid #E5E7EB',
                borderRadius: '18px',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              <h3 style={{ fontSize: '1.3rem', color: '#171923', fontWeight: 800, margin: 0 }}>
                Regional Dispatch Headquarters
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.94rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#FFFFFF', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF5A1F', flexShrink: 0 }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6B7280', textTransform: 'uppercase', display: 'block' }}>HEAD OFFICE</span>
                    <strong style={{ color: '#171923' }}>Harare & Bulawayo Transit Yards, Zimbabwe</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#FFFFFF', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF5A1F', flexShrink: 0 }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6B7280', textTransform: 'uppercase', display: 'block' }}>PHONE DIRECT</span>
                    <a href="tel:+263775682351" style={{ color: '#171923', fontWeight: 700 }}>+263 775 682 351</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#FFFFFF', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981', flexShrink: 0 }}>
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6B7280', textTransform: 'uppercase', display: 'block' }}>WHATSAPP DISPATCH</span>
                    <a href="https://wa.me/264818518120" target="_blank" rel="noopener noreferrer" style={{ color: '#059669', fontWeight: 700 }}>+264 81 851 8120</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#FFFFFF', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2B5EB8', flexShrink: 0 }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6B7280', textTransform: 'uppercase', display: 'block' }}>EMAIL INQUIRIES</span>
                    <a href="mailto:hello@priorityhauliers.com" style={{ color: '#2B5EB8', fontWeight: 700 }}>hello@priorityhauliers.com</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#FFFFFF', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D97706', flexShrink: 0 }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6B7280', textTransform: 'uppercase', display: 'block' }}>BUSINESS & DISPATCH HOURS</span>
                    <strong style={{ color: '#171923' }}>24 Hours / 7 Days a Week (Continuous Shift Control)</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Desk Support Box */}
            <div 
              style={{
                background: '#151827',
                color: '#FFFFFF',
                borderRadius: '18px',
                padding: '24px 30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px'
              }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FF7744', textTransform: 'uppercase' }}>
                  AUSTRALIA & GLOBAL LIAISON
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginTop: '2px' }}>
                  Perth Corporate Desk: +61 450 887 815
                </div>
              </div>
              <Globe2 size={28} color="#FF5A1F" />
            </div>
          </div>

          {/* Right Column: Modern Contact Form */}
          <div 
            style={{
              background: '#FFFFFF',
              border: '1.5px solid #E5E7EB',
              borderRadius: '22px',
              padding: '36px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
            }}
          >
            {isSuccess ? (
              <div style={{ textAlign: 'center', padding: '30px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#ECFDF5', border: '2px solid #10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981' }}>
                  <CheckCircle2 size={34} />
                </div>
                <h3 style={{ fontSize: '1.45rem', color: '#171923', fontWeight: 800 }}>Inquiry Successfully Sent!</h3>
                <p style={{ color: '#6B7280', fontSize: '0.95rem', margin: 0 }}>
                  Thank you, <strong>{formData.fullName}</strong>. A dispatch controller has been notified and will reply with capacity confirmation and formal rate schedule shortly.
                </p>
                <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                  <a
                    href={`https://wa.me/264818518120?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-orange"
                  >
                    <MessageCircle size={16} />
                    <span>Open in WhatsApp</span>
                  </a>
                  <button 
                    onClick={() => { setIsSuccess(false); setFormData({ fullName: '', companyName: '', email: '', phone: '', service: 'Road Transportation (FTL Linehaul)', message: '' }); }}
                    className="btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h3 style={{ fontSize: '1.45rem', color: '#171923', fontWeight: 800, marginBottom: '6px' }}>
                  Send a Direct Message
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#6B7280', marginBottom: '22px' }}>
                  Fill out the form below for immediate route assessment and freight pricing.
                </p>

                {errorMessage && (
                  <div style={{ padding: '10px 14px', background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '10px', color: '#B91C1C', fontSize: '0.88rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', color: '#171923', fontWeight: 800, marginBottom: '4px' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                        style={{
                          width: '100%',
                          padding: '12px',
                          background: '#F5F6F8',
                          border: '1.5px solid #E5E7EB',
                          borderRadius: '10px',
                          color: '#171923',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', color: '#171923', fontWeight: 800, marginBottom: '4px' }}>
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. ZIM Mining Corp"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px',
                          background: '#F5F6F8',
                          border: '1.5px solid #E5E7EB',
                          borderRadius: '10px',
                          color: '#171923',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', color: '#171923', fontWeight: 800, marginBottom: '4px' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        style={{
                          width: '100%',
                          padding: '12px',
                          background: '#F5F6F8',
                          border: '1.5px solid #E5E7EB',
                          borderRadius: '10px',
                          color: '#171923',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', color: '#171923', fontWeight: 800, marginBottom: '4px' }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        placeholder="+263 775 682 351"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        style={{
                          width: '100%',
                          padding: '12px',
                          background: '#F5F6F8',
                          border: '1.5px solid #E5E7EB',
                          borderRadius: '10px',
                          color: '#171923',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: '#171923', fontWeight: 800, marginBottom: '4px' }}>
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px',
                        background: '#F5F6F8',
                        border: '1.5px solid #E5E7EB',
                        borderRadius: '10px',
                        color: '#171923',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Road Transportation (FTL Linehaul)">01 — Road Transportation (FTL Linehaul)</option>
                      <option value="Mining & Abnormal Heavy Haulage">02 — Mining & Abnormal Heavy Haulage (Up to 120T)</option>
                      <option value="Temperature-Controlled Reefer">03 — Temperature-Controlled Reefer (-25°C to +15°C)</option>
                      <option value="Dangerous Goods (Hazchem ADR)">04 — Dangerous Goods (Hazchem ADR Certified)</option>
                      <option value="Freight Forwarding & Ocean Transit">05 — Freight Forwarding & Ocean Transit (Beira/Durban)</option>
                      <option value="Warehousing & Port Staging">06 — Warehousing, Storage & Customs Clearance</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: '#171923', fontWeight: 800, marginBottom: '4px' }}>
                      Message & Route Specifics
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Origin, destination, cargo weight, target dispatch date..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px',
                        background: '#F5F6F8',
                        border: '1.5px solid #E5E7EB',
                        borderRadius: '10px',
                        color: '#171923',
                        fontSize: '0.9rem',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-orange"
                      style={{ flex: 1, padding: '14px', fontSize: '0.96rem' }}
                    >
                      {isSubmitting ? (
                        <span>Processing Dispatch...</span>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>

                    <a
                      href={`https://wa.me/264818518120?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ padding: '14px 18px', color: '#059669', borderColor: '#A7F3D0', background: '#ECFDF5' }}
                      title="Send via WhatsApp"
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

export default ContactSection;
