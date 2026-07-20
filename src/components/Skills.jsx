import { useState, useEffect, useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { skills, tools } from '../data/portfolio';

const skillColors = {
  'HTML & CSS': '#E44D26',
  'JavaScript': '#F7DF1E',
  'React.js': '#4ECDC4',
  'Tailwind CSS': '#06B6D4',
  'Figma / UI Design': '#A259FF',
  'Node.js & Express.js': '#339933',
  'Python': '#3776AB',
  'MySQL': '#F29111',
  'Git & GitHub': '#6e5494',
  'Electron': '#47848F',
  'Google & Meta Ads': '#4285F4',
  'Office tools (Word, Excel, PowerPoint)': '#D83B01',
  'Canva': '#00C4CC',
  'Capcut': '#FF6B6B',
};

const toolColors = {
  'React.js': '#4ECDC4',
  'Tailwind CSS': '#06B6D4',
  'Figma': '#A259FF',
  'Node.js': '#339933',
  'Express.js': '#68A063',
  'Python': '#3776AB',
  'MySQL': '#F29111',
  'Git & GitHub': '#6e5494',
  'Electron': '#47848F',
  'Google Ads': '#4285F4',
  'Meta Ads': '#1877F2',
  'Word': '#2B579A',
  'Excel': '#217346',
  'PowerPoint': '#D83B01',
  'Canva': '#00C4CC',
  'Capcut': '#FF6B6B',
};

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
          <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] font-semibold leading-tight" style={{
            background: 'linear-gradient(135deg, #FFD700, #FF00FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
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

              {skillGroup.items.map((skill, skillIdx) => {
                const barColor = skillColors[skill.name] || '#FFD700';
                return (
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
                        background: barColor,
                        boxShadow: `0 0 10px ${barColor}66`,
                        transition: 'width 1.2s cubic-bezier(.4,0,.2,1)',
                      }}
                    />
                  </div>
                </div>
              );
              })}
            </div>
          ))}
        </div>

        <div className="mt-[60px]">
          <p className="font-mono text-xs text-brand-muted tracking-widest uppercase mb-4">Tools & Technologies</p>
          <div className="flex flex-wrap gap-2.5">
            {tools.map((tool, idx) => {
              const hoverColor = toolColors[tool] || '#FFD700';
              return (
              <span
                key={idx}
                className="px-3.5 py-1.5 border border-brand-border text-[0.82rem] text-brand-muted rounded-sm transition-all duration-200 cursor-default"
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = hoverColor;
                  e.currentTarget.style.color = hoverColor;
                  e.currentTarget.style.background = `${hoverColor}18`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.color = '';
                  e.currentTarget.style.background = '';
                }}
              >
                {tool}
              </span>
            );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}