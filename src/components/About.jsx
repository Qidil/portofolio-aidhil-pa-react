import useScrollReveal from '../hooks/useScrollReveal';
import { about } from '../data/portfolio';
import ShuffleText from './ShuffleText';

export default function About() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section id="about" className="py-[100px] bg-brand-darker">
      <div className="container-custom">
        <div ref={sectionRef} className={`grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-20 items-center ${isVisible ? 'visible' : ''}`} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.7s ease' }}>
          {/* Heading */}
          <div className={`relative ${isVisible ? 'visible' : ''}`} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s' }}>
              <p className="font-mono text-xs text-brand-gold tracking-widest uppercase flex items-center gap-2.5 mb-3">
                <span className="w-6 h-px bg-brand-gold" />
                <ShuffleText
                  texts={['TENTANG SAYA', 'KENALAN DULU...']}
                  durations={[10000, 3000]}
                  initDurations={[3000, 3000]}
                />
              </p>
            <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] font-semibold text-white leading-tight">
              Passionate Developer,<br />Creative Thinker
            </h2>
            <div className="w-12 h-0.5 mt-4 mb-8" style={{
              background: 'linear-gradient(90deg, var(--color-brand-gold), transparent)',
            }} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
              {about.infoGrid.map((info, idx) => (
                <div key={idx} className="flex flex-col gap-0.5 p-2.5 rounded-sm bg-brand-card">
                  <p className="font-mono text-[0.7rem] text-brand-muted tracking-widest uppercase">{info.label}</p>
                  <p className="text-[0.9rem] text-brand-text font-medium" style={info.value === 'Available ✓' ? { color: '#48d97a' } : {}}>{info.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Text */}
          <div>
            {about.paragraphs.map((para, idx) => (
              <p key={idx} className="text-[0.95rem] text-brand-muted leading-relaxed mb-5" dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}