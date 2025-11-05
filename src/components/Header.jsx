import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      isScrolled ? 'bg-white/90 backdrop-blur border-b border-black/5 shadow-sm' : 'bg-white/70 backdrop-blur'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#fdb900]" aria-hidden />
            <span className="font-semibold tracking-tight text-xl text-black">Innovarreda</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <button onClick={() => scrollToId('servizi')} className="text-black/80 hover:text-black transition-colors">Servizi</button>
            <button onClick={() => scrollToId('brand')} className="text-black/80 hover:text-black transition-colors">Brand Partner</button>
            <button onClick={() => scrollToId('consulenza')} className="text-black/80 hover:text-black transition-colors">Consulenza</button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToId('consulenza')}
              className="inline-flex items-center justify-center rounded-md bg-[#fdb900] px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white transition-colors"
            >
              Prenota una Consulenza Gratuita
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
