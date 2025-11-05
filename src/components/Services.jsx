import { Building2, Cog, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Sviluppo da 0 del locale commerciale',
    desc:
      'Progettiamo e realizziamo arredi e forniture su misura per ogni tipo di attività Ho.Re.Ca.',
    icon: Building2,
  },
  {
    title: 'Attrezzature professionali',
    desc:
      'Collaboriamo con i migliori marchi per garantire efficienza, qualità e durata nel tempo.',
    icon: Cog,
  },
  {
    title: 'Assistenza tecnica',
    desc:
      'Supporto rapido e qualificato per la manutenzione e la riparazione delle attrezzature.',
    icon: Wrench,
  },
];

export default function Services() {
  return (
    <section id="servizi" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-black text-center">I nostri servizi principali</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#fdb900]/20 flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-semibold text-lg text-black">{s.title}</h3>
              </div>
              <p className="mt-3 text-black/70 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
