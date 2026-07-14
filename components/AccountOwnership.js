'use client';

import { useState } from 'react';
import Reveal from './Reveal';

const ownershipAreas = [
  {
    number: '01',
    title: 'PPC & Advertising',
    summary: 'Building scalable advertising systems focused on profitable growth rather than increasing spend alone.',
    icon: '↗',
    deliverables: ['Campaign structure', 'Keyword expansion', 'Budget allocation', 'TACoS optimization'],
    why: 'Advertising should improve the wider business. Campaign decisions are connected to profitability, ranking, conversion and inventory.',
    outcome: 'Cleaner account structure, less wasted spend and more controlled growth.',
  },
  {
    number: '02',
    title: 'Brand Management',
    summary: 'Managing the commercial side of Amazon so every decision supports long-term brand growth.',
    icon: '◎',
    deliverables: ['Pricing strategy', 'Competitor analysis', 'Brand positioning', 'Marketplace expansion'],
    why: 'Growth becomes more predictable when advertising, pricing, promotions and market positioning follow one commercial plan.',
    outcome: 'Stronger account control and clearer priorities across the brand.',
  },
  {
    number: '03',
    title: 'Listing Optimization',
    summary: 'Improving visibility and conversion with search-focused and customer-focused listing improvements.',
    icon: '◇',
    deliverables: ['SEO optimization', 'Image strategy', 'A+ content', 'Conversion improvements'],
    why: 'Higher conversion makes every paid click more valuable and strengthens organic performance over time.',
    outcome: 'Better conversion, stronger indexing and more efficient advertising.',
  },
  {
    number: '04',
    title: 'Product Launches',
    summary: 'Launching products with structured execution that builds visibility, rankings and profitable momentum.',
    icon: '△',
    deliverables: ['Launch planning', 'PPC rollout', 'Ranking strategy', 'Performance scaling'],
    why: 'A launch needs coordinated listing readiness, campaign sequencing, review planning and inventory support.',
    outcome: 'Faster market entry with clearer ranking and profitability milestones.',
  },
  {
    number: '05',
    title: 'Inventory & Forecasting',
    summary: 'Preventing lost sales by aligning inventory planning with advertising performance and seasonality.',
    icon: '▦',
    deliverables: ['Restock planning', 'Stock monitoring', 'Seasonal forecasting', 'Demand planning'],
    why: 'Advertising cannot scale safely when inventory decisions are disconnected from demand and sales velocity.',
    outcome: 'Lower stock risk and better readiness for promotions and growth periods.',
  },
  {
    number: '06',
    title: 'Business Intelligence',
    summary: 'Turning performance data into practical business decisions through clear reporting and actionable insights.',
    icon: '⌁',
    deliverables: ['Weekly reporting', 'KPI dashboards', 'Opportunity analysis', 'Growth roadmaps'],
    why: 'Reports should explain what changed, why it matters and what action should happen next.',
    outcome: 'Faster decisions, clearer accountability and stronger commercial visibility.',
  },
];

export default function AccountOwnership() {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (index) => {
    setOpenCard((current) => (current === index ? null : index));
  };

  return (
    <section className="ownership-section" id="ownership">
      <div className="ownership-grid-bg" />
      <div className="ownership-glow ownership-glow-one" />
      <div className="ownership-glow ownership-glow-two" />

      <div className="ownership-shell">
        <div className="ownership-topline">
          <Reveal>
            <p className="section-label">Your Amazon Business</p>
          </Reveal>
          <Reveal delay={80}>
            <span>05 — ACCOUNT OWNERSHIP</span>
          </Reveal>
        </div>

        <div className="ownership-heading">
          <Reveal>
            <h2>
              Complete Amazon
              <br />
              account ownership.
              <br />
              <em>Not just PPC.</em>
            </h2>
          </Reveal>

          <Reveal className="ownership-intro" delay={110}>
            <p>
              Most Amazon accounts do not fail because of one campaign. Growth happens
              when advertising, listings, pricing, inventory and reporting work together.
              I take ownership of every commercial driver that influences profitable growth.
            </p>
            <a href="#contact">
              Discuss your account <span>↗</span>
            </a>
          </Reveal>
        </div>

        <div className="ownership-cards">
          {ownershipAreas.map((area, index) => {
            const isOpen = openCard === index;

            return (
              <Reveal
                key={area.title}
                className={`ownership-card ${isOpen ? 'is-open' : ''}`}
                delay={index * 70}
              >
                <button
                  className="ownership-card-button"
                  type="button"
                  onClick={() => toggleCard(index)}
                  aria-expanded={isOpen}
                >
                  <div className="ownership-card-top">
                    <span>{area.number}</span>
                    <i>{area.icon}</i>
                  </div>

                  <div className="ownership-card-copy">
                    <h3>{area.title}</h3>
                    <p>{area.summary}</p>
                  </div>

                  <div className="ownership-deliverables">
                    {area.deliverables.map((item, itemIndex) => (
                      <span key={item}>
                        <b>0{itemIndex + 1}</b>
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="ownership-card-action">
                    <span>{isOpen ? 'Close details' : 'View ownership scope'}</span>
                    <b>{isOpen ? '−' : '+'}</b>
                  </div>
                </button>

                <div className="ownership-expanded" aria-hidden={!isOpen}>
                  <div>
                    <span>WHY IT MATTERS</span>
                    <p>{area.why}</p>
                  </div>
                  <div>
                    <span>TYPICAL OUTCOME</span>
                    <p>{area.outcome}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="ownership-closing">
          <span>ONE OBJECTIVE</span>
          <p>
            Every optimization is connected to building a stronger, more profitable
            Amazon business that continues to grow over time.
          </p>
          <a href="#cases">
            View client results <b>↗</b>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
