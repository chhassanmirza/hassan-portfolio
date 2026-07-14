'use client';
import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

const metrics=[
  {value:1,prefix:'$',suffix:'M+',label:'Managed Ad Sales',note:'Across growth-focused Amazon accounts'},
  {value:5,suffix:'+',label:'Years Experience',note:'PPC, brand management and operations'},
  {value:25,suffix:'+',label:'Projects Completed',note:'Across Amazon PPC, brand management and account operations'},
  {value:5,suffix:'.0',label:'Client Rating',note:'Built through clarity and accountability'},
  {display:'US · UK',label:'Marketplace Expertise',note:'Localized strategy for each market'},
  {value:50,suffix:'+',label:'Brands Managed',note:'Supported across multiple Amazon categories and marketplaces'}
];

const specialties=['Amazon PPC','Brand Management','Listing Optimization','Product Launches','Catalog Management','Profitability Reporting'];
const workflowSteps=[
  ['01','Audit','Find the leaks, missed opportunities and commercial constraints.'],
  ['02','Strategy','Create a clear plan around profitability, ranking and growth.'],
  ['03','Execution','Implement campaigns, listing improvements and account actions.'],
  ['04','Optimization','Use performance data to improve efficiency and conversion.'],
  ['05','Scaling','Increase sales while protecting margins and account health.']
];

function Counter({metric,active}){
  const [count,setCount]=useState(0);
  useEffect(()=>{
    if(!active||metric.display)return;
    let frame; const started=performance.now(); const duration=1100;
    const animate=time=>{
      const progress=Math.min((time-started)/duration,1);
      const eased=1-Math.pow(1-progress,3);
      setCount(Math.round(metric.value*eased));
      if(progress<1)frame=requestAnimationFrame(animate);
    };
    frame=requestAnimationFrame(animate);
    return()=>cancelAnimationFrame(frame);
  },[active,metric]);
  if(metric.display)return metric.display;
  return `${metric.prefix||''}${count}${metric.suffix||''}`;
}

export default function Results(){
  const ref=useRef(null); const [active,setActive]=useState(false);
  useEffect(()=>{
    const node=ref.current; if(!node)return;
    const observer=new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting){setActive(true);observer.disconnect();}
    },{threshold:.2});
    observer.observe(node); return()=>observer.disconnect();
  },[]);
  return <section className="results-section" id="results" ref={ref}>
    <div className="results-shell">
      <div className="results-topline">
        <Reveal><p className="section-label">Trusted by Results</p></Reveal>
        <Reveal delay={80}><span>01 — PROOF</span></Reveal>
      </div>
      <div className="results-heading-grid">
        <Reveal><h2>Experience is useful.<br/><em>Results build trust.</em></h2></Reveal>
        <Reveal delay={100}><p>I don&apos;t optimize campaigns in isolation. Every decision is guided by profitability, organic growth, inventory health and long-term brand value. That&apos;s how scalable Amazon businesses are built.</p></Reveal>
      </div>
      <div className="results-metrics">
        {metrics.map((m,i)=><Reveal key={m.label} className="result-metric-card" delay={i*65}>
          <span className="result-index">0{i+1}</span>
          <strong><Counter metric={m} active={active}/></strong>
          <h3>{m.label}</h3><p>{m.note}</p>
        </Reveal>)}
      </div>
    </div>
    <div className="results-marquee"><div className="results-marquee-track">
      {[...specialties,...specialties].map((item,i)=><span key={`${item}-${i}`}><i/>{item}</span>)}
    </div></div>
    <div className="results-shell results-statement-wrap">
      <Reveal className="results-statement"><span>BUSINESS PRINCIPLE</span><blockquote>Your Amazon business does not need more ad spend.<em> It needs better decisions.</em></blockquote></Reveal>
      <div className="results-process">
        {workflowSteps.map(([n,t,d],i)=><Reveal key={t} className="results-process-step" delay={i*70}>
          <span>{n}</span><div><h3>{t}</h3><p>{d}</p></div>{i<workflowSteps.length-1&&<i>→</i>}
        </Reveal>)}
      </div>
    </div>
  </section>;
}
