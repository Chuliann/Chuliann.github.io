const Footer = () => {
  return (
    <footer id="contacto" className="border-t border-white/5 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="font-mono2 mb-2 text-sm text-emerald-400" data-aos="fade-up">
          {"// contacto"}
        </p>
        <h2
          className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          ¿Construimos algo?
        </h2>
        <p
          className="mt-4 max-w-xl leading-relaxed text-zinc-500"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Si tenés una idea, un proyecto o querés charlar de IA, juegos o
          software — estoy a un mensaje de distancia.
        </p>

        <div
          className="mt-8 flex flex-wrap gap-3"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a
            href="https://github.com/Chuliann"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-white/40"
          >
            GitHub ↗
          </a>
          <a
            href="https://patagoniacode.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-300"
          >
            PatagoniaCode ↗
          </a>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono2 text-xs text-zinc-600">
            © 2026 Julián Berton
          </p>
          <p className="font-mono2 text-xs text-zinc-600">
            Co-founder @{" "}
            <a
              href="https://patagoniacode.com"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-emerald-400"
            >
              patagoniacode.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
