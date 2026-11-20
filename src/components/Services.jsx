import { IconBox } from './Icons.jsx';
import { services } from '../data.js';

export default function Services() {
  return (
    <section id="services" className="section services" aria-labelledby="services-title">
      <svg className="services__wave" viewBox="0 0 600 160" aria-hidden="true" focusable="false">
        <path d="M0 110C80 40 150 150 240 90S400 10 470 70 560 90 600 40" fill="none" stroke="#ff5a00" strokeWidth="1.200" />
        <path d="M0 125C90 60 160 160 250 105S410 30 480 88 565 108 600 62" fill="none" stroke="#ff5a00" strokeWidth="1" opacity=".6" />
        <path d="M0 140C100 80 170 170 260 120S420 50 490 106 570 126 600 84" fill="none" stroke="#ff7a2e" strokeWidth=".8" opacity=".4" />
      </svg>
      <div className="container">
        <header className="section__head section__head--center reveal">
          <p className="label">Apa yang bisa saya lakukan</p>
          <h2 id="services-title">Layanan yang Saya Tawarkan</h2>
        </header>
        <ul className="services__grid">
          {services.map((s, i) => (
            <li key={s.title} className="card reveal" style={{ '--d': `${i * 100}ms` }}>
              <IconBox name={s.icon} />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
