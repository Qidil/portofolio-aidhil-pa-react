import useScrollReveal from '../hooks/useScrollReveal';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section id="contact" className="py-[100px] bg-brand-darker">
      <div className="container-custom">
        <div ref={sectionRef} className={`grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-20 items-start ${isVisible ? 'visible' : ''}`} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.7s ease' }}>
          {/* Left */}
          <div>
            <div className="mb-[60px]">
              <p className="font-mono text-xs text-brand-gold tracking-widest uppercase flex items-center gap-2.5 mb-3">
                <span className="w-6 h-px bg-brand-gold" />
                Kontak
              </p>
              <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] font-semibold text-white leading-tight">
                Ayo Bekerja<br />Bersama
              </h2>
              <div className="w-12 h-0.5 mt-4" style={{
                background: 'linear-gradient(90deg, var(--color-brand-gold), transparent)',
              }} />
            </div>
            <p className="text-[0.92rem] text-brand-muted leading-relaxed mb-8">
              Punya proyek menarik? Saya terbuka untuk diskusi, kolaborasi, dan peluang baru. Jangan ragu untuk menghubungi saya!
            </p>
          </div>

          {/* Right */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 flex items-center justify-center rounded-sm text-brand-gold text-[0.9rem] flex-shrink-0 border" style={{
                background: 'var(--color-brand-gold-glow)',
                borderColor: 'rgba(63,169,245,.2)',
              }}>
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <p className="text-xs text-brand-muted tracking-wider uppercase">Email</p>
                <p className="text-[0.9rem] text-brand-text font-medium">{personalInfo.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 flex items-center justify-center rounded-sm text-brand-gold text-[0.9rem] flex-shrink-0 border" style={{
                background: 'var(--color-brand-gold-glow)',
                borderColor: 'rgba(63,169,245,.2)',
              }}>
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <p className="text-xs text-brand-muted tracking-wider uppercase">Telepon / WhatsApp</p>
                <p className="text-[0.9rem] text-brand-text font-medium">{personalInfo.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 flex items-center justify-center rounded-sm text-brand-gold text-[0.9rem] flex-shrink-0 border" style={{
                background: 'var(--color-brand-gold-glow)',
                borderColor: 'rgba(63,169,245,.2)',
              }}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <p className="text-xs text-brand-muted tracking-wider uppercase">Lokasi</p>
                <p className="text-[0.9rem] text-brand-text font-medium">{personalInfo.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 flex items-center justify-center rounded-sm text-brand-gold text-[0.9rem] flex-shrink-0 border" style={{
                background: 'var(--color-brand-gold-glow)',
                borderColor: 'rgba(63,169,245,.2)',
              }}>
                <i className="fab fa-github"></i>
              </div>
              <div>
                <p className="text-xs text-brand-muted tracking-wider uppercase">GitHub</p>
                <p className="text-[0.9rem] text-brand-text font-medium">github.com/Qidil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}