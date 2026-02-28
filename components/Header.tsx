"use client";

export function Header() {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#blog' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-200">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <a href="#" className="text-xl font-semibold text-chocolate-600">
            RN
          </a>
          
          {/* Horizontal Navigation */}
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="transition-colors text-base text-chocolate-600 hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}