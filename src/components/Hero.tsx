'use client';

import Image from 'next/image';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaDev } from 'react-icons/fa6';
import { FiArrowDownRight } from 'react-icons/fi';

export default function Hero() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section bg-plus-grid">
      <div className="hero-container">
        

        <div className="hero-grid">
          {/* Left Column */}
          <div className="hero-left">
            {/* Availability Badge */}
            <div className="availability-wrapper">
              <div className="availability-badge">
                <span className="pulse-dot"></span>
                OPEN TO OPPORTUNITIES
              </div>
            </div>

            {/* Headline */}
            <h1 className="hero-title">
              BUILDING <br />
              <span className="hero-accent-box">
                AI SYSTEMS
              </span> <br />
              FOR THE REAL WORLD.
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              Hi, I&apos;m <strong>Raviteja Karnati</strong>. An AI Engineer, Full Stack Developer, Entrepreneur, and Freelancer passionate about turning ideas into scalable, intelligent software using Large Language Models, RAG, and modern web architectures.
            </p>

            {/* CTAs */}
            <div className="hero-ctas">
              <button onClick={handleScrollToContact} className="neo-btn">
                Hire Me <FiArrowDownRight style={{ marginLeft: '0.5rem', strokeWidth: 3 }} />
              </button>
              <a href="/resume.pdf" download="Raviteja_Karnati_Resume.pdf" className="neo-btn neo-btn-mint">
                Resume.PDF
              </a>
            </div>

            {/* Social Rows */}
            <div className="hero-socials">
              <a href="https://github.com/Raviteja-5976" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/ravitejakarnati" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://x.com/Raviteja_5312" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Twitter">
                <FaXTwitter />
              </a>
              <a href="https://dev.to/raviteja_karnati_c303eee4" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Dev.to">
                <FaDev />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="hero-right">
            <div className="neo-card hero-avatar-card">
              <div className="avatar-frame">
                <Image
                  src="/images/avatar.png"
                  alt="Raviteja Karnati avatar"
                  fill
                  priority
                  sizes="(max-width: 868px) 100vw, 400px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="avatar-footer">
                <h3 className="avatar-name">RAVITEJA KARNATI</h3>
                <p className="avatar-title">ENTREPRENEUR & FREELANCER</p>
                <div className="avatar-divider"></div>
                <div className="avatar-coords">
                  <span>LOC: HYD, IND</span>
                  <span>17.3850° N / 78.4867° E</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
