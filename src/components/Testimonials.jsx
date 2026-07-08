import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { education } from '../data/portfolio';

export default function Testimonials() {
  const [openItem, setOpenItem] = useState(null);
  const [sectionRef, isVisible] = useScrollReveal();

  const toggleItem = (idx) => {
    setOpenItem(openItem === idx ? null : idx);
  };

  return (
    <section id="testimonials" className="py-[100px] bg-brand-dark">
      <div className="container-custom">
        <div className="text-center max-w-[520px] mx-auto mb-[60px]">
          <p className="font-mono text-xs text-brand-gold tracking-widest uppercase flex items-center justify-center gap-2.5 mb-3">
            <span className="w-6 h-px bg-brand-gold" />
            Latar Belakang
          </p>
          <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] font-semibold text-white leading-tight">
            Pendidikan & Organisasi
          </h2>
          <div className="w-12 h-0.5 mt-4 mx-auto" style={{
            background: 'linear-gradient(90deg, var(--color-brand-gold), transparent)',
          }} />
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item, idx) => {
            const isOpen = openItem === idx;
            return (
              <div
                key={idx}
                className={`bg-brand-card border border-brand-border rounded-sm p-8 transition-colors duration-300 hover:border-[rgba(63,169,245,.25)] reveal reveal-delay-${Math.min(idx + 1, 6)} ${isVisible ? 'visible' : ''}`}
              >
                <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center mb-4 text-brand-gold text-xl" style={{
                  background: 'var(--color-brand-gold-glow)',
                  border: '1px solid rgba(63,169,245,.25)',
                }}>
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <p className="font-serif text-lg font-semibold text-white mb-1">{item.title}</p>
                <p className="text-[0.86rem] text-brand-muted leading-relaxed mb-3">{item.organization}</p>

                <button
                  onClick={() => toggleItem(idx)}
                  className="inline-flex items-center gap-1.5 text-brand-gold-light text-[0.82rem] font-semibold bg-transparent border-none cursor-pointer"
                >
                  {isOpen ? 'Sembunyikan' : 'Selengkapnya'} <i className="fas fa-chevron-down text-[0.7rem]" style={{
                    transform: isOpen ? 'rotate(180deg)' : '',
                    transition: 'transform 0.3s ease',
                  }} />
                </button>

                <div className={`cert-details ${isOpen ? 'open' : ''}`}>
                  <div className="border-t border-brand-border mt-4 pt-4">
                    <ul className="space-y-1">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="text-[0.86rem] text-brand-muted pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-brand-gold before:text-[0.7rem] before:top-[5px]">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}