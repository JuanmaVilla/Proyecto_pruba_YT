import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Diagnóstico oftalmológico profesional',
    description: 'Evaluamos la visión de tu perrito con equipos especializados y técnicas adaptadas exclusivamente para ellos. Detectamos problemas como cataratas, miopía y astigmatismo.',
    color: 'primary',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: 'Lentes a medida para cada raza',
    description: 'Cada par de lentes se diseña y fabrica específicamente para la anatomía facial de tu perrito. No existen dos iguales, porque no existen dos perritos iguales.',
    color: 'secondary',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: 'Protección UV especializada',
    description: 'Nuestros lentes de sol caninos bloquean el 100% de los rayos UV dañinos. Ideales para perros con sensibilidad lumínica, post-operatorios o condiciones crónicas.',
    color: 'accent',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Materiales seguros y resistentes',
    description: 'Policarbonato resistente a impactos, marcos hipoalergénicos y correas ajustables anti-desliz. Diseñados para que jueguen, corran y vivan sin preocupaciones.',
    color: 'primary',
  },
];

const colorMap = {
  primary: {
    bg: 'bg-primary/10',
    text: 'text-primary',
    border: 'group-hover:border-primary/30',
  },
  secondary: {
    bg: 'bg-secondary/15',
    text: 'text-secondary-dark',
    border: 'group-hover:border-secondary/30',
  },
  accent: {
    bg: 'bg-accent/10',
    text: 'text-accent-dark',
    border: 'group-hover:border-accent/30',
  },
};

export default function Features() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="beneficios" className="py-24 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Beneficios
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-5">
            Todo lo que tu perrito necesita para{' '}
            <span className="text-primary">ver mejor</span>
          </h2>
          <p className="text-gray-warm text-lg leading-relaxed">
            Combinamos ciencia veterinaria de vanguardia con un cariño inmenso por cada paciente peludo que llega a nuestra óptica.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const colors = colorMap[feature.color];
            return (
              <div
                key={feature.title}
                className={`group bg-white rounded-2xl p-8 border-2 border-transparent hover:border-primary/10 transition-all duration-500 hover:shadow-xl hover:shadow-charcoal/5 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 ${colors.bg} ${colors.text} rounded-2xl mb-5 transition-transform duration-300 group-hover:scale-110`}>
                  {feature.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-warm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Image accent */}
        <div className={`mt-16 flex justify-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative max-w-md">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/15 rounded-3xl blur-xl scale-105" />
            <img
              src="/images/features-dog.png"
              alt="French Bulldog con lentes de sol UV"
              className="relative rounded-3xl shadow-lg border-4 border-white/60 w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
