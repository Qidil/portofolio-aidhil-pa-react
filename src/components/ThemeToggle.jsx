import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full border border-brand-border bg-brand-card text-brand-muted hover:text-brand-gold hover:border-brand-gold hover:shadow-gold-glow transition-all duration-300 cursor-pointer"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'} text-lg`} />
    </button>
  );
}
