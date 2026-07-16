'use client';

import Reveal from './Reveal';

const groups = [
  {
    number: '01',
    title: 'Advertising & Analytics',
    intro: 'Platforms used to manage advertising, understand customer demand and evaluate account performance.',
    tools: [
      ['Amazon Ads Console', 'Campaign management and placement optimization'],
      ['Brand Analytics', 'Search behavior and market demand analysis'],
      ['Search Query Performance', 'Funnel performance and conversion insight'],
      ['Amazon Attribution', 'External traffic measurement'],
      ['Amazon DSP', 'Audience targeting and retargeting strategy'],
    ],
  },
  {
    number: '02',
    title: 'Research & Market Intelligence',
    intro: 'Tools used to identify demand, understand competition and build stronger keyword strategies.',
    tools: [
      ['Helium 10', 'Keyword research, indexing and rank tracking'],
      ['DataDive', 'Advanced keyword and competitor analysis'],
      ['Jungle Scout', 'Market research and opportunity validation'],
      ['Keepa', 'Pricing history, demand trends and competitor tracking'],
    ],
  },
  {
    number: '03',
    title: 'Profitability & Reporting',
    intro: 'Systems used to connect advertising performance with profitability and commercial decision making.',
    tools: [
      ['SellerBoard', 'Profitability and contribution margin tracking'],
      ['Microsoft Excel', 'Data analysis and performance modelling'],
      ['Google Sheets', 'Collaborative reporting and dashboards'],
      ['Bulk Sheets', 'Large scale campaign management'],
    ],
  },
  {
    number: '04',
    title: 'Operations & Collaboration',
    intro: 'Tools used to manage account execution, catalog work and communication across teams.',
    tools: [
      ['Amazon Flat Files', 'Catalog creation and bulk listing updates'],
      ['ClickUp', 'Project planning and task ownership'],
      ['Slack', 'Fast team and client communication'],
      ['Google Workspace', 'Reporting, documentation and collaboration'],
    ],
  },
];

const marqueeTools = [
  'Amazon Ads',
  'Helium 10',
  'DataDive',
  'SellerBoard',
  'Brand Analytics',
  'Keepa',
  'Jungle Scout',
  'Search Query Performance',
  'Excel',
  'Google Sheets',
];

export default function ToolsStack() {
  return (
    <section className="tools-stack" id="tools">
      <div className="tools-stack-grid" />
      <div className="tools-stack-glow" />

      <div className="tools-stack-shell">
        <div className="tools-stack-topline">
          <Reveal><p className="section-label">Technology Stack</p></Reveal>
          <Reveal delay={80}><span>09 · TOOLS</span></Reveal>
        </div>

        <div className="tools-stack-heading">
          <Reveal>
            <h2>
              The tools behind
              <br />
              <em>better Amazon decisions.</em>
            </h2>
          </Reveal>

          <Reveal className="tools-stack-intro" delay={100}>
            <p>
              I use Amazon data, advertising platforms and research tools to identify
              opportunities, improve efficiency and support clearer commercial decisions.
            </p>
          </Reveal>
        </div>

        <div className="tools-stack-groups">
          {groups.map((group, groupIndex) => (
            <Reveal
              className="tools-stack-group"
              key={group.title}
              delay={groupIndex * 75}
            >
              <div className="tools-stack-group-head">
                <span>{group.number}</span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.intro}</p>
                </div>
              </div>

              <div className="tools-stack-list">
                {group.tools.map(([name, use], toolIndex) => (
                  <article className="tools-stack-card" key={name}>
                    <span>0{toolIndex + 1}</span>
                    <div>
                      <h4>{name}</h4>
                      <p>{use}</p>
                    </div>
                    <i>↗</i>
                  </article>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="tools-stack-marquee" aria-label="Amazon tools and platforms">
        <div className="tools-stack-track">
          {[...marqueeTools, ...marqueeTools].map((tool, index) => (
            <span key={`${tool}-${index}`}><i />{tool}</span>
          ))}
        </div>
      </div>

      <div className="tools-stack-shell tools-stack-bottom">
        <Reveal className="tools-stack-statement">
          <span>EXPERIENCE OVER SOFTWARE</span>
          <p>Tools provide the data. Experience determines what action to take.</p>
          <a href="#contact">Discuss your account <b>↗</b></a>
        </Reveal>
      </div>
    </section>
  );
}
