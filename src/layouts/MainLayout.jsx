import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-text">
      <Navbar />
      <ThemeToggle />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}