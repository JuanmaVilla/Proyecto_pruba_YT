import { useEffect, useRef } from 'react'
import { testimonials } from '../../data/content'

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-pawgold text-base">★</span>
      ))}
    </div>
  )
}

function TestimonialCard({ t, delay }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className="animate-on-scroll bg-white rounded-2xl p-6 shadow-sm border border-pawlavender hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <StarRating count={t.stars} />
      <p className="text-pawdark text-base leading-relaxed my-4 flex-1">
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-2 border-t border-pawlavender pt-4">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-pawpurple flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-bold text-white">{t.avatar}</span>
        </div>
        <div>
          <p className="font-semibold text-pawdark text-sm">{t.name}</p>
          <p className="text-xs text-pawgray">
            Con {t.dogName} — {t.breed}
          </p>
        </div>
        <span className="ml-auto text-2xl">🐾</span>
      </div>
    </div>
  )
}

export function Testimonials() {
  const titleRef = useRef(null)

  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonios" className="bg-pawcream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={titleRef} className="animate-on-scroll text-center mb-14">
          <span className="inline-block text-sm font-semibold text-pawpurple bg-pawlavender px-4 py-1.5 rounded-full mb-4">
            Testimonios reales
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-pawdark mb-4">
            Perritos que ahora ven mejor
          </h2>
          <p className="text-pawgray max-w-lg mx-auto">
            Las familias que eligieron darle a sus perros la atención visual que merecían.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} delay={i * 120} />
          ))}
        </div>

        {/* Bottom trust signal */}
        <div className="text-center mt-10">
          <p className="text-sm text-pawgray">
            ★★★★★{' '}
            <span className="font-semibold text-pawdark">5.0 de 5</span>
            {' '}— Promedio de 200+ familias atendidas
          </p>
        </div>
      </div>
    </section>
  )
}
