import { useState } from 'react';
import Logo from './Logo.jsx';
import { Icon } from './Icons.jsx';
import { footer, socials, profile } from '../data.js';

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Footer() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState({ type: '', text: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!emailRe.test(email.trim())) {
      setMsg({ type: 'error', text: 'Masukkan alamat email yang valid.' });
      return;
    }
    // GANTI: sambungkan ke layanan newsletter (Mailchimp, Buttondown, dll).
    setMsg({ type: 'ok', text: 'Terima kasih sudah berlangganan!' });
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Logo />
          <p className="footer__tag">{footer.tagline}</p>
        </div>

        <nav aria-label="Tautan cepat">
          <h2 className="footer__title">TAUTAN CEPAT</h2>
          <ul className="footer__links">
            {footer.quickLinks.map((l) => (
              <li key={l.id}><a href={`#${l.id}`}>{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer__title">IKUTI SAYA</h2>
          <ul className="footer__social">
            {socials.map((s) => (
              <li key={s.name}>
                <a href={s.url} className="social-btn" aria-label={s.name} target="_blank" rel="noreferrer">
                  <Icon name={s.icon} size={16} />
                </a>
              </li>
            ))}
          </ul>
          <p className="footer__avail">
            {footer.availability}
            <br />
            {footer.availability2}
          </p>
        </div>

       
      </div>

     
    </footer>
  );
}
