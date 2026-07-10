'use client';
import { useEffect, useRef, useState } from 'react';
import ParticleCanvas from './ParticleCanvas';

const tools = ['Helium 10', 'DataDive', 'SellerBoard', 'Jungle Scout', 'Keepa'];
const roles = ['BRAND MANAGER', 'PPC STRATEGIST', 'ACCOUNT MANAGER'];

export default function Hero() {
  const [typed, setTyped] = useState('');
  const visualRef = useRef(null);

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const current = roles[roleIndex];

      if (!deleting) {
        charIndex += 1;
        setTyped(current.slice(0, charIndex));

        if (charIndex === current.length) {
          deleting = true;
          timer = setTimeout(tick, 1900);
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

      timer = setTimeout(tick, deleting ? 38 : 70);
    };

    timer = setTimeout(tick, 1150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const element = visualRef.current;
    if (!element) return undefined;

    const move = (event) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      element.style.setProperty('--mx', `${x * 18}px`);
      element.style.setProperty('--my', `${y * 14}px`);
      element.style.setProperty('--gx', `${(x + 0.5) * 100}%`);
      element.style.setProperty('--gy', `${(y + 0.5) * 100}%`);
    };

    const leave = () => {
      element.style.setProperty('--mx', '0px');
      element.style.setProperty('--my', '0px');
    };

    element.addEventListener('mousemove', move);
    element.addEventListener('mouseleave', leave);

    return () => {
      element.removeEventListener('mousemove', move);
      element.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-grid" />

      <div className="hero-copy">
        <div className="hero-sequence seq-1 eyebrow">
          <span /> Amazon Brand & PPC Manager
        </div>

        <h1 className="hero-sequence seq-2 hero-title-fixed">
          <span className="hero-static-line">AMAZON</span>
          <span className="typed-line">{typed}<i>_</i></span>
        </h1>

        <p className="hero-sequence seq-3 hero-kicker">MAXIMIZING AMAZON GROWTH</p>
        <p className="hero-sequence seq-4 hero-kicker secondary">SCALING SALES WITH DATA-DRIVEN STRATEGIES</p>
        <h2 className="hero-sequence seq-5">Amazon PPC & Account Management Specialist</h2>
        <p className="hero-sequence seq-6 hero-description">
          I help brands grow on Amazon through full account management and advanced PPC strategies. From campaign scaling to listing optimization, I focus on maximizing profitability.
        </p>

        <div className="hero-sequence seq-7 hero-actions">
          <a className="button gold magnetic" href="#cases">View Case Studies <span>→</span></a>
          <a className="button ghost magnetic" href="#contact">Hire Me</a>
        </div>

        <div className="hero-sequence seq-8 tool-marquee" aria-label="Amazon tools used daily">
          <div className="tool-track">
            {[...tools, ...tools].map((tool, index) => (
              <span key={`${tool}-${index}`}><b>{tool[0]}</b>{tool}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-visual hero-sequence seq-photo" ref={visualRef}>
        <ParticleCanvas />
        <div className="cursor-halo" />
        <div className="portrait-orbit orbit-one" />
        <div className="portrait-orbit orbit-two" />
        <div className="portrait-glow" />
        <div className="portrait-parallax">
          <img src="/photo.png" alt="Hassan Ali" className="portrait" />
        </div>
        <div className="portrait-caption"><span>HASSAN</span><strong>ALI</strong></div>
        <div className="availability"><i /> Available for select projects</div>
      </div>

      <a href="#about" className="scroll-cue"><span>Explore</span><i>↓</i></a>
    </section>
  );
}
