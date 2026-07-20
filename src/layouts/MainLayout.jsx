import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-text">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}