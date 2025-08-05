// ContactSection.js
import ContactTextLoop from "./ContactTextLoop";
import ContactImages from "./ContactImages";

const ContactSection = () => {
  return (
    <section
      aria-label="Kontakt"
      className="relative bg-[#f9f6ef] overflow-hidden py-24 px-6 lg:px-16"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 relative">
        {/* Venstre hjørnebilder */}
        <div className="lg:w-1/4 relative min-h-[600px] lg:min-h-[700px] hidden lg:block">
          <ContactImages side="left" />
        </div>

        {/* Midt: tekst, vertikalt sentrert */}
        <div className="lg:w-1/2 flex flex-col justify-center z-10">
          <div className="mb-8 text-center">
            {/* Kontakt oss animation over the heading */}
            <div className="text-sm lg:text-base mb-2 opacity-80">
              <ContactTextLoop text="TA KONTAKT NÅ" />
            </div>
            <h2 className="text-5xl font-['Hello',sans-serif] leading-tight mb-4 text-gray-900">
              KLAR FOR Å LØFTE ROMMET DITT?
            </h2>
            <p className="text-base max-w-prose mb-6 text-gray-700 mx-auto">
              La oss skreddersy løsninger som kombinerer tidløs design og presisjonshåndverk. Enten det er kjøkken, garderobe, bad eller møbler — vi hjelper deg å realisere visjonen din.
            </p>
          </div>
        </div>

        {/* Høyre hjørnebilder */}
        <div className="lg:w-1/4 relative min-h-[600px] lg:min-h-[700px]">
          <ContactImages side="right" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
