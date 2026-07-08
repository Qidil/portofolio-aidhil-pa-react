import { personalInfo, stats } from '../data/portfolio';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 md:pt-0 overflow-hidden bg-brand-dark">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.025]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`
      }} />

      {/* Decorative grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(63,169,245,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(63,169,245,.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }} />

      {/* Glowing orbs */}
      <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none -top-[100px] -right-[100px]" style={{
        background: 'radial-gradient(circle, rgba(63,169,245,.12) 0%, transparent 70%)',
        filter: 'blur(80px)',
      }} />
      <div className="absolute w-[300px] h-[300px] rounded-full pointer-events-none bottom-[100px] left-[5%]" style={{
        background: 'radial-gradient(circle, rgba(78,158,255,.08) 0%, transparent 70%)',
        filter: 'blur(80px)',
      }} />

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-20">
          {/* Photo */}
          <div className="flex-shrink-0 relative">
            <div className="w-[260px] h-[260px] rounded-full p-[3px]" style={{
              background: 'conic-gradient(var(--color-brand-gold), var(--color-brand-gold-light), var(--color-brand-gold), transparent 60%, var(--color-brand-gold))',
              animation: 'spin 8s linear infinite',
            }}>
              <div className="w-full h-full rounded-full bg-brand-darker overflow-hidden" style={{
                animation: 'spin 8s linear infinite reverse',
              }}>
                <img src="/foto_diri.webp" alt={personalInfo.name} className="w-full h-full object-cover opacity-[0.85]" />
              </div>
            </div>
            <div className="absolute bottom-[10px] -right-[10px] bg-brand-darkest border border-brand-border rounded-full px-3.5 py-1.5 flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase whitespace-nowrap" style={{ color: '#48d97a' }}>
              <span className="w-[7px] h-[7px] rounded-full bg-[#48d97a] animate-pulse" />
              Available for Work
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <div className="animate-fade-in opacity-0 translate-y-5" style={{ animationDelay: '0s' }}>
              <p className="font-mono text-xs text-brand-gold tracking-widest uppercase flex items-center gap-2.5 mb-4">
                <span className="w-[30px] h-px bg-brand-gold" />
                Web Developer
              </p>
            </div>

            <h1 className="font-serif text-[clamp(2.8rem,5vw,4.5rem)] font-semibold leading-tight text-white mb-2 animate-fade-in opacity-0 translate-y-5" style={{ animationDelay: '0.12s' }}>
              Aidhil <span className="text-brand-gold-light">Prima Abdiguna</span>
            </h1>

            <p className="text-lg font-light text-brand-muted mb-7 tracking-wide animate-fade-in opacity-0 translate-y-5" style={{ animationDelay: '0.24s' }}>
              <strong className="text-brand-text font-medium">S1 Informatika</strong> - Universitas Muhammadiyah Makassar
            </p>

            <p className="text-[0.95rem] text-brand-muted max-w-[480px] mb-10 leading-relaxed animate-fade-in opacity-0 translate-y-5" style={{ animationDelay: '0.36s' }}>
              {personalInfo.bio}
            </p>

            <div className="flex gap-4 flex-wrap animate-fade-in opacity-0 translate-y-5" style={{ animationDelay: '0.48s' }}>
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                <i className="fas fa-envelope"></i> Hire Me
              </a>
            </div>

            <div className="flex gap-10 mt-12 animate-fade-in opacity-0 translate-y-5" style={{ animationDelay: '0.6s' }}>
              <div>
                <p className="font-serif text-[2.2rem] font-bold text-brand-gold-light leading-none">{stats.yearsExperience}+</p>
                <p className="text-xs text-brand-muted tracking-wider uppercase mt-1">Tahun Pengalaman</p>
              </div>
              <div className="w-px bg-brand-border self-stretch" />
              <div>
                <p className="font-serif text-[2.2rem] font-bold text-brand-gold-light leading-none">{stats.projectsCompleted}</p>
                <p className="text-xs text-brand-muted tracking-wider uppercase mt-1">Proyek Portofolio</p>
              </div>
              <div className="w-px bg-brand-border self-stretch" />
              <div>
                <p className="font-serif text-[2.2rem] font-bold text-brand-gold-light leading-none">{stats.gpa}</p>
                <p className="text-xs text-brand-muted tracking-wider uppercase mt-1">IPK Lulusan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}