'use client';

import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function About() {
  const currentYear = new Date().getFullYear();

  const journeyItems = [
    {
      year: '2026',
      role: 'Founder & CEO',
      company: 'DevTrackAcademy',
      url: 'https://devtrackacademy.com/',
      description: 'Founded and leading DevTrackAcademy, an edtech platform and community empowering developers with practical AI engineering, full-stack development, and modern tech skills.',
    },
    {
      year: '2025',
      role: 'AI Engineer Intern',
      company: 'Hathority LLC',
      description: 'Built production AI backend services, API-driven workflows, and robust Retrieval-Augmented Generation (RAG) systems in a remote workspace.',
    },
    {
      year: '2025',
      role: 'Organizing Lead',
      company: 'IEEE GNITC',
      description: 'Planned scale technical seminars, managed organizing committees, and led non-technical student volunteer groups.',
    },
    {
      year: '2024',
      role: 'Core Team Member',
      company: 'GDSC GNITC',
      description: 'Coordinated student activities and managed the technical data for the Task Manager Web App within our Google Developer Student Clubs chapter.',
    },
    {
      year: '2021',
      role: 'B.Tech in CSE',
      company: 'GNITC Hyderabad',
      description: 'Began academic studies in Computer Science and Engineering, building foundations in Data Structures, Algorithms, DBMS, and AI.',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        
        {/* Sticky Label */}
        <div className="sticky-label-container">
          <div className="sticky-label" style={{ backgroundColor: 'var(--color-red)', color: '#FFF', transform: 'rotate(-1.5deg)', boxShadow: '4px 4px 0 black' }}>
            SECTION 01 // WHO_IS_RAVITEJA
          </div>
        </div>

        <div className="about-grid">
          {/* Left Column (Polaroid, Hobbies) */}
          <div className="about-left">
            {/* Polaroid Workstation */}
            <div className="neo-card polaroid-card">
              <div className="polaroid-image-frame">
                <Image
                  src="/images/workstation.png"
                  alt="Raviteja workstation illustration"
                  fill
                  sizes="(max-width: 868px) 100vw, 400px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="polaroid-caption">
                # MY_WORKSTATION.JPG // {currentYear}
              </div>
            </div>

            {/* Hobbies Widget */}
            <div className="neo-card hobbies-card">
              <div className="card-header-neo">
                <h3>INTERESTS & HOBBIES</h3>
              </div>
              <ul className="hobbies-list">
                <li>💡 Learning new technologies</li>
                <li>🚀 Building AI side projects</li>
                <li>📰 Reading technical articles</li>
                <li>👨‍🏫 Mentoring and teaching juniors</li>
                <li>🏆 Participating in Hackathons</li>
                <li>🌐 Contributing to Open Source</li>
              </ul>
            </div>
          </div>

          {/* Right Column (Manifesto, Bento cards, Journey) */}
          <div className="about-right">
            <h2 className="manifesto-title">
              RESCUING THE WEB FROM BORING TEMPLATES.
            </h2>
            
            <p className="about-desc">
              I am a Computer Science Engineering student focused on building intelligent software products that help individuals and businesses automate complex tasks using AI. I combine backend systems with engaging interfaces to create practical applications.
            </p>
            <p className="about-desc">
              My current areas of focus include Large Language Models (LLMs), RAG systems, Neural Networks, Backend Engineering, and scalable AI SaaS architectures.
            </p>

            {/* Bento cards */}
            <div className="about-bento">
              <div className="neo-card bento-item bento-mint">
                <h4>MISSION</h4>
                <p>To build intelligent software products that help individuals and businesses automate complex tasks using practical AI and automation workflows.</p>
              </div>
              <div className="neo-card bento-item bento-yellow">
                <h4>VISION</h4>
                <p>To become an AI Engineer capable of building globally impactful products while contributing to the advancement of practical, open-source AI.</p>
              </div>
            </div>

            {/* Journey Timeline */}
            <div className="journey-timeline">
              <h3 className="journey-title">JOURNEY SO FAR</h3>
              
              <div className="timeline-stack">
                {journeyItems.map((item, idx) => (
                  <div key={idx} className="timeline-row">
                    <div className="timeline-badge-cell">
                      <span className="timeline-badge">{item.year}</span>
                    </div>
                    <div className="neo-card timeline-card-content">
                      <div className="timeline-header">
                        <span className="timeline-role">{item.role}</span>
                        <span className="timeline-company">
                          @ {item.url ? (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="company-link"
                            >
                              {item.company} <FaExternalLinkAlt style={{ display: 'inline', fontSize: '0.7em', marginLeft: '3px' }} />
                            </a>
                          ) : (
                            item.company
                          )}
                        </span>
                      </div>
                      <p className="timeline-desc">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
