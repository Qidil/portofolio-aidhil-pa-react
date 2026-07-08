import { useState, useEffect, useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { skills, tools } from '../data/portfolio';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [headerRef, headerVisible] = useScrollReveal();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-[100px] bg-brand-dark">
      <div className="container-custom">
        <div ref={headerRef} className={`text-center max-w-[520px] mx-auto mb-[60px] reveal ${headerVisible ? 'visible' : ''}`}>
          <p className="font-mono text-xs text-brand-gold tracking-widest uppercase flex items-center justify-center gap-2.5 mb-3">
            <span className="w-6 h-px bg-brand-gold" />
            Keahlian
          </p>
          <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] font-semibold text-white leading-tight">
            Tech Stack & Skills
          </h2>
          <div className="w-12 h-0.5 mt-4 mx-auto" style={{
            background: 'linear-gradient(90deg, var(--color-brand-gold), transparent)',
          }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-[60px]">
          {skills.map((skillGroup, idx) => (
            <div key={idx}>
              <p className="font-serif text-xl text-brand-gold-light mb-6 flex items-center gap-2.5">
                <i className={`fas ${skillGroup.icon} text-brand-gold text-base`}></i>
                {skillGroup.category}
              </p>

              {skillGroup.items.map((skill, skillIdx) => (
                <div key={skillIdx} className="mb-5">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-[0.88rem] font-medium text-brand-text">{skill.name}</p>
                    <span className="font-mono text-xs text-brand-gold">{skill.percentage}%</span>
                  </div>
                  <div className="h-1 bg-brand-border rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: isVisible ? `${skill.percentage}%` : '0%',
                        background: 'linear-gradient(90deg, var(--color-brand-gold), var(--color-brand-gold-light))',
                        boxShadow: '0 0 10px rgba(63,169,245,.4)',
                        transition: 'width 1.2s cubic-bezier(.4,0,.2,1)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-[60px]">
          <p className="font-mono text-xs text-brand-muted tracking-widest uppercase mb-4">Tools & Technologies</p>
          <div className="flex flex-wrap gap-2.5">
            {tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 border border-brand-border text-[0.82rem] text-brand-muted rounded-sm hover:border-brand-gold hover:text-brand-gold-light hover:bg-brand-gold-glow transition-all duration-200 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}