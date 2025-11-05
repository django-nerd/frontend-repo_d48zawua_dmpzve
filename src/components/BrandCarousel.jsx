import { useEffect, useRef } from 'react';

const brands = [
  { name: 'Electrolux', initials: 'E' },
  { name: 'Zanussi', initials: 'Z' },
  { name: 'LaCimbali', initials: 'LC' },
  { name: 'Rational', initials: 'R' },
  { name: 'Irinox', initials: 'I' },
  { name: 'Foster', initials: 'F' },
  { name: 'Hoshizaki', initials: 'H' },
  { name: 'Winterhalter', initials: 'W' },
];

export default function BrandCarousel() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf;
    let offset = 0;
    const speed = 0.6; // px per frame

    const step = () => {
      offset -= speed;
      if (Math.abs(offset) >= track.scrollWidth / 2) {
        offset = 0;
      }
      track.style.transform = `translateX(${offset}px)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const items = [...brands, ...brands, ...brands];

  return (
    <section id="brand" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-black text-center">
          I migliori marchi del settore, tutti in un unico partner.
        </h2>
        <div className="mt-8 overflow-hidden">
          <div className="will-change-transform flex gap-8" ref={trackRef}>
            {items.map((b, idx) => (
              <div
                key={`${b.name}-${idx}`}
                className="shrink-0 w-44 h-20 rounded-lg border border-black/10 bg-white flex items-center justify-center shadow-sm hover:shadow transition-shadow"
                aria-label={b.name}
                title={b.name}
              >
                <div className="text-black/70 font-semibold tracking-wide">{b.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
