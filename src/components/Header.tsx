const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[var(--background)]/90 backdrop-blur">
      <nav className="page-shell flex h-16 items-center justify-between">
        <a href="#" className="text-sm font-bold uppercase tracking-normal">
          Portfolio
        </a>
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-[var(--muted)] transition hover:bg-white hover:text-neutral-950"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
