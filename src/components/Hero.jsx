const stack = ["TypeScript", "React", "Node.js", "Python", "IA"];

const Hero = () => {
  return (
    <section id="top" className="bg-grid relative flex min-h-screen items-center">
      {/* Glow */}
      <div className="glow pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2" />

      <div className="mx-auto w-full max-w-5xl px-4 pt-14 sm:px-6">
        <p className="font-mono2 mb-6 text-sm text-emerald-400" data-aos="fade-up">
          $ whoami
        </p>

        <h1
          className="text-5xl font-bold leading-[1.05] tracking-tight text-zinc-100 sm:text-7xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Julián Berton
        </h1>

        <p
          className="mt-4 text-xl text-zinc-400 sm:text-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Software Developer · Co-founder de{" "}
          <a
            href="https://patagoniacode.com"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-400 underline-offset-4 hover:underline"
          >
            PatagoniaCode
          </a>
        </p>

        <p
          className="mt-6 max-w-xl text-base leading-relaxed text-zinc-500 sm:text-lg"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Me gusta jugar, crear cosas y romperlas para entender cómo funcionan.
          Construí e-commerce, bots, apps y juegos — y ahora estoy full-time
          construyendo con inteligencia artificial.
        </p>

        <div
          className="mt-8 flex flex-wrap items-center gap-3"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="#proyectos"
            className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-300"
          >
            Ver proyectos
          </a>
          <a
            href="https://github.com/Chuliann"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-white/40"
          >
            GitHub ↗
          </a>
        </div>

        <div
          className="mt-12 flex flex-wrap gap-2"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {stack.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
