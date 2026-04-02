import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    title: 'Agenda tu cita',
    description: 'Contáctanos y agenda una consulta oftalmológica para tu perrito. Es rápida, indolora y llena de mimos.',
    icon: '📅',
    color: 'primary',
  },
  {
    number: '02',
    title: 'Evaluamos su visión',
    description: 'Nuestro equipo especializado realiza un examen completo de la vista de tu peludo. Determinamos exactamente qué necesita.',
    icon: '🔍',
    color: 'secondary',
  },
  {
    number: '03',
    title: 'Recibe sus lentes a medida',
    description: 'Fabricamos lentes personalizados para la forma facial y necesidades de tu perrito. En pocos días estará viendo el mundo con claridad.',
    icon: '🎉',
    color: 'accent',
  },
];

const bgColorMap = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  accent: 'bg-accent',
};

export default function HowItWorks() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="proceso" className="py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            El proceso
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-5">
            Así de fácil es darle{' '}
            <span className="text-primary">mejor visión</span>
          </h2>
          <p className="text-gray-warm text-lg leading-relaxed">
            Tres pasos simples para que tu perrito vuelva a disfrutar cada detalle del mundo.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-[calc(100%-20%)] h-0.5 bg-gradient-to-r from-cream-dark to-cream-dark/0 z-0" />
              )}

              <div className="relative bg-cream rounded-3xl p-8 text-center group hover:shadow-lg hover:shadow-charcoal/5 transition-all duration-500 hover:-translate-y-2">
                {/* Step number */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${bgColorMap[step.color]} rounded-2xl text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {step.icon}
                </div>

                {/* Number indicator */}
                <div className="absolute top-4 right-6 font-heading font-extrabold text-6xl text-charcoal/5">
                  {step.number}
                </div>

                <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-warm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Process Image */}
        <div className={`flex justify-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative max-w-2xl w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-xl scale-105" />
            <img
              src="/images/howit-works-dog.png"
              alt="Veterinaria examinando los ojos de un perro en consulta oftalmológica"
              className="relative rounded-3xl shadow-xl border-4 border-white/60 w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
