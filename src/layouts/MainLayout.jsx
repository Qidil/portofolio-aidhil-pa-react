import Navbar from "../components/Navbar";
import { links } from '../data/portfolio';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-text">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-brand-dark border-t border-brand-border py-[60px] pb-[30px]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-[60px] mb-[50px]">
            <div>
              <p className="font-serif text-[1.6rem] font-bold text-brand-gold-light mb-3">Aidhil Prima Abdiguna</p>
              <p className="text-[0.86rem] text-brand-muted leading-relaxed mb-5">
                Web developer yang berdedikasi menciptakan pengalaman digital berkualitas tinggi. Tersedia untuk proyek freelance & kolaborasi penuh waktu.
              </p>
              <div className="flex gap-2.5">
                <a href={links.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center border border-brand-border rounded-sm text-brand-muted hover:border-brand-gold hover:text-brand-gold hover:bg-brand-gold-glow transition-all duration-200" title="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center border border-brand-border rounded-sm text-brand-muted hover:border-brand-gold hover:text-brand-gold hover:bg-brand-gold-glow transition-all duration-200" title="WhatsApp">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>

            <div>
              <p className="text-[0.78rem] font-semibold text-brand-text tracking-widest uppercase mb-[18px]">Navigasi</p>
              <ul className="space-y-2.5">
                {[
                  { label: 'Tentang Saya', href: '#about' },
                  { label: 'Skills', href: '#skills' },
                  { label: 'Pengalaman', href: '#experience' },
                  { label: 'Proyek', href: '#projects' },
                  { label: 'Sertifikasi', href: '#services' },
                  { label: 'Pendidikan', href: '#testimonials' },
                  { label: 'Kontak', href: '#contact' },
                ].map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="text-[0.86rem] text-brand-muted no-underline hover:text-brand-gold-light transition-colors duration-200 flex items-center gap-[7px] before:content-['—'] before:text-[0.6rem] before:opacity-50">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <p className="text-xs text-brand-muted tracking-wider uppercase mb-2">Respon Cepat</p>
              <p className="text-[0.85rem] text-brand-text font-medium">Dalam 24 Jam ⚡</p>
            </div>
          </div>

          <div className="border-t border-brand-border pt-5 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-[0.8rem] text-brand-muted">© 2025 <span className="text-brand-gold">Aidhil Prima Abdiguna</span>. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}