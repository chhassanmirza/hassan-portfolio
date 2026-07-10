'use client';
import { useEffect, useRef, useState } from 'react';
import ParticleCanvas from './ParticleCanvas';

const tools=['Helium 10','DataDive','SellerBoard','Jungle Scout','Keepa'];
const roles=['BRAND & PPC MANAGER','GROWTH STRATEGIST','ACCOUNT MANAGER'];

export default function Hero(){
  const [typed,setTyped]=useState(''); const visualRef=useRef(null);
  useEffect(()=>{let w=0,i=0,del=false,t; const tick=()=>{const word=roles[w];
    if(!del){i++;setTyped(word.slice(0,i));if(i===word.length){del=true;t=setTimeout(tick,1800);return;}}
    else{i--;setTyped(word.slice(0,i));if(i===0){del=false;w=(w+1)%roles.length;}}
    t=setTimeout(tick,del?40:72);}; t=setTimeout(tick,1250); return()=>clearTimeout(t);},[]);
  useEffect(()=>{const el=visualRef.current;if(!el)return; const move=e=>{const r=el.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    el.style.setProperty('--mx',`${x*18}px`);el.style.setProperty('--my',`${y*14}px`);
    el.style.setProperty('--gx',`${(x+.5)*100}%`);el.style.setProperty('--gy',`${(y+.5)*100}%`);};
    const leave=()=>{el.style.setProperty('--mx','0px');el.style.setProperty('--my','0px');};
    el.addEventListener('mousemove',move);el.addEventListener('mouseleave',leave);return()=>{el.removeEventListener('mousemove',move);el.removeEventListener('mouseleave',leave);};},[]);
  return <section className="hero" id="top">
    <div className="hero-grid"/>
    <div className="hero-copy">
      <div className="hero-sequence seq-1 eyebrow"><span/> Amazon Brand & PPC Manager</div>
      <h1 className="hero-sequence seq-2 hero-title-fixed"><span>AMAZON</span><span className="typed-line">{typed}<i>_</i></span></h1>
      <p className="hero-sequence seq-3 hero-kicker">MAXIMIZING AMAZON GROWTH</p>
      <p className="hero-sequence seq-4 hero-kicker secondary">SCALING SALES WITH DATA-DRIVEN STRATEGIES</p>
      <h2 className="hero-sequence seq-5">Amazon PPC & Account Management Specialist</h2>
      <p className="hero-sequence seq-6 hero-description">I help brands grow on Amazon through full account management and advanced PPC strategies. From campaign scaling to listing optimization, I focus on maximizing profitability.</p>
      <div className="hero-sequence seq-7 hero-actions"><a className="button gold magnetic" href="#cases">View Case Studies <span>→</span></a><a className="button ghost magnetic" href="#contact">Hire Me</a></div>
      <div className="hero-sequence seq-8 tool-marquee"><div className="tool-track">{[...tools,...tools].map((x,i)=><span key={`${x}-${i}`}><b>{x[0]}</b>{x}</span>)}</div></div>
    </div>
    <div className="hero-visual hero-sequence seq-photo" ref={visualRef}>
      <ParticleCanvas/><div className="cursor-halo"/><div className="portrait-orbit orbit-one"/><div className="portrait-orbit orbit-two"/><div className="portrait-glow"/>
      <div className="portrait-parallax"><img src="/photo.png" alt="Hassan Ali" className="portrait"/></div>
      <div className="portrait-caption"><span>HASSAN</span><strong>ALI</strong></div><div className="availability"><i/> Available for select projects</div>
    </div>
    <a href="#about" className="scroll-cue"><span>Scroll</span><i>↓</i></a>
  </section>;
}
