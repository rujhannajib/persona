"use client";

import { useEffect, useState } from "react";

export function Header() {
  const [headerBg, setHeaderBg] = useState<string>("rgb(254, 249, 240)");

  useEffect(() => {
    const getEffectiveBackgroundColor = (startElement: Element | null) => {
      let current: Element | null = startElement;

      while (current) {
        const color = window.getComputedStyle(current).backgroundColor;
        if (color && color !== "rgba(0, 0, 0, 0)" && color !== "transparent") {
          return color;
        }
        current = current.parentElement;
      }

      return window.getComputedStyle(document.body).backgroundColor;
    };

    const syncHeaderBackground = () => {
      const samplePointY = 80;
      const sampledElement = document.elementFromPoint(window.innerWidth / 2, samplePointY);
      const sectionElement = sampledElement?.closest("section") ?? sampledElement;
      const nextColor = getEffectiveBackgroundColor(sectionElement);
      setHeaderBg(nextColor);
    };

    let rafId: number | null = null;
    const requestSync = () => {
      if (rafId !== null) return;

      rafId = window.requestAnimationFrame(() => {
        syncHeaderBackground();
        rafId = null;
      });
    };

    syncHeaderBackground();
    window.addEventListener("scroll", requestSync, { passive: true });
    window.addEventListener("resize", requestSync);

    return () => {
      window.removeEventListener("scroll", requestSync);
      window.removeEventListener("resize", requestSync);

      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-200"
      style={{ backgroundColor: headerBg }}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src="/logo.png"
              alt="RN Logo"
              className="h-12 w-auto text-chocolate-600"
            />
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
