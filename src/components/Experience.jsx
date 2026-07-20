import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { experiences } from '../data/portfolio';
import ShuffleText from './ShuffleText';

export default function Experience() {
  const [openExp, setOpenExp] = useState(null);
  const [sectionRef, isVisible] = useScrollReveal();

  const toggleExp = (idx) => {
    setOpenExp(openExp === idx ? null : idx);
  };

  return (
    <section id="experience" className="py-[100px] bg-brand-darker">
      <div className="container-custom">
        <div ref={sectionRef} className={`${isVisible ? 'visible' : ''}`} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.7s ease' }}>
          <div className="mb-[60px]">
            <p className="font-mono text-xs text-brand-gold tracking-widest uppercase flex items-center gap-2.5 mb-3">
              <span className="w-6 h-px bg-brand-gold" />
              <ShuffleText
                texts={['KARIER', 'INFO LOKER']}
                durations={[10000, 3000]}
                initDurations={[3000, 3000]}
              />
            </p>
            <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] font-semibold leading-tight" style={{
              background: 'linear-gradient(135deg, #FFD700, #FF00FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Pengalaman Kerja
            </h2>
            <div className="w-12 h-0.5 mt-4" style={{
              background: 'linear-gradient(90deg, var(--color-brand-gold), transparent)',
            }} />
          </div>

          <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-brand-border">
            {experiences.map((exp, idx) => {
              const isOpen = openExp === idx;
              return (
              <div key={idx}
                className={`relative mb-[52px] p-7 bg-brand-card border border-brand-border rounded-sm transition-all duration-500 before:content-[''] before:absolute before:-left-[40px] before:top-8 before:w-[14px] before:h-[14px] before:rounded-full before:border-2 before:border-brand-darker reveal reveal-delay-${Math.min(idx + 1, 6)} ${isVisible ? 'visible' : ''}`}
                onMouseEnter={e => {
                  e.currentTarget.style.borderImage = 'linear-gradient(135deg, #FFD700, #4ECDC4, #FF00FF) 1';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,215,0,.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderImage = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div className="flex justify-between items-start gap-4 flex-wrap mb-3">
                  <div>
                    <p className="font-serif text-xl font-semibold text-brand-gold">{exp.role}</p>
                    <p className="text-[0.82rem] font-medium mt-1 flex items-center gap-1.5" style={{
                      background: 'linear-gradient(135deg, #4ECDC4, #FF00FF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                      <i className="fas fa-building" style={{ color: '#4ECDC4' }}></i> {exp.company}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-brand-muted whitespace-nowrap px-2.5 py-1 border border-brand-border rounded-full">{exp.period}</span>
                </div>
                <p className="text-[0.88rem] text-brand-muted mb-3 leading-relaxed">{exp.description}</p>

                <button
                  onClick={() => toggleExp(idx)}
                  className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold bg-transparent border-none cursor-pointer pb-0.5"
                  style={{
                    background: 'linear-gradient(135deg, #FFD700, #FF00FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {isOpen ? 'Sembunyikan' : 'Selengkapnya'} <i className="fas fa-chevron-down text-[0.7rem]" style={{
                    transform: isOpen ? 'rotate(180deg)' : '',
                    transition: 'transform 0.3s ease',
                  }} />
                </button>

                <div className={`cert-details ${isOpen ? 'open' : ''}`}>
                  <ul className="space-y-1">
                    {exp.achievements.map((ach, achIdx) => (
                      <li key={achIdx} className="text-[0.86rem] text-brand-muted pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-brand-gold before:text-[0.7rem] before:top-[5px]">
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>

                <style>{`.exp-dot-${idx}::before { background: conic-gradient(#FFD700, #4ECDC4, #FF00FF, #FFD700); box-shadow: 0 0 12px rgba(255,215,0,.5); }`}</style>
              </div>
            );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}