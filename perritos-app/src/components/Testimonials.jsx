import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Valentina Rodríguez',
    role: 'Dueña de Max, Golden Retriever',
    text: 'Max tenía cataratas y no podíamos hacer nada. Desde que usa sus lentes, volvió a jugar en el parque, a buscar su pelota... Volvió a ser Max. No tengo palabras para agradecer.',
    rating: 5,
    avatar: '🐕',
  },
  {
    name: 'Sebastián Morales',
    role: 'Dueño de Luna, French Bulldog',
    text: 'Pensé que era imposible ponerle lentes a mi perrita. En la primera sesión el equipo fue tan cariñoso que Luna ni se quejó. Ahora los usa todos los días y está mucho más activa.',
    rating: 5,
    avatar: '🐕‍🦺',
  },
  {
    name: 'Camila Herrera',
    role: 'Dueña de Rocky, Beagle',
    text: 'Rocky necesitaba protección UV después de su cirugía. Los lentes de sol son increíbles — ligeros, cómodos y se ven adorables. El servicio es absolutamente premium y humano.',
    rating: 5,
    avatar: '🦮',
  },
];

export default function Testimonials() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="testimonios" className="py-24 bg-cream relative overflow-hidden" ref={ref}>
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-secondary/8 rounded-full blur-3xl translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Testimonios
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-5">
            Lo que dicen las familias{' '}
            <span className="text-primary">peludas</span>
          </h2>
          <p className="text-gray-warm text-lg leading-relaxed">
            Cada perrito que atendemos tiene una historia. Estas son algunas de las que nos llenan el corazón.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-charcoal/5 transition-all duration-500 hover:-translate-y-2 border border-cream-dark/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-secondary fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-charcoal leading-relaxed mb-6 text-[15px]">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-cream-dark/50">
                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-warm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
