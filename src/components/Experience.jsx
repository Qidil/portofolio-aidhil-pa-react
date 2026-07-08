import useScrollReveal from '../hooks/useScrollReveal';
import { experiences } from '../data/portfolio';

export default function Experience() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section id="experience" className="py-[100px] bg-brand-darker">
      <div className="container-custom">
        <div ref={sectionRef} className={`${isVisible ? 'visible' : ''}`} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.7s ease' }}>
          <div className="mb-[60px]">
            <p className="font-mono text-xs text-brand-gold tracking-widest uppercase flex items-center gap-2.5 mb-3">
              <span className="w-6 h-px bg-brand-gold" />
              Karier
            </p>
            <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] font-semibold text-white leading-tight">
              Pengalaman Kerja
            </h2>
            <div className="w-12 h-0.5 mt-4" style={{
              background: 'linear-gradient(90deg, var(--color-brand-gold), transparent)',
            }} />
          </div>

          <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-brand-border">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`relative mb-[52px] p-7 bg-brand-card border border-brand-border rounded-sm hover:border-[rgba(63,169,245,.3)] hover:translate-x-1 transition-all duration-300 before:content-[''] before:absolute before:-left-[40px] before:top-8 before:w-[10px] before:h-[10px] before:rounded-full before:bg-brand-gold before:border-2 before:border-brand-darker before:shadow-[0_0_12px_var(--color-brand-gold)] reveal reveal-delay-${Math.min(idx + 1, 6)} ${isVisible ? 'visible' : ''}`}>
                <div className="flex justify-between items-start gap-4 flex-wrap mb-3">
                  <div>
                    <p className="font-serif text-xl font-semibold text-white">{exp.role}</p>
                    <p className="text-[0.82rem] text-brand-gold font-medium mt-1 flex items-center gap-1.5">
                      <i className="fas fa-building"></i> {exp.company}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-brand-muted whitespace-nowrap px-2.5 py-1 border border-brand-border rounded-full">{exp.period}</span>
                </div>
                <p className="text-[0.88rem] text-brand-muted mb-3 leading-relaxed">{exp.description}</p>
                <ul className="space-y-1">
                  {exp.achievements.map((ach, achIdx) => (
                    <li key={achIdx} className="text-[0.86rem] text-brand-muted pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-brand-gold before:text-[0.7rem] before:top-[5px]">
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}