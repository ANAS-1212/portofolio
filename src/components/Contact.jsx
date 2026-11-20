import { useState } from 'react';
import { Icon, IconBox } from './Icons.jsx';
import { contact, profile } from '../data.js';

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Nama wajib diisi.';
    if (!emailRe.test(form.email.trim())) e.email = 'Masukkan alamat email yang valid.';
    if (form.message.trim().length < 10) e.message = 'Pesan minimal harus 10 karakter.';
    return e;
  };

  const onChange = (ev) => {
    setForm({ ...form, [ev.target.name]: ev.target.value });
    if (errors[ev.target.name]) setErrors({ ...errors, [ev.target.name]: undefined });
    if (status === 'sent') setStatus('idle');
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus('sending');
    // GANTI: pasang EmailJS / Formspree di sini (kirim `form` lewat fetch/emailjs.send).
    // Contoh Formspree: fetch('https://formspree.io/f/XXXX', { method: 'POST', body: JSON.stringify(form) })
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <div className="contact reveal" style={{ '--d': '100ms' }} aria-labelledby="contact-title">
      <p className="label">{contact.label}</p>
      <h2 id="contact-title" className="contact__title">{contact.heading}</h2>
      <p className="contact__text">{contact.text}</p>

      <div className="contact__cols">
        <ul className="contact__info">
          <li><Icon name="mail" size={18} /> <span>{profile.email}</span></li>
          <li><Icon name="phone" size={18} /> <span>{profile.phone}</span></li>
          <li><Icon name="pin" size={18} /> <span>{profile.location}</span></li>
        </ul>

        <form className="contact__form" onSubmit={onSubmit} noValidate>
          <div className="field">
            <label htmlFor="c-name" className="sr-only">Nama Anda</label>
            <input id="c-name" name="name" type="text" placeholder="Nama Anda" autoComplete="name"
              value={form.name} onChange={onChange} aria-invalid={!!errors.name} aria-describedby="e-name" />
            <small id="e-name" className="field__error" role="alert">{errors.name}</small>
          </div>
          <div className="field">
            <label htmlFor="c-email" className="sr-only">Email Anda</label>
            <input id="c-email" name="email" type="email" placeholder="Email Anda" autoComplete="email"
              value={form.email} onChange={onChange} aria-invalid={!!errors.email} aria-describedby="e-email" />
            <small id="e-email" className="field__error" role="alert">{errors.email}</small>
          </div>
          <div className="field">
            <label htmlFor="c-msg" className="sr-only">Pesan Anda</label>
            <textarea id="c-msg" name="message" rows="4" placeholder="Pesan Anda"
              value={form.message} onChange={onChange} aria-invalid={!!errors.message} aria-describedby="e-msg" />
            <small id="e-msg" className="field__error" role="alert">{errors.message}</small>
          </div>
          <button type="submit" className="btn btn--solid btn--block" disabled={status === 'sending'}>
            {status === 'sending' ? 'MENGIRIM...' : <>KIRIM PESAN <Icon name="send" size={16} /></>}
          </button>
          <p className={`form-ok ${status === 'sent' ? 'is-visible' : ''}`} role="status">
            {status === 'sent' ? <><Icon name="check" size={16} /> Pesan terkirim!</> : ''}
          </p>
        </form>
      </div>
    </div>
  );
}
