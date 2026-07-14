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
    why: 'Advertising should increase profitable growth, not simply sales. Every campaign decision is connected to contribution margin, keyword visibility, conversion rate and long-term account health.',
    outcome: 'Campaign strategy, account structure, keyword expansion, bid management and budget allocation.

CLIENT OUTCOME
A more efficient advertising system that scales profitably while reducing wasted spend.',
  },
  {
    number: '02',
    title: 'Brand Management',
    summary: 'Managing the commercial side of Amazon so every decision supports long-term brand growth.',
    icon: '◎',
    deliverables: ['Pricing strategy', 'Competitor analysis', 'Brand positioning', 'Marketplace expansion'],
    why: 'Strong Amazon brands are built through consistent commercial decisions across advertising, pricing, inventory and catalog management.',
    outcome: 'Commercial planning, pricing strategy, marketplace positioning and ongoing account ownership.

CLIENT OUTCOME
Better business decisions, stronger account control and sustainable long-term growth.',
  },
  {
    number: '03',
    title: 'Listing Optimization',
    summary: 'Improving visibility and conversion with search-focused and customer-focused listing improvements.',
    icon: '◇',
    deliverables: ['SEO optimization', 'Image strategy', 'A+ content', 'Conversion improvements'],
    why: 'Higher conversion improves every marketing effort. Better listings generate more revenue from the same traffic.',
    outcome: 'Keyword research, listing SEO, image strategy, A+ Content and conversion optimization.

CLIENT OUTCOME
Improved indexing, stronger organic rankings and higher conversion rates.',
  },
  {
    number: '04',
    title: 'Product Launches',
    summary: 'Launching products with structured execution that builds visibility, rankings and profitable momentum.',
    icon: '△',
    deliverables: ['Launch planning', 'PPC rollout', 'Ranking strategy', 'Performance scaling'],
    why: 'Successful launches are built through structured execution rather than aggressive spending.',
    outcome: 'Launch planning, campaign rollout, ranking strategy and controlled performance scaling.

CLIENT OUTCOME
Faster visibility, stronger keyword rankings and profitable growth from the beginning.',
  },
  {
    number: '05',
    title: 'Inventory & Forecasting',
    summary: 'Preventing lost sales by aligning inventory planning with advertising performance and seasonality.',
    icon: '▦',
    deliverables: ['Restock planning', 'Stock monitoring', 'Seasonal forecasting', 'Demand planning'],
    why: 'Inventory planning protects revenue and keeps advertising performing consistently during periods of growth.',
    outcome: 'Demand forecasting, inventory monitoring, restock planning and seasonal preparation.

CLIENT OUTCOME
Lower stock risk, healthier inventory levels and uninterrupted sales momentum.',
  },
  {
    number: '06',
    title: 'Business Intelligence',
    summary: 'Turning performance data into practical business decisions through clear reporting and actionable insights.',
    icon: '⌁',
    deliverables: ['Weekly reporting', 'KPI dashboards', 'Opportunity analysis', 'Growth roadmaps'],
    why: 'Business data only creates value when it leads to better commercial decisions.',
    outcome: 'Performance reporting, KPI analysis, opportunity identification and strategic planning.

CLIENT OUTCOME
Greater visibility, faster decisions and a clear roadmap for continued account growth.',
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
                    <span>MY RESPONSIBILITY</span>
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
