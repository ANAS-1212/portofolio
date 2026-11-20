import { Icon } from './Icons.jsx';
import { profile, heroCode, socials } from '../data.js';
import useTyping from '../hooks/useTyping.js';

export default function Hero() {
  const typed = useTyping(profile.roles);

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__dots" aria-hidden="true" />
      <pre className="hero__code" aria-hidden="true">{heroCode}</pre>

      <div className="container hero__grid">
        <div className="hero__text">
          <p className="hero__hello">
            <span aria-hidden="true">👋</span> {profile.greeting}
          </p>
          <h1 id="hero-title" className="hero__title">
            {profile.firstName} <span>{profile.lastName}</span>
          </h1>
          <p className="hero__role" aria-label={profile.roles[0]}>
            <span aria-hidden="true">
              {(typed || '\u00A0').toUpperCase()}
              <i className="caret">|</i>
            </span>
          </p>
          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--solid">
              LIHAT PROYEK SAYA <Icon name="arrow" size={18} />
            </a>
          </div>

          <div className="hero__social">
            <span>TEMUKAN SAYA DI</span>
            <ul>
              {socials.map((s) => (
                <li key={s.name}>
                  <a href={s.url} className="social-btn" aria-label={s.name} target="_blank" rel="noreferrer">
                    <Icon name={s.icon} size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__shape" aria-hidden="true" />
          <div className="hero__arc" aria-hidden="true" />
          <div className="hero__float hero__photo">
            <img
              src={profile.photo}
              alt={`Foto profil ${profile.fullName}`}
              width="640"
              height="800"
              decoding="async"
              onError={(e) => {
                e.currentTarget.style.visibility = 'hidden';
              }}
            />
          </div>
          <div className="hero__badge hero__float" style={{ animationDelay: '-2s' }}>
            <div>
              <strong>{profile.years}</strong>
              <span>
                TAHUN
                <br />
                PENGALAMAN
              </span>
            </div>
            <Icon name="code" size={18} />
          </div>
          <div className="hero__fade" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
