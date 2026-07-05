'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiCheckCircle, FiMail, FiPhone, FiClock, FiCheck } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

export default function Contact() {
  const currentYear = new Date().getFullYear();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('Full-Stack');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const categories = ['Creative', 'Full-Stack', 'Consulting', 'Other'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    // Simulate sending form
    setShowModal(true);
    setName('');
    setEmail('');
    setCategory('Full-Stack');
    setMessage('');
  };

  return (
    <section id="contact" className="contact-section bg-plus-grid">
      <div className="section-container" style={{ paddingBottom: '2rem' }}>
        
        {/* Sticky Label */}
        <div className="sticky-label-container">
          <div className="sticky-label" style={{ backgroundColor: 'var(--color-yellow)', color: 'var(--color-text)', transform: 'rotate(1deg)', boxShadow: '4px 4px 0 black' }}>
            SECTION 07 // GET_IN_TOUCH
          </div>
        </div>

        <div className="contact-grid">
          {/* Left Column: Stats & Info */}
          <div className="contact-info">
            <h2 className="contact-subtitle">LET&apos;S COLLABORATE</h2>
            <p className="contact-desc">
              Have an idea, project, or full-time opportunity you&apos;d like to discuss? Drop a line here. I usually respond within 24 hours.
            </p>

            <div className="info-cards-stack">
              <div className="neo-card info-item-card">
                <FiMail className="info-icon" />
                <div>
                  <h4>EMAIL PREFERRED</h4>
                  <p>ravitejakarnati5312@gmail.com</p>
                </div>
              </div>

              <div className="neo-card info-item-card">
                <FiPhone className="info-icon" />
                <div>
                  <h4>DIRECT CALL</h4>
                  <p>+91 8309873951</p>
                </div>
              </div>

              <div className="neo-card info-item-card">
                <FiClock className="info-icon" />
                <div>
                  <h4>IST WORKING HOURS</h4>
                  <p>9:00 AM – 8:00 PM IST (UTC+5:30)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="contact-form-wrapper">
            <div className="neo-card contact-form-card">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">NAME / COMPANY</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="name@company.com"
                  />
                </div>

                <div className="form-group">
                  <label>ENQUIRY CATEGORY</label>
                  <div className="category-tags">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setCategory(cat)}
                        className={`cat-tag-btn ${category === cat ? 'active' : ''}`}
                      >
                        {category === cat && <FiCheck style={{ marginRight: '0.25rem' }} />}
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">TRANSMISSION MESSAGE</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Describe requirements..."
                  />
                </div>

                <button type="submit" className="neo-btn neo-btn-mint form-submit-btn">
                  TRANSMIT ENQUIRY <FiSend style={{ marginLeft: '0.5rem' }} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Area inside Section */}
        <footer className="footer-area">
          <div className="footer-divider" />
          <div className="footer-content">
            <span className="footer-copy">RAVITEJA KARNATI © {currentYear}</span>
            <div className="footer-links">
              <a href="https://github.com/Raviteja-5976" target="_blank" rel="noopener noreferrer">GITHUB</a>
              <a href="https://linkedin.com/in/ravitejakarnati" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
              <a href="https://x.com/Raviteja_5312" target="_blank" rel="noopener noreferrer">TWITTER</a>
            </div>
          </div>
        </footer>

      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="modal-overlay">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -2 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotate: 2 }}
              className="neo-card success-modal-card"
            >
              <div className="success-icon-wrapper">
                <FiCheckCircle />
              </div>
              <h3 className="success-modal-title">TRANSMISSION SHIPPED!</h3>
              <p className="success-modal-desc">
                Your message has been compiled and routed successfully. I will review and reply within 24 hours.
              </p>
              <button onClick={() => setShowModal(false)} className="neo-btn success-dismiss-btn">
                DISMISS
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
