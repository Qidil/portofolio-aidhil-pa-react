// Portfolio Data - Aidhil Prima Abdiguna
// Berdasarkan index.html vanilla

export const personalInfo = {
  name: 'Aidhil Prima Abdiguna',
  title: 'Web Developer',
  education: 'S1 Informatika - Universitas Muhammadiyah Makassar',
  bio: 'Membangun pengalaman digital yang indah, fungsional, dan berperforma tinggi. Spesialis dalam menciptakan antarmuka modern yang menggabungkan estetika dengan ketepatan teknis.',
  status: 'Available for Work',
  email: 'aidhilprimaa@gmail.com',
  phone: '+62 823-4781-8060',
  location: 'Makassar, Indonesia',
  gpa: '3.52',
};

export const about = {
  paragraphs: [
    'Perkenalkan saya <span class="highlight">Aidhil Prima Abdiguna</span>, lulusan S1 Informatika dengan fokus pada pengembangan web (<span class="highlight">Frontend</span> & <span class="highlight">Backend</span>). Berpengalaman dalam membangun aplikasi web responsif menggunakan <span class="highlight">React.js</span> ataupun framework sejenis serta integrasi <span class="highlight">backend</span> dengan <span class="highlight">REST API</span> dan <span class="highlight">Node.js</span>.',
    'Berpengalaman dalam menggunakan <span class="highlight">Python</span> untuk pengoperasian data. Memiliki pengalaman membuat aplikasi multi-window menggunakan <span class="highlight">Electron</span>. Terbiasa melakukan <span class="highlight">debugging</span>, <span class="highlight">testing</span>, serta memastikan aplikasi berjalan secara optimal. Memiliki kemampuan mengelola file dan dokumen dengan efektif, serta <span class="highlight">problem solving</span> yang baik, cepat beradaptasi dengan teknologi baru, serta mampu bekerja secara individu maupun dalam tim.',
    'Selain itu, saya juga mempunyai pengalaman dalam mengelola <span class="highlight">Google dan Meta Ads</span> untuk keperluan promosi dan pemasaran digital. Saya terbiasa menganalisis data kampanye, mengoptimalkan strategi iklan, serta meningkatkan ROI melalui pendekatan berbasis data.',
    'Saya percaya bahwa <span class="highlight">teknologi</span> bukan hanya tentang menulis kode, tetapi juga tentang menciptakan pengalaman pengguna yang menyenangkan dan memuaskan. Oleh karena itu, saya selalu berusaha untuk memahami kebutuhan pengguna dan merancang solusi yang sesuai dengan kebutuhan mereka.',
  ],
  infoGrid: [
    { label: 'Nama', value: 'Aidhil Prima Abdiguna' },
    { label: 'Asal', value: 'Makassar, Indonesia' },
    { label: 'Email', value: 'aidhilprimaa@gmail.com' },
    { label: 'Pendidikan', value: 'S1 Informatika' },
    { label: 'Bahasa', value: 'Indonesia, Inggris' },
    { label: 'Status', value: 'Available ✓' },
  ],
};

export const skills = [
  {
    category: 'Frontend Development',
    icon: 'fa-code',
    items: [
      { name: 'HTML & CSS', percentage: 95 },
      { name: 'JavaScript', percentage: 88 },
      { name: 'React.js', percentage: 85 },
      { name: 'Tailwind CSS', percentage: 90 },
      { name: 'Figma / UI Design', percentage: 70 },
    ],
  },
  {
    category: 'Backend & Tools',
    icon: 'fa-server',
    items: [
      { name: 'Node.js & Express.js', percentage: 80 },
      { name: 'Python', percentage: 75 },
      { name: 'MySQL', percentage: 78 },
      { name: 'Git & GitHub', percentage: 92 },
      { name: 'Electron', percentage: 75 },
    ],
  },
  {
    category: 'Other',
    icon: 'fa-toolbox',
    items: [
      { name: 'Google & Meta Ads', percentage: 75 },
      { name: 'Office tools (Word, Excel, PowerPoint)', percentage: 72 },
      { name: 'Canva', percentage: 79 },
      { name: 'Capcut', percentage: 62 },
    ],
  },
];

