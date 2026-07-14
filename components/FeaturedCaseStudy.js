'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

const metrics = [
  { value: 35, prefix: '$', suffix: 'K', label: 'Total Revenue', note: 'Generated within five months' },
  { value: 24, prefix: '$', suffix: 'K', label: 'PPC Revenue', note: 'From $7K in ad spend' },
  { value: 3.43, suffix: 'x', label: 'ROAS', note: 'Strong and profitable ad performance', decimals: 2 },
  { display: 'Top 50', label: 'BSR', note: 'Reached in the sub-category' },
  { display: 'Top 10', label: 'Organic Rankings', note: 'Across five priority keywords' },
];

const challengeItems = [
  'Zero sales history',
  'No reviews',
  'No organic rankings',
  'Competitive pet supplies category',
  'Needed visibility and trust from day one',
];

const strategyCards = [
  {
    number: '01',
    title: 'Listing Optimization',
    description: 'Built a keyword-rich listing focused on visibility, indexing and conversion.',
    bullets: ['Keyword mapping', 'Title and bullets', 'A+ content', 'Conversion readiness'],
  },
  {
    number: '02',
    title: 'PPC Architecture',
    description: 'Launched structured Sponsored Products campaigns to create early sales velocity.',
    bullets: ['Auto discovery', 'Manual exact', 'Phrase and broad', 'Search-term harvesting'],
  },
  {
    number: '03',
    title: 'Rank & Scale',
    description: 'Used bidding, placement and budget allocation to support ranking without losing control.',
    bullets: ['Bid optimization', 'Budget allocation', 'Placement control', 'Keyword prioritization'],
  },
  {
    number: '04',
    title: 'Brand Growth',
    description: 'Connected advertising decisions with conversion, organic rank and account momentum.',
    bullets: ['Organic rank tracking', 'Weekly BSR review', 'Conversion monitoring', 'Inventory awareness'],
  },
];

function MetricValue({ metric, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active || metric.display) return undefined;

    const duration = 1200;
    const start = performance.now();
    let frame;

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const raw = metric.value * eased;
      setCount(metric.decimals ? raw.toFixed(metric.decimals) : Math.round(raw));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [active, metric]);

  if (metric.display) return metric.display;
  return `${metric.prefix || ''}${count}${metric.suffix || ''}`;
}

export default function FeaturedCaseStudy() {
  const sectionRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
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
      { threshold: 0.18 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`featured-case ${expanded ? 'is-expanded' : ''}`} id="featured-case" ref={sectionRef}>
      <div className="featured-case-grid" />
      <div className="featured-case-glow" />

      <div className="featured-case-shell">
        <div className="featured-case-topline">
          <Reveal><p className="section-label">Featured Case Study</p></Reveal>
          <Reveal delay={80}><span>04 — FLAGSHIP PROJECT</span></Reveal>
        </div>

        <div className="featured-case-heading">
          <Reveal>
            <h2>
              Case Study: Building a Profitable
              <br />
              <em>Amazon Product Launch from Day One.</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p>
              How strategic brand management and data-driven PPC transformed a new pet
              supplies product into a profitable Amazon business within five months.
            </p>
          </Reveal>
        </div>

        <div className="featured-case-preview">
          <Reveal className="featured-case-visual">
            <div className="featured-case-image-wrap">
              <img
                src="/luxetail-case-study.png"
                alt="Luxetail Amazon pet supplies launch case study"
              />
              <div className="featured-case-image-overlay">
                <span>Amazon US · Pet Supplies</span>
                <strong>Zero to $35K</strong>
                <small>Five-month launch</small>
              </div>
            </div>
          </Reveal>

          <div className="featured-case-summary">
            <Reveal delay={80}>
              <span className="featured-case-eyebrow">THE BUSINESS OUTCOME</span>
              <h3>This was not simply a successful PPC campaign.</h3>
              <p>
                It was the successful launch of an Amazon product—from zero sales,
                reviews and rankings to meaningful revenue, organic visibility and a
                scalable advertising structure.
              </p>
            </Reveal>

            <div className="featured-case-metrics">
              {metrics.slice(0, 3).map((metric, index) => (
                <Reveal key={metric.label} className="featured-case-metric" delay={120 + index * 65}>
                  <strong><MetricValue metric={metric} active={active} /></strong>
                  <span>{metric.label}</span>
                  <small>{metric.note}</small>
                </Reveal>
              ))}
            </div>

            <Reveal delay={280}>
              <button
                className="featured-case-toggle"
                type="button"
                onClick={() => setExpanded((value) => !value)}
                aria-expanded={expanded}
              >
                <span>{expanded ? 'Close Case Study' : 'View Full Case Study'}</span>
                <b>{expanded ? '−' : '+'}</b>
              </button>
            </Reveal>
          </div>
        </div>

        <div className="featured-case-expanded" aria-hidden={!expanded}>
          <div className="featured-case-section">
            <div className="featured-case-section-label">01 — CHALLENGE</div>
            <div className="featured-case-challenge">
              <div>
                <h3>Launching without history, reviews or organic trust.</h3>
                <p>
                  The product entered a competitive category with no sales history and
                  no ranking foundation. Visibility, conversion trust and search
                  momentum had to be built simultaneously.
                </p>
              </div>
              <div className="featured-case-checks">
                {challengeItems.map((item) => (
                  <span key={item}><i>✓</i>{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="featured-case-section">
            <div className="featured-case-section-label">02 — STRATEGY</div>
            <div className="featured-case-strategy">
              {strategyCards.map((card) => (
                <article className="featured-case-strategy-card" key={card.title}>
                  <span>{card.number}</span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <div>
                    {card.bullets.map((bullet) => <small key={bullet}>{bullet}</small>)}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="featured-case-section">
            <div className="featured-case-section-label">03 — BUSINESS IMPACT</div>
            <div className="featured-case-impact">
              {metrics.map((metric, index) => (
                <div className="featured-case-impact-card" key={metric.label}>
                  <span>0{index + 1}</span>
                  <strong><MetricValue metric={metric} active={active && expanded} /></strong>
                  <h3>{metric.label}</h3>
                  <p>{metric.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="featured-case-section featured-case-takeaway">
            <div className="featured-case-section-label">04 — KEY TAKEAWAY</div>
            <blockquote>
              Amazon growth happens when advertising, conversion, pricing, inventory and
              listing quality work together—not when PPC is optimized in isolation.
            </blockquote>
            <p>
              That principle now guides every account I manage: better decisions across
              the full business create stronger and more sustainable results.
            </p>
          </div>

          <div className="featured-case-cta">
            <div>
              <span>WANT SIMILAR RESULTS?</span>
              <h3>Let&apos;s discuss your Amazon brand.</h3>
            </div>
            <a href="#contact">Start a conversation <b>↗</b></a>
          </div>
        </div>
      </div>
    </section>
  );
}
