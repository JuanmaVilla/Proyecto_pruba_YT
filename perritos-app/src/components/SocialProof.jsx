import { useScrollAnimation } from '../hooks/useScrollAnimation';

const stats = [
  { number: '2,500+', label: 'Perritos atendidos', icon: '🐕' },
  { number: '98%', label: 'Satisfacción de dueños', icon: '💛' },
  { number: '5', label: 'Años de experiencia', icon: '🏆' },
  { number: '15+', label: 'Razas diferentes', icon: '🦴' },
];

export default function SocialProof() {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section
      id="social-proof"
      ref={ref}
      className="relative py-20 bg-white"
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-cream rounded-2xl mb-4 text-2xl group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-charcoal mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-warm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
