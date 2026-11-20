// Semua ikon SVG inline. Ikon outline memakai stroke 1.6 dan warna currentColor.
const outline = {
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" /></>,
  calendar: <><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M4 10h16M8 3v4M16 3v4M8 14h2M12 14h2M8 17h2M12 17h2" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  pin: <><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3.500 3.500 3.500 14.500 0 18M12 3c-3.500 3.500-3.500 14.500 0 18" /></>,
  send: <path d="M21 3L10 14M21 3l-7 18-4-7-7-4 18-7z" />,
  phone: <path d="M5 4h4l2 5-2.500 1.500a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
  code: <path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" />,
  layout: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 9v11" /></>,
  gauge: <><path d="M4 17a8 8 0 1116 0" /><path d="M12 17l4-5" /><circle cx="12" cy="17" r="1" /></>,
  rocket: <><path d="M12 15l-3-3a22 22 0 014-8 9 9 0 018-2 9 9 0 01-2 8 22 22 0 01-7 5z" /><path d="M5 15c-1.500 1-2 4-2 6 2 0 5-.5 6-2M9 12H4l2-3h4M12 15v5l3-2v-3" /><circle cx="15.500" cy="8.500" r="1.200" /></>,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  download: <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />,
  external: <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5" />,
  left: <path d="M15 5l-7 7 7 7" />,
  right: <path d="M9 5l7 7-7 7" />,
  up: <path d="M12 19V5M5 12l7-7 7 7" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  check: <path d="M5 12l5 5 9-10" />,
  smile: <><circle cx="12" cy="12" r="9" /><path d="M8 14c1 1.500 2.300 2.200 4 2.200s3-.7 4-2.200M9 9.500v.5M15 9.500v.5" /></>,
  codeCircle: <><circle cx="12" cy="12" r="9" strokeDasharray="44 8" /><path d="M10 9l-3 3 3 3M14 9l3 3-3 3" /></>,
  trophy: <path d="M8 4h8v5a4 4 0 01-8 0V4zM8 6H4v1a4 4 0 004 4M16 6h4v1a4 4 0 01-4 4M12 13v4M8 21h8M10 17h4" />,
  starCircle: <><circle cx="12" cy="12" r="9" /><path d="M12 7l1.600 3.300 3.600.5-2.600 2.500.6 3.600L12 15l-3.200 1.900.6-3.600L6.800 10.800l3.600-.5z" /></>,
  instagram: <><rect x="3.500" y="3.500" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r=".6" fill="currentColor" /></>,
};

const filled = {
  github: 'M12 2a10 10 0 00-3.200 19.500c.500.100.700-.200.700-.500v-1.800c-2.800.600-3.400-1.300-3.400-1.300-.500-1.200-1.100-1.500-1.100-1.500-.900-.600.100-.600.100-.600 1 .100 1.500 1 1.500 1 .900 1.500 2.400 1.100 2.900.800.100-.700.400-1.100.600-1.400-2.200-.300-4.600-1.100-4.600-5 0-1.100.400-2 1-2.700-.100-.300-.400-1.300.100-2.700 0 0 .800-.300 2.700 1a9.400 9.400 0 015 0c1.900-1.300 2.700-1 2.700-1 .500 1.400.200 2.400.100 2.700.600.700 1 1.600 1 2.700 0 3.900-2.400 4.700-4.600 5 .400.300.700.900.700 1.800v2.700c0 .300.200.600.700.500A10 10 0 0012 2z',
  linkedin: 'M5 3.500a2.500 2.500 0 110 5 2.500 2.500 0 010-5zM3 9.500h4V21H3zM9.500 9.500h3.800v1.600c.600-1 1.800-1.900 3.700-1.900 4 0 4.500 2.600 4.500 6V21h-4v-5c0-1.300 0-2.800-1.800-2.800S13.500 14.600 13.500 16v5h-4z',
  twitter: 'M17.500 3h3.200l-7 8 8.200 10h-6.400l-5-6.300L4.800 21H1.600l7.500-8.600L1.200 3h6.600l4.500 5.800zm-1.100 16h1.800L7.600 4.900H5.700z',
  quote: 'M4 18v-5.500C4 8 6.500 5.300 10 5v2.500C8.200 7.800 7.300 9 7.200 10.500H10V18zm10 0v-5.500C14 8 16.500 5.300 20 5v2.500c-1.800.300-2.700 1.500-2.800 3H20V18z',
  heart: 'M12 21s-8-5-8-11a4.500 4.500 0 018-2.800A4.500 4.500 0 0120 10c0 6-8 11-8 11z',
};

