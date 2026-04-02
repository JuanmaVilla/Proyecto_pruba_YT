import { useEffect, useRef } from 'react'
import { features } from '../../data/content'

function FeatureCard({ feature, delay }) {
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
      className="animate-on-scroll group bg-white rounded-2xl p-6 shadow-sm border border-pawlavender hover:shadow-md hover:border-pawpurple/30 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-12 h-12 bg-pawlavender rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-200">
        {feature.emoji}
      </div>
      <h3 className="font-bold text-pawdark text-lg mb-2">{feature.title}</h3>
      <p className="text-pawgray text-sm leading-relaxed">{feature.description}</p>
    </div>
  )
}

export function Features() {
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
    <section id="servicios" className="bg-pawcream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={titleRef} className="animate-on-scroll text-center mb-14">
          <span className="inline-block text-sm font-semibold text-pawpurple bg-pawlavender px-4 py-1.5 rounded-full mb-4">
            Lo que hacemos
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-pawdark mb-4">
            Todo lo que tu perro necesita<br className="hidden md:block" /> para ver bien
          </h2>
          <p className="text-pawgray max-w-xl mx-auto text-base leading-relaxed">
            No somos una tienda de accesorios. Somos un consultorio especializado que antepone la salud visual de tu mascota sobre todo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
