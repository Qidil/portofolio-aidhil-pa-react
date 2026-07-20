import { useState, useMemo } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { certificates } from '../data/portfolio';

const categoryConfig = {
  'Frontend Development': { icon: 'fa-code', order: 0 },
  'Backend & Tools': { icon: 'fa-server', order: 1 },
  'Digital Marketing': { icon: 'fa-bullhorn', order: 2 },
};

export default function Certificates() {
  const [openCert, setOpenCert] = useState(null);
  const [sectionRef, isVisible] = useScrollReveal();

  const grouped = useMemo(() => {
    const groups = {};
    certificates.forEach((cert) => {
      const cat = cert.category || 'Other';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(cert);
    });
    return Object.entries(groups).sort(
      (a, b) => (categoryConfig[a[0]]?.order ?? 99) - (categoryConfig[b[0]]?.order ?? 99)
    );
  }, []);

  const toggleCert = (idx) => {
    setOpenCert(openCert === idx ? null : idx);
  };

const certIconColors = ['#4ECDC4', '#FFD700', '#FF00FF', '#38BDF8', '#A259FF', '#06B6D4', '#FF6B6B', '#339933', '#F29111', '#CA4245', '#00C4CC', '#FFD700'];

  let globalIdx = 0;

  return (
    <section id="services" className="py-[100px] bg-brand-darker">
      <div className="container-custom">
        <div className="text-center max-w-[520px] mx-auto mb-[60px]">
          <p className="font-mono text-xs text-brand-gold tracking-widest uppercase flex items-center justify-center gap-2.5 mb-3">
            <span className="w-6 h-px bg-brand-gold" />
            Pelatihan yang saya ikuti
          </p>
          <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] font-semibold leading-tight" style={{
            background: 'linear-gradient(135deg, #FFD700, #FF00FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Sertifikasi
          </h2>
          <div className="w-12 h-0.5 mt-4 mx-auto" style={{
            background: 'linear-gradient(90deg, var(--color-brand-gold), transparent)',
          }} />
        </div>

        <div ref={sectionRef}>
          {grouped.map(([category, certs]) => (
            <div key={category} className="mb-16 last:mb-0">
              <div className="flex items-center gap-2.5 mb-8">
                <i className={`fas ${categoryConfig[category]?.icon || 'fa-folder'} text-base`} style={{
                  background: 'linear-gradient(135deg, #FFD700, #FF00FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }} />
                <p className="font-serif text-xl font-semibold" style={{
                  background: 'linear-gradient(135deg, #FFD700, #FF00FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>{category}</p>
                <div className="h-px flex-1 bg-brand-border" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certs.map((cert) => {
                  const idx = globalIdx++;
                  const isOpen = openCert === idx;
                  return (
                    <div
                      key={idx}
                      className={`bg-brand-card border border-brand-border rounded-sm text-center transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,215,0,.3)] hover:bg-[rgba(255,255,255,.05)] reveal reveal-delay-${Math.min(idx + 1, 6)} ${isVisible ? 'visible' : ''}`}
                    >
                      <button
                        onClick={() => toggleCert(idx)}
                        className="w-full p-9 flex flex-col items-center"
                      >
                        <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center mx-auto mb-5 text-xl" style={{
                          background: `${certIconColors[idx % certIconColors.length]}20`,
                          border: `1px solid ${certIconColors[idx % certIconColors.length]}40`,
                          color: certIconColors[idx % certIconColors.length],
                        }}>
                          <i className={cert.icon}></i>
                        </div>
                        <p className="font-serif text-lg font-semibold text-white mb-2.5">{cert.title}</p>
                        <p className="text-[0.86rem] text-brand-muted leading-relaxed">{cert.issuer} — {cert.date}</p>
                        {cert.details && (
                          <span className="inline-flex items-center gap-1.5 mt-1.5 text-[0.82rem] font-semibold bg-transparent border-none cursor-pointer" style={{
                            background: 'linear-gradient(135deg, #FFD700, #FF00FF)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}>
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
                                className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold no-underline pb-0.5 hover:opacity-80"
                                style={{
                                  background: 'linear-gradient(135deg, #FFD700, #FF00FF)',
                                  WebkitBackgroundClip: 'text',
                                  WebkitTextFillColor: 'transparent',
                                  backgroundClip: 'text',
                                  borderBottom: '1px solid rgba(255,215,0,.4)',
                                }}
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
          ))}
        </div>
      </div>
    </section>
  );
}