'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

const metrics = [
  { value: 1, prefix: '$', suffix: 'M+', label: 'Managed Ad Sales', note: 'Across growth-focused Amazon accounts' },
  { value: 5, suffix: '+', label: 'Years Experience', note: 'PPC, brand management and operations' },
  { value: 13, suffix: '+', label: 'Upwork Projects', note: 'Completed with dependable delivery' },
  { value: 5, suffix: '.0', label: 'Client Rating', note: 'Built through clarity and accountability' },
  { value: 2, display: 'US · UK', label: 'Marketplace Expertise', note: 'Localized strategy for each market' },
  { value: 4, suffix: '+', label: 'Brands Managed', note: 'Concurrent account ownership and reporting' },
];

const specialties = [
  'Amazon PPC',
  'Brand Management',
  'Listing Optimization',
  'Product Launches',
  'Catalog Management',
  'Profitability Reporting',
];

const process = [
  ['01', 'Audit', 'Find the leaks, missed opportunities and commercial constraints.'],
  ['02', 'Strategy', 'Create a clear plan around profitability, ranking and growth.'],
  ['03', 'Execution', 'Implement campaigns, listing improvements and account actions.'],
  ['04', 'Optimization', 'Use performance data to improve efficiency and conversion.'],
  ['05', 'Scaling', 'Increase sales while protecting margins and account health.'],
];

function Counter({ metric, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active || metric.display) return undefined;

    const duration = 1100;
    const started = performance.now();
    let frame;

    const animate = (time) => {
      const progress = Math.min((time - started) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(metric.value * eased));

      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [active, metric]);

  if (metric.display) return metric.display;
  return `${metric.prefix || ''}${count}${metric.suffix || ''}`;
}

export default function Results() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="results-section" id="results" ref={sectionRef}>
      <div className="results-shell">
        <div className="results-topline">
          <Reveal>
            <p className="section-label">Trusted by Results</p>
          </Reveal>
          <Reveal delay={80}>
            <span>01 — PROOF</span>
          </Reveal>
        </div>

        <div className="results-heading-grid">
          <Reveal>
            <h2>
              Experience is useful.
              <br />
              <em>Results build trust.</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p>
              Brand owners and hiring managers should not have to guess what I bring
              to the table. These numbers represent hands-on work, commercial
              responsibility and consistent client delivery.
            </p>
          </Reveal>
        </div>

        <div className="results-metrics">
          {metrics.map((metric, index) => (
            <Reveal
              key={metric.label}
              className="result-metric-card"
              delay={index * 65}
            >
              <span className="result-index">0{index + 1}</span>
              <strong>
                <Counter metric={metric} active={active} />
              </strong>
              <h3>{metric.label}</h3>
              <p>{metric.note}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="results-marquee" aria-label="Amazon service specialties">
        <div className="results-marquee-track">
          {[...specialties, ...specialties].map((item, index) => (
            <span key={`${item}-${index}`}>
              <i />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="results-shell results-statement-wrap">
        <Reveal className="results-statement">
          <span>BUSINESS PRINCIPLE</span>
          <blockquote>
            Your Amazon business does not need more ad spend.
            <em> It needs better decisions.</em>
          </blockquote>
        </Reveal>

        <div className="results-process">
          {process.map(([number, title, description], index) => (
            <Reveal
              key={title}
              className="results-process-step"
              delay={index * 70}
            >
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              {index < process.length - 1 && <i>→</i>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
