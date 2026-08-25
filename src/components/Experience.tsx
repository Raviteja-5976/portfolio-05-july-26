'use client';

import { FiBriefcase, FiAward, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface WorkExp {
  role: string;
  company: string;
  url?: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  stack: string[];
}

interface Cert {
  title: string;
  issuer: string;
  date: string;
  tilt: number;
}

const EXPERIENCE_DATA: WorkExp[] = [
  {
    role: 'Founder & CEO',
    company: 'DevTrackAcademy',
    url: 'https://devtrackacademy.com/',
    duration: '2026 – Present',
    location: 'Remote / India',
    description: 'Founding and leading DevTrackAcademy to empower developers with real-world AI engineering, full-stack development, and hands-on technical skills.',
    achievements: [
      'Founded and launched DevTrackAcademy (devtrackacademy.com) learning platform',
      'Designed practical curriculum for AI engineering, LLM application development, and modern web architectures',
      'Building and mentoring a thriving community of developers and tech builders',
    ],
    stack: ['AI Engineering', 'Full-Stack', 'Next.js', 'LLMs', 'Leadership', 'EdTech'],
  },
  {
    role: 'AI Engineer',
    company: 'Hathority LLC',
    duration: 'Feb 2025 – Aug 2025',
    location: 'Remote',
    description: 'Developed production-grade AI-powered backend systems and robust RAG pipelines, deploying AI capabilities to solve business workflow bottlenecks.',
    achievements: [
      'Built production AI backend services using Flask and LLMs',
      'Designed API-based AI workflows for automated document parsing',
      'Implemented vector search and custom RAG retrieval strategies',
      'Collaborated on git workflows and continuous integration environments',
    ],
    stack: ['Python', 'Flask', 'REST APIs', 'Git', 'LLMs', 'RAG'],
  },
  {
    role: 'Organizing Lead',
    company: 'IEEE GNITC',
    duration: '2025',
    location: 'Hyderabad, India',
    description: 'Spearheaded technical events, seminars, and workshops, managing budgets, schedule coordination, and large volunteer teams.',
    achievements: [
      'Coordinated technical seminars with industry-expert speakers',
      'Managed and directed a team of 20+ volunteers for venue logistics',
    ],
    stack: ['Leadership', 'Event Planning', 'Public Speaking'],
  },
  {
    role: 'Core Team Member (Management)',
    company: 'GDSC GNITC',
    duration: '2024',
    location: 'Hyderabad, India',
    description: 'Directed administrative operations, coordinating developer workshops and managing user data for the club’s Task Manager web app.',
    achievements: [
      'Maintained internal task tracking databases and participant logs',
      'Coordinated with technical teams to plan developer hands-on hack sessions',
    ],
    stack: ['Operations', 'Data Management', 'Community Outreach'],
  },
];

const CERTIFICATIONS_DATA: Cert[] = [
  {
    title: 'GitHub Foundations',
    issuer: 'GitHub',
    date: '2025',
    tilt: -2,
  },
  {
    title: 'Professional Integration Developer',
    issuer: 'Boomi',
    date: '2024',
    tilt: 1.5,
  },
  {
    title: 'Foundations of Cyber Security',
    issuer: 'Google',
    date: '2024',
    tilt: -1.5,
  },
  {
    title: 'Networks and Network Security',
    issuer: 'Google',
    date: '2024',
    tilt: 2,
  },
  {
    title: 'AI Mastery Resource Person',
    issuer: 'GNITC',
    date: '2025',
    tilt: -1.2,
  },
  {
    title: 'Build Together (2nd Position)',
    issuer: 'GDSC',
    date: '2024',
    tilt: 1.8,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        
        {/* Sticky Label */}
        <div className="sticky-label-container">
          <div className="sticky-label" style={{ backgroundColor: 'var(--color-red)', color: '#FFF', transform: 'rotate(1deg)', boxShadow: '4px 4px 0 black' }}>
            SECTION 04 // WORK_EXPERIENCE
          </div>
        </div>

        <div className="experience-grid">
          
          {/* Left Column (Experience) */}
          <div className="experience-left">
            <h3 className="experience-subtitle">ROADMAP</h3>
            <div className="experience-list">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div key={idx} className="experience-item-wrapper">
                  <div className="experience-connector-dot" />
                  
                  <div className="neo-card experience-card">
                    <div className="experience-card-header">
                      <div>
                        <h4 className="exp-role">{exp.role}</h4>
                        <span className="exp-company">
                          @ {exp.url ? (
                            <a
                              href={exp.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="company-link"
                            >
                              {exp.company} <FiExternalLink style={{ display: 'inline', fontSize: '0.85em', marginLeft: '3px' }} />
                            </a>
                          ) : (
                            exp.company
                          )}
                        </span>
                      </div>
                      <span className="exp-duration-badge">{exp.duration}</span>
                    </div>

                    <p className="exp-desc">{exp.description}</p>

                    <div className="exp-achievements">
                      <h5>KEY ACHIEVEMENTS:</h5>
                      <ul>
                        {exp.achievements.map((ach, aidx) => (
                          <li key={aidx}>{ach}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="exp-stack">
                      {exp.stack.map((tech, tidx) => (
                        <span key={tidx} className="exp-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Certifications) */}
          <div className="experience-right">
            <h3 className="experience-subtitle">CERTIFICATIONS</h3>
            <div className="certifications-stack">
              {CERTIFICATIONS_DATA.map((cert, idx) => (
                <motion.div
                  key={idx}
                  className="cert-stamp-card"
                  style={{ transform: `rotate(${cert.tilt}deg)` }}
                  whileHover={{
                    scale: 1.05,
                    rotate: cert.tilt * 0.3,
                    boxShadow: '12px 12px 0 var(--color-border)',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <div className="stamp-official-label">POSTAGE OFFICIAL</div>
                  <div className="stamp-body">
                    <div className="stamp-icon-wrapper">
                      <FiAward className="stamp-icon" />
                    </div>
                    <div className="stamp-info">
                      <h4 className="stamp-title">{cert.title}</h4>
                      <p className="stamp-issuer">ISSUER: {cert.issuer.toUpperCase()}</p>
                      <p className="stamp-date">DATE: {cert.date}</p>
                    </div>
                  </div>
                  <div className="stamp-serrated-edge" />
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
