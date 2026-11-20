// Logo: huruf "A" geometris (chevron) oranye + teks ARJUN DEV.
export default function Logo({ onClick }) {
  return (
    <a href="#home" className="logo" aria-label="Muhammad Anas Hilmi Yahya - ke beranda" onClick={onClick}>
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path d="M16 3L3 29h7l6-13 6 13h7z" fill="#ff5a00" />
        <path d="M16 15l-3.500 7.500h7z" fill="#0a0a0a" />
      </svg>
      <span className="logo__text">
        ANAS <span>DEV</span>
      </span>
    </a>
  );
}
