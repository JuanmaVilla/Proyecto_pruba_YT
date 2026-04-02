import { useScrollAnimation } from '../ui/useScrollAnimation'
import { socialProof } from '../../data/content'

export function SocialProof() {
  const ref = useScrollAnimation()

  return (
    <section className="bg-pawpurple py-16 md:py-20">
      <div
        ref={ref}
        className="animate-on-scroll max-w-6xl mx-auto px-4 sm:px-6"
      >
        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          {socialProof.metrics.map((m, i) => (
            <div
              key={m.label}
              className={`text-center animate-on-scroll delay-${i * 100}`}
            >
              <p className="text-4xl md:text-5xl font-extrabold text-white mb-1">{m.value}</p>
              <p className="text-sm font-medium text-purple-200">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-10" />

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3">
          {socialProof.badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 bg-white/15 text-white text-sm font-medium px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
