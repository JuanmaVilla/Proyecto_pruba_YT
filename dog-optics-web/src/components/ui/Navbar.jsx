import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './Button'
import { nav, WHATSAPP_URL } from '../../data/content'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-pawcream/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl">🐾</span>
          <span className="font-bold text-pawdark text-sm sm:text-base leading-tight">
            Perritos No<br className="hidden sm:block" />
            <span className="text-pawpurple"> Cieguitos</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-pawgray hover:text-pawpurple transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button href={WHATSAPP_URL} size="sm">
            {nav.cta}
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-pawlavender transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-pawcream/98 backdrop-blur-md border-t border-pawlavender px-4 py-4 space-y-3">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-pawdark hover:text-pawpurple transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button href={WHATSAPP_URL} size="sm" className="w-full mt-2">
            {nav.cta}
          </Button>
        </div>
      )}
    </header>
  )
}
