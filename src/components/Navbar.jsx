const links = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Ahora", href: "#ahora" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0a0f]/70 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-mono2 text-sm font-bold text-zinc-100">
          jb<span className="text-emerald-400">.</span>dev
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://patagoniacode.com"
            target="_blank"
            rel="noreferrer"
            className="font-mono2 ml-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-300 transition-colors hover:bg-emerald-400/20"
          >
            PatagoniaCode ↗
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
