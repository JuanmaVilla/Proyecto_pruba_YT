import { useRef, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import { Button } from '../ui/Button'
import { ctaBanner, WHATSAPP_URL } from '../../data/content'

export function CTABanner() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="reserva" className="bg-pawcream py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className="animate-on-scroll relative bg-pawpurple rounded-3xl p-8 md:p-14 text-center overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full" />
          <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-white/10 rounded-full" />
          <div className="absolute top-4 left-4 w-16 h-16 bg-white/5 rounded-full" />

          <div className="relative z-10">
            <span className="text-4xl mb-4 block">🐕</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              {ctaBanner.headline}
            </h2>
            <p className="text-purple-200 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              {ctaBanner.sub}
            </p>

            <Button
              href={WHATSAPP_URL}
              size="lg"
              className="bg-white text-pawpurple hover:bg-purple-50 shadow-xl hover:shadow-2xl"
            >
              <MessageCircle size={20} />
              {ctaBanner.cta}
            </Button>

            <p className="text-purple-300 text-sm mt-4">{ctaBanner.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
