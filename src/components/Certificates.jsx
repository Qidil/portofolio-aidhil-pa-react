import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { certificates } from '../data/portfolio';

export default function Certificates() {
  const [openCert, setOpenCert] = useState(null);
  const [sectionRef, isVisible] = useScrollReveal();

  const toggleCert = (idx) => {
    setOpenCert(openCert === idx ? null : idx);
  };

  return (
    <section id="services" className="py-[100px] bg-brand-darker">
      <div className="container-custom">
        <div className="text-center max-w-[520px] mx-auto mb-[60px]">
          <p className="font-mono text-xs text-brand-gold tracking-widest uppercase flex items-center justify-center gap-2.5 mb-3">
            <span className="w-6 h-px bg-brand-gold" />
            Pelatihan yang saya ikuti
          </p>
          <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] font-semibold text-white leading-tight">
            Sertifikasi
          </h2>
          <div className="w-12 h-0.5 mt-4 mx-auto" style={{
            background: 'linear-gradient(90deg, var(--color-brand-gold), transparent)',
          }} />
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => {
            const isOpen = openCert === idx;
            return (
              <div
                key={idx}
                className={`bg-brand-card border border-brand-border rounded-sm text-center transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(63,169,245,.3)] hover:bg-[rgba(255,255,255,.05)] reveal reveal-delay-${Math.min(idx + 1, 6)} ${isVisible ? 'visible' : ''}`}
              >
                <button
                  onClick={() => toggleCert(idx)}
                  className="w-full p-9 flex flex-col items-center"
                >
                  <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center mx-auto mb-5 text-brand-gold text-xl" style={{
                    background: 'var(--color-brand-gold-glow)',
                    border: '1px solid rgba(63,169,245,.25)',
                  }}>
                    <i className="fas fa-database"></i>
                  </div>
                  <p className="font-serif text-lg font-semibold text-white mb-2.5">{cert.title}</p>
                  <p className="text-[0.86rem] text-brand-muted leading-relaxed">{cert.issuer} — {cert.date}</p>
                  {cert.details && (
                    <span className="inline-flex items-center gap-1.5 mt-1.5 text-brand-gold-light text-[0.82rem] font-semibold bg-transparent border-none cursor-pointer">
                      {isOpen ? 'Sembunyikan' : 'Selengkapnya'} <i className="fas fa-chevron-down text-[0.7rem]" style={{
                        transform: isOpen ? 'rotate(180deg)' : '',
                        transition: 'transform 0.3s ease',
                      }} />
                    </span>
                  )}
                </button>

                {cert.details && (
                  <div className={`cert-details ${isOpen ? 'open' : ''}`}>
                    <div className="border-t border-brand-border px-9 pb-9 text-left space-y-3">
                      <ul className="space-y-1 mt-4">
                        {cert.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-[0.86rem] text-brand-muted pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-brand-gold before:text-[0.7rem] before:top-[5px]">
                            {detail}
                          </li>
                        ))}
                      </ul>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-brand-gold text-[0.82rem] font-semibold no-underline border-b border-brand-gold pb-0.5 hover:text-brand-gold-light hover:border-brand-gold-light"
                        >
                          Link Sertifikat <i className="fas fa-arrow-up-right-from-square"></i>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}