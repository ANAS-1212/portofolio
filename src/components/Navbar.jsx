import { useEffect, useState } from 'react';
import Logo from './Logo.jsx';
import { Icon } from './Icons.jsx';
import { navLinks } from '../data.js';
import useScrollSpy from '../hooks/useScrollSpy.js';

const ids = navLinks.map((l) => l.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(ids);

  // Kunci scroll body saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Tutup menu bila layar diperbesar
  useEffect(() => {
    const onResize = () => window.innerWidth >= 900 && setOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Logo onClick={close} />

        <nav className={`navbar__menu ${open ? 'is-open' : ''}`} id="main-menu" aria-label="Menu utama">
          <ul>
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={active === l.id ? 'is-active' : ''}
                  aria-current={active === l.id ? 'true' : undefined}
                  onClick={close}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          {/* <a href="#contact" className="btn btn--outline btn--sm navbar__cta-mobile" onClick={close}>
            LET'S TALK <Icon name="send" size={16} />
          </a> */}
        </nav>

        <a href="#contact" className="btn btn--outline btn--sm navbar__cta">
           <Icon name="send" size={16} />
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </div>
    </header>
  );
}