export const tools = [
  'React.js', 'Tailwind CSS', 'Figma', 'Node.js', 'Express.js',
  'Python', 'MySQL', 'Git & GitHub', 'Electron', 'Google Ads',
  'Meta Ads', 'Word', 'Excel', 'PowerPoint', 'Canva', 'Capcut',
];

export const experiences = [
  {
    role: 'Frontend Developer - Intern',
    company: 'Fakultas Teknik, Universitas Muhammadiyah Makassar',
    period: 'Desember 2023 — Februari 2024',
    duration: '3 months',
    description: 'Pembuatan dan pengembangan website tata usaha dan administrasi Fakultas Teknik.',
    achievements: [
      'Mengembangkan dan memelihara interface website menggunakan WordPress',
      'Meningkatkan responsivitas website dan user experience',
      'Melakukan debugging dan perbaikan bug dalam website',
      'Berkolaborasi langsung dengan tim IT Universitas untuk implementasi design system yang konsisten',
    ],
  },
  {
    role: 'Website Admin - Freelance',
    company: 'Kantor calon anggota DPRD Kab. Sinjai',
    period: 'April 2024',
    duration: '1 month',
    description: 'Freelance admin website untuk calon anggota DPRD Kabupaten Sinjai.',
    achievements: [
      'Mengelola dan memperbarui konten website',
      'Menginput dan mengelola data para pemilih calon anggota DPRD',
      'Melakukan monitoring dan maintenance sistem',
    ],
  },
  {
    role: 'IT Marketing - Fulltime',
    company: 'The One Enterpreneur Corp, PT. Sembilan Benua Abadi',
    period: 'Mei 2026 - Sekarang',
    duration: 'Current',
    description: 'Menghandle semua kebutuhan IT dan marketing digital perusahaan.',
    achievements: [
      'Membuat, mengelola dan memperbarui konten website iklan agar menarik dan SEO-friendly',
      'Melakukan monitoring dan maintenance website secara berkala',
      'Membuat serta mengelola kampanye Google dan Meta Ads',
      'Mendesain banner/flyer & video untuk keperluan digital marketing',
      'Mengelola dan memperbarui konten Instagram perusahaan',
    ],
  },
];

export const projects = [
  {
    title: 'Smart Task Manager Web App',
    description: 'Web app untuk mengelola tugas harian secara efektif, dilengkapi autentikasi JWT & bcrypt, fitur CRUD, REST API, serta pengelolaan data real-time.',
    icon: 'fa-list-check',
    technologies: ['React.js', 'Node.js', 'MySQL'],
    link: 'https://github.com/Qidil/smart-task-manager-backend',
  },
  {
    title: 'Cerdas Cermat Scoreboard',
    description: 'Aplikasi lomba berbasis Electron untuk menampilkan skor dengan sistem multi-window, history, dan backup file. (Tahap pengembangan)',
    icon: 'fa-trophy',
    technologies: ['Electron', 'React.js', 'SQLite'],
    link: 'https://github.com/Qidil/cerdas-cermat-scoreboard',
  },
  {
    title: 'Randomize Question Shuffle System',
    description: 'Sistem pengacakan soal berbasis Python menggunakan TF-IDF & Cosine Similarity untuk mencegah kesamaan soal, divalidasi dengan MAE dan RMSE.',
    icon: 'fa-shuffle',
    technologies: ['Python', 'MySQL', 'Cosine Similarity'],
    link: 'https://github.com/Qidil/cosine-similarity-randomize-question-shuffle',
  },
];

