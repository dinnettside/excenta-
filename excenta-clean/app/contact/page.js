// ContactPage.js
"use client";

// Footer rendres globalt i layout.js
import { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "", // honeypot field
  });
  const [status, setStatus] = useState("idle");
  const [errorDetails, setErrorDetails] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorDetails("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "", company: "" });
      } else {
        setStatus("error");
        // Show detailed error information
        const errorMsg = `Error: ${result.error || "Unknown error"}\nDetails: ${
          result.details || "No details"
        }\nCode: ${result.code || "No code"}`;
        setErrorDetails(errorMsg);
        console.error("Contact form error:", result);
      }
    } catch (error) {
      setStatus("error");
      setErrorDetails(`Network error: ${error.message}`);
      console.error("Network error:", error);
    }
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="bg-[#f9f6ef] text-gray-900">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-16 max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <p className="text-xs uppercase tracking-widest mb-2 text-gray-600">
            Kontakt oss
          </p>
          <h1 className="text-5xl font-['Hello',sans-serif] mb-4">
            Kontakt oss
          </h1>
          <p className="text-lg mb-8 max-w-prose">
            Vi gleder oss til å realisere ditt neste møbelprosjekt. Fyll ut
            skjemaet under, eller kontakt oss direkte via e-post eller telefon.
          </p>

          {/* Kontaktinfo */}
          <div className="space-y-4 mb-12">
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
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Få i gang prosjektet ditt
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Vi hjelper deg med å realisere dine digitale visjoner. Ta
                  kontakt for en uforpliktende samtale om hvordan vi kan løse dine
                  utfordringer.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">E-post</p>
                    <p className="text-gray-300">ola@excenta.no</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Telefon</p>
                    <p className="text-gray-300">+47 46 80 27 48</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Kontortid</p>
                    <p className="text-gray-300">Man–Fre 08:00–16:00</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
            >
              {status === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">
                    Takk for din henvendelse!
                  </h3>
                  <p className="text-gray-300">
                    Vi kommer tilbake til deg så snart som mulig.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Navn *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                      placeholder="Ditt navn"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      E-post *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                      placeholder="din@epost.no"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                      placeholder="Ditt telefonnummer"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Melding *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 resize-none"
                      placeholder="Beskriv ditt prosjekt eller spørsmål..."
                    />
                  </div>

                  {/* Honeypot field - hidden from users */}
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Error Display */}
                  {status === "error" && (
                    <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4">
                      <h4 className="font-semibold text-red-200 mb-2">
                        Kunne ikke sende melding
                      </h4>
                      <details className="text-sm text-red-300">
                        <summary className="cursor-pointer hover:text-red-200">
                          Vis tekniske detaljer
                        </summary>
                        <pre className="mt-2 text-xs bg-red-900/30 p-2 rounded overflow-auto whitespace-pre-wrap">
                          {errorDetails}
                        </pre>
                      </details>
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="w-4 h-4 text-blue-600 bg-white/10 border-white/20 rounded focus:ring-blue-500"
                    />
                    <label
                      htmlFor="consent"
                      className="text-sm text-gray-300"
                    >
                      Jeg samtykker til behandling av mine data
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    {status === "loading"
                      ? "SENDER..."
                      : "SEND MELDING"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ContactPage;
