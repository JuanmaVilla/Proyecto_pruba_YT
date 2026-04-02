import { useEffect, useRef } from 'react'
import { Button } from '../ui/Button'
import { howItWorks, WHATSAPP_URL } from '../../data/content'

export function HowItWorks() {
  const titleRef = useRef(null)
  const stepsRef = useRef([])

  useEffect(() => {
    const elements = [titleRef.current, ...stepsRef.current].filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="como-funciona" className="bg-pawlavender py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={titleRef} className="animate-on-scroll text-center mb-16">
          <span className="inline-block text-sm font-semibold text-pawpurple bg-white px-4 py-1.5 rounded-full mb-4">
            Proceso simple
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-pawdark mb-4">
            En 3 pasos, tu perrito<br className="hidden md:block" /> tiene sus lentes
          </h2>
          <p className="text-pawgray max-w-lg mx-auto">
            Sin burocracia. Sin esperas eternas. Solo cuidado genuino para tu mejor amigo.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-transparent via-pawpurple/30 to-transparent" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {howItWorks.map((step, i) => (
              <div
                key={step.step}
                ref={(el) => (stepsRef.current[i] = el)}
                className={`animate-on-scroll delay-${i * 150} text-center`}
              >
                {/* Step number */}
                <div className="relative inline-block mb-5">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto">
                    <span className="text-3xl font-extrabold text-pawpurple">{step.step}</span>
                  </div>
                  {/* Connector dot */}
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-pawpurple/40" />
                </div>

                <h3 className="font-bold text-pawdark text-xl mb-3">{step.title}</h3>
                <p className="text-pawgray text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button href={WHATSAPP_URL} size="lg">
            Empieza ahora →
          </Button>
        </div>
      </div>
    </section>
  )
}
