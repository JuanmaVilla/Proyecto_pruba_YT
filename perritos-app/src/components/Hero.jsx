export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-cream pt-20"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold text-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
              La primera óptica canina del mundo
            </div>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-charcoal leading-[1.1] mb-6">
              Porque ellos también merecen{' '}
              <span className="text-primary relative">
                ver el mundo
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 2 250 2 298 10" stroke="#E9C46A" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-warm leading-relaxed mb-8 max-w-lg">
              Lentes con prescripción médica y protección solar diseñados exclusivamente para perros. Porque su visión importa tanto como la tuya.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                id="hero-cta"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1 active:translate-y-0 group"
              >
                Reserva tu cita
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#proceso"
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-cream-dark text-charcoal font-semibold text-lg px-8 py-4 rounded-full border-2 border-cream-dark hover:border-primary/20 transition-all duration-300"
              >
                Conoce el proceso
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-cream-dark">
              <div className="flex -space-x-3">
                {['🐕', '🐩', '🦮', '🐕‍🦺'].map((emoji, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white border-2 border-cream flex items-center justify-center text-lg shadow-sm">
                    {emoji}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-warm mt-0.5">
                  +2,500 perritos felices
                </p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in delay-300">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[2rem] blur-2xl scale-110" />
              
              {/* Main image */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-charcoal/10 border-4 border-white/50">
                <img
                  src="/images/hero-dog.png"
                  alt="Golden retriever con lentes de prescripción médica"
                  className="w-full max-w-lg object-cover aspect-square"
                  loading="eager"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">👁️</span>
                  <div>
                    <p className="font-heading font-bold text-sm text-charcoal">Visión perfecta</p>
                    <p className="text-xs text-gray-warm">Lentes a medida</p>
                  </div>
                </div>
              </div>

              {/* Floating badge 2 */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 animate-float delay-500">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏥</span>
                  <div>
                    <p className="font-heading font-bold text-sm text-charcoal">100% médico</p>
                    <p className="text-xs text-gray-warm">Con prescripción</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
