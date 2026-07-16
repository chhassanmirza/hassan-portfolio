'use client';

import { useState } from 'react';
import Reveal from './Reveal';

const steps = [
  {
    number: '01',
    title: 'Account Audit',
    intro: 'Understand the business before making recommendations.',
    details: ['Advertising performance', 'Profitability analysis', 'Growth opportunities', 'Account health review'],
  },
  {
    number: '02',
    title: 'Strategy Development',
    intro: 'Build a roadmap based on commercial priorities.',
    details: ['Growth priorities', 'Campaign restructuring', 'Budget allocation', 'Launch planning'],
  },
  {
    number: '03',
    title: 'Execution',
    intro: 'Implement improvements with careful testing.',
    details: ['Campaign optimization', 'Listing improvements', 'Inventory alignment', 'Performance monitoring'],
  },
  {
    number: '04',
    title: 'Reporting',
    intro: 'Translate performance into clear business insights.',
    details: ['Weekly updates', 'Performance dashboards', 'Opportunity reviews', 'Action plans'],
  },
  {
    number: '05',
    title: 'Continuous Growth',
    intro: 'Keep improving performance with disciplined iteration.',
    details: ['Scale what works', 'Test new opportunities', 'Protect profitability', 'Support long-term growth'],
  },
];

export default function WorkingProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="working-process" id="process">
      <div className="working-process-grid" />
      <div className="working-process-glow" />

      <div className="working-process-shell">
        <div className="working-process-topline">
          <Reveal><p className="section-label">Working Together</p></Reveal>
          <Reveal delay={80}><span>08 · PROCESS</span></Reveal>
        </div>

        <div className="working-process-heading">
          <Reveal>
            <h2>
              A structured process.
              <br />
              <em>Built for predictable growth.</em>
            </h2>
          </Reveal>

          <Reveal className="working-process-intro" delay={100}>
            <p>
              Every Amazon account is different, but successful growth follows a structured process.
              I focus on understanding the business first, then building strategies that improve
              profitability, efficiency and long-term performance.
            </p>
          </Reveal>
        </div>

        <div className="working-process-layout">
          <div className="working-process-timeline">
            {steps.map((step, index) => {
              const isActive = activeStep === index;

              return (
                <Reveal key={step.title} delay={index * 70}>
                  <button
                    type="button"
                    className={`working-process-step ${isActive ? 'is-active' : ''}`}
                    onMouseEnter={() => setActiveStep(index)}
                    onFocus={() => setActiveStep(index)}
                    onClick={() => setActiveStep(index)}
                    aria-pressed={isActive}
                  >
                    <span className="working-process-number">{step.number}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.intro}</p>
                    </div>
                    <i>{isActive ? '●' : '○'}</i>
                  </button>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="working-process-panel" delay={130}>
            <span className="working-process-panel-index">{steps[activeStep].number}</span>
            <small>ACTIVE STEP</small>
            <h3>{steps[activeStep].title}</h3>
            <p>{steps[activeStep].intro}</p>

            <div className="working-process-detail-list">
              {steps[activeStep].details.map((detail, index) => (
                <span key={detail}>
                  <b>0{index + 1}</b>
                  {detail}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="working-process-closing">
          <span>LONG-TERM FOCUS</span>
          <p>
            The objective is never short-term wins. It is building an Amazon business
            that continues to perform month after month.
          </p>
          <a href="#contact">Start the process <b>↗</b></a>
        </Reveal>
      </div>
    </section>
  );
}
