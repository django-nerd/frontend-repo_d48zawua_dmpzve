import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [imageSrc, setImageSrc] = useState(
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop'
  );

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImageSrc(url);
  };

  return (
    <section className="relative pt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black">
            Arreda e attrezza il tuo locale con soluzioni professionali e su misura.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-black/70 max-w-2xl">
            Dal progetto alla realizzazione, ti accompagniamo in ogni fase per creare spazi funzionali,
            accoglienti e pronti al successo.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#consulenza"
              className="inline-flex items-center justify-center rounded-md bg-[#fdb900] px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white transition-colors"
            >
              Prenota una consulenza gratuita
            </a>
            <label className="inline-flex items-center justify-center rounded-md border border-black/10 px-6 py-3 text-sm font-medium text-black hover:bg-black hover:text-white transition-colors cursor-pointer">
              Carica immagine
              <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
            </label>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg">
            <img src={imageSrc} alt="Innovarreda - Soluzioni Ho.Re.Ca." className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
