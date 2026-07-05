'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  features: string[];
  stack: string[];
  status: 'In Development' | 'Completed';
  demoLink?: string;
  gitLink?: string;
  image: string;
  tilt: number;
}

const PROJECTS_DATA: Project[] = [
  {
    title: 'AI Project Manager',
    description: 'An AI-powered project management platform that converts software requirements into organized milestones, tasks, and subtasks using LLM agents.',
    features: ['AI Task Generation', 'Milestone Planning', 'Requirement Analysis', 'Project Discussions', 'Intelligent Workflow Assistance'],
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'LLMs'],
    status: 'In Development',
    demoLink: 'https://beta.marmotpm.com/',
    gitLink: 'https://github.com/Raviteja-5976/marmotpm-build',
    image: '/images/project_1.png',
    tilt: -1.5,
  },
  {
    title: 'AI Caller',
    description: 'An AI voice assistant capable of conducting natural phone conversations using Speech-to-Text, LLMs, and Text-to-Speech.',
    features: ['Voice Conversations', 'Appointment Booking', 'Customer Support', 'Lead Qualification', 'Information Collection'],
    stack: ['Python', 'Flask', 'Speech-to-Text', 'LLMs', 'REST APIs'],
    status: 'Completed',
    gitLink: 'https://github.com/Raviteja-5976/AI_Caller',
    image: '/images/project_2.png',
    tilt: 1.2,
  },
  {
    title: 'Hyrzo - AI Interview Platform',
    description: 'An AI interview platform capable of conducting live voice technical interviews, coding assessments, and candidate scoring.',
    features: ['Live Voice Interviews', 'Coding Assessments', 'Interview Reports', 'Candidate Scoring Algorithm'],
    stack: ['Next.js', 'Node.js', 'LLMs'],
    status: 'In Development',
    gitLink: 'https://github.com/Raviteja-5976/hyrzo-AI-Interviewer',
    image: '/images/project_3.png',
    tilt: -1.2,
  },
  {
    title: 'Learning Helper Assistant',
    description: 'An AI learning platform that helps students organize and understand complex studying materials using scalable APIs.',
    features: ['AI Assistance', 'API-driven Backend', 'Docker Deployment'],
    stack: ['Python', 'Flask', 'Docker'],
    status: 'Completed',
    gitLink: 'https://github.com/Raviteja-5976/Learning-Helper-Assistant',
    image: '/images/project_4.png',
    tilt: 1.5,
  },
  {
    title: 'Neural Networks from Scratch',
    description: 'Built a complete multilayer neural network from scratch without using machine learning frameworks to master the deep learning math.',
    features: ['Forward Propagation', 'Backpropagation', 'Gradient Descent', 'Matplotlib Visualization'],
    stack: ['Python', 'NumPy', 'Matplotlib'],
    status: 'Completed',
    gitLink: 'https://github.com/Raviteja-5976/Neural-Networks-From-Scratch',
    image: '/images/project_5.png',
    tilt: -1,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section bg-plus-grid">
      <div className="section-container">
        
        {/* Sticky Label */}
        <div className="sticky-label-container">
          <div className="sticky-label" style={{ backgroundColor: 'var(--color-mint)', color: 'var(--color-text)', transform: 'rotate(-1.5deg)', boxShadow: '4px 4px 0 black' }}>
            SECTION 03 // FEATURED_PROJECTS
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {PROJECTS_DATA.map((project, idx) => (
            <motion.div
              key={idx}
              className="neo-card project-card"
              style={{ transform: `rotate(${project.tilt}deg)` }}
              whileHover={{
                y: -10,
                x: -6,
                rotate: project.tilt * 0.5,
                boxShadow: '16px 16px 0 var(--color-border)',
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              {/* Project Image Frame */}
              <div className="project-image-frame">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  style={{ objectFit: 'cover' }}
                />
                
                {/* Status Sticker */}
                <span className={`project-status-sticker ${project.status === 'Completed' ? 'status-completed' : 'status-dev'}`}>
                  {project.status.toUpperCase()}
                </span>
              </div>

              {/* Card Body */}
              <div className="project-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                
                {/* Features List */}
                <div className="project-features-wrapper">
                  <span className="project-features-title">KEY FEATURES:</span>
                  <ul className="project-features-list">
                    {project.features.map((feat, fidx) => (
                      <li key={fidx}>{feat}</li>
                    ))}
                  </ul>
                </div>

                {/* Stack Tags */}
                <div className="project-stack-tags">
                  {project.stack.map((tech, tidx) => (
                    <span key={tidx} className="project-tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="project-actions">
                  {project.gitLink && (
                    <a
                      href={project.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neo-btn project-action-btn"
                    >
                      <FaGithub style={{ marginRight: '0.4rem' }} /> Code
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neo-btn neo-btn-mint project-action-btn"
                    >
                      <FaExternalLinkAlt style={{ marginRight: '0.4rem', fontSize: '0.85rem' }} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
