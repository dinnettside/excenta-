import HeroTitle from "./components/HeroTitle";
import CardStackHero from "./components/CardStackHero";
import FeaturedProjectsSection from "./components/FeaturedProjectsSection";
import ScrollImageSection from "./components/ScrollImageSection";
import ClientTestimonials from "./components/ClientTestimonials";
import ContactSection from "./components/ContactSection";

export default function Page() {
  return (
    <>
      <section id="hero" className="bg-[#f9f6ef]">
        <HeroTitle />
        <CardStackHero />
      </section>
      <section id="prosjekter">
        <FeaturedProjectsSection />
      </section>
      <section id="tjenester">
        <ScrollImageSection />
      </section>
      <ClientTestimonials />
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
