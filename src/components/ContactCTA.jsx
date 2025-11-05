import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactCTA() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent('Richiesta consulenza - Innovarreda');
    const body = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\nTelefono: ${phone}\n\nMessaggio:\n${message}`
    );
    return `mailto:info@innovarreda.example?subject=${subject}&body=${body}`;
  }, [name, email, phone, message]);

  const onSubmit = (e) => {
    e.preventDefault();
    window.location.href = mailtoHref;
  };

  return (
    <section id="consulenza" className="relative bg-white py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(253,185,0,0.12),_transparent_40%),_radial-gradient(circle_at_80%_30%,_rgba(0,0,0,0.06),_transparent_35%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">Hai un progetto? Parliamone insieme.</h2>
          <p className="mt-3 text-black/70">
            Prenota ora una consulenza gratuita con i nostri esperti e trasforma il tuo locale.
          </p>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-8 max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/80 backdrop-blur rounded-xl border border-black/10 p-6 shadow-sm"
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-black">Nome e Cognome</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Mario Rossi"
              className="h-11 rounded-md border border-black/10 px-3 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-[#fdb900]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-black">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nome@azienda.it"
              className="h-11 rounded-md border border-black/10 px-3 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-[#fdb900]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-black">Telefono</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+39 333 1234567"
              className="h-11 rounded-md border border-black/10 px-3 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-[#fdb900]"
            />
          </div>
          <div className="flex flex-col gap-2 sm:col-span-2">
            <label className="text-sm font-medium text-black">Messaggio</label>
            <textarea
              rows={5}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Raccontaci il tuo progetto, le tempistiche e le esigenze principali."
              className="rounded-md border border-black/10 px-3 py-2 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-[#fdb900]"
            />
          </div>
          <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-black/60">Compilando il form accetti di essere ricontattato dai nostri specialisti.</span>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-[#fdb900] px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white transition-colors"
            >
              Prenota Ora
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