export const certificates = [
  {
    title: 'Database Programming with SQL',
    icon: 'fas fa-database',
    issuer: 'Oracle Academy',
    date: 'Oktober 2023',
    description: 'Menguasai Dasar-Dasar SQL, membangun dan mengelola database, menulis query SQL untuk mengambil dan menganalisis data, serta mengimplementasikan praktik terbaik dalam pengelolaan database relasional.',
    details: [
      'Menguasai Dasar-Dasar SQL – Memahami sintaks SQL untuk mengakses, mengelola, dan memproses data secara efektif',
      'Membangun dan Mengelola Database – Menerapkan operasi DDL dan DML untuk membuat, mengubah, serta mengelola struktur dan isi database',
      'Mengolah Data dengan Query – Menulis query SQL untuk mengambil, menyaring, mengurutkan, dan menganalisis data',
      'Mengembangkan Kemampuan Database Programming – Mengimplementasikan praktik terbaik dalam pengelolaan database relasional',
    ],
    credentialUrl: 'https://drive.google.com/file/d/1xeC8SBGcPczCd4TvZoJEvhaLie_7xmUT/view?usp=sharing',
  },
  {
    title: 'Database Design',
    icon: 'fas fa-database',
    issuer: 'Oracle Academy',
    date: 'Oktober 2023',
    description: 'Perancangan database relasional dengan entity relationship diagram, normalisasi database, dan implementasi skema database yang efisien.',
    details: [
      'Memahami Konsep Database Relasional – Menguasai prinsip dasar perancangan database relasional',
      'Merancang Struktur Database yang Optimal – Mendesain tabel, relasi antar entitas, serta skema database',
      'Menerapkan Normalisasi Data – Menggunakan teknik normalisasi untuk mengurangi redundansi',
      'Membangun Fondasi Sistem yang Andal – Mengembangkan desain database yang scalable dan mudah dipelihara',
    ],
    credentialUrl: 'https://drive.google.com/file/d/1FodDQZRK04AOlKhnI6QAt7E7t8QMIpoR/view?usp=sharing',
  },
  {
    title: 'Pelatihan Junior Web Developer',
    icon: 'fas fa-laptop-code',
    issuer: 'BNSP dan VSGA Digitalent Scholarship',
    date: 'Juni 2024',
    description: 'Pelatihan dan sertifikasi Junior Web Developer sesuai SKKNI.',
    details: [
      'Menguasai Dasar Pengembangan Web – Mempelajari HTML, CSS, JavaScript, dan PHP sesuai SKKNI',
      'Membangun Website Dinamis – Mengembangkan website interaktif dengan integrasi logika pemrograman',
      'Menerapkan Praktik Terbaik Pengembangan Web – Memahami alur pengembangan aplikasi yang terstruktur',
    ],
    credentialUrl: 'https://drive.google.com/file/d/115p4jsXpu1IAb-JQ4HCxvt3oek5SPeKV/view?usp=sharing',
  },
  {
    title: 'Sertifikasi Web Developer',
    icon: 'fas fa-laptop-code',
    issuer: 'BNSP dan VSGA Digitalent Scholarship',
    date: 'Juni 2024',
    description: 'Sertifikasi kompetensi Web Developer bersertifikat BNSP.',
    details: [
      'Terverifikasi Kompeten sebagai Web Developer – Memenuhi standar kompetensi nasional SKKNI',
      'Mengimplementasikan Teknologi Web – Mampu mengembangkan aplikasi web menggunakan HTML, CSS, JavaScript, PHP',
      'Membangun Aplikasi Web yang Fungsional – Menghasilkan website dinamis dengan kualitas implementasi',
    ],
    credentialUrl: 'https://drive.google.com/file/d/1UQHE2oSccXfmbPZ6kNj_-j4yXYUW1HpN/view?usp=sharing',
  },
  {
    title: 'Certificate of Skill Specialization, Frontend - HTML',
    icon: 'fab fa-html5',
    issuer: 'MySKill.id',
    date: 'April 2026',
    description: 'Spesialisasi Frontend HTML.',
    details: [
      'Menguasai Struktur Dasar Website – Memahami penggunaan HTML untuk membangun struktur halaman web yang semantik',
      'Menerapkan Elemen HTML Modern – Menggunakan form, tabel, media, dan semantic tags',
      'Membangun Website yang Aksesibel – Mengimplementasikan praktik terbaik struktur halaman',
    ],
    credentialUrl: 'https://drive.google.com/file/d/1uxh9HBt34Lj-oofg59GIu5jmb9jjDeAv/view?usp=sharing',
  },
  {
    title: 'Certificate of Skill Specialization, Frontend - CSS',
    icon: 'fab fa-css3-alt',
    issuer: 'MySKill.id',
    date: 'April 2026',
    description: 'Spesialisasi Frontend CSS.',
    details: [
      'Menguasai Styling Website Modern – Menerapkan CSS untuk menciptakan tampilan website yang profesional',
      'Membangun Desain Responsif – Menggunakan teknik responsive design untuk berbagai ukuran layar',
      'Mengelola Layout Secara Efisien – Memanfaatkan Flexbox dan Grid',
    ],
    credentialUrl: 'https://drive.google.com/file/d/1mgDmtArlpHev65gEAPJGCO8MeulRrPXh/view?usp=sharing',
  },
  {
    title: 'Certificate of Skill Specialization, Frontend - JavaScript',
    icon: 'fab fa-js',
    issuer: 'MySKill.id',
    date: 'Juni 2026',
    description: 'Spesialisasi Frontend JavaScript.',
    details: [
      'Menguasai Dasar Pemrograman JavaScript – Memahami variabel, fungsi, dan manipulasi data',
      'Membangun Website Interaktif – Mengimplementasikan JavaScript untuk interaksi dinamis',
      'Memanipulasi DOM Secara Efektif – Mengelola elemen halaman secara dinamis',
    ],
    credentialUrl: 'https://drive.google.com/file/d/1T-nat_n7EACX7rptcUgc6ygXQ1AxCKxO/view?usp=sharing',
  },
  {
    title: 'Certificate of Skill Specialization, Frontend - React',
    icon: 'fab fa-react',
    issuer: 'MySKill.id',
    date: 'Juli 2026',
    description: 'Spesialisasi Frontend React.',
    details: [
      'Menguasai Dasar Pengembangan dengan React – Memahami konsep React untuk membangun UI modern',
      'Membangun Komponen yang Reusable – Mengembangkan aplikasi component-based',
      'Mengelola State dan Props – Mengimplementasikan state, props, serta event handling',
    ],
    credentialUrl: 'https://drive.google.com/file/d/11mFv2-6drBsJzgoVGKIrAeQjBOoJVDrL/view?usp=sharing',
  },
  {
    title: 'Certificate of Skill Specialization, Website Development Fundamental',
    icon: 'fas fa-globe',
    issuer: 'MySKill.id',
    date: 'Mei 2026',
    description: 'Fundamental pengembangan website.',
    details: [
      'Memahami Fundamental Pengembangan Website – Menguasai konsep dasar pengembangan website',
      'Menerapkan Teknologi Web Modern – Memanfaatkan HTML, CSS, dan JavaScript',
      'Membangun Website yang Responsif dan User-Friendly',
    ],
    credentialUrl: 'https://drive.google.com/file/d/1We18lRVYU65P7YSpgHvjH6ALApOaFLX8/view?usp=sharing',
  },
  {
    title: 'Sertifikat Kelas UI/UX Design Fundamentals',
    icon: 'fas fa-pencil-ruler',
    issuer: 'SkillPedia.id',
    date: 'Juli 2026',
    description: 'Fundamental UI/UX Design.',
    details: [
      'Menguasai Dasar UI/UX dan Design Thinking – Memahami konsep UI/UX dan design thinking',
      'Merancang Antarmuka Digital dengan Figma – Mendesain wireframe dan high-fidelity UI',
      'Membuat Prototype dan Melakukan Usability Testing',
    ],
    credentialUrl: 'https://drive.google.com/file/d/1Z4Gn7HIpYs-3hNHrAO1ZBDDNkkwIhLoL/view?usp=sharing',
  },
  {
    title: 'Pelatihan dan Sertifikasi Kelas Iklan Online Google Ads',
    icon: 'fas fa-bullhorn',
    issuer: 'SkillPedia.id',
    date: 'Mei 2026',
    description: 'Pelatihan Google Ads.',
    details: [
      'Menguasai Dasar Google Ads – Memahami konsep periklanan digital dan Google Ads',
      'Menyusun Strategi Iklan yang Efektif – Riset keyword dan landing page',
      'Mengelola dan Mengoptimalkan Kampanye',
    ],
    credentialUrl: 'https://drive.google.com/file/d/1Uk3t0272kL7fuT6FNaK_N8Q1Q7WdJl1z/view?usp=sharing',
  },
  {
    title: 'Pelatihan dan Sertifikasi Kelas Search Engine Optimization (SEO)',
    icon: 'fas fa-chart-line',
    issuer: 'SkillPedia.id',
    date: 'Mei 2026',
    description: 'Pelatihan SEO.',
    details: [
      'Menguasai Fundamental SEO – Memahami konsep SEO dan algoritma mesin pencari',
      'Menyusun Strategi Optimasi Konten – Riset keyword dan SEO On-Page',
      'Meningkatkan Performa Website – SEO Off-Page dan audit website',
    ],
    credentialUrl: 'https://drive.google.com/file/d/16lnWThOvofkdu6cZ87Z73jBfagbyUYRU/view?usp=sharing',
  },
];

