import useScrollReveal from '../hooks/useScrollReveal';
import { projects } from '../data/portfolio';
import ShuffleText from './ShuffleText';
import Stack from './Stack';

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

const iconColors = ['#4ECDC4', '#FFD700', '#FF00FF', '#38BDF8'];

const projectCards = projects.map((project, idx) => {
  const iconColor = iconColors[idx % iconColors.length];
  const openProject = () => window.open(project.link, '_blank', 'noopener');
  return (
    <div
      key={idx}
      role="button"
      tabIndex={0}
      onClick={openProject}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') openProject(); }}
      className="bg-brand-darker border border-brand-border rounded-sm p-6 transition-all duration-300 relative overflow-hidden group w-full h-full cursor-pointer select-none"
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
        background: 'linear-gradient(90deg, transparent, #FFD700, #4ECDC4, #FF00FF, transparent)',
      }} />
      <div className="flex flex-col h-full">
        <div className="w-10 h-10 flex items-center justify-center rounded-sm mb-3 text-lg" style={{
          background: `${iconColor}20`,
          color: iconColor,
          border: `1px solid ${iconColor}40`,
        }}>
          <i className={`fas ${project.icon}`}></i>
        </div>
        <p className="font-serif text-lg font-semibold text-white mb-2">{project.title}</p>
        <p className="text-[0.82rem] text-brand-muted leading-relaxed mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-3">
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
      </div>
    </div>
  );
});

const openGithub = () => window.open('https://github.com/Qidil', '_blank', 'noopener');

const githubCard = (
  <div
    role="button"
    tabIndex={0}
    onClick={openGithub}
    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') openGithub(); }}
    className="bg-brand-darker border border-brand-border rounded-sm p-6 transition-all duration-300 relative overflow-hidden group cursor-pointer select-none h-full"
  >
    <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
      background: 'linear-gradient(90deg, transparent, #FFD700, #4ECDC4, #FF00FF, transparent)',
    }} />
    <div className="flex flex-col items-center justify-center text-center h-full">
      <div className="w-14 h-14 flex items-center justify-center rounded-full mb-4 text-xl" style={{
        background: 'rgba(78,205,196,0.12)',
        color: '#4ECDC4',
        border: '1px solid rgba(78,205,196,0.25)',
      }}>
        <i className="fab fa-github"></i>
      </div>
      <p className="font-serif text-base font-semibold text-white mb-1">Project lain saya</p>
      <p className="text-[0.8rem] text-brand-muted leading-relaxed mb-5 max-w-[200px]">Saat ini saya masih membuat beberapa project lain di Github saya</p>
      <span className="inline-flex items-center gap-2 text-[0.82rem] font-semibold" style={{
        background: 'linear-gradient(135deg, #4ECDC4, #FFD700)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        Github.com/Qidil <i className="fas fa-arrow-right text-[0.7rem]" />
      </span>
    </div>
  </div>
);

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

        <div ref={sectionRef} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <div className="md:col-span-2">
              <div className="max-w-lg mx-auto">
                <Stack
                  cards={projectCards}
                  randomRotation
                  sensitivity={150}
                  animationConfig={{ stiffness: 260, damping: 20 }}
                />
              </div>
              <p className="text-center text-[0.8rem] text-brand-muted mt-4 font-mono">
                <i className="fas fa-arrows-left-right mr-1.5" />
                Geser kartu untuk mengganti
              </p>
            </div>
            <div className="hidden md:block">
              {githubCard}
            </div>
          </div>
          <div className="md:hidden mt-6">
            {githubCard}
          </div>
        </div>
      </div>
    </section>
  );
}
