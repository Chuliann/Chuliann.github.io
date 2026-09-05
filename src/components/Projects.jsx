const projects = [
  {
    name: "PatagoniaCode",
    role: "Co-founder",
    description:
      "Estudio de desarrollo de software. Sitios, sistemas y productos digitales a medida para clientes reales.",
    tags: ["React", "Vite", "i18n"],
    link: "https://patagoniacode.com",
    featured: true,
  },
  {
    name: "BotOfertas",
    role: "Bot · Automatización",
    description:
      "Bot que caza ofertas en tiempo real scrapeando marketplaces y avisa por Telegram. Con dashboard en Streamlit.",
    tags: ["Python", "Playwright", "Telegram"],
    link: null,
  },
  {
    name: "Cheffy",
    role: "App mobile",
    description:
      "App de recetas con despensa, calendario de comidas y lista de compras. Backend con API REST y auth JWT.",
    tags: ["React Native", "NestJS", "PostgreSQL"],
    link: null,
  },
  {
    name: "Belén",
    role: "E-commerce",
    description:
      "Plataforma de ventas con backoffice, panel de estadísticas, ofertas y SEO. Producción con usuarios reales.",
    tags: ["Full-stack", "SEO", "Backoffice"],
    link: null,
  },
  {
    name: "Garden TCG",
    role: "Sistema de gestión",
    description:
      "Gestión de stock y ventas para tienda de cartas coleccionables, con importación masiva y reportes.",
    tags: ["Full-stack", "Stock", "Reportes"],
    link: null,
  },
  {
    name: "Penales",
    role: "Juego",
    description:
      "Juego de penales con física y varias iteraciones de gameplay. Porque jugar también es construir.",
    tags: ["Game dev", "JavaScript"],
    link: null,
  },
];

const Projects = () => {
  return (
    <section id="proyectos" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <p className="font-mono2 mb-2 text-sm text-emerald-400" data-aos="fade-up">
        {"// proyectos"}
      </p>
      <h2
        className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Cosas que construí
      </h2>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const Wrapper = project.link ? "a" : "div";
          const wrapperProps = project.link
            ? { href: project.link, target: "_blank", rel: "noreferrer" }
            : {};
          return (
            <Wrapper
              key={project.name}
              {...wrapperProps}
              className="card flex flex-col p-6"
              data-aos="fade-up"
              data-aos-delay={100 + i * 80}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-bold text-zinc-100">
                  {project.name}
                  {project.link && (
                    <span className="ml-1 text-emerald-400">↗</span>
                  )}
                </h3>
                {project.featured && (
                  <span className="font-mono2 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-emerald-300">
                    co-founder
                  </span>
                )}
              </div>
              <p className="font-mono2 mt-1 text-xs text-zinc-500">
                {project.role}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </Wrapper>
          );
        })}
      </div>

      <p className="mt-8 text-sm text-zinc-500" data-aos="fade-up">
        Y más experimentos en{" "}
        <a
          href="https://github.com/Chuliann"
          target="_blank"
          rel="noreferrer"
          className="text-emerald-400 underline-offset-4 hover:underline"
        >
          github.com/Chuliann ↗
        </a>
      </p>
    </section>
  );
};

export default Projects;
