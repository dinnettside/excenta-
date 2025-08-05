"use client";

// HamburgerFullscreenMenu.js
import { useState, useEffect } from "react";

const MENU_ITEMS = [
  { label: "Hjem", href: "/" },
  { label: "Prosjekter", href: "/#prosjekter" },
  { label: "Om oss", href: "/about" },
  { label: "Tjenester", href: "/#tjenester" },
  { label: "Kontakt", href: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showItems, setShowItems] = useState(false);

  // Når open toggles on, kick off reveal sequence
  useEffect(() => {
    if (open) {
      // etter søyle-anim (0.6s) vises menyvalg
      const timer = setTimeout(() => setShowItems(true), 600);
      return () => clearTimeout(timer);
    } else {
      setShowItems(false);
    }
  }, [open]);

  const handleItemClick = (href) => {
    // Check if it's a hash link (for same page navigation) or a route change
    if (href.startsWith('#')) {
      window.location.hash = href;
    } else {
      // Navigate to new page
      window.location.href = href;
    }
    // lukk meny etter kort delay slik at man ser klikket
    setShowItems(false);
    setTimeout(() => setOpen(false), 150);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#f9f6ef] px-6 py-4 flex items-center justify-between shadow-none">
        {/* Logo */}
        <a href="/" className="text-base font-semibold text-black hover:opacity-75 transition-opacity">
          EXCENTA AS
        </a>

        {/* Burger knapp */}
        <button
          aria-label={open ? "Lukk meny" : "Åpne meny"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1"
        >
          <div
            className={`w-7 h-0.5 bg-black transition-transform duration-300 ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <div
            className={`w-7 h-0.5 bg-black transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-7 h-0.5 bg-black transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </nav>

      {/* Overlay + søyler */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {/* 3 søyler */}
        {["left", "center", "right"].map((pos, i) => (
          <div
            key={pos}
            className={`
              flex-1
              relative
              overflow-hidden
              before:absolute before:inset-0 before:bg-[#252422]
              ${open ? "animate-expand-column" : "before:scale-y-0"}
              ${open ? "pointer-events-auto" : ""}
            `}
            style={{
              transitionDelay: `${i * 100}ms`,
            }}
          ></div>
        ))}
        {/* Menyinnhold over søylene */}
        <div
          className={`absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-300 ${
            showItems ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <nav aria-label="Hovedmeny">
            <ul className="flex flex-col gap-8 text-center">
              {MENU_ITEMS.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleItemClick(item.href)}
                    className="text-3xl font-semibold tracking-wide text-white relative px-1 group"
                  >
                    <span>{item.label}</span>
                    <span
                      className="block h-[2px] bg-white absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-300"
                      aria-hidden="true"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Escape-lukker */}
      <EscapeCloser onClose={() => setOpen(false)} active={open} />
      <style jsx>{`
        @keyframes expandColumns {
          0% {
            transform: scaleY(0);
          }
          60% {
            transform: scaleY(1.05);
          }
          100% {
            transform: scaleY(1);
          }
        }
        .animate-expand-column:before {
          transform-origin: top;
          animation: expandColumns 0.6s forwards ease-out;
        }
      `}</style>
    </>
  );
}

// Hjelpekomponent for Escape-tast
const EscapeCloser = ({ active, onClose }) => {
  useEffect(() => {
    if (!active) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active, onClose]);
  return null;
};

export default Navbar;
