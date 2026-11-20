import { IconBox } from './Icons.jsx';
import { about } from '../data.js';

export default function About() {
  return (
    <section id="about" className="section section--alt about" aria-labelledby="about-title">
      <div className="container about__grid">
        <div className="about__left reveal">
          <p className="label">{about.label}</p>
          <h2 id="about-title" className="about__title">{about.heading}</h2>
          <p className="about__text">{about.text}</p>
          <p className="about__sign" aria-hidden="true">{about.signature}</p>
        </div>
        <ul className="about__info">
          {about.info.map((it, i) => (
            <li key={it.label} className="reveal" style={{ '--d': `${i * 90}ms` }}>
              <IconBox name={it.icon} />
              <div>
                <strong>{it.label}</strong>
                <span>{it.value}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
