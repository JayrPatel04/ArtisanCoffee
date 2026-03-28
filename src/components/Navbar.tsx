'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && event.target instanceof Element) {
        const sidebar = document.querySelector('.mobile-sidebar')
        const menuButton = document.querySelector('.mobile-menu-button')
        if (sidebar && !sidebar.contains(event.target) && !menuButton?.contains(event.target)) {
          setIsOpen(false)
        }
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-coffee-800' : 'text-white'
              }`}>
              Artisan Coffee
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors duration-300 hover:text-coffee-600 ${scrolled ? 'text-gray-700' : 'text-white'
                  }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden mobile-menu-button">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-300 ${scrolled ? 'text-gray-700' : 'text-white'
                }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-50">
            {/* Clickable overlay to close */}
            <div
              className="absolute inset-0 bg-transparent"
              onClick={() => setIsOpen(false)}
            ></div>

            {/* Popup menu container */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 mt-16 w-4/5 max-w-xs bg-white rounded-2xl shadow-xl p-5 animate-fadeInScale"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Menu items */}
              <div className="flex flex-col items-center space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 text-lg font-medium hover:text-coffee-600 transition-colors duration-300 w-full text-center py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
