'use client';

import { useEffect, useRef, useState } from 'react';
import ParticleCanvas from './ParticleCanvas';

const roles = ['BRAND MANAGER', 'PPC STRATEGIST', 'GROWTH PARTNER'];
const proofPoints = [
  ['$1M+', 'Managed Ad Sales'],
  ['5+', 'Years Experience'],
  ['US · UK', 'Marketplace Experience'],
  ['5.0', 'Upwork Rating'],
];

export default function Hero() {
  const [typed, setTyped] = useState('');
  const visualRef = useRef(null);

  useEffect(() => {
    let roleIndex = 0, charIndex = 0, deleting = false, timer;
    const tick = () => {
      const current = roles[roleIndex];
      if (!deleting) {
        charIndex += 1;
        setTyped(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timer = window.setTimeout(tick, 1700);
          return;
        }
      } else {
        charIndex -= 1;
        setTyped(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      timer = window.setTimeout(tick, deleting ? 42 : 78);
    };
    timer = window.setTimeout(tick, 1150);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const visual = visualRef.current;
    if (!visual) return;
    const move = (e) => {
      const r = visual.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      visual.style.setProperty('--mx', `${x * 13}px`);
      visual.style.setProperty('--my', `${y * 10}px`);
      visual.style.setProperty('--gx', `${(x + 0.5) * 100}%`);
      visual.style.setProperty('--gy', `${(y + 0.5) * 100}%`);
    };
    const leave = () => {
      visual.style.setProperty('--mx', '0px');
      visual.style.setProperty('--my', '0px');
      visual.style.setProperty('--gx', '50%');
      visual.style.setProperty('--gy', '45%');
    };
    visual.addEventListener('mousemove', move);
    visual.addEventListener('mouseleave', leave);
    return () => {
      visual.removeEventListener('mousemove', move);
      visual.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <section className="hero hero-sales" id="top">
      <div className="hero-grid" />
      <div className="hero-ambient hero-ambient-one" />
      <div className="hero-ambient hero-ambient-two" />

      <div className="hero-copy hero-sales-copy">
        <div className="hero-sequence seq-1 hero-trust-badge">
          <span className="hero-trust-stars">★★★★★</span>
          <span>Trusted Amazon Growth Partner</span>
        </div>

        <h1 className="hero-sequence seq-2 hero-sales-title">
          Helping Amazon Brands
          <span>Scale Profitably.</span>
        </h1>

        <div className="hero-sequence seq-3 hero-role-line">
          <span>Amazon</span>
          <strong>{typed}<i>_</i></strong>
        </div>

        <p className="hero-sequence seq-4 hero-sales-description">
          I help Amazon brands increase profitable revenue through data-driven PPC,
          conversion-focused listing improvements, and full account strategy.
        </p>

        <div className="hero-sequence seq-5 hero-proof-grid">
          {proofPoints.map(([value, label]) => (
            <div className="hero-proof-item" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="hero-sequence seq-6 hero-actions hero-sales-actions">
          <a className="button gold magnetic" href="#cases">View Case Studies <span>↗</span></a>
          <a className="button ghost magnetic" href="#contact">Let&apos;s Grow Your Brand</a>
        </div>

        <div className="hero-sequence seq-7 hero-client-note">
          <span className="hero-client-dot" />
          Available for long-term brand partnerships and remote roles
        </div>
      </div>

      <div className="hero-visual hero-sequence seq-photo hero-sales-visual" ref={visualRef}>
        <ParticleCanvas />
        <div className="cursor-halo" />
        <div className="consultant-ring consultant-ring-one" />
        <div className="consultant-ring consultant-ring-two" />
        <div className="consultant-glow" />
        <div className="portrait-parallax consultant-portrait-wrap">
          <img src="/photo.png" alt="Hassan Ali, Amazon Brand and PPC Manager" className="portrait consultant-portrait" />
        </div>
        <div className="consultant-card">
          <small>Amazon Brand & PPC Manager</small>
          <strong>Hassan Ali</strong>
          <span>US · UK Marketplaces</span>
        </div>
      </div>

      <a href="#about" className="scroll-cue hero-sales-scroll"><span>Explore</span><i>↓</i></a>
    </section>
  );
}
