'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const sections = [
  {
    title: 'Skreddersydde kjøkken',
    text: 'Et kjøkken er mer enn bare funksjon – det er hjemmets hjerte. Vi designer kjøkken med sjel, laget etter dine mål og drømmer. Med frihet i materialvalg, mål og uttrykk skaper vi løsninger som speiler din personlighet og stil.',
    image: '/kitchen.webp',
  },
  {
    title: 'Garderober med presisjon',
    text: 'Våre garderobeløsninger kombinerer funksjonalitet og eleganse. Alt skreddersys for å optimalisere hver kvadratcentimeter og fremheve den arkitektoniske helheten i hjemmet ditt. Ren luksus – praktisk og tidløs.',
    image: '/closet.webp',
  },
  {
    title: 'Estetiske baderom',
    text: 'Et bad skal gi deg en følelse av ro og velvære. Vi bygger baderomsmøbler etter dine behov, med en perfekt balanse mellom funksjon og estetikk. Eksklusive materialvalg og skreddersydde detaljer gir et unikt uttrykk.',
    image: '/bathroom.webp',
  },
  {
    title: 'TV-møbler og lavmøbler',
    text: 'Moderne og stilrene TV-benker og lavmøbler som løfter interiøret. Designet for sømløs integrasjon i hjemmet og bygget for å vare. Skreddersydde løsninger som kombinerer estetikk, lagring og teknologi.',
    image: '/tvunit.webp',
  },
]

export default function ScrollImageSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [imageOpacity, setImageOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const textSections = document.querySelectorAll('.text-section')
      textSections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          if (index !== activeIndex) {
            setImageOpacity(0)
            setTimeout(() => {
              setActiveIndex(index)
              setImageOpacity(1)
            }, 350)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeIndex])

  return (
    <section className="relative flex flex-col lg:flex-row w-full bg-[#f9f6ef]">
      {/* Left: Text Sections */}
      <div className="w-full lg:w-1/2 px-6 lg:px-24 py-0 space-y-[10vh]">
        {sections.map((item, i) => (
          <div key={i} className="text-section h-screen flex flex-col justify-center">
            <h2 className="font-['Playfair_Display'] text-4xl font-bold text-black mb-6">{item.title}</h2>
            <p className="text-lg text-black">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Right: Sticky Image */}
      <div className="w-full lg:w-1/2 hidden lg:flex sticky top-0 h-screen items-center justify-center">
        <Image
          src={sections[activeIndex].image}
          alt={sections[activeIndex].title}
          width={800}
          height={600}
          style={{ 
            objectFit: 'contain', 
            objectPosition: 'center',
            opacity: imageOpacity,
            transition: 'opacity 0.35s ease-in-out'
          }}
          className="w-[90%] h-[80%] rounded-xl"
          priority
        />
      </div>
    </section>
  )
}
