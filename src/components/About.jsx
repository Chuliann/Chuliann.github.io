const traits = [
  {
    title: "Juego",
    description:
      "Los juegos son mi forma de pensar: reglas, sistemas, loops. De ahí salen ideas para todo lo demás.",
  },
  {
    title: "Creo",
    description:
      "De la idea al deploy. Productos reales con usuarios reales: e-commerce, bots, apps mobile y plataformas.",
  },
  {
    title: "Itero",
    description:
      "Nada sale perfecto a la primera. Versiono, mido, rompo, arreglo y vuelvo a largar.",
  },
];

const About = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <p className="font-mono2 mb-2 text-sm text-emerald-400" data-aos="fade-up">
        {"// sobre mí"}
      </p>
      <h2
        className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Builder desde la Patagonia
      </h2>
      <p
        className="mt-4 max-w-2xl leading-relaxed text-zinc-500"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Soy desarrollador y co-founder de PatagoniaCode, donde construimos
        software a medida. Me muevo cómodo entre el frontend, el backend y los
        bots — y si hay algo que no sé, lo aprendo construyendo.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {traits.map((trait, i) => (
          <div
            key={trait.title}
            className="card p-6"
            data-aos="fade-up"
            data-aos-delay={200 + i * 100}
          >
            <h3 className="font-mono2 text-lg font-bold text-emerald-400">
              {trait.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {trait.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
