import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { faq } from '../../data/content'

function FAQItem({ item, isOpen, onClick }) {
  const contentRef = useRef(null)

  return (
    <div className="border border-pawlavender rounded-xl overflow-hidden bg-white">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-pawlavender/30 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-pawdark text-sm md:text-base">{item.question}</span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-pawpurple transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
        }}
      >
        <p className="px-5 pb-5 text-sm text-pawgray leading-relaxed">{item.answer}</p>
      </div>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
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
    <section id="faq" className="bg-pawlavender py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div ref={titleRef} className="animate-on-scroll text-center mb-12">
          <span className="inline-block text-sm font-semibold text-pawpurple bg-white px-4 py-1.5 rounded-full mb-4">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-pawdark mb-4">
            Tus dudas, respondidas
          </h2>
          <p className="text-pawgray">
            Si no encuentras lo que buscas, escríbenos por WhatsApp.
          </p>
        </div>

        <div className="space-y-3">
          {faq.map((item, i) => (
            <FAQItem
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
