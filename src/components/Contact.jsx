import useScrollReveal from '../hooks/useScrollReveal';
import { personalInfo, links } from '../data/portfolio';

export default function Contact() {
  const [sectionRef, isVisible] = useScrollReveal();

  const contactItems = [
    { icon: 'fas fa-envelope', label: 'Email', value: personalInfo.email, color: '#FFD700', href: links.email, hoverColor: '#FFD700' },
    { icon: 'fas fa-phone', label: 'Telepon / WhatsApp', value: personalInfo.phone, color: '#4ECDC4', href: links.whatsapp, hoverColor: '#4ECDC4' },
    { icon: 'fas fa-map-marker-alt', label: 'Lokasi', value: personalInfo.location, color: '#FF00FF' },
    { icon: 'fab fa-github', label: 'GitHub', value: 'github.com/Qidil', color: '#C9D1D9', href: links.github, hoverColor: '#C9D1D9' },
  ];

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
              <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] font-semibold leading-tight" style={{
                background: 'linear-gradient(135deg, #FFD700, #FF00FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Ayo Bekerja<br />Bersama
              </h2>
              <div className="w-12 h-0.5 mt-4" style={{
                background: 'linear-gradient(90deg, var(--color-brand-gold), transparent)',
              }} />
            </div>
            <p className="text-[0.92rem] text-brand-muted leading-relaxed mb-8">
              Frontend developer yang berdedikasi menciptakan pengalaman digital berkualitas tinggi. Tersedia untuk proyek freelance & kolaborasi penuh waktu.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {contactItems.map((item, idx) => {
              const isClickable = !!item.href;
              const Tag = isClickable ? 'a' : 'div';
              return (
              <Tag
                key={idx}
                {...(isClickable ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex items-center gap-3.5 no-underline group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-sm text-white text-[0.9rem] flex-shrink-0 border-0 transition-colors duration-200" style={{
                  background: item.color,
                }}>
                  <i className={item.icon}></i>
                </div>
                <div className="transition-colors duration-200" style={isClickable ? {} : {}}>
                  <p className="text-xs text-brand-muted tracking-wider uppercase">{item.label}</p>
                  <p className="text-[0.9rem] font-medium transition-colors duration-200" style={isClickable ? { color: item.color } : { color: 'var(--color-brand-text)' }}>{item.value}</p>
                </div>
              </Tag>
            );
            })}
          </div>
        </div>

        <div className="border-t border-brand-border pt-5 mt-[60px] text-center">
          <p className="text-[0.8rem] text-brand-muted">© 2025 <span className="text-brand-gold">Aidhil Prima Abdiguna</span>. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}