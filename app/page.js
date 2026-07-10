'use client';

import { useEffect, useRef, useState } from 'react';

const services = [
  ['PPC Management', 'Campaign architecture, search-term harvesting, placement control, bid optimization and profitable scaling across Sponsored Products, Brands and Display.'],
  ['Advanced Brand Management', 'Full account ownership—from strategic planning and catalog health to daily execution, profitability tracking and stakeholder reporting.'],
  ['SEO & Listing Optimization', 'Keyword research, indexing checks, title and bullet optimization, backend terms and rank-recovery plans built around conversion.'],
  ['Analytics & Reporting', 'Clear weekly and monthly reporting using Brand Analytics, Search Query Performance, SellerBoard and custom performance dashboards.'],
  ['New Product Launches', 'Launch strategy covering keyword momentum, campaign sequencing, review readiness, organic rank milestones and controlled spend.'],
  ['US & UK Marketplaces', 'Localized account strategy for Amazon.com and Amazon.co.uk with marketplace-specific keywords, competition and unit economics.']
];

const offers = [
  ['01', 'Account Audit', 'A structured review of listings, advertising history, keyword ranks, competition and profitability to identify fast wins and larger growth opportunities.'],
  ['02', 'Pre-Launch Phase', 'A tailored roadmap based on the product, category and commercial targets—whether the priority is optimization, relaunching or aggressive market entry.'],
  ['03', 'Launch Phase', 'Fast execution across campaign structure, keyword testing and placement strategy to build sales velocity without losing control of efficiency.'],
  ['04', 'Post-Launch & Reporting', 'Ongoing optimization supported by transparent reports covering spend, sales, ACoS, TACoS, conversion and the actions planned next.']
];

const cases = [
  { brand: 'LUXETAIL · AMAZON US', title: 'Pet Supplies — Ranking Recovery & TACoS Control', metrics: [['Revenue growth', '+70%'], ['TACoS achieved', '≤15%'], ['Organic sales ratio', '>40%'], ['Wasted spend reduced', '−20%']], tag: 'Ranking Recovery' },
  { brand: 'MAGNILAY · AMAZON US', title: 'Yoga Mat Bag — ACoS Turnaround & ROAS Growth', metrics: [['ACoS reduction', '54% → 33%'], ['ROAS improvement', '+40%'], ['Organic rank lift', '+35%']], tag: 'Account Turnaround' },
  { brand: 'KITCHENTHINKER · AMAZON US', title: 'Dough Whisk — Launch to Sustained Profitability', metrics: [['Profits generated', '$40K+'], ['ACoS sustained', '28%–32%'], ['TACoS sustained', '10%–15%'], ['Main keyword rank', 'Top 5']], tag: 'Launched from Scratch' },
  { brand: "LINNIE'S STICKERS · AMAZON US", title: 'Vinyl Stickers — PPC Revamp & Consistent Scaling', metrics: [['ACoS sustained', '35%–40%'], ['TACoS sustained', '15%–20%'], ['Revenue growth MoM', '8%–10%']], tag: 'PPC Strategy Revamp' }
];

const tools = ['Helium 10', 'DataDive', 'SellerBoard', 'Jungle Scout', 'Keepa', 'Amazon Ads Console', 'Brand Analytics', 'Search Query Performance', 'Amazon Attribution', 'DSP', 'Bulk Sheets', 'Excel & Google Sheets'];

function Icon({ type }) {
  const paths = {
    chart: <><path d="M4 19V9"/><path d="M10 19V5"/><path d="M16 19v-7"/><path d="M22 19H2"/></>,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></>,
    search: <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></>,
    pulse: <><path d="M3 12h4l2-6 4 12 2-6h6"/></>,
    rocket: <><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.87 12.87 0 0 1 22 2c0 2.72-.78 7.5-6.05 11a22.35 22.35 0 0 1-3.95 2Z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></>,
    globe: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/></>
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>;
}

function Reveal({ children, className = '', delay = 0 }) {
  return <div className={`reveal ${className}`} style={{ '--delay': `${delay}ms` }}>{children}</div>;
}

function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let frame;
    let mouse = { x: -9999, y: -9999 };
    let particles = [];
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      const count = window.innerWidth < 800 ? 55 : 130;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        ox: Math.random() * rect.width,
        oy: Math.random() * rect.height,
        r: Math.random() * 1.5 + .4,
        a: Math.random() * .55 + .15,
        s: Math.random() * .006 + .002,
        t: Math.random() * Math.PI * 2
      }));
    };
    const move = e => {
      const r = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', move);
    resize();
    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      particles.forEach(p => {
        p.t += p.s;
        let x = p.ox + Math.sin(p.t * 11) * 18;
        let y = p.oy + Math.cos(p.t * 8) * 14;
        const dx = x - mouse.x, dy = y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 130 && dist > 0) {
          const f = (130 - dist) / 130 * 45;
          x += dx / dist * f;
          y += dy / dist * f;
        }
        ctx.globalAlpha = p.a;
        ctx.fillStyle = '#d9b36c';
        ctx.beginPath();
        ctx.arc(x, y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      frame = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', move);
    };
  }, []);
  return <canvas ref={canvasRef} className="particle-canvas" />;
}

