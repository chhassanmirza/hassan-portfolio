'use client';

import { useEffect, useState } from 'react';

const links = [
  ['Results', 'cases'],
  ['Services', 'services'],
  ['Experience', 'about'],
  ['Testimonials', 'testimonials'],
  ['Contact', 'contact'],
];

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <a href="#top" className="brand" aria-label="Hassan Ali homepage"><span>HASSAN</span> ALI</a>
      <button className="menu-button" type="button" onClick={() => setMenu(v => !v)} aria-label="Toggle navigation" aria-expanded={menu}><span /><span /></button>
      <div className={`nav-links ${menu ? 'open' : ''}`}>
        {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{label}</a>)}
      </div>
      <a className="nav-cta magnetic" href="#contact">Let&apos;s Talk <span>↗</span></a>
    </nav>
  );
}
