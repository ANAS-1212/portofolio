import { Icon } from './Icons.jsx';
import { projects } from '../data.js';

export default function Projects() {
  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <header className="projects__head reveal">
          <div>
            <p className="label">Projek Saya</p>
            <h2 id="projects-title">Pilihan Projek</h2>
          </div>
          <a href="#projects" className="projects__all">
            LIHAT SEMUA PROYEK <Icon name="arrow" size={18} />
          </a>
        </header>
        <ul className="projects__grid">
          {projects.map((p, i) => (
            <li key={p.title} className="card project reveal" style={{ '--d': `${i * 110}ms` }}>
              <div className="project__img">
                <img src={p.image} alt={`Tangkapan layar proyek ${p.title}`} width="640" height="360" loading="lazy" decoding="async" />
              </div>
              <div className="project__body">
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
                <a href={p.url} className="icon-btn" aria-label={`Buka project ${p.title}`} target="_blank" rel="noreferrer">
                  <Icon name="external" size={16} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
