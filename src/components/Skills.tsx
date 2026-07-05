'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = [
  'ALL',
  'LANGUAGES',
  'FRONTEND',
  'BACKEND & DB',
  'AI / ML',
  'DEVOPS & TOOLS',
  'SOFT SKILLS',
];

interface Skill {
  name: string;
  category: string;
  hoverColorClass: string;
}

const SKILLS_DATA: Skill[] = [
  // Programming Languages
  { name: 'Python', category: 'LANGUAGES', hoverColorClass: 'hover-yellow' },
  { name: 'JavaScript', category: 'LANGUAGES', hoverColorClass: 'hover-yellow' },
  { name: 'SQL', category: 'LANGUAGES', hoverColorClass: 'hover-yellow' },
  { name: 'HTML', category: 'LANGUAGES', hoverColorClass: 'hover-yellow' },
  { name: 'CSS', category: 'LANGUAGES', hoverColorClass: 'hover-yellow' },
  // Frontend
  { name: 'React', category: 'FRONTEND', hoverColorClass: 'hover-mint' },
  { name: 'Next.js', category: 'FRONTEND', hoverColorClass: 'hover-mint' },
  { name: 'HTML5', category: 'FRONTEND', hoverColorClass: 'hover-mint' },
  { name: 'CSS3', category: 'FRONTEND', hoverColorClass: 'hover-mint' },
  // Backend & DB
  { name: 'Flask', category: 'BACKEND & DB', hoverColorClass: 'hover-red' },
  { name: 'Django', category: 'BACKEND & DB', hoverColorClass: 'hover-red' },
  { name: 'Node.js', category: 'BACKEND & DB', hoverColorClass: 'hover-red' },
  { name: 'REST APIs', category: 'BACKEND & DB', hoverColorClass: 'hover-red' },
  { name: 'PostgreSQL', category: 'BACKEND & DB', hoverColorClass: 'hover-red' },
  { name: 'MySQL', category: 'BACKEND & DB', hoverColorClass: 'hover-red' },
  { name: 'SQLite', category: 'BACKEND & DB', hoverColorClass: 'hover-red' },
  // AI/ML
  { name: 'Large Language Models', category: 'AI / ML', hoverColorClass: 'hover-yellow' },
  { name: 'RAG Systems', category: 'AI / ML', hoverColorClass: 'hover-yellow' },
  { name: 'Prompt Engineering', category: 'AI / ML', hoverColorClass: 'hover-yellow' },
  { name: 'Neural Networks', category: 'AI / ML', hoverColorClass: 'hover-yellow' },
  { name: 'Generative AI', category: 'AI / ML', hoverColorClass: 'hover-yellow' },
  { name: 'NumPy', category: 'AI / ML', hoverColorClass: 'hover-yellow' },
  // DevOps & Tools
  { name: 'Basic Cloud Deployment', category: 'DEVOPS & TOOLS', hoverColorClass: 'hover-mint' },
  { name: 'Linux Servers', category: 'DEVOPS & TOOLS', hoverColorClass: 'hover-mint' },
  { name: 'Docker (Basics)', category: 'DEVOPS & TOOLS', hoverColorClass: 'hover-mint' },
  { name: 'NGINX (Basics)', category: 'DEVOPS & TOOLS', hoverColorClass: 'hover-mint' },
  { name: 'CI/CD (Basics)', category: 'DEVOPS & TOOLS', hoverColorClass: 'hover-mint' },
  { name: 'Git', category: 'DEVOPS & TOOLS', hoverColorClass: 'hover-mint' },
  { name: 'VS Code', category: 'DEVOPS & TOOLS', hoverColorClass: 'hover-mint' },
  { name: 'Postman', category: 'DEVOPS & TOOLS', hoverColorClass: 'hover-mint' },
  // Soft Skills
  { name: 'Leadership', category: 'SOFT SKILLS', hoverColorClass: 'hover-header' },
  { name: 'Communication', category: 'SOFT SKILLS', hoverColorClass: 'hover-header' },
  { name: 'Problem Solving', category: 'SOFT SKILLS', hoverColorClass: 'hover-header' },
  { name: 'Teamwork', category: 'SOFT SKILLS', hoverColorClass: 'hover-header' },
  { name: 'Public Speaking', category: 'SOFT SKILLS', hoverColorClass: 'hover-header' },
  { name: 'Project Management', category: 'SOFT SKILLS', hoverColorClass: 'hover-header' },
  { name: 'Time Management', category: 'SOFT SKILLS', hoverColorClass: 'hover-header' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredSkills = activeCategory === 'ALL'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        
        {/* Sticky Label */}
        <div className="sticky-label-container">
          <div className="sticky-label" style={{ backgroundColor: 'var(--color-yellow)', color: 'var(--color-text)', transform: 'rotate(1.5deg)', boxShadow: '4px 4px 0 black' }}>
            SECTION 02 // TECHNICAL_SKILLS
          </div>
        </div>

        {/* Categories Tab Filter */}
        <div className="skills-tabs-container">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`skills-tab-btn ${isActive ? 'active' : ''}`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="skills-grid">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className={`skill-chip ${skill.hoverColorClass}`}
              >
                {skill.name}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