export const education = [
  {
    title: 'S1 Informatika',
    organization: 'Universitas Muhammadiyah Makassar 2020 – 2025',
    icon: 'fa-graduation-cap',
    details: [
      'Menyelesaikan program Sarjana (S1) Informatika dengan IPK 3,52',
      'Mempelajari berbagai bidang keilmuan: pemrograman, pengembangan web, basis data, rekayasa perangkat lunak',
      'Mengembangkan kemampuan analisis, pemecahan masalah, dan implementasi solusi teknologi',
    ],
  },
  {
    title: 'Ikatan Mahasiswa Muhammadiyah Fakultas Teknik (IMM-FT)',
    organization: 'Universitas Muhammadiyah Makassar — Departemen Media & Komunikasi, Periode 2022–2023',
    icon: 'fa-newspaper',
    details: [
      'Mengelola Informasi Organisasi – Pusat informasi internal dan eksternal',
      'Merancang Materi Publikasi – Mendesain dan menyusun konten publikasi',
      'Mengelola Media Sosial Organisasi – Mengembangkan konten media sosial',
    ],
  },
  {
    title: 'PMR PMI Unit 213 SMAN 14 Makassar (PMR)',
    organization: 'Sekretaris Umum, Periode 2019',
    icon: 'fa-clipboard',
    details: [
      'Mengelola administrasi organisasi, termasuk penyusunan surat-menyurat dan notulen rapat',
      'Mengoordinasikan jadwal kegiatan dan memastikan kelancaran komunikasi',
      'Menyusun laporan kegiatan dan dokumentasi administrasi',
    ],
  },
  {
    title: 'PMR PMI Unit 213 SMAN 14 Makassar (PMR)',
    organization: 'Penanggungjawab Organisasi, Periode 2022-2023',
    icon: 'fa-user-tie',
    details: [
      'Mengoordinasikan pelaksanaan program kerja organisasi',
      'Memimpin koordinasi dengan pengurus dan anggota',
      'Melakukan monitoring dan evaluasi program',
    ],
  },
];

export const stats = {
  yearsExperience: 2,
  projectsCompleted: 3,
  gpa: '3,52',
};

export const links = {
  github: 'https://github.com/Qidil/',
  whatsapp: 'https://wa.me/6282347818060',
  email: 'mailto:aidhilprimaa@gmail.com',
};
