import HeroTitle from "./components/HeroTitle";
import CardStackHero from "./components/CardStackHero";
import ScrollImageSection from "./components/ScrollImageSection";
import FeaturedProjectsSection from "./components/FeaturedProjectsSection";
import ClientTestimonials from "./components/ClientTestimonials";
import ContactSection from "./components/ContactSection";

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section id="hero" className="bg-[#f9f6ef]">
        <HeroTitle />
        <CardStackHero />
      </section>

      {/* FLYTTET OPP: denne lå tidligere under "Utvalgte prosjekter" */}
      <section id="tjenester" className="py-16 md:py-24">
        <h2 className="text-center font-serif text-xl md:text-3xl tracking-widest">
          – SKREDDERSYDDE LØSNINGER – TIDLØST DESIGN – HÅNDLAGET KVALITET –
        </h2>
        <div className="mt-10">
          <ScrollImageSection />
        </div>
      </section>

      {/* "UTVALGTE PROSJEKTER" kommer nå etterpå */}
      <section id="prosjekter" className="py-16 md:py-24">
        <FeaturedProjectsSection />
      </section>

      <ClientTestimonials />

      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
