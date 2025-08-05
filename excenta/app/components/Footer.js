"use client";

// Footer.js
const Footer = () => {
  return (
    <footer className="bg-[#252422] text-white text-sm">
      <div className="max-w-[1200px] mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12">
        {/* Logo + tagline */}
        <div className="lg:w-1/3 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            {/* Placeholder logo, bytt ut med ekte */}
            <div className="w-6 h-6 bg-white rounded-sm" aria-hidden="true" />
            <span className="font-semibold text-lg">Excenta AS</span>
          </div>
          <p className="max-w-xs">
            Skreddersydd interiør der design møter tidløs kvalitet.
          </p>
          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Til toppen"
            className="mt-4 w-[48px] h-[48px] grid place-items-center border border-white/20 rounded-full hover:bg-white/5 transition"
          >
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path d="M5 12l7-7 7 7" />
              <path d="M5 19l7-7 7 7" />
            </svg>
          </button>
        </div>

        {/* Navigasjon kolonner */}
        <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="uppercase tracking-wider text-xs mb-2">Utforsk</h3>
            <a href="/" className="hover:underline">
              Hjem
            </a>
            <a href="/#prosjekter" className="hover:underline">
              Prosjekter
            </a>
            <a href="/about" className="hover:underline">
              Om oss
            </a>
            <a href="/#tjenester" className="hover:underline">
              Tjenester
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="uppercase tracking-wider text-xs mb-2">Kontakt</h3>
            <a href="/contact" className="hover:underline">
              Kontakt oss
            </a>
            <a href="mailto:post@excenta.no" className="hover:underline">
              E-post
            </a>
            <a href="tel:+4712345678" className="hover:underline">
              Telefon
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="uppercase tracking-wider text-xs mb-2">Ressurser</h3>
            <a href="#" className="hover:underline">
              Stilguide
            </a>
            <a href="#" className="hover:underline">
              Lisensier
            </a>
            <a href="#" className="hover:underline">
              Endringslogg
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="uppercase tracking-wider text-xs mb-2">Følg oss</h3>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center border border-white/20 rounded hover:bg-white/5 transition"
              >
                {/* instagram icon */}
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X"
                className="w-9 h-9 flex items-center justify-center border border-white/20 rounded hover:bg-white/5 transition"
              >
                {/* X icon */}
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center border border-white/20 rounded hover:bg-white/5 transition"
              >
                {/* LinkedIn icon */}
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7 0h3.6v2.16h.05c.5-.95 1.72-1.95 3.54-1.95 3.78 0 4.48 2.5 4.48 5.75V24h-4v-8.5c0-2.02-.04-4.62-2.82-4.62-2.82 0-3.25 2.2-3.25 4.47V24h-4V8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Credit line */}
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between text-xs text-gray-400 gap-2">
        <div className="flex flex-wrap gap-2">
          <span>© {new Date().getFullYear()} Excenta AS. Alle rettigheter forbeholdes.</span>
          <span className="hidden sm:inline">|</span>
          <span>
            Created by{" "}
            <a
              href="https://dinnettside.no"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-200"
            >
              dinnettside.no
            </a>
          </span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">
            Style Guide
          </a>
          <a href="#" className="hover:underline">
            Licenses
          </a>
          <a href="#" className="hover:underline">
            Changelog
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