export function Icon({ name, size = 20, strokeWidth = 1.6, className = '' }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', className, 'aria-hidden': 'true', focusable: 'false' };
  if (filled[name]) {
    return (
      <svg {...common} fill="currentColor">
        <path d={filled[name]} />
      </svg>
    );
  }
  return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      {outline[name]}
    </svg>
  );
}

// Kotak ikon oranye (44px) dipakai di About, Services, Contact, dll.
export function IconBox({ name, size = 20, className = '' }) {
  return (
    <span className={`icon-box ${className}`} aria-hidden="true">
      <Icon name={name} size={size} />
    </span>
  );
}

// Ikon tech stack berwarna (48px).
export function TechIcon({ name }) {
  const p = { width: 48, height: 48, viewBox: '0 0 48 48', 'aria-hidden': 'true', focusable: 'false' };
  switch (name) {
    case 'html':
      return (
        <svg {...p}>
          <path d="M6 4h36l-3.300 36L24 44 9.300 40z" fill="#e34f26" />
          <path d="M24 41.500l11.900-3.300L38.800 7H24z" fill="#ef652a" />
          <path d="M15 14h18l-.400 5H20l.4 5h11.800l-1 11-7.200 2-7.200-2-.5-6h5l.3 3 2.400.700 2.400-.700.300-4H15.500z" fill="#fff" />
        </svg>
      );
    case 'css':
      return (
        <svg {...p}>
          <path d="M6 4h36l-3.300 36L24 44 9.300 40z" fill="#1572b6" />
          <path d="M24 41.500l11.900-3.300L38.800 7H24z" fill="#33a9dc" />
          <path d="M33 14H15l.4 5h12.200l-.4 4.500H15.800l.4 5h10.600l-.4 4-4.400 1.300-4.400-1.300-.3-3.500h-5l.6 7 9.100 2.600 9-2.600z" fill="#fff" />
        </svg>
      );
    case 'js':
      return (
        <svg {...p}>
          <rect x="4" y="4" width="40" height="40" fill="#f7df1e" />
          <path d="M16 35.500c.9 1.500 2.100 2.600 4.200 2.600 1.800 0 3-.9 3-2.200 0-1.500-1.200-2.100-3.200-3l-1.100-.5c-3.200-1.400-5.300-3-5.300-6.500 0-3.200 2.400-5.600 6.200-5.600 2.700 0 4.600.9 6 3.400l-3.300 2.100c-.7-1.300-1.500-1.800-2.700-1.800-1.200 0-2 .8-2 1.800 0 1.200.8 1.700 2.600 2.500l1.100.5c3.800 1.600 5.900 3.200 5.900 6.800 0 3.900-3 6-7.100 6-4 0-6.500-1.900-7.700-4.400zM31.500 36c.7 1.200 1.500 2.100 3.200 2.100 1.400 0 2.300-.7 2.300-1.700 0-1.200-.9-1.600-2.500-2.300l-.8-.4c-2.400-1-4-2.300-4-5 0-2.500 1.900-4.400 4.900-4.400 2.100 0 3.600.7 4.700 2.700l-2.600 1.700c-.6-1-1.200-1.400-2.100-1.400-1 0-1.600.6-1.600 1.400 0 1 .6 1.400 2 2l.8.4c2.800 1.200 4.500 2.400 4.500 5.100 0 2.900-2.300 4.500-5.400 4.500-3 0-5-1.500-6-3.500z" fill="#111" />
        </svg>
      );
    case 'ts':
      return (
        <svg {...p}>
          <rect x="4" y="4" width="40" height="40" rx="2" fill="#2f74c0" />
          <path d="M11 22h15v3.500h-5.600V40h-3.800V25.500H11zM34.500 40c-1.500 0-2.900-.3-4-.9v-3.700c1.100.9 2.500 1.400 3.800 1.400 1.100 0 1.800-.4 1.800-1.100 0-.8-.8-1.100-2.400-1.800-2.700-1.100-4.100-2.400-4.100-4.800 0-2.600 2.100-4.300 5.200-4.300 1.400 0 2.700.3 3.700.8v3.500c-1-.7-2.100-1.100-3.200-1.100-.9 0-1.500.4-1.500 1 0 .7.600 1 2 1.600 2.800 1.100 4.600 2.400 4.600 5 0 2.800-2.200 4.400-5.900 4.400z" fill="#fff" />
        </svg>
      );
    case 'react':
      return (
        <svg {...p} fill="none" stroke="#61dafb" strokeWidth="2">
          <ellipse cx="24" cy="24" rx="20" ry="7.500" />
          <ellipse cx="24" cy="24" rx="20" ry="7.500" transform="rotate(60 24 24)" />
          <ellipse cx="24" cy="24" rx="20" ry="7.500" transform="rotate(120 24 24)" />
          <circle cx="24" cy="24" r="3" fill="#61dafb" stroke="none" />
        </svg>
      );
    case 'next':
      return (
        <svg {...p}>
          <circle cx="24" cy="24" r="21" fill="none" stroke="#fff" strokeWidth="2" />
          <path d="M17 33V15h2.400l12.600 17.500M30.500 15v10" fill="none" stroke="#fff" strokeWidth="2.400" />
        </svg>
      );
    case 'tailwind':
      return (
        <svg {...p}>
          <path d="M24 10c-6.400 0-10.400 3.200-12 9.600 2.400-3.200 5.200-4.400 8.400-3.600 1.800.5 3.100 1.800 4.500 3.200 2.300 2.400 5 5.200 10.900 5.200 6.400 0 10.400-3.200 12-9.600-2.400 3.200-5.200 4.400-8.400 3.600-1.800-.5-3.100-1.800-4.500-3.200C32.600 12.800 29.900 10 24 10zM12 24c-6.400 0-10.400 3.200-12 9.600 2.400-3.200 5.200-4.400 8.400-3.600 1.800.5 3.100 1.800 4.500 3.200 2.300 2.400 5 5.200 10.900 5.200 6.400 0 10.400-3.200 12-9.600-2.400 3.200-5.200 4.400-8.400 3.600-1.800-.5-3.100-1.800-4.500-3.200C20.600 26.800 17.900 24 12 24z" fill="#38bdf8" transform="translate(2 0)" />
        </svg>
      );
    case 'git':
      return (
        <svg {...p}>
          <rect x="8" y="8" width="32" height="32" rx="3" transform="rotate(45 24 24)" fill="#f05032" />
          <g stroke="#fff" strokeWidth="2.600" fill="#fff" strokeLinecap="round">
            <path d="M20 14l8 8M24 22v13M26 27l6-6" fill="none" />
            <circle cx="20" cy="14" r="2.800" />
            <circle cx="28" cy="22" r="2.800" />
            <circle cx="24" cy="35" r="2.800" />
          </g>
        </svg>
      );
    case 'github':
      return (
        <svg {...p} viewBox="0 0 24 24" fill="#fff">
          <path d={filled.github} />
        </svg>
      );
    default:
      return null;
  }
}
