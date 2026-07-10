'use client';
import { useEffect, useRef } from 'react';
export default function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current, ctx = canvas.getContext('2d');
    let frame, mouse = { x: -9999, y: -9999 }, particles = [];
    const resize = () => {
      const r = canvas.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 2);
      canvas.width = r.width * dpr; canvas.height = r.height * dpr;
      ctx.setTransform(dpr,0,0,dpr,0,0);
      particles = Array.from({length: innerWidth < 800 ? 55 : 140}, () => ({
        ox: Math.random()*r.width, oy: Math.random()*r.height, r: Math.random()*1.5+.35,
        a: Math.random()*.55+.15, s: Math.random()*.006+.002, t: Math.random()*Math.PI*2
      }));
    };
    const move = e => { const r=canvas.getBoundingClientRect(); mouse={x:e.clientX-r.left,y:e.clientY-r.top}; };
    addEventListener('resize',resize); addEventListener('mousemove',move); resize();
    const draw=()=>{ const r=canvas.getBoundingClientRect(); ctx.clearRect(0,0,r.width,r.height);
      for(const p of particles){ p.t+=p.s; let x=p.ox+Math.sin(p.t*11)*18, y=p.oy+Math.cos(p.t*8)*14;
        const dx=x-mouse.x,dy=y-mouse.y,d=Math.hypot(dx,dy); if(d<145&&d>0){const f=(145-d)/145*48;x+=dx/d*f;y+=dy/d*f;}
        ctx.globalAlpha=p.a;ctx.fillStyle='#d9b36c';ctx.beginPath();ctx.arc(x,y,p.r,0,Math.PI*2);ctx.fill(); }
      frame=requestAnimationFrame(draw);}; draw();
    return()=>{cancelAnimationFrame(frame);removeEventListener('resize',resize);removeEventListener('mousemove',move);};
  },[]);
  return <canvas ref={canvasRef} className="particle-canvas"/>;
}
