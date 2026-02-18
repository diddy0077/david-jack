import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { 
  Mic, Calendar, Clock, Video, Code, Home, TrendingUp, Users, 
  User, Quote, Bolt, PenLine, ArrowDown, ArrowUp, CheckCircle,
  Crown, ChevronRight, Sparkles, Rocket, Target, DollarSign, Building2
} from 'lucide-react';
import './App.css';
import photo1 from './assets/david2.jpeg'
import photo2 from './assets/david1.jpeg'

function App() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Cursor Motion Values (Fast updates without re-renders)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const yOrb = useTransform(scrollYProgress, [0, 1], [0, 300]);

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date('2026-02-26T18:00:00+01:00');
    
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;
      
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      }
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Optimized Mouse Tracking
  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button') || e.target.closest('a') || e.target.tagName === 'INPUT') {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const toggleRegistration = () => {
    setShowRegistration(!showRegistration);
  };

  const handleDemoRegister = (e) => {
    e.preventDefault();
    alert('✅ Registration successful! Check your email for the Google Meet link.');
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const floatAnimation = {
    y: [0, -15, 0],
    transition: { repeat: Infinity, duration: 4, ease: "easeInOut" }
  };

  return (
    <div className="app" ref={containerRef}>
      {/* Custom Cursor */}
      <motion.div 
        className="custom-cursor-dot"
        style={{ x: cursorX, y: cursorY }}
      />
      <motion.div 
        className={`custom-cursor-ring ${isHovered ? 'hovered' : ''}`}
        style={{ x: cursorXSpring, y: cursorYSpring }}
      />

      {/* Scroll progress bar */}
      <motion.div 
        className="progress-bar"
        style={{ scaleX }}
      />

      {/* Animated background */}
      <div className="bg-pattern">
        <motion.div 
          className="gradient-orb orb-1"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          style={{ y: yOrb }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="gradient-orb orb-2"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="grid-pattern"></div>
        <div className="noise-overlay"></div>
      </div>

      {/* Top bar - Floating Pill */}
      <motion.div 
        className="pitch-quest"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.span className="pitch-item" animate={floatAnimation}>
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
            <motion.div 
              className="icon-wrapper"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Home size={24} />
            </motion.div>
            <motion.div 
              className="icon-wrapper"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <Code size={24} />
            </motion.div>
            <motion.div 
              className="icon-wrapper"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <TrendingUp size={24} />
            </motion.div>
          </motion.div>

          <motion.h1 variants={fadeInUp}>
            <span className="thin">REORIENTATION</span> <span className="red-accent">26</span>
          </motion.h1>

          <motion.div className="hero-tagline" variants={fadeInUp}>
            <motion.span
              animate={{ x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ChevronRight size={28} />
            </motion.span>
            From Code to Cashflow.
          </motion.div>

          {/* Countdown Timer */}
          <motion.div 
            className="countdown-container"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="countdown-item" variants={fadeInUp}>
              <div className="countdown-value">{countdown.days}</div>
              <div className="countdown-label">Days</div>
            </motion.div>
            <div className="countdown-separator">:</div>
            <motion.div className="countdown-item" variants={fadeInUp}>
              <div className="countdown-value">{countdown.hours}</div>
              <div className="countdown-label">Hours</div>
            </motion.div>
            <div className="countdown-separator">:</div>
            <motion.div className="countdown-item" variants={fadeInUp}>
              <div className="countdown-value">{countdown.minutes}</div>
              <div className="countdown-label">Minutes</div>
            </motion.div>
            <div className="countdown-separator">:</div>
            <motion.div className="countdown-item" variants={fadeInUp}>
              <div className="countdown-value">{countdown.seconds}</div>
              <div className="countdown-label">Seconds</div>
            </motion.div>
          </motion.div>

          <motion.div className="hero-meta" variants={staggerContainer}>
            <motion.div className="meta-chip" variants={fadeInUp} whileHover={{ scale: 1.05 }}>
              <Calendar size={16} /> 26 February 2026
            </motion.div>
            <motion.div className="meta-chip" variants={fadeInUp} whileHover={{ scale: 1.05 }}>
              <Clock size={16} /> 6:00 PM (GMT+1)
            </motion.div>
            <motion.div className="meta-chip" variants={fadeInUp} whileHover={{ scale: 1.05 }}>
              <Video size={16} /> Google Meet
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            className="cta-button"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleRegistration}
          >
            <Rocket size={20} />
            Reserve Your Spot
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="stats-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { icon: DollarSign, value: "$2.5M+", label: "Property Portfolio" },
            { icon: Building2, value: "500+", label: "Properties Sold" },
            { icon: Users, value: "10,000+", label: "Lives Impacted" },
            { icon: Target, value: "98%", label: "Success Rate" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-card"
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="stat-icon">
                <stat.icon size={24} />
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
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
            >
              <img src={photo1} alt="Akuna Tamarakuro" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
            <h3>Akuna Tamarakuro</h3>
            <div className="speaker-role">Realtor · Growth Coach · Digital Marketer</div>
            <div className="speaker-bio">
              <Quote size={18} className="quote-icon" />
              Akuna Tamarakuro is a Nigerian-based realtor and thought leader, known for his work in real estate investment and business growth strategies. He is the founder of Tamark Digital, hosts the "Unmask" podcast, and organizes "World Declaration Day". He focuses on wealth creation, frequently advising on transitioning from income earners to investors.
            </div>
            <motion.div 
              className="speaker-cta"
              whileHover={{ scale: 1.02 }}
            >
              <a href="#register">View Profile →</a>
            </motion.div>
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
            >
              <img src={photo2} alt="Nteiro Cornelius" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
            <h3>Nteiro Cornelius</h3>
            <div className="speaker-role">Africa Landlord · Sales Strategist</div>
            <div className="speaker-bio">
              <Quote size={18} className="quote-icon" />
              Real estate entrepreneur, mentors sales professionals, builds high‑performance closing teams. Teaches wealth creation through property.
            </div>
            <motion.div 
              className="speaker-cta"
              whileHover={{ scale: 1.02 }}
            >
              <a href="#register">View Profile →</a>
            </motion.div>
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
          <div className="about-badge">
            <Sparkles size={14} /> EXCLUSIVE WEBINAR
          </div>
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
          
          <div className="about-features">
            <div className="feature-item">
              <CheckCircle size={18} /> Live Q&A Session
            </div>
            <div className="feature-item">
              <CheckCircle size={18} /> Exclusive Resources
            </div>
            <div className="feature-item">
              <CheckCircle size={18} /> Networking Access
            </div>
          </div>
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
                    <input type="text" placeholder="e.g. Ada Obi" required />
                  </div>
                  <div className="form-item">
                    <label>Email</label> 
                    <input type="email" placeholder="ada@example.com" required />
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
