'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    dateTime: '',
    people: '2'
  })

  useEffect(() => {
    if (sectionRef.current && contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault()

    // Format the date for better readability
    let formattedDateTime = formData.dateTime
    if (formData.dateTime) {
      const date = new Date(formData.dateTime)
      formattedDateTime = date.toLocaleString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      })
    }

    const message = `Hello, I would like to reserve a table at Artisan Coffee.\n\nName: ${formData.name}\nDate & Time: ${formattedDateTime}\nNumber of People: ${formData.people}\n\nPlease confirm my reservation. Thank you!`
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@artisancoffee.com',
      href: 'mailto:hello@artisancoffee.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 77180 96969',
      href: 'tel:+917718096969',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bandra West, Mumbai, India',
      href: '#',
      isMap: true,
    },
  ]

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://instagram.com',
      label: 'Instagram',
    },
    {
      icon: Facebook,
      href: 'https://facebook.com',
      label: 'Facebook',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com',
      label: 'Twitter',
    },
    {
      icon: Youtube,
      href: 'https://youtube.com',
      label: 'YouTube',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding bg-gradient-to-br from-coffee-800 to-coffee-900 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Visit the Lounge
          </h2>
          <p className="text-xl text-coffee-100 max-w-2xl mx-auto">
            Stay for the flavor. Experience coffee like never before.
          </p>
        </div>

        <div ref={contentRef} className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 font-serif">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div
                      key={index}
                      className={`flex items-center space-x-4 p-4 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 ${info.isMap ? 'cursor-pointer hover:bg-white/30' : ''
                        }`}
                      onClick={() => {
                        if (info.isMap) {
                          window.open('https://www.google.com/maps/search/?api=1&query=Bandra+West+Mumbai+India', '_blank')
                        }
                      }}
                    >
                      <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-coffee-200">{info.label}</p>
                        <p className="text-lg font-semibold text-white">{info.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 font-serif">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors duration-300"
                      aria-label={social.label}
                    >
                      <Icon size={24} className="text-white" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md md:max-w-full mx-auto">
              <h3 className="text-2xl font-bold text-black mb-6 font-serif">
                Reserve Your Table
              </h3>
              <form onSubmit={handleReservation} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent outline-none transition-all duration-300 bg-white text-black placeholder-gray-500 text-base md:text-sm box-border"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    name="dateTime"
                    value={formData.dateTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent outline-none transition-all duration-300 bg-white text-black placeholder-gray-500 text-base md:text-sm box-border"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Number of People
                  </label>
                  <select
                    name="people"
                    value={formData.people}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent outline-none transition-all duration-300 text-gray-700 bg-white text-base md:text-sm box-border"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6+ People</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-coffee-600 text-white py-3 rounded-lg hover:bg-coffee-700 transition-colors duration-300 font-semibold"
                >
                  Make Reservation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
