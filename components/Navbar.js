'use client';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
    <a href="#top" className="brand"><span>HA</span> PORTFOLIO</a>
    <button className="menu-button" onClick={() => setMenu(v => !v)} aria-label="Toggle navigation"><span/><span/></button>
    <div className={`nav-links ${menu ? 'open' : ''}`}>
      {[['Services','services'],['Tools','tools'],['Offer','offer'],['Case Study','cases'],['Contact','contact']].map(([label,id]) =>
        <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{label}</a>)}
    </div>
    <a className="nav-cta magnetic" href="#contact">Hire Me <span>↗</span></a>
  </nav>;
}
