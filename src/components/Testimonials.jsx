import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icons.jsx';
import { testimonials } from '../data.js';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);
  const n = testimonials.length;

  const go = (dir) => setI((cur) => (cur + dir + n) % n);

  // Autoplay 5 detik, berhenti saat hover/fokus
  useEffect(() => {
    if (paused) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const t = setInterval(() => setI((cur) => (cur + 1) % n), 5000);
    return () => clearInterval(t);
  }, [paused, n]);

  const t = testimonials[i];

  return (
    <div className="testi reveal" aria-labelledby="testi-title">
      <p className="label">TESTIMONIALS</p>
      <h2 id="testi-title" className="testi__title">What Clients Say</h2>

      <div
        className="testi__slider"
        role="group"
        aria-roledescription="carousel"
        aria-label="Testimoni klien"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <button type="button" className="testi__arrow" aria-label="Testimoni sebelumnya" onClick={() => go(-1)}>
          <Icon name="left" size={22} />
        </button>

        <figure key={i} className="testi__card" aria-live="polite">
          <Icon name="quote" size={26} className="testi__quote" />
          <blockquote>{t.text}</blockquote>
          <figcaption>
            <img src={t.avatar} alt={`Foto ${t.name}`} width="40" height="40" loading="lazy" decoding="async" />
            <span>
              <strong>{t.name}</strong>
              <em>{t.role}</em>
            </span>
          </figcaption>
        </figure>

        <button type="button" className="testi__arrow" aria-label="Testimoni berikutnya" onClick={() => go(1)}>
          <Icon name="right" size={22} />
        </button>
      </div>

      <div className="testi__dots">
        {testimonials.map((x, idx) => (
          <button
            key={x.name}
            type="button"
            className={idx === i ? 'is-active' : ''}
            aria-label={`Tampilkan testimoni ${idx + 1}`}
            aria-current={idx === i}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </div>
  );
}
