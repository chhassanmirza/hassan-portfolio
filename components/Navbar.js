'use client';

import { useEffect, useState } from 'react';

const links = [
  ['Featured Case', 'featured-case', true],
  ['Results', 'results', false],
  ['Services', 'services', false],
  ['Experience', 'about', false],
  ['Testimonials', 'testimonials', false],
  ['Contact', 'contact', false],
];

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 90);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <a href="#top" className="brand" aria-label="Hassan Ali homepage">
        <span>HASSAN</span> ALI
      </a>

      <button
        className="menu-button"
        type="button"
        onClick={() => setMenu((value) => !value)}
        aria-label="Toggle navigation"
        aria-expanded={menu}
      >
        <span />
        <span />
      </button>

      <div className={`nav-links ${menu ? 'open' : ''}`}>
        {links.map(([label, id, featured]) => (
          <a
            key={id}
            href={`#${id}`}
            className={featured ? 'nav-featured-link' : ''}
            onClick={() => setMenu(false)}
          >
            {featured && <span className="nav-featured-arrow">↗</span>}
            <span>{label}</span>
          </a>
        ))}
      </div>

      <a className="nav-cta magnetic" href="#contact">
        Let&apos;s Talk <span>↗</span>
      </a>
    </nav>
  );
}
