import Reveal from './Reveal'; import Icon from './Icon';
const services=[['PPC Management','Campaign architecture, search-term harvesting, placement control, bid optimization and profitable scaling across Sponsored Products, Brands and Display.'],['Advanced Brand Management','Full account ownership—from strategic planning and catalog health to daily execution, profitability tracking and stakeholder reporting.'],['SEO & Listing Optimization','Keyword research, indexing checks, title and bullet optimization, backend terms and rank-recovery plans built around conversion.'],['Analytics & Reporting','Clear weekly and monthly reporting using Brand Analytics, Search Query Performance, SellerBoard and custom performance dashboards.'],['New Product Launches','Launch strategy covering keyword momentum, campaign sequencing, review readiness, organic rank milestones and controlled spend.'],['US & UK Marketplaces','Localized account strategy for Amazon.com and Amazon.co.uk with marketplace-specific keywords, competition and unit economics.']];
const offers=[['01','Account Audit','A structured review of listings, advertising history, keyword ranks, competition and profitability to identify fast wins and larger growth opportunities.'],['02','Pre-Launch Phase','A tailored roadmap based on the product, category and commercial targets—whether the priority is optimization, relaunching or aggressive market entry.'],['03','Launch Phase','Fast execution across campaign structure, keyword testing and placement strategy to build sales velocity without losing control of efficiency.'],['04','Post-Launch & Reporting','Ongoing optimization supported by transparent reports covering spend, sales, ACoS, TACoS, conversion and the actions planned next.']];
const cases=[{brand:'LUXETAIL · AMAZON US',title:'Pet Supplies — Ranking Recovery & TACoS Control',metrics:[['Revenue growth','+70%'],['TACoS achieved','≤15%'],['Organic sales ratio','>40%'],['Wasted spend reduced','−20%']],tag:'Ranking Recovery'},{brand:'MAGNILAY · AMAZON US',title:'Yoga Mat Bag — ACoS Turnaround & ROAS Growth',metrics:[['ACoS reduction','54% → 33%'],['ROAS improvement','+40%'],['Organic rank lift','+35%']],tag:'Account Turnaround'},{brand:'KITCHENTHINKER · AMAZON US',title:'Dough Whisk — Launch to Sustained Profitability',metrics:[['Profits generated','$40K+'],['ACoS sustained','28%–32%'],['TACoS sustained','10%–15%'],['Main keyword rank','Top 5']],tag:'Launched from Scratch'},{brand:"LINNIE'S STICKERS · AMAZON US",title:'Vinyl Stickers — PPC Revamp & Consistent Scaling',metrics:[['ACoS sustained','35%–40%'],['TACoS sustained','15%–20%'],['Revenue growth MoM','8%–10%']],tag:'PPC Strategy Revamp'}];
const tools=['Helium 10','DataDive','SellerBoard','Jungle Scout','Keepa','Amazon Ads Console','Brand Analytics','Search Query Performance','Amazon Attribution','DSP','Bulk Sheets','Excel & Google Sheets'];
export function About(){
  const focus=[
    ['01','Profitability first','Every decision is evaluated against sales, margin, conversion and long-term account health.'],
    ['02','Full-account thinking','Advertising, listings, pricing, inventory and organic rank are managed as one connected system.'],
    ['03','Clear ownership','You know what changed, why it changed and what action comes next.']
  ];
  return <section className="section consultant-about" id="about">
    <div className="consultant-about-top">
      <Reveal><p className="section-label">Your Growth Partner</p></Reveal>
      <Reveal delay={80}><span>02 — APPROACH</span></Reveal>
    </div>

    <div className="consultant-about-heading">
      <Reveal><h2>More than campaign management.<br/><em>I help build profitable Amazon businesses.</em></h2></Reveal>
      <Reveal delay={100}><p>Most Amazon accounts do not struggle because of one campaign. They struggle because advertising, listing quality, pricing, inventory and profitability are not managed together.</p></Reveal>
    </div>

    <div className="consultant-about-grid">
      <Reveal className="consultant-about-visual">
        <div className="consultant-about-glow"/><div className="consultant-about-gridlines"/>
        <img src="/photo.png" alt="Hassan Ali, Amazon Brand and PPC Manager"/>
        <div className="consultant-about-name"><strong>Hassan Ali</strong><span>Amazon Brand & PPC Manager</span></div>
      </Reveal>

      <div className="consultant-about-copy">
        <Reveal className="consultant-about-story" delay={90}>
          <span>HOW I WORK</span>
          <p>I work as an extension of your business—not as someone who only changes bids. I connect PPC performance with conversion, organic rank, inventory, pricing and contribution margin so every action supports the wider account.</p>
          <p>My focus is sustainable growth, disciplined execution and transparent communication. Clients receive a clear view of performance, the decisions being made and the commercial reason behind each next step.</p>
        </Reveal>

        <div className="consultant-focus-list">
          {focus.map((item,i)=><Reveal key={item[1]} className="consultant-focus-row" delay={130+i*65}>
            <span>{item[0]}</span><div><h3>{item[1]}</h3><p>{item[2]}</p></div><i>↗</i>
          </Reveal>)}
        </div>
      </div>
    </div>

    <Reveal className="consultant-about-cta">
      <span>THE OUTCOME</span>
      <p>Better decisions, stronger account control and growth that is built to last.</p>
      <a href="#cases">See the results <b>↗</b></a>
    </Reveal>
  </section>
}
export function Services(){
  const icons=['chart','layers','search','pulse','rocket','globe'];
  const details=[
    ['Sponsored Products','Sponsored Brands','Sponsored Display'],
    ['Catalog health','Inventory planning','Daily operations'],
    ['Keyword mapping','Copy optimization','Indexing checks'],
    ['Weekly reporting','Profitability views','Action plans'],
    ['Launch sequencing','Ranking strategy','Controlled scaling'],
    ['Amazon.com','Amazon.co.uk','Localized strategy']
  ];
  return <section className="section services-premium" id="services">
    <div className="services-orb services-orb-one"/><div className="services-orb services-orb-two"/>
    <div className="services-topline"><Reveal><p className="section-label">Services</p></Reveal><Reveal delay={80}><span>02 — CAPABILITIES</span></Reveal></div>
    <div className="services-intro">
      <Reveal><h2>Strategy, execution<br/><em>and ownership.</em></h2></Reveal>
      <Reveal delay={110} className="services-intro-copy"><p>I manage the parts of an Amazon account that directly influence growth—from campaign structure and listing conversion to reporting and commercial decision-making.</p><a href="#contact">Discuss your account <span>↗</span></a></Reveal>
    </div>
    <div className="services-showcase">
      {services.map((s,i)=><Reveal key={s[0]} className={`service-premium-card ${i===0?'service-featured':''}`} delay={i*70}>
        <div className="service-card-top"><span>0{i+1}</span><div className="service-premium-icon"><Icon type={icons[i]}/></div></div>
        <div className="service-card-copy"><small>{i===0?'CORE SERVICE':'SPECIALIZED SUPPORT'}</small><h3>{s[0]}</h3><p>{s[1]}</p></div>
        <div className="service-detail-list">{details[i].map((d,j)=><span key={d}><i>0{j+1}</i>{d}</span>)}</div>
        <a href="#contact" className="service-card-link">Explore service <b>↗</b></a>
      </Reveal>)}
    </div>
    <Reveal className="services-note"><span>BUILT AROUND YOUR ACCOUNT</span><p>No recycled template. The strategy is shaped by your product, margins, stage of growth and marketplace competition.</p><i>Amazon US · Amazon UK · FBA Brands</i></Reveal>
  </section>
}
export function Process(){
  const steps=[
    ['01','Audit','Understand performance, profitability, listings, rankings and operational constraints.'],
    ['02','Prioritize','Separate quick wins from structural issues and define the highest-impact actions.'],
    ['03','Execute','Implement campaign, listing, catalog and account improvements with clear ownership.'],
    ['04','Optimize','Review results, isolate what is working and remove spend or activity that is not.'],
    ['05','Scale','Increase investment where profitable growth and operational readiness support it.']
  ];
  return <section className="section process-section" id="process">
    <Reveal className="section-head split">
      <div><p className="section-label">How I Work</p><h2>A disciplined path<br/><em>from data to growth.</em></h2></div>
      <p className="lead">A clear operating rhythm keeps strategy connected to execution and makes every decision easier to understand.</p>
    </Reveal>
    <div className="process-grid">{steps.map((s,i)=><Reveal key={s[1]} className="process-card" delay={i*70}>
      <span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p>{i<steps.length-1&&<i>→</i>}
    </Reveal>)}</div>
  </section>
}
export function Tools(){return <section className="automation-band" id="tools"><div className="automation-copy"><Reveal><p className="section-label">Daily Tool Stack</p><h2>Amazon growth,<br/><em>powered by data.</em></h2><p>I work inside the platforms that reveal what customers search, where ads leak spend and how organic visibility is changing.</p></Reveal></div><Reveal className="tool-cloud" delay={100}>{tools.map((t,i)=><span key={t} style={{'--i':i}}>{t}</span>)}</Reveal></section>}
export function Offer(){return <section className="section offer-section" id="offer"><Reveal className="section-head center"><p className="section-label">What I Have To Offer</p><h2>A clear path from audit<br/><em>to profitable scale.</em></h2></Reveal><div className="offer-list">{offers.map((o,i)=><Reveal key={o[0]} className="offer-row" delay={i*70}><span className="offer-number">{o[0]}</span><h3>{o[1]}</h3><p>{o[2]}</p><span className="offer-line"/></Reveal>)}</div></section>}
export function Cases(){return <section className="section case-section" id="cases"><Reveal className="section-head split"><div><p className="section-label">Selected Work</p><h2>Proof in<br/><em>the numbers.</em></h2></div><p className="lead">Real outcomes from brands where strategy, execution and disciplined optimization worked together.</p></Reveal><div className="case-grid">{cases.map((c,i)=><Reveal key={c.title} className="case-card" delay={i*70}><div className="case-top"><span>{c.brand}</span><b>0{i+1}</b></div><h3>{c.title}</h3><div className="metrics">{c.metrics.map(m=><div key={m[0]}><span>{m[0]}</span><strong>{m[1]}</strong></div>)}</div><div className="case-footer"><span>{c.tag}</span><i>View outcome ↗</i></div></Reveal>)}</div></section>}
export function Testimonials(){const ts=[['“Very pleased with Hassan’s work. He delivered the research project on time and to the expected quality.”','Competing Product Market Research'],['“Hassan was responsive, knowledgeable, and delivered exactly what was needed for our Amazon PPC account.”','Amazon PPC Specialist'],['“Good working with Hassan. Clear communication and a collaborative approach throughout the project.”','Amazon Break-Even Model']];return <section className="section testimonials"><Reveal className="section-head center"><p className="section-label">Client Feedback</p><h2>Trusted for clarity,<br/><em>reliability and results.</em></h2></Reveal><div className="testimonial-grid">{ts.map((t,i)=><Reveal key={t[1]} className="testimonial" delay={i*80}><div className="stars">★★★★★</div><blockquote>{t[0]}</blockquote><p>{t[1]}</p></Reveal>)}</div><Reveal className="upwork-strip"><div><strong>13+</strong><span>Completed jobs</span></div><div><strong>5.0</strong><span>Average rating</span></div><div><strong>5+</strong><span>Years experience</span></div><a href="https://www.upwork.com/freelancers/~016a939f6fc8b33d2c" target="_blank" rel="noreferrer">View Upwork Profile ↗</a></Reveal></section>}
export function Contact(){return <><section className="contact" id="contact"><div className="contact-rings"/><div className="contact-grid"><Reveal><p className="section-label light">Let's Connect</p><h2>REACH<br/><em>OUT.</em></h2><p>Whether you need a specialist to take over PPC or a long-term partner to help manage your Amazon brand, let’s discuss the opportunity.</p><div className="contact-buttons"><a href="mailto:chhassanali568@gmail.com">Email me <span>↗</span></a><a href="https://www.linkedin.com/in/hassan-ali-amazon-brand-manager" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><a href="https://www.upwork.com/freelancers/~016a939f6fc8b33d2c" target="_blank" rel="noreferrer">Upwork <span>↗</span></a></div></Reveal><Reveal className="contact-portrait" delay={120}><div className="contact-glow"/><img src="/photo.png" alt="Hassan Ali"/></Reveal></div></section><footer><span>© 2026 Hassan Ali</span><span>Amazon Brand & PPC Manager</span><a href="#top">Back to top ↑</a></footer></>}
