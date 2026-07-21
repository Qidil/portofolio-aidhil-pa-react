import useScrollReveal from '../hooks/useScrollReveal';
import { projects } from '../data/portfolio';
import ShuffleText from './ShuffleText';

const techColors = {
  'React.js': '#4ECDC4',
  'Node.js': '#339933',
  'MySQL': '#F29111',
  'Electron': '#47848F',
  'SQLite': '#003B57',
  'Python': '#3776AB',
  'Cosine Similarity': '#A259FF',
  'Tailwind CSS': '#06B6D4',
  'React Router': '#CA4245',
  'TanStack Query': '#FF4154',
};

export default function Projects() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section className="py-[100px] bg-brand-dark">
      <div className="container-custom">
        <div className="mb-[60px]">
          <p className="font-mono text-xs text-brand-gold tracking-widest uppercase flex items-center gap-2.5 mb-3">
            <span className="w-6 h-px bg-brand-gold" />
            <ShuffleText
              texts={['PORTOFOLIO', 'STILL MAKING SOMETHING']}
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
            Proyek Unggulan
          </h2>
          <div className="w-12 h-0.5 mt-4" style={{
            background: 'linear-gradient(90deg, var(--color-brand-gold), transparent)',
          }} />
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const iconColors = ['#4ECDC4', '#FFD700', '#FF00FF', '#38BDF8'];
            const iconColor = iconColors[idx % iconColors.length];
            return (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block bg-brand-card border border-brand-border rounded-sm p-7 transition-all duration-300 relative overflow-hidden hover:-translate-y-[5px] hover:shadow-[0_20px_50px_rgba(0,0,0,.4)] group reveal reveal-delay-${Math.min(idx + 1, 6)} ${isVisible ? 'visible' : ''}`}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                background: 'linear-gradient(90deg, transparent, #FFD700, #4ECDC4, #FF00FF, transparent)',
              }} />
              <div className="w-11 h-11 flex items-center justify-center rounded-sm mb-5 text-lg" style={{
                background: `${iconColor}20`,
                color: iconColor,
                border: `1px solid ${iconColor}40`,
              }}>
                <i className={`fas ${project.icon}`}></i>
              </div>
              <p className="font-serif text-lg font-semibold text-white mb-2">{project.title}</p>
              <p className="text-[0.84rem] text-brand-muted leading-relaxed mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIdx) => {
                  const col = techColors[tech] || '#FFD700';
                  return (
                  <span key={techIdx} className="font-mono text-[0.7rem] px-[9px] py-[3px] border rounded-sm" style={{
                    borderColor: `${col}40`,
                    color: col,
                  }}>
                    {tech}
                  </span>
                );
                })}
              </div>
            </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}