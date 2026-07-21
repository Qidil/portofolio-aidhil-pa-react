import { useMemo } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { certificates } from '../data/portfolio';
import ShuffleText from './ShuffleText';
import CertCarousel from './CertCarousel';

const categoryConfig = {
  'Frontend Development': { icon: 'fa-code', order: 0 },
  'Backend & Tools': { icon: 'fa-server', order: 1 },
  'Digital Marketing': { icon: 'fa-bullhorn', order: 2 },
};

export default function Certificates() {
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

  return (
    <section className="py-[100px] bg-brand-darker">
      <div className="container-custom">
        <div className="text-center max-w-[520px] mx-auto mb-[60px]">
          <p className="font-mono text-xs text-brand-gold tracking-widest uppercase flex items-center justify-center gap-2.5 mb-3">
            <span className="w-6 h-px bg-brand-gold" />
            <ShuffleText
              texts={['PELATIHAN YANG SAYA IKUTI', 'TETAP BELAJAR MANUAL']}
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
            Sertifikasi & Pelatihan
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

              <CertCarousel items={certs} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}