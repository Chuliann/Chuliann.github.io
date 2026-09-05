const focus = [
  {
    title: "Agentes",
    description:
      "Agentes que planifican, ejecutan y usan herramientas para resolver tareas de punta a punta.",
  },
  {
    title: "Automatización",
    description:
      "Pipelines y bots que le sacan el trabajo repetitivo a las personas y a los negocios.",
  },
  {
    title: "Productos con IA",
    description:
      "Features y productos donde la IA no es un gimmick: es el núcleo de la experiencia.",
  },
];

const Now = () => {
  return (
    <section id="ahora" className="relative py-24">
      <div className="glow pointer-events-none absolute right-0 top-1/2 h-[400px] w-[500px] -translate-y-1/2" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="font-mono2 mb-2 text-sm text-emerald-400" data-aos="fade-up">
          {"// ahora"}
        </p>
        <h2
          className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Full-time en inteligencia artificial
        </h2>
        <p
          className="mt-4 max-w-2xl leading-relaxed text-zinc-500"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Después de años construyendo software tradicional, hoy mi foco está
          100% en IA: entenderla, aplicarla y convertirla en productos útiles.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {focus.map((item, i) => (
            <div
              key={item.title}
              className="card p-6"
              data-aos="fade-up"
              data-aos-delay={200 + i * 100}
            >
              <h3 className="text-lg font-bold text-zinc-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Now;
