import Header from './components/Header';
import Hero from './components/Hero';
import BrandCarousel from './components/BrandCarousel';
import Services from './components/Services';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="bg-white text-black min-h-screen scroll-smooth">
      <Header />
      <main>
        <Hero />
        <BrandCarousel />
        <Services />
        <ContactCTA />
      </main>
      <footer className="border-t border-black/10 py-8 mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-black/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Innovarreda — Tutti i diritti riservati</p>
          <p>
            P.IVA 00000000000 • <a className="underline hover:no-underline" href="#consulenza">Contatti</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