export default function Home() {
  const [typed, setTyped] = useState('');
  const [menu, setMenu] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const heroRef = useRef(null);
  const words = ['AMAZON PPC EXPERT', 'AMAZON ACCOUNT MANAGER', 'AMAZON GROWTH STRATEGIST'];

  useEffect(() => {
    let word = 0, index = 0, deleting = false, timer;
    const tick = () => {
      const current = words[word];
      if (!deleting) {
        index++;
        setTyped(current.slice(0, index));
        if (index === current.length) {
          deleting = true;
          timer = setTimeout(tick, 1800);
          return;
        }
      } else {
        index--;
        setTyped(current.slice(0, index));
        if (index === 0) {
          deleting = false;
          word = (word + 1) % words.length;
        }
      }
      timer = setTimeout(tick, deleting ? 45 : 80);
    };
    timer = setTimeout(tick, 850);
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onMove = (event) => {
      const rect = hero.getBoundingClientRect();
      const x = Math.max(0, Math.min(rect.width, event.clientX - rect.left));
      const y = Math.max(0, Math.min(rect.height, event.clientY - rect.top));
      const nx = x / rect.width - 0.5;
      const ny = y / rect.height - 0.5;
      hero.style.setProperty('--mouse-x', `${x}px`);
      hero.style.setProperty('--mouse-y', `${y}px`);
      hero.style.setProperty('--parallax-x', `${nx * 16}px`);
      hero.style.setProperty('--parallax-y', `${ny * 10}px`);
    };
    hero.addEventListener('mousemove', onMove);
    return () => hero.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('is-visible')), { threshold: .12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      <div className="noise" />
      <nav className={`nav ${navScrolled ? 'scrolled' : ''}`}>
        <a href="#top" className="brand"><span>HA</span> PORTFOLIO</a>
        <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Toggle menu"><span/><span/></button>
        <div className={`nav-links ${menu ? 'open' : ''}`}>
          {['Services', 'Tools', 'Offer', 'Cases', 'Contact'].map(x => <a key={x} href={`#${x.toLowerCase()}`} onClick={() => setMenu(false)}>{x === 'Cases' ? 'Case Study' : x}</a>)}
        </div>
        <a className="nav-cta" href="#contact">Hire Me <span>↗</span></a>
      </nav>

      <section className="hero" id="top" ref={heroRef}>
        <div className="cursor-aura" aria-hidden="true" />
        <div className="hero-grid" />
        <div className="hero-copy">
          <div className="hero-sequence seq-1 eyebrow"><span/> Amazon Brand & PPC Manager</div>
          <h1 className="hero-sequence seq-2"><span className="typed">{typed}<i>_</i></span></h1>
          <p className="hero-sequence seq-3 hero-kicker">MAXIMIZING AMAZON GROWTH</p>
          <p className="hero-sequence seq-4 hero-kicker secondary">SCALING SALES WITH DATA-DRIVEN STRATEGIES</p>
          <h2 className="hero-sequence seq-5">Amazon PPC & Account Management Specialist</h2>
          <p className="hero-sequence seq-6 hero-description">I help brands grow on Amazon through full account management and advanced PPC strategies. From campaign scaling to listing optimization, I focus on maximizing profitability.</p>
          <div className="hero-sequence seq-7 hero-actions">
            <a className="button gold" href="#cases">View Case Studies <span>→</span></a>
            <a className="button ghost" href="#contact">Hire Me</a>
          </div>
          <div className="hero-sequence seq-8 tool-marquee">
            <div className="tool-track">{[...tools.slice(0,5), ...tools.slice(0,5)].map((x, i) => <span key={i}><b>{x.slice(0,1)}</b>{x}</span>)}</div>
          </div>
        </div>
        <div className="hero-visual hero-sequence seq-photo">
          <ParticleCanvas />
          <div className="portrait-orbit orbit-one" />
          <div className="portrait-orbit orbit-two" />
          <div className="portrait-glow" />
          <img src="/photo.png" alt="Hassan Ali" className="portrait" />
          <div className="portrait-caption"><span>HASSAN</span><strong>ALI</strong></div>
          <div className="availability"><i/> Available for select projects</div>
        </div>
        <a href="#about" className="scroll-cue"><span>Scroll</span><i>↓</i></a>
      </section>

      <section className="section about" id="about">
        <div className="section-head split"><Reveal><p className="section-label">About Me</p><h2>Strategy backed by<br/><em>ownership.</em></h2></Reveal><Reveal delay={100}><p className="lead">I am an experienced Amazon Brand & PPC Manager with over <strong>5+ years of expertise</strong>, focused on increasing revenue, improving efficiency and turning advertising data into decisive action.</p></Reveal></div>
        <div className="about-layout">
          <Reveal className="about-card portrait-card"><div className="mini-label">Short Video Intro</div><img src="/photo.png" alt="Hassan Ali introduction"/><button className="play" aria-label="Play introduction"><span>▶</span></button><p>Click to watch introduction</p></Reveal>
          <Reveal className="about-copy" delay={120}>
            <p>As a proactive PPC specialist, I continuously look for ways to strengthen sales, recover wasted spend and keep brands ahead of competitors.</p>
            <p>I have managed multiple Amazon brands across the US and UK, combining hands-on execution with structured reporting and transparent communication.</p>
            <div className="stats">
              {[['5+', 'Years of experience'], ['13+', 'Upwork contracts'], ['4', 'Brands managed'], ['5.0', 'Average rating']].map(([n,l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section dark-section" id="services">
        <Reveal className="section-head center"><p className="section-label">Services</p><h2>Everything your Amazon<br/><em>brand needs to scale.</em></h2><p className="lead narrow">From strategy to execution and ongoing improvement, I manage the work that directly influences profitable growth.</p></Reveal>
        <div className="service-grid">{services.map((s, i) => <Reveal key={s[0]} className="service-card" delay={i * 65}><div className="service-icon"><Icon type={['chart','layers','search','pulse','rocket','globe'][i]}/></div><span className="card-number">0{i+1}</span><h3>{s[0]}</h3><p>{s[1]}</p><div className="card-arrow">↗</div></Reveal>)}</div>
      </section>

      <section className="automation-band" id="tools">
        <div className="automation-copy"><Reveal><p className="section-label">Daily Tool Stack</p><h2>Amazon growth,<br/><em>powered by data.</em></h2><p>I work inside the platforms that reveal what customers search, where ads leak spend and how organic visibility is changing.</p></Reveal></div>
        <Reveal className="tool-cloud" delay={100}>{tools.map((t, i) => <span key={t} style={{ '--i': i }}>{t}</span>)}</Reveal>
      </section>

      <section className="section offer-section" id="offer">
        <Reveal className="section-head center"><p className="section-label">What I Have To Offer</p><h2>A clear path from audit<br/><em>to profitable scale.</em></h2></Reveal>
        <div className="offer-list">{offers.map((o, i) => <Reveal key={o[0]} className="offer-row" delay={i*70}><span className="offer-number">{o[0]}</span><h3>{o[1]}</h3><p>{o[2]}</p><span className="offer-line"/></Reveal>)}</div>
      </section>

      <section className="section case-section" id="cases">
        <Reveal className="section-head split"><div><p className="section-label">Selected Work</p><h2>Proof in<br/><em>the numbers.</em></h2></div><p className="lead">Real outcomes from brands where strategy, execution and disciplined optimization worked together.</p></Reveal>
        <div className="case-grid">{cases.map((c, i) => <Reveal key={c.title} className="case-card" delay={i*70}><div className="case-top"><span>{c.brand}</span><b>0{i+1}</b></div><h3>{c.title}</h3><div className="metrics">{c.metrics.map(m => <div key={m[0]}><span>{m[0]}</span><strong>{m[1]}</strong></div>)}</div><div className="case-footer"><span>{c.tag}</span><i>View outcome ↗</i></div></Reveal>)}</div>
      </section>

      <section className="section testimonials">
        <Reveal className="section-head center"><p className="section-label">Client Feedback</p><h2>Trusted for clarity,<br/><em>reliability and results.</em></h2></Reveal>
        <div className="testimonial-grid">
          {[['“Very pleased with Hassan’s work. He delivered the research project on time and to the expected quality.”','Competing Product Market Research'],['“Hassan was responsive, knowledgeable, and delivered exactly what was needed for our Amazon PPC account.”','Amazon PPC Specialist'],['“Good working with Hassan. Clear communication and a collaborative approach throughout the project.”','Amazon Break-Even Model']].map((t,i)=><Reveal key={t[1]} className="testimonial" delay={i*80}><div className="stars">★★★★★</div><blockquote>{t[0]}</blockquote><p>{t[1]}</p></Reveal>)}
        </div>
        <Reveal className="upwork-strip"><div><strong>13+</strong><span>Completed jobs</span></div><div><strong>5.0</strong><span>Average rating</span></div><div><strong>5+</strong><span>Years experience</span></div><a href="https://www.upwork.com/freelancers/~016a939f6fc8b33d2c" target="_blank" rel="noreferrer">View Upwork Profile ↗</a></Reveal>
      </section>

      <section className="contact" id="contact">
        <div className="contact-rings"/><div className="contact-grid">
          <Reveal><p className="section-label light">Let's Connect</p><h2>REACH<br/><em>OUT.</em></h2><p>Whether you need a specialist to take over PPC or a long-term partner to help manage your Amazon brand, let’s discuss the opportunity.</p><div className="contact-buttons"><a href="mailto:chhassanali568@gmail.com">Email me <span>↗</span></a><a href="https://www.linkedin.com/in/hassan-ali-amazon-brand-manager" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><a href="https://www.upwork.com/freelancers/~016a939f6fc8b33d2c" target="_blank" rel="noreferrer">Upwork <span>↗</span></a></div></Reveal>
          <Reveal className="contact-portrait" delay={120}><div className="contact-glow"/><img src="/photo.png" alt="Hassan Ali"/></Reveal>
        </div>
      </section>
      <footer><span>© 2026 Hassan Ali</span><span>Amazon Brand & PPC Manager</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
