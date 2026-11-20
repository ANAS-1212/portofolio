// =====================================================================
// SEMUA KONTEN TEKS ADA DI SINI. Ubah sesuai kebutuhan.
// =====================================================================

// GANTI: identitas utama
export const profile = {
  firstName: 'Anas',
  lastName: 'Hilmi',
  fullName: 'Muhammad Anas Hilmi Yahya',
  greeting: 'Halo, saya',
  roles: ['Pengembang Backend', 'Pengembang Node.js', 'Pengembang Python'], // GANTI
  intro:
    'Saya seorang Pengembang Backend', // GANTI
  years: '5+', // GANTI
  resumeUrl: '/resume.pdf', // GANTI: taruh file CV di public/resume.pdf
  email: 'anmau0002@gmail.com', // GANTI
  phone: '+91 98765 43210', // GANTI
  location: 'Indonesia', // GANTI
  photo: '/an_1.png', // GANTI: foto profil PNG transparan setengah badan
  copyrightName: 'Muhammad Anas Hilmi Yahya', // GANTI: nama untuk copyright di footer
  year: 2026,
};

// GANTI: teks blok kode dekoratif di hero
export const heroCode = `const developer = {
  name: 'Muhammad Anas Hilmi Yahya',
  role: 'Pengembang Frontend',
  passion: 'Membangun pengalaman
   web yang menakjubkan',
  skills: ['HTML', 'CSS', 'JS',
   'React', 'Next.js']
};

function createMagic() {
  return 'Kode Bersih +
   Desain Kreatif';
}

createMagic();`;

// GANTI: menu navigasi (id harus sama dengan id section)
export const navLinks = [
  { label: 'BERANDA', id: 'home' },
  { label: 'TENTANG', id: 'about' },
  { label: 'LAYANAN', id: 'services' },
  { label: 'KEAHLIAN', id: 'skills' },
  { label: 'PROYEK', id: 'projects' },
];

// GANTI: link sosial media
export const socials = [
  { name: 'GitHub', icon: 'github', url: 'https://github.com/' },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/' },
  { name: 'Twitter', icon: 'twitter', url: 'https://x.com/' },
  { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com/' },
];

// GANTI: konten About
export const about = {
  label: 'Tentang Saya',
  heading: 'Saya.',
  text: 'Saya seorang Pengembang Backend yang berpengalaman dalam membangun aplikasi web yang efisien dan skalabel. Dengan keahlian dalam Node.js, Python, dan berbagai framework modern, saya berkomitmen untuk menciptakan solusi yang inovatif dan berkualitas tinggi. Saya selalu bersemangat untuk belajar teknologi baru dan menghadapi tantangan baru dalam pengembangan perangkat lunak.',
  signature: 'Muhammad Anas Hilmi Yahya',
  info: [
    { icon: 'user', label: 'Nama', value: 'Muhammad Anas Hilmi Yahya' },
    { icon: 'calendar', label: 'Pengalaman', value: 'Lebih dari 5 Tahun' },
    { icon: 'mail', label: 'Email', value: 'hello@arjundev.com' },
    { icon: 'pin', label: 'Lokasi', value: 'Indonesia' },
    { icon: 'globe', label: 'Status', value: 'Pelajar' },
    { icon: 'send', label: 'Freelance', value: 'Tersedia' },
  ],
};

// GANTI: daftar layanan
export const services = [
 
];

// GANTI: tech stack (key = nama ikon di Icons.jsx -> TechIcon)
export const techStack = [
  { key: 'html', name: 'HTML5' },
  { key: 'css', name: 'CSS3' },
  { key: 'js', name: 'JavaScript' },
  { key: 'ts', name: 'TypeScript' },
  { key: 'react', name: 'React' },
  { key: 'next', name: 'Next.js' },
  { key: 'tailwind', name: 'Tailwind CSS' },
  { key: 'git', name: 'Git' },
  { key: 'github', name: 'GitHub' },
];

// GANTI: project unggulan (gambar di public/projects/)
export const projects = [
  { title: 'Web Sekolah', text: 'Situs web sekolah yang dibangun dengan React dan Tailwind CSS.', image: '/web_sekolah.jpeg', url: '#' },
  { title: 'Penyewaan Mobil', text: 'Website sebagai tugas sekolah dibuat dengan framework Laravel.', image: '/MOBL.png', url: '#' },
  { title: 'Projek Mischool', text: 'Situs web yang saya kelola saat magang di PT Hummatech.', image: '/mischool.id.png', url: '#' },
];

// GANTI: statistik (value = angka, suffix = "+" atau "%")
export const stats = [
  // { icon: 'user', label: 'Klien Puas', value: '95%', suffix: '%' },
  // { icon: 'code', label: 'Proyek Selesai', value: '25+', suffix: '+' },
  // { icon: 'clock', label: 'Waktu Respons', value: '24 Jam', suffix: '' },
];


// GANTI: testimoni (minimal 3)
export const testimonials = [
  {
    text: 'Anas adalah pengembang yang luar biasa. Ia menghadirkan kode yang bersih dan mudah dipelihara serta memastikan setiap detail sempurna. Sangat direkomendasikan!',
    name: 'Priya Sharma',
    role: 'Manajer Produk, TaskFlow',
    avatar: '/avatar-priya.png',
  },
  {
    text: 'Cepat, komunikatif, dan berorientasi pada detail. Halaman arahan baru kami menjadi dua kali lebih cepat dan tampil persis seperti desain.',
    name: 'Rahul Mehta',
    role: 'Pendiri, Wanderlust',
    avatar: '/avatar-priya.png',
  },
  {
    text: 'Ia mengubah file Figma kasar kami menjadi produk yang rapi dan aksesibel. Bekerja dengan Anas adalah pengalaman yang sangat lancar.',
    name: 'Ananya Rao',
    role: 'Pemimpin Desain, FinTrack',
    avatar: '/avatar-priya.png',
  },
];

// GANTI: teks contact & footer
export const contact = {
  label: 'MARI BEKERJA BERSAMA',
  heading: 'Hubungi Saya',
  text: 'Punya proyek atau hanya ingin menyapa? Jangan ragu untuk menghubungi saya.',
};

export const footer = {
  tagline: 'Membangun web, satu piksel demi satu piksel.',
  quickLinks: [
    { label: 'Beranda', id: 'home' },
    { label: 'Tentang', id: 'about' },
    { label: 'Layanan', id: 'services' },
    { label: 'Proyek', id: 'projects' },
    { label: 'Kontak', id: 'contact' },
  ],
  availability: 'Tersedia untuk pekerjaan freelance',
  availability2: 'Mari membangun sesuatu yang luar biasa!',
  newsletter: 'Berlangganan untuk mendapatkan pembaruan proyek dan artikel terbaru saya.',
};
