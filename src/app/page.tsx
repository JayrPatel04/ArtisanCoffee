'use client'

import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '@/components/Navbar'
import HeroScene from '@/components/HeroScene'
import StorySections from '@/components/StorySections'
import MenuSection from '@/components/MenuSection'
import ContactSection from '@/components/ContactSection'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

  const handleOrderNow = () => {
    // Try to open Zomato first
    try {
      window.open('https://www.zomato.com/', '_blank')
    } catch (error) {
      // Fallback to phone call
      window.location.href = 'tel:+917718096969'
    }
  }

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = scrollTop / docHeight
      setScrollProgress(scrollPercent)
    }

    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress()

    // GSAP ScrollTrigger animations
    gsap.fromTo(
      '.hero-title',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.5,
      }
    )

    gsap.fromTo(
      '.hero-subtitle',
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.8,
      }
    )

    gsap.fromTo(
      '.hero-cta',
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 1.1,
      }
    )

    // Pin hero section
    ScrollTrigger.create({
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
    })

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="relative">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/images/home-background.jpg"
            alt="Coffee shop background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-coffee-900/90 via-coffee-800/80 to-coffee-900/90"></div>
        </div>

        {/* Ambient glow effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-coffee-600 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="hero-title text-5xl md:text-7xl font-bold font-serif mb-6">
            Artisan Coffee
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl mb-8 text-coffee-100 max-w-2xl mx-auto">
            Rich aroma. Smooth experience. Timeless taste.
          </p>
          <div className="hero-cta">
            <button
              onClick={handleOrderNow}
              className="bg-gold-500 text-white px-8 py-3 rounded-full hover:bg-gold-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-semibold"
            >
              Order Now
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Story Sections */}
      <StorySections />

      {/* Menu Section */}
      <MenuSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-coffee-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-coffee-300">
            © 2024 Artisan Coffee. Crafted with passion, served with love.
          </p>
        </div>
      </footer>
    </div>
  )
}
