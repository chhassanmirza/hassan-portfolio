'use client';

import { useEffect, useState } from 'react';
import Reveal from './Reveal';

const calendlyUrl = 'https://calendly.com/chhassanali568/30min';

export default function FinalContact() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <>
      <section className="final-contact" id="contact">
        <div className="final-contact-glow" />
        <div className="final-contact-rings" />

        <div className="final-contact-shell">
          <Reveal>
            <p className="section-label">Let&apos;s Build Something Better</p>
          </Reveal>

          <div className="final-contact-heading">
            <Reveal>
              <h2>
                Ready to grow your
                <br />
                <em>Amazon business?</em>
              </h2>
            </Reveal>

            <Reveal className="final-contact-copy" delay={100}>
              <p>
                Whether you are launching your first product, improving profitability
                or scaling an established brand, I would be happy to discuss your goals
                and explore how I can help.
              </p>

              <div className="final-contact-actions">
                <button type="button" onClick={() => setOpen(true)}>
                  Book a Strategy Call <span>↗</span>
                </button>

                <a href="mailto:chhassanali568@gmail.com">
                  Send an Email <span>↗</span>
                </a>
              </div>
            </Reveal>
          </div>

          <div className="final-contact-cards">
            <Reveal className="final-contact-card">
              <span>01</span>
              <small>EMAIL</small>
              <strong>chhassanali568@gmail.com</strong>
              <a href="mailto:chhassanali568@gmail.com">Start a conversation ↗</a>
            </Reveal>

            <Reveal className="final-contact-card" delay={60}>
              <span>02</span>
              <small>LINKEDIN</small>
              <strong>Connect professionally</strong>
              <a
                href="https://www.linkedin.com/in/hassan-ali-amazon-brand-manager"
                target="_blank"
                rel="noreferrer"
              >
                View profile ↗
              </a>
            </Reveal>

            <Reveal className="final-contact-card" delay={120}>
              <span>03</span>
              <small>UPWORK</small>
              <strong>Available for projects</strong>
              <a
                href="https://www.upwork.com/freelancers/~016a939f6fc8b33d2c"
                target="_blank"
                rel="noreferrer"
              >
                View Upwork ↗
              </a>
            </Reveal>

            <Reveal className="final-contact-card" delay={180}>
              <span>04</span>
              <small>LOCATION</small>
              <strong>Pakistan</strong>
              <p>Working with clients worldwide</p>
            </Reveal>
          </div>

          <Reveal className="final-contact-statement">
            <p>
              Helping Amazon brands grow through better strategy, disciplined execution
              and complete account ownership.
            </p>
          </Reveal>
        </div>
      </section>

      <footer className="final-footer">
        <span>© 2026 Hassan Ali</span>
        <span>Amazon Brand Manager | PPC Strategist</span>
        <div>
          <a
            href="https://www.linkedin.com/in/hassan-ali-amazon-brand-manager"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.upwork.com/freelancers/~016a939f6fc8b33d2c"
            target="_blank"
            rel="noreferrer"
          >
            Upwork
          </a>
          <a href="mailto:chhassanali568@gmail.com">Email</a>
        </div>
      </footer>

      {open && (
        <div className="calendly-modal" role="dialog" aria-modal="true" aria-label="Book a strategy call">
          <button
            className="calendly-modal-backdrop"
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close booking window"
          />

          <div className="calendly-modal-panel">
            <div className="calendly-modal-head">
              <div>
                <span>30 MINUTE STRATEGY CALL</span>
                <h3>Let&apos;s discuss your Amazon business.</h3>
              </div>

              <button type="button" onClick={() => setOpen(false)} aria-label="Close">
                ×
              </button>
            </div>

            <div className="calendly-modal-topics">
              <span>Brand Growth</span>
              <span>PPC</span>
              <span>Listings</span>
              <span>Product Launches</span>
            </div>

            <iframe
              src={`${calendlyUrl}?hide_gdpr_banner=1&background_color=0b0c0b&text_color=f4f0e8&primary_color=d9b36c`}
              title="Schedule a strategy call with Hassan Ali"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </>
  );
}
