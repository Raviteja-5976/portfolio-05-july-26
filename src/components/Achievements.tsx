'use client';

export default function Achievements() {
  return (
    <section id="stats" className="achievements-section bg-plus-grid">
      <div className="section-container">
        
        {/* Sticky Label */}
        <div className="sticky-label-container">
          <div className="sticky-label" style={{ backgroundColor: 'var(--color-red)', color: '#FFF', transform: 'rotate(-1deg)', boxShadow: '4px 4px 0 black' }}>
            SECTION 06 // STATS_ACCOLADES
          </div>
        </div>

        {/* Bento Grid */}
        <div className="stats-grid">
          
          {/* Card 1: Spans 2 rows, Background Mint */}
          <div className="neo-card stat-card card-span-2-rows stat-mint">
            <div className="stat-card-header">
              <span className="stat-counter">5+</span>
            </div>
            <div className="stat-card-body">
              <h4 className="stat-title">AI PRODUCTS SHIPPED</h4>
              <p className="stat-desc">
                Designed and built five intelligent software platforms during engineering studies, integrating LLMs, multi-agent frameworks, voice processing, and scalable backends.
              </p>
            </div>
          </div>

          {/* Card 2: Spans 1 row, Background Yellow */}
          <div className="neo-card stat-card stat-yellow">
            <div className="stat-card-header">
              <span className="stat-counter">1ST</span>
            </div>
            <div className="stat-card-body">
              <h4 className="stat-title">INNOVATIVE IDEA PRIZE</h4>
              <p className="stat-desc">
                Awarded first place at the national level Innovative Idea Presentation contest for original conceptual architectures.
              </p>
            </div>
          </div>

          {/* Card 3: Spans 1 row, Background Red, White Text */}
          <div className="neo-card stat-card stat-red">
            <div className="stat-card-header">
              <span className="stat-counter">2ND</span>
            </div>
            <div className="stat-card-body">
              <h4 className="stat-title">GDSC SOLUTION CHALLENGE</h4>
              <p className="stat-desc">
                Secured 2nd Position in the regional level GDSC Solution Challenge and Build Together Hackathon.
              </p>
            </div>
          </div>

          {/* Card 4: Spans 2 columns, Background Header */}
          <div className="neo-card stat-card card-span-2-cols stat-header">
            <div className="stat-card-header">
              <span className="stat-counter">100%</span>
            </div>
            <div className="stat-card-body-row">
              <div>
                <h4 className="stat-title">MATHEMATICAL DL IMPLEMENTATION</h4>
                <p className="stat-desc">
                  Programmed a full multilayer neural network from scratch utilizing Python and NumPy. Manually built forward propagation, backpropagation, and gradient descent to master underlying deep learning mathematical systems.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
