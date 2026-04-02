import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CTABanner() {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section id="contacto" className="py-24 bg-cream relative overflow-hidden" ref={ref}>
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className={`relative bg-gradient-to-br from-charcoal via-charcoal to-primary-dark rounded-[2rem] overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }} />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Copy */}
            <div className="p-10 sm:p-14 lg:p-16">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 font-medium text-sm px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse-soft" />
                Agenda hoy
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
                Dale a tu perrito el regalo de{' '}
                <span className="text-secondary">ver claro</span>
              </h2>

              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md">
                No esperes más. Cada día que pasa es un día menos que tu peludo disfruta del mundo con la visión que merece.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  id="cta-main-button"
                  className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-charcoal font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-1 active:translate-y-0 group"
                >
                  Reserva tu cita
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#"
                  id="cta-whatsapp"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>

              {/* Quick trust */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-secondary fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/50 text-sm">
                  4.9/5 basado en +200 reseñas
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block relative h-full min-h-[500px]">
              <img
                src="/images/cta-dog.png"
                alt="Perrito adorable con lentes de prescripción"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
