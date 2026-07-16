'use client';

import { useRef, useState } from 'react';
import Reveal from './Reveal';

const testimonials = [
  {
    role: 'Founder | Pet Supplies Brand',
    project: 'Amazon PPC Turnaround',
    quote: 'Before working with Hassan, our Amazon brand was bleeding money on ad spend with very little to show for it. Within four months, he completely restructured our PPC strategy and helped reduce our TACoS from 58% to 16% while improving overall sales performance. For the first time, we understood where our profit was coming from and had a system we could confidently scale.',
    result: 'TACoS reduced from 58% to 16%',
  },
  {
    role: 'Amazon Brand Owner | Home & Kitchen',
    project: 'Revenue Growth',
    quote: 'Hassan helped grow our monthly revenue from $10,065 to $17,193 without sacrificing profitability. His approach to PPC is not about spending more. It is about spending smarter. Every campaign had a purpose, every decision was backed by data, and he consistently made decisions like a business owner instead of simply managing ads.',
    result: 'Monthly revenue increased to $17,193',
  },
  {
    role: 'Director of E-commerce | Consumer Goods',
    project: 'Complete Account Ownership',
    quote: 'What sets Hassan apart is that he does not just manage PPC. He understands how the entire Amazon business works together. From listings and pricing to inventory planning, reporting and advertising, every part supported the others. He even identified catalog issues that were quietly hurting our conversion rate before we realized they existed.',
    result: 'Catalog, conversion and advertising aligned',
  },
  {
    role: 'Private Label Brand | Fitness',
    project: 'Communication and Trust',
    quote: 'After disappointing experiences with previous PPC managers, working with Hassan was completely different. We received clear weekly reports, honest recommendations and complete transparency about what was working and what needed to change. Communication was proactive, and the business results consistently improved. It genuinely felt like having an extension of our own team.',
    result: 'Clear reporting and consistent improvement',
  },
  {
    role: 'Amazon Seller | US Marketplace',
    project: 'New Product Launch',
    quote: 'We launched a new product in one of Amazon’s most competitive pet supply categories, and Hassan built the launch strategy from the ground up. Within five months, the product generated over $35,000 in revenue, produced $24,000 in PPC sales with a 3.43x ROAS, reached the Top 50 Best Seller Rank, and ranked in the Top 10 organically for our target keywords. His launch strategy delivered results far beyond our expectations.',
    result: '$35K revenue in five months',
  },
];

export default function TestimonialsWall() {
  const [active, setActive] = useState(0);
  const touchStart = useRef(null);

  const previous = () => setActive((value) => (value - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((value) => (value + 1) % testimonials.length);

  const visible = [
    (active - 1 + testimonials.length) % testimonials.length,
    active,
    (active + 1) % testimonials.length,
  ];

  const onTouchStart = (event) => {
    touchStart.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event) => {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 45) distance < 0 ? next() : previous();
    touchStart.current = null;
  };

  return (
    <section className="testimonial-wall" id="testimonials">
      <div className="testimonial-wall-grid" />
      <div className="testimonial-wall-glow" />

      <div className="testimonial-wall-shell">
        <div className="testimonial-wall-topline">
          <Reveal><p className="section-label">Client Trust</p></Reveal>
          <Reveal delay={80}><span>07 · TESTIMONIALS</span></Reveal>
        </div>

        <div className="testimonial-wall-heading">
          <Reveal>
            <h2>Results show what changed.<br /><em>Client feedback shows how I work.</em></h2>
          </Reveal>
          <Reveal className="testimonial-wall-intro" delay={100}>
            <p>Clear communication, dependable execution and complete account ownership matter just as much as campaign performance.</p>
          </Reveal>
        </div>

        <div className="testimonial-stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          {visible.map((index, position) => {
            const item = testimonials[index];
            const featured = position === 1;
            return (
              <article
                key={`${item.role}-${index}`}
                className={`testimonial-wall-card ${featured ? 'is-featured' : ''}`}
                onClick={() => setActive(index)}
              >
                <div className="testimonial-wall-card-top">
                  <span className="testimonial-stars">★★★★★</span>
                  <span className="testimonial-quote-mark">“</span>
                </div>
                <blockquote>{item.quote}</blockquote>
                <div className="testimonial-wall-result">
                  <small>PROJECT RESULT</small>
                  <strong>{item.result}</strong>
                </div>
                <div className="testimonial-wall-author">
                  <span>{item.role}</span>
                  <small>{item.project}</small>
                </div>
              </article>
            );
          })}
        </div>

        <div className="testimonial-controls">
          <button type="button" onClick={previous} aria-label="Previous testimonial">←</button>
          <div className="testimonial-dots">
            {testimonials.map((item, index) => (
              <button
                type="button"
                key={item.role}
                className={index === active ? 'is-active' : ''}
                onClick={() => setActive(index)}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button type="button" onClick={next} aria-label="Next testimonial">→</button>
        </div>

        <Reveal className="testimonial-trust-strip">
          <div><strong>5.0</strong><span>Upwork Rating</span></div>
          <div><strong>25+</strong><span>Projects Completed</span></div>
          <div><strong>50+</strong><span>Brands Managed</span></div>
          <div><strong>US · UK</strong><span>Marketplace Experience</span></div>
        </Reveal>
      </div>
    </section>
  );
}
