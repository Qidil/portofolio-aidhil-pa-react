# Aidhil Prima Abdiguna — Portfolio

> Website portfolio pribadi — React + Vite + Tailwind CSS v4

Portfolio modern dan responsif untuk menampilkan proyek, keahlian, pengalaman, dan sertifikasi.

## Tech Stack

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)

- **Framework:** React 18
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"`, tanpa file config)
- **Fonts:** Cormorant Garamond, Karla, JetBrains Mono
- **Icons:** Font Awesome 6.5.0 (CDN)

## Fitur

- Tema gelap/terang dengan aksen emas (`#FFD700`), teal (`#4ECDC4`), magenta (`#FF00FF`)
- Animasi scroll yang halus (IntersectionObserver)
- Tampilan responsif (mobile-first)
- Panel navigasi geser masuk dari kanan (mobile)
- Skill bar interaktif dengan animasi saat discroll
- Akordion sertifikasi & pendidikan dengan transisi CSS smooth
- SEO meta tags + data terstruktur JSON-LD

## Struktur Folder

```
src/
├── components/     # Navbar, Hero, About, Skills, Experience, Projects, Certificates, Testimonials, Contact
├── layouts/        # MainLayout (pembungkus header/footer)
├── data/           # portfolio.js (semua data pribadi)
├── hooks/          # Custom hook useScrollReveal
├── App.jsx         # Komponen root
├── index.css       # Theme Tailwind v4 + style kustom
└── main.jsx        # Entry point
```

## Cara Menjalankan

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # Build produksi → dist/
npm run preview    # Pratinjau build produksi
npm run lint       # Linting kode (oxlint)
```

