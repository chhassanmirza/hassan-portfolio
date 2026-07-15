'use client';

import { useState } from 'react';
import Reveal from './Reveal';

const areas = [
  {
    number: '01',
    title: 'PPC & Advertising',
    summary: 'Building scalable advertising systems focused on profitable growth rather than increasing spend alone.',
    icon: '↗',
    deliverables: ['Campaign structure', 'Keyword expansion', 'Budget allocation', 'TACoS optimization'],
    why: 'Advertising should increase profitable growth, not simply sales. Every campaign decision is connected to contribution margin, keyword visibility, conversion rate and long-term account health.',
    responsibilities: ['Campaign strategy', 'Account structure', 'Keyword expansion', 'Bid management', 'Budget allocation'],
    outcomes: ['More efficient advertising', 'Lower wasted spend', 'Stronger keyword visibility', 'Scalable profitable growth'],
  },
  {
    number: '02',
    title: 'Brand Management',
    summary: 'Managing the commercial side of Amazon so every decision supports long-term brand growth.',
    icon: '◎',
    deliverables: ['Pricing strategy', 'Competitor analysis', 'Brand positioning', 'Marketplace expansion'],
    why: 'Strong Amazon brands are built through consistent commercial decisions across advertising, pricing, inventory and catalog management.',
    responsibilities: ['Commercial planning', 'Pricing strategy', 'Marketplace positioning', 'Promotional planning', 'Ongoing account ownership'],
    outcomes: ['Better business decisions', 'Stronger account control', 'Clearer priorities', 'Sustainable long-term growth'],
  },
  {
    number: '03',
    title: 'Listing Optimization',
    summary: 'Improving visibility and conversion with search-focused and customer-focused listing improvements.',
    icon: '◇',
    deliverables: ['SEO optimization', 'Image strategy', 'A+ content', 'Conversion improvements'],
    why: 'Higher conversion improves every marketing effort. Better listings generate more revenue from the same traffic.',
    responsibilities: ['Keyword research', 'Listing SEO', 'Image strategy', 'A+ Content', 'Conversion optimization'],
    outcomes: ['Improved indexing', 'Stronger organic rankings', 'Higher conversion rates', 'Better advertising efficiency'],
  },
  {
    number: '04',
    title: 'Product Launches',
    summary: 'Launching products with structured execution that builds visibility, rankings and profitable momentum.',
    icon: '△',
    deliverables: ['Launch planning', 'PPC rollout', 'Ranking strategy', 'Performance scaling'],
    why: 'Successful launches are built through structured execution rather than aggressive spending.',
    responsibilities: ['Launch planning', 'Campaign rollout', 'Ranking strategy', 'Review readiness', 'Controlled performance scaling'],
    outcomes: ['Faster visibility', 'Stronger keyword rankings', 'Healthier sales velocity', 'Profitable growth from the beginning'],
  },
  {
    number: '05',
    title: 'Inventory & Forecasting',
    summary: 'Preventing lost sales by aligning inventory planning with advertising performance and seasonality.',
    icon: '▦',
    deliverables: ['Restock planning', 'Stock monitoring', 'Seasonal forecasting', 'Demand planning'],
    why: 'Inventory planning protects revenue and keeps advertising performing consistently during periods of growth.',
    responsibilities: ['Demand forecasting', 'Inventory monitoring', 'Restock planning', 'Seasonal preparation', 'Stock risk review'],
    outcomes: ['Lower stock risk', 'Healthier inventory levels', 'Better promotional readiness', 'Uninterrupted sales momentum'],
  },
  {
    number: '06',
    title: 'Business Intelligence',
    summary: 'Turning performance data into practical business decisions through clear reporting and actionable insights.',
    icon: '⌁',
    deliverables: ['Weekly reporting', 'KPI dashboards', 'Opportunity analysis', 'Growth roadmaps'],
    why: 'Business data only creates value when it leads to better commercial decisions.',
    responsibilities: ['Performance reporting', 'KPI analysis', 'Opportunity identification', 'Trend analysis', 'Strategic planning'],
    outcomes: ['Greater visibility', 'Faster decisions', 'Clearer accountability', 'A practical growth roadmap'],
  },
];

function DetailList({ items }) {
  return (
    <div className="ownership-detail-list">
      {items.map((item, index) => (
        <span key={item}><b>0{index + 1}</b>{item}</span>
      ))}
    </div>
  );
}

export default function AccountOwnership() {
  const [openCard, setOpenCard] = useState(null);

  return (
    <section className="ownership-section" id="ownership">
      <div className="ownership-grid-bg" />
      <div className="ownership-glow ownership-glow-one" />
      <div className="ownership-glow ownership-glow-two" />

      <div className="ownership-shell">
        <div className="ownership-topline">
          <Reveal><p className="section-label">Your Amazon Business</p></Reveal>
          <Reveal delay={80}><span>05 — ACCOUNT OWNERSHIP</span></Reveal>
        </div>

        <div className="ownership-heading">
          <Reveal>
            <h2>Complete Amazon<br />account ownership.<br /><em>Not just PPC.</em></h2>
          </Reveal>
          <Reveal className="ownership-intro" delay={110}>
            <p>
              Most Amazon accounts do not fail because of one campaign. Growth happens
              when advertising, listings, pricing, inventory and reporting work together.
              I take ownership of every commercial driver that influences profitable growth.
            </p>
            <a href="#contact">Discuss your account <span>↗</span></a>
          </Reveal>
        </div>

        <div className="ownership-cards">
          {areas.map((area, index) => {
            const isOpen = openCard === index;
            return (
              <Reveal key={area.title} className={`ownership-card ${isOpen ? 'is-open' : ''}`} delay={index * 70}>
                <div className="ownership-card-main">
                  <div className="ownership-card-top"><span>{area.number}</span><i>{area.icon}</i></div>
                  <div className="ownership-card-copy"><h3>{area.title}</h3><p>{area.summary}</p></div>
                  <div className="ownership-deliverables">
                    {area.deliverables.map((item, itemIndex) => (
                      <span key={item}><b>0{itemIndex + 1}</b>{item}</span>
                    ))}
                  </div>
                  <button className="ownership-card-action" type="button" onClick={() => setOpenCard(isOpen ? null : index)} aria-expanded={isOpen}>
                    <span>{isOpen ? 'Close details' : 'View ownership scope'}</span>
                    <b>{isOpen ? '×' : '+'}</b>
                  </button>
                </div>

                {isOpen && (
                  <div className="ownership-expanded">
                    <section><span>WHY IT MATTERS</span><p>{area.why}</p></section>
                    <section><span>MY RESPONSIBILITY</span><DetailList items={area.responsibilities} /></section>
                    <section><span>CLIENT OUTCOME</span><DetailList items={area.outcomes} /></section>
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal className="ownership-closing">
          <span>ONE OBJECTIVE</span>
          <p>Every optimization is connected to building a stronger, more profitable Amazon business that continues to grow over time.</p>
          <a href="#cases">View client results <b>↗</b></a>
        </Reveal>
      </div>
    </section>
  );
}
