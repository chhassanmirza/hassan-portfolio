'use client';

import { useState } from 'react';
import Reveal from './Reveal';

const clientResults = [
  {
    number: '01',
    category: 'ACCOUNT TURNAROUND',
    title: 'TACoS reduced from 58% to 16%',
    summary: 'A heavily inefficient account was restructured around profitable growth and stronger organic contribution.',
    metrics: ['58% to 16% TACoS', 'Wasted spend controlled', 'Organic sales stabilized'],
    challenge: 'The account was highly dependent on advertising, with weak efficiency and limited control over where budget was producing real business value.',
    actions: ['Rebuilt campaign priorities', 'Paused inefficient targets', 'Improved search-term control', 'Shifted budgets toward proven demand'],
    impact: ['TACoS reduced to 16%', 'Organic contribution improved', 'Profitability restored', 'Clearer scaling structure'],
  },
  {
    number: '02',
    category: 'REVENUE GROWTH',
    title: 'Monthly sales increased from $10,065 to $17,193',
    summary: 'Performance improved through wider keyword coverage, better budget allocation and more disciplined optimization.',
    metrics: ['$10,065 to $17,193', 'Stronger keyword coverage', 'Higher organic contribution'],
    challenge: 'The account had growth potential, but budget and traffic were not consistently directed toward the search terms producing the strongest commercial returns.',
    actions: ['Expanded keyword coverage', 'Isolated converting search terms', 'Reallocated budgets', 'Improved campaign efficiency'],
    impact: ['Monthly sales reached $17,193', 'More efficient traffic acquisition', 'Organic contribution increased', 'Growth became more consistent'],
  },
  {
    number: '03',
    category: 'EMERGING BRAND SCALE',
    title: 'Monthly sales increased from $1,590 to $5,805',
    summary: 'A smaller brand was scaled by improving discovery, prioritizing conversion and controlling inefficient spending.',
    metrics: ['$1,590 to $5,805', 'Winning terms isolated', 'Controlled ad expansion'],
    challenge: 'The brand needed to find scalable demand without allowing broad discovery campaigns to consume budget without enough sales.',
    actions: ['Refined discovery campaigns', 'Harvested winning terms', 'Prioritized high-converting traffic', 'Controlled budget expansion'],
    impact: ['Sales increased more than threefold', 'Better campaign visibility', 'Stronger conversion focus', 'Growth achieved without uncontrolled spend'],
  },
  {
    number: '04',
    category: 'KITCHEN PRODUCT',
    title: 'More than $40K in profit generated',
    summary: 'A product was taken from launch to sustained profitability while maintaining stable advertising efficiency.',
    metrics: ['$40K+ profit', '28% to 32% ACoS', 'Top 5 keyword rank'],
    challenge: 'The product needed to build ranking and sales momentum while maintaining a sustainable relationship between ad spend and total revenue.',
    actions: ['Structured the launch plan', 'Built ranking campaigns', 'Expanded proven keywords', 'Maintained profitability controls'],
    impact: ['$40K+ profit generated', 'ACoS maintained at 28% to 32%', 'TACoS maintained at 10% to 15%', 'Primary keyword reached Top 5'],
  },
  {
    number: '05',
    category: 'YOGA PRODUCT',
    title: 'ACoS reduced from 54% to 33%',
    summary: 'Advertising was rebuilt to improve ROAS while protecting the product’s premium positioning.',
    metrics: ['54% to 33% ACoS', '40% ROAS improvement', 'Organic rank improved'],
    challenge: 'The product carried a premium price point, which made generic traffic less efficient and required more disciplined targeting.',
    actions: ['Rebuilt campaign structure', 'Prioritized stronger search terms', 'Protected premium positioning', 'Reduced inefficient traffic'],
    impact: ['ACoS reduced to 33%', 'ROAS improved by 40%', 'Organic rankings strengthened', 'Premium positioning maintained'],
  },
];

function DetailRows({ items }) {
  return (
    <div className="selected-result-detail-rows">
      {items.map((item, index) => (
        <span key={item}>
          <b>0{index + 1}</b>
          {item}
        </span>
      ))}
    </div>
  );
}

export default function SelectedClientResults() {
  const [openResult, setOpenResult] = useState(null);

  return (
    <section className="selected-results-section" id="cases">
      <div className="selected-results-grid-bg" />
      <div className="selected-results-glow" />

      <div className="selected-results-shell">
        <div className="selected-results-topline">
          <Reveal><p className="section-label">Selected Client Results</p></Reveal>
          <Reveal delay={80}><span>06 — PROOF ACROSS CATEGORIES</span></Reveal>
        </div>

        <div className="selected-results-heading">
          <Reveal>
            <h2>
              Different categories.
              <br />
              Different challenges.
              <br />
              <em>Consistent profitable growth.</em>
            </h2>
          </Reveal>

          <Reveal className="selected-results-intro" delay={100}>
            <p>
              These results reflect hands-on account ownership across launches,
              turnarounds and growth-stage brands. Each project required a different
              strategy, but the objective remained the same: stronger performance and
              better commercial decisions.
            </p>
          </Reveal>
        </div>

        <div className="selected-results-list">
          {clientResults.map((result, index) => {
            const isOpen = openResult === index;

            return (
              <Reveal
                key={result.title}
                className={`selected-result-card ${isOpen ? 'is-open' : ''}`}
                delay={index * 70}
              >
                <button
                  className="selected-result-main"
                  type="button"
                  onClick={() => setOpenResult(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <div className="selected-result-meta">
                    <span>{result.number}</span>
                    <small>{result.category}</small>
                  </div>

                  <div className="selected-result-copy">
                    <h3>{result.title}</h3>
                    <p>{result.summary}</p>
                  </div>

                  <div className="selected-result-action">
                    <span>{isOpen ? 'Close result' : 'View full result'}</span>
                    <b>{isOpen ? '×' : '+'}</b>
                  </div>
                </button>

                {isOpen && (
                  <div className="selected-result-expanded">
                    <section className="selected-result-metrics-panel">
                      <span>KEY METRICS</span>
                      <div className="selected-result-expanded-metrics">
                        {result.metrics.map((metric, metricIndex) => (
                          <div key={metric}>
                            <b>0{metricIndex + 1}</b>
                            <strong>{metric}</strong>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section>
                      <span>THE CHALLENGE</span>
                      <p>{result.challenge}</p>
                    </section>

                    <section>
                      <span>ACTIONS TAKEN</span>
                      <DetailRows items={result.actions} />
                    </section>

                    <section>
                      <span>BUSINESS IMPACT</span>
                      <DetailRows items={result.impact} />
                    </section>
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal className="selected-results-closing">
          <span>THE COMMON THREAD</span>
          <p>
            Strong Amazon growth comes from disciplined execution, clear commercial
            priorities and decisions that connect advertising with the wider business.
          </p>
          <a href="#contact">Discuss your growth goals <b>↗</b></a>
        </Reveal>
      </div>
    </section>
  );
}
