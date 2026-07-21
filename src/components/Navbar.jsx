import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { label: 'Tentang', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Pengalaman', href: '#experience' },
    { label: 'Proyek', href: '#projects' },
    { label: 'Sertifikasi', href: '#services' },
    { label: 'Pendidikan', href: '#testimonials' },
    { label: 'Kontak', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark border-b border-brand-border backdrop-blur-[16px] bg-[rgba(7,8,13,0.85)]">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#hero"
                className="transition-colors duration-300 flex items-center"
              >
                <i className="fas fa-id-badge text-brand-gold text-2xl"></i>
              </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, idx) => {
                const hoverColor = idx % 3 === 0 ? '#FFD700' : idx % 3 === 1 ? '#4ECDC4' : '#FF00FF';
                return (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-brand-muted transition-colors duration-300 text-sm font-medium tracking-wider uppercase"
                  onMouseEnter={e => e.currentTarget.style.color = hoverColor}
                  onMouseLeave={e => e.currentTarget.style.color = ''}
                >
                  {link.label}
                </a>
              );
              })}
            </div>

            {/* Hamburger - Mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] bg-transparent border border-brand-border rounded-[4px] cursor-pointer z-[210] flex-shrink-0"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span
                className={`block w-[18px] h-[2px] bg-brand-gold-light rounded-sm transition-all duration-300 ${
                  isMenuOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`block w-[18px] h-[2px] bg-brand-gold-light rounded-sm transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block w-[18px] h-[2px] bg-brand-gold-light rounded-sm transition-all duration-300 ${
                  isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ease-out ${
          isMenuOpen
            ? 'opacity-100 visible bg-[rgba(0,0,0,0.6)] backdrop-blur-[2px]'
            : 'opacity-0 invisible bg-transparent backdrop-blur-none'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-screen z-50 w-[min(78vw,320px)] bg-brand-darker border-l border-brand-border transition-transform duration-300 ease-out pt-[100px] px-8 pb-10 overflow-y-auto ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href} className="border-b border-brand-border">
              <a
                href={link.href}
                onClick={closeMenu}
                className="block py-4 px-1 text-brand-text text-base font-medium no-underline tracking-wide transition-all duration-200 hover:text-brand-gold-light hover:pl-3"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}