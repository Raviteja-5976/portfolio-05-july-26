'use client';

export default function Education() {
  const coursework = [
    'Data Structures',
    'Algorithms',
    'Database Management Systems',
    'Operating Systems',
    'Computer Networks',
    'Artificial Intelligence',
  ];

  const activities = [
    'IEEE Organizing Lead',
    'GDSC Core Team (Management)',
    'Hackathons Participant',
    'Technical Workshops Organiser',
  ];

  return (
    <section id="education" className="education-section">
      <div className="section-container">
        
        {/* Sticky Label */}
        <div className="sticky-label-container">
          <div className="sticky-label" style={{ backgroundColor: 'var(--color-yellow)', color: 'var(--color-text)', transform: 'rotate(-1.5deg)', boxShadow: '4px 4px 0 black' }}>
            SECTION 05 // ACADEMIC_STUDIES
          </div>
        </div>

        {/* Notebook Card Container */}
        <div className="notebook-container">
          <div className="notebook-card">
            
            {/* Binder Rings */}
            <div className="binder-rings">
              <div className="binder-ring" />
              <div className="binder-ring" />
              <div className="binder-ring" />
              <div className="binder-ring" />
            </div>

            {/* Red Margin Line */}
            <div className="notebook-margin-line" />

            {/* Notebook Content */}
            <div className="notebook-content">
              <div className="notebook-header">
                <span className="notebook-date">2021 – 2025 // STUDY LOG</span>
                <h3 className="notebook-college">GURU NANAK INSTITUTIONS TECHNICAL CAMPUS</h3>
                <h4 className="notebook-degree">BACHELOR OF TECHNOLOGY</h4>
                <p className="notebook-major">Major: Computer Science Engineering</p>
                <div className="notebook-cgpa-wrapper">
                  <span className="notebook-cgpa-label">Cumulative GPA:</span>
                  <span className="notebook-cgpa-val">7.54 / 10.00</span>
                </div>
              </div>

              <div className="notebook-section-divider" />

              <div className="notebook-body-grid">
                <div className="notebook-body-col">
                  <h4 className="notebook-subheading">RELEVANT COURSEWORK:</h4>
                  <ul className="notebook-list">
                    {coursework.map((course, idx) => (
                      <li key={idx}>{course}</li>
                    ))}
                  </ul>
                </div>

                <div className="notebook-body-col">
                  <h4 className="notebook-subheading">EXTRACURRICULAR ACTIVITIES:</h4>
                  <ul className="notebook-list">
                    {activities.map((act, idx) => (
                      <li key={idx}>{act}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
