// ContactPage.js
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const formData = new FormData(form);

    try {
      // Bruk Formspree (gratis tjeneste)
      const response = await fetch("https://formspree.io/f/xdkoyqbo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <main className="bg-[#f9f6ef] text-gray-900">
      <section className="py-24 px-6 lg:px-16 max-w-[1200px] mx-auto">
        <div className="lg:w-1/2 mx-auto">
          <h1 className="text-5xl font-['Hello',sans-serif] mb-8 text-center">
            Kontakt oss
          </h1>

          {/* Kontaktinfo */}
          <div className="text-center space-y-4 mb-12">
            <a
              href="mailto:ola@excenta.no"
              className="block hover:underline text-lg"
            >
              ✉ ola@excenta.no
            </a>
            <a
              href="tel:+4746802748"
              className="block hover:underline text-lg"
            >
              ☏ +47 46 80 27 48
            </a>
            <p className="text-sm text-gray-600">Man–Fre 08:00–16:00</p>
          </div>

          {/* Skjema */}
          {status === "success" ? (
            <div className="text-center py-8 bg-green-50 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2 text-green-800">
                Takk for din henvendelse!
              </h3>
              <p className="text-green-600">
                Vi kommer tilbake til deg så snart som mulig.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Navn *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ditt navn"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  E-post *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="din@epost.no"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ditt telefonnummer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Melding *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Beskriv ditt prosjekt eller spørsmål..."
                />
              </div>

              {/* Honeypot field */}
              <input type="text" name="_gotcha" style={{ display: "none" }} />

              {status === "error" && (
                <div className="bg-red-50 border border-red-300 rounded-lg p-4">
                  <p className="text-red-600">
                    Kunne ikke sende melding. Prøv igjen eller kontakt oss direkte.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                {status === "loading" ? "SENDER..." : "SEND MELDING"}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
