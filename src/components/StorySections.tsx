'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Coffee, Bean, Heart, Award } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const StorySections = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(
          section.children,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    })
  }, [])

  const stories = [
    {
      id: 'about',
      icon: Bean,
      title: 'Freshly Roasted Beans',
      description: 'Our beans are sourced from the finest coffee regions and roasted to perfection daily. Each batch brings out unique flavors that tell a story of origin and craftsmanship.',
      bgColor: 'bg-gradient-to-br from-coffee-50 to-cream-100',
      iconColor: 'text-coffee-600',
      image: '/assets/images/roasted-beans.jpg',
    },
    {
      id: 'experience',
      icon: Heart,
      title: 'Crafted Coffee Experience',
      description: 'Every cup is a work of art, crafted by our skilled baristas who understand the delicate balance of temperature, timing, and technique.',
      bgColor: 'bg-gradient-to-br from-cream-100 to-coffee-50',
      iconColor: 'text-coffee-700',
      image: '/assets/images/best-coffee-shops.jpg',
    },
    {
      id: 'signature',
      icon: Award,
      title: 'Signature Blends',
      description: 'Discover our exclusive blends that combine the best of different origins to create unique flavor profiles that delight and surprise.',
      bgColor: 'bg-gradient-to-br from-coffee-50 to-cream-100',
      iconColor: 'text-gold-600',
      image: '/assets/images/cold-coffee.avif',
    },
  ]

  return (
    <>
      {stories.map((story, index) => {
        const Icon = story.icon
        return (
          <section
            key={story.id}
            ref={(el) => {
              if (el) sectionsRef.current[index] = el
            }}
            id={story.id}
            className={`relative py-10 md:py-20 flex items-center justify-center overflow-hidden scroll-mt-20 ${story.bgColor}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg ${story.iconColor}`}>
                    <Icon size={32} />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gradient font-serif">
                    {story.title}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {story.description}
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-coffee-200 rounded-3xl transform rotate-3"></div>
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl card-shadow">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}

export default StorySections
