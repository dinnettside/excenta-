// ContactPage.js
"use client";

import Footer from "../components/Footer";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Her kan du legge til form submission logic senere
    console.log('Form submitted');
  };

  return (
    <main className="bg-[#f9f6ef] text-gray-900">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-16 max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <p className="text-xs uppercase tracking-widest mb-2 text-gray-600">Kontakt oss</p>
          <h1 className="text-5xl font-['Hello',sans-serif] mb-4">Kontakt oss</h1>
          <p className="text-lg mb-8 max-w-prose">
            Vi gleder oss til å realisere ditt neste møbelprosjekt. Fyll ut skjemaet under, eller kontakt oss direkte via e-post eller telefon.
          </p>

          {/* Kontaktinfo */}
          <div className="space-y-4 mb-12">
            <a href="mailto:post@excenta.no" className="block hover:underline text-lg">
              ✉ post@excenta.no
            </a>
            <a href="tel:+4712345678" className="block hover:underline text-lg">
              ☏ +47 123 45 678
            </a>
            <p className="text-sm text-gray-600">Man–Fre 08:00–16:00</p>
          </div>

          {/* Skjema */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">Navn</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ditt navn"
                required
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">E-post</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="din@epost.no"
                required
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="phone">Telefon</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+47 123 45 678"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="message">Melding</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Skriv din melding her…"
                required
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 bg-white resize-vertical"
              />
            </div>
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                required
                className="h-4 w-4 border-gray-300 rounded focus:ring-black/20 mt-1"
              />
              <label htmlFor="consent" className="text-sm">
                Jeg samtykker til behandling av mine data
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#252422] text-white py-3 rounded-md uppercase tracking-wider text-sm hover:bg-black transition-colors duration-300"
            >
              Send melding
            </button>
          </form>
        </div>

        {/* Bilde */}
        <div className="lg:w-1/2">
          <img
            src="/omoss.webp"
            alt="Kontakt oss - Skreddersydde møbler"
            className="w-full h-auto object-cover rounded-xl shadow-lg"
            loading="lazy"
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default ContactPage;
