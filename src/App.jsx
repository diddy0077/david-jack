import { useState } from 'react';
import './App.css';

function App() {
  const [showRegistration, setShowRegistration] = useState(false);

  const toggleRegistration = () => {
    setShowRegistration(!showRegistration);
    if (!showRegistration) {
      setTimeout(() => {
        document.getElementById('regSection')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 120);
    }
  };

  const handleDemoRegister = (e) => {
    e.preventDefault();
    alert('✅ Registration demo. In a live environment this would send your data. Thank you!');
  };

  return (
    <div className="app">
      {/* Top bar */}
      <div className="pitch-quest">
        <i className="fas fa-microphone-alt"></i> PITCH QUEST <span>✦</span> MAFIA EDITION 
        <span className="date"><i className="far fa-calendar-alt"></i> 24 NOV 2025</span>
      </div>

      <div className="container">
        {/* Hero section */}
        <div className="hero">
          <div className="icon-strip">
            <i className="fas fa-home"></i>
            <i className="fas fa-code"></i>
            <i className="fas fa-laptop-house"></i>
            <i className="fas fa-brackets-curly"></i>
          </div>
          <h1>
            <span className="thin">REORIENTATION</span> <span className="red-accent">26</span>
          </h1>
          <div className="hero-tagline">
            <i className="fas fa-arrow-right-arrow-left"></i> From Code to Cashflow.
          </div>
          <div className="hero-meta">
            <span className="meta-chip"><i className="far fa-calendar-alt"></i> 26 February 2026</span>
            <span className="meta-chip"><i className="far fa-clock"></i> 6:00 PM (GMT+1)</span>
            <span className="meta-chip"><i className="fas fa-video"></i> Google Meet</span>
          </div>
        </div>

        {/* Details grid */}
        <div className="details-grid">
          <div className="detail-block"><i className="fas fa-home"></i> real estate assets</div>
          <div className="detail-block"><i className="fas fa-terminal"></i> devs build wealth</div>
          <div className="detail-block"><i className="fas fa-chart-line"></i> #code2cashflow</div>
          <div className="detail-block"><i className="fas fa-people-group"></i> Akuna + Cornelius</div>
        </div>

        {/* Speakers section */}
        <div className="section-head">
          <i className="fas fa-user-tie"></i> <h2>speakers</h2> <span className="line"></span>
        </div>

        <div className="speakers-grid">
          {/* Akuna */}
          <div className="speaker-card">
            <div className="speaker-img akuna"></div>
            <h3>Akuna Tamarakuro</h3>
            <div className="speaker-role">Realtor · Growth Coach · Digital Marketer</div>
            <div className="speaker-bio">
              <i className="fas fa-quote-left" style={{color: '#b22234'}}></i> 
              Nigerian-based realtor, founder of Tamark Digital, host of "Unmask" podcast, World Declaration Day organiser. Focused on wealth creation & investor mindset.
            </div>
          </div>
          {/* Cornelius */}
          <div className="speaker-card">
            <div className="speaker-img cornelius"></div>
            <h3>Nteiro Cornelius</h3>
            <div className="speaker-role">Africa Landlord · Sales Strategist</div>
            <div className="speaker-bio">
              <i className="fas fa-quote-left" style={{color: '#b22234'}}></i> 
              Real estate entrepreneur, mentors sales professionals, builds high‑performance closing teams. Teaches wealth creation through property. <span style={{opacity: 0.6}}>(photo placeholder)</span>
            </div>
          </div>
        </div>

        {/* About card */}
        <div className="about-card">
          <p><span className="emph"><i className="fas fa-bolt" style={{color: '#b22234'}}></i> REORIENTATION 26 – From Code to Cashflow</span></p>
          <p>You've mastered tech. Now it's time to master wealth. This powerful webinar is designed for software developers and tech professionals who want to move beyond earning salaries and start building real, lasting assets through real estate.</p>
          <p><strong style={{color: '#b22234'}}>If you earn in tech, it's time to learn how to own.</strong> Join Akuna Tamarakuro and Nteiro Cornelius on 26th February 2026 · 6PM (GMT+1) on Google Meet for practical insights on turning your tech income into sustainable cashflow and long‑term wealth.</p>
          <p style={{fontWeight: 600, fontSize: '1.3rem', color: '#0b263b'}}>Your code pays you. Assets free you.</p>
        </div>

        {/* Registration toggle */}
        <div className="reg-toggle">
          <button id="toggleRegBtn" onClick={toggleRegistration}>
            <i className="fas fa-pen-alt"></i> registration form <i className="fas fa-arrow-down"></i>
          </button>
        </div>

        {/* Registration panel */}
        <div id="regSection" className={`reg-panel ${showRegistration ? '' : 'hidden'}`}>
          <h2>Register for the webinar</h2>
          <div className="reg-sub">separate registration — receive Google Meet link</div>

          <form onSubmit={handleDemoRegister}>
            <div className="reg-form-grid">
              <div className="form-item">
                <label>Full name</label> 
                <input type="text" placeholder="e.g. Ada Obi" />
              </div>
              <div className="form-item">
                <label>Email</label> 
                <input type="email" placeholder="ada@example.com" />
              </div>
              <div className="form-item">
                <label>Phone number</label> 
                <input type="tel" placeholder="+234 800 000 000" />
              </div>
              <div className="form-item">
                <label>Sex</label>
                <select>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Rather not say</option>
                </select>
              </div>
              <div className="form-item full">
                <label>Address</label> 
                <input type="text" placeholder="Street, city, state" />
              </div>
              <div className="form-item full">
                <label>Occupation</label> 
                <input type="text" placeholder="Software engineer / tech lead / product manager" />
              </div>
            </div>

            <div style={{textAlign: 'center'}}>
              <button type="submit" className="btn-primary">
                <i className="fas fa-check-circle"></i> complete registration
              </button>
            </div>
          </form>
          <p style={{color: '#afc9e3', marginTop: '1.5rem', fontSize: '0.85rem', textAlign: 'center'}}>demo version — no data stored</p>
        </div>

        {/* Footer */}
        <div className="footer">
          <i className="fas fa-crown" style={{color: '#b22234'}}></i> Reorientation 26 · from code to cashflow · assets free you
        </div>
      </div>
    </div>
  );
}

export default App;
