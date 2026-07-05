'use client';

import { useState, useEffect } from 'react';
import { FiHome, FiUser, FiCpu, FiLayers, FiBriefcase, FiAward, FiMail } from 'react-icons/fi';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: FiHome },
  { id: 'about', label: 'About', icon: FiUser },
  { id: 'skills', label: 'Skills', icon: FiCpu },
  { id: 'projects', label: 'Projects', icon: FiLayers },
  { id: 'experience', label: 'Experience', icon: FiBriefcase },
  { id: 'stats', label: 'Stats', icon: FiAward },
  { id: 'contact', label: 'Contact', icon: FiMail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Find which section is currently active
      const scrollPos = window.scrollY + window.innerHeight / 3;
      
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <li key={item.id} className="navbar-item">
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`navbar-link ${isActive ? 'active' : ''}`}
                aria-label={item.label}
              >
                <Icon className="navbar-icon" />
                <span className="navbar-label">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
