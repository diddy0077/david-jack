import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mic, Calendar, Clock, Video, Code, Home, TrendingUp, Users, 
  User, Quote, Bolt, PenLine, ArrowDown, ArrowUp, CheckCircle,
  Crown, ChevronRight, Sparkles
} from 'lucide-react';
import './App.css';

function App() {
  const [showRegistration, setShowRegistration] = useState(false);

  const toggleRegistration = () => {
    setShowRegistration(!showRegistration);
  };

  const handleDemoRegister = (e) => {
    e.preventDefault();
    alert('✅ Registration demo. In a live environment this would send your data. Thank you!');
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="app">
      {/* Animated background */}
      <div className="bg-pattern">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Top bar */}
      <motion.div 
        className="pitch-quest"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.span whileHover={{ scale: 1.05 }} className="pitch-item">
          <Mic size={16} /> PITCH QUEST <span>✦</span> MAFIA EDITION 
        </motion.span>
        <motion.span 
          className="date-badge"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Calendar size={14} /> 24 NOV 2025
        </motion.span>
      </motion.div>

      <div className="container">
        {/* Hero Section */}
        <motion.div 
          className="hero"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="icon-strip" variants={fadeInUp}>
            <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }} className="icon-wrapper">
              <Home size={24} />
            </motion.div>
            <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }} className="icon-wrapper">
              <Code size={24} />
            </motion.div>
            <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }} className="icon-wrapper">
              <TrendingUp size={24} />
            </motion.div>
          </motion.div>

          <motion.h1 variants={fadeInUp}>
            <span className="thin">REORIENTATION</span> <span className="red-accent">26</span>
          </motion.h1>

          <motion.div className="hero-tagline" variants={fadeInUp}>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ChevronRight size={28} />
            </motion.span>
            From Code to Cashflow.
          </motion.div>

          <motion.div className="hero-meta" variants={staggerContainer}>
            <motion.div className="meta-chip" variants={scaleIn} whileHover={{ scale: 1.05 }}>
              <Calendar size={16} /> 26 February 2026
            </motion.div>
            <motion.div className="meta-chip" variants={scaleIn} whileHover={{ scale: 1.05 }}>
              <Clock size={16} /> 6:00 PM (GMT+1)
            </motion.div>
            <motion.div className="meta-chip" variants={scaleIn} whileHover={{ scale: 1.05 }}>
              <Video size={16} /> Google Meet
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Details Grid */}
        <motion.div 
          className="details-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { icon: Home, text: "real estate assets" },
            { icon: Code, text: "devs build wealth" },
            { icon: TrendingUp, text: "#code2cashflow" },
            { icon: Users, text: "Akuna + Cornelius" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="detail-block"
              variants={fadeInUp}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="detail-icon">
                <item.icon size={22} />
              </div>
              <span>{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Speakers Section */}
        <motion.div 
          className="section-head"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <User size={32} className="section-icon" /> 
          <h2>speakers</h2> 
          <div className="line"></div>
        </motion.div>

        <motion.div 
          className="speakers-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Speaker 1 */}
          <motion.div 
            className="speaker-card"
            variants={fadeInUp}
            whileHover={{ y: -10, boxShadow: "0 25px 50px -20px rgba(178, 34, 52, 0.35)" }}
          >
            <motion.div 
              className="speaker-img akuna"
              whileHover={{ scale: 1.05 }}
            ></motion.div>
            <h3>Akuna Tamarakuro</h3>
            <div className="speaker-role">Realtor · Growth Coach · Digital Marketer</div>
            <div className="speaker-bio">
              <Quote size={18} className="quote-icon" />
              Nigerian-based realtor, founder of Tamark Digital, host of "Unmask" podcast, World Declaration Day organiser. Focused on wealth creation & investor mindset.
            </div>
          </motion.div>

          {/* Speaker 2 */}
          <motion.div 
            className="speaker-card"
            variants={fadeInUp}
            whileHover={{ y: -10, boxShadow: "0 25px 50px -20px rgba(178, 34, 52, 0.35)" }}
          >
            <motion.div 
              className="speaker-img cornelius"
              whileHover={{ scale: 1.05 }}
            ></motion.div>
            <h3>Nteiro Cornelius</h3>
            <div className="speaker-role">Africa Landlord · Sales Strategist</div>
            <div className="speaker-bio">
              <Quote size={18} className="quote-icon" />
              Real estate entrepreneur, mentors sales professionals, builds high‑performance closing teams. Teaches wealth creation through property.
            </div>
          </motion.div>
        </motion.div>

        {/* About Card */}
        <motion.div 
          className="about-card"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="about-glow"></div>
          <p>
            <motion.span 
              className="emph"
              whileHover={{ scale: 1.02 }}
            >
              <Bolt size={16} /> REORIENTATION 26 – From Code to Cashflow
            </motion.span>
          </p>
          <p>You've mastered tech. Now it's time to master wealth. This powerful webinar is designed for software developers and tech professionals who want to move beyond earning salaries and start building real, lasting assets through real estate.</p>
          <p><strong className="highlight">If you earn in tech, it's time to learn how to own.</strong> Join Akuna Tamarakuro and Nteiro Cornelius on 26th February 2026 · 6PM (GMT+1) on Google Meet for practical insights on turning your tech income into sustainable cashflow and long‑term wealth.</p>
          <p className="tagline">Your code pays you. Assets free you.</p>
        </motion.div>

        {/* Registration Toggle */}
        <motion.div 
          className="reg-toggle"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.button 
            onClick={toggleRegistration}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={showRegistration ? 'active' : ''}
          >
            <PenLine size={18} /> 
            {showRegistration ? 'Hide Registration' : 'Registration Form'} 
            {showRegistration ? <ArrowUp size={18} /> : <ArrowDown size={18} />}
          </motion.button>
        </motion.div>

        {/* Registration Panel */}
        <AnimatePresence>
          {showRegistration && (
            <motion.div 
              className="reg-panel"
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{ opacity: 1, height: 'auto', scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="reg-glow"></div>
              <h2>Register for the webinar</h2>
              <div className="reg-sub">
                <Sparkles size={18} /> separate registration — receive Google Meet link
              </div>

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
                  <motion.button 
                    type="submit" 
                    className="btn-primary"
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <CheckCircle size={20} /> complete registration
                  </motion.button>
                </div>
              </form>
              <p className="demo-note"><Sparkles size={14} /> demo version — no data stored</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <motion.div 
          className="footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Crown size={18} className="crown-icon" /> 
          Reorientation 26 · from code to cashflow · assets free you
        </motion.div>
      </div>
    </div>
  );
}

export default App;
