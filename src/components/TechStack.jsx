import { TechIcon } from './Icons.jsx';
import { techStack } from '../data.js';

export default function TechStack() {
  return (
    <section id="skills" className="section section--alt techstack" aria-labelledby="skills-title">
      <div className="container">
        <h2 id="skills-title" className="label reveal">TUMPUKAN TEKNOLOGI</h2>
        <ul className="techstack__list">
          {techStack.map((t, i) => (
            <li key={t.key} className="reveal" style={{ '--d': `${i * 70}ms` }}>
              <span className="techstack__icon"><TechIcon name={t.key} /></span>
              <span className="techstack__name">{t.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
