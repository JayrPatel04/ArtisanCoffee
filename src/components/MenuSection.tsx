'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const MenuSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }
  }, [])

  const menuCategories = [
    { id: 'all', name: 'All Items' },
    { id: 'espresso', name: 'Espresso' },
    { id: 'cappuccino', name: 'Cappuccino' },
    { id: 'specials', name: 'Specials' },
  ]

  const menuItems = [
    {
      name: 'Espresso',
      description: 'Pure, intense shot of our finest blend',
      price: '₹180',
      icon: '☕',
      featured: false,
      category: 'espresso',
    },
    {
      name: 'Cappuccino',
      description: 'Rich espresso with steamed milk foam',
      price: '₹220',
      icon: '☕',
      featured: true,
      category: 'cappuccino',
    },
    {
      name: 'Latte',
      description: 'Smooth espresso with creamy steamed milk',
      price: '₹240',
      icon: '☕',
      featured: false,
      category: 'cappuccino',
    },
    {
      name: 'Cold Brew',
      description: 'Slow-steeped, smooth and refreshing',
      price: '₹200',
      icon: '🧊',
      featured: true,
      category: 'specials',
    },
    {
      name: 'Mocha',
      description: 'Espresso with chocolate and steamed milk',
      price: '₹260',
      icon: '☕',
      featured: false,
      category: 'specials',
    },
    {
      name: 'Americano',
      description: 'Espresso with hot water for a smooth finish',
      price: '₹190',
      icon: '☕',
      featured: false,
      category: 'espresso',
    },
  ]

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <section id="menu" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20 bg-gradient-to-br from-cream-50 to-coffee-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient font-serif mb-4 leading-tight">
            Signature Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handcrafted selection of premium coffee beverages, each prepared with precision and passion.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 px-4 md:px-0">
          <div className="relative">
            {/* Right gradient fade indicator */}
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-transparent via-transparent to-transparent pointer-events-none md:hidden z-10"></div>

            <div className="bg-white rounded-full shadow-lg p-1 pl-5 pr-5 md:overflow-visible overflow-x-auto md:flex-wrap flex-nowrap md:gap-0 gap-3 max-w-full md:max-w-none scrollbar-hide scroll-smooth">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 flex-shrink-0 md:flex-shrink whitespace-nowrap ${activeCategory === category.id
                    ? 'bg-coffee-600 text-white'
                    : 'text-gray-600 hover:text-coffee-600'
                    }`}
                >
                  {category.name}
                </button>
              ))}
              {/* Extra space to ensure last tab is slightly visible */}
              <div className="w-4 flex-shrink-0 md:hidden"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.name}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className={`relative bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${item.featured ? 'ring-2 ring-gold-400 ring-offset-4' : ''
                }`}
            >
              {item.featured && (
                <div className="absolute -top-3 -right-3 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              )}

              <div className="text-center mb-4">
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="text-2xl font-bold text-coffee-800 font-serif">
                  {item.name}
                </h3>
              </div>

              <p className="text-gray-600 text-center mb-4">
                {item.description}
              </p>

              <div className="flex justify-center items-center">
                <span className="text-2xl font-bold text-coffee-600">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuSection
