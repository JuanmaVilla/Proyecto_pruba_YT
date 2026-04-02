import { Button } from '../ui/Button'
import { hero, WHATSAPP_URL } from '../../data/content'

function DogWithGlasses() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background circle */}
      <circle cx="200" cy="200" r="180" fill="#EDE9FE" />
      <circle cx="200" cy="200" r="155" fill="#F5F0FF" />

      {/* Body */}
      <ellipse cx="200" cy="290" rx="90" ry="75" fill="#C4A882" />

      {/* Tail */}
      <path d="M285 310 Q320 280 315 250 Q310 230 295 240" stroke="#C4A882" strokeWidth="18" strokeLinecap="round" fill="none" />

      {/* Head */}
      <ellipse cx="200" cy="190" rx="82" ry="80" fill="#D4B896" />

      {/* Ears */}
      <ellipse cx="130" cy="155" rx="30" ry="48" fill="#C4A882" transform="rotate(-15 130 155)" />
      <ellipse cx="270" cy="155" rx="30" ry="48" fill="#C4A882" transform="rotate(15 270 155)" />
      <ellipse cx="130" cy="158" rx="20" ry="36" fill="#E8C4A0" transform="rotate(-15 130 158)" />
      <ellipse cx="270" cy="158" rx="20" ry="36" fill="#E8C4A0" transform="rotate(15 270 158)" />

      {/* Snout */}
      <ellipse cx="200" cy="220" rx="36" ry="28" fill="#E8C4A0" />

      {/* Nose */}
      <ellipse cx="200" cy="210" rx="12" ry="8" fill="#5C3D2E" />
      <circle cx="196" cy="208" r="3" fill="white" opacity="0.7" />

      {/* Mouth */}
      <path d="M188 222 Q200 232 212 222" stroke="#5C3D2E" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Glasses frame left */}
      <rect x="135" y="180" width="52" height="36" rx="10" fill="none" stroke="#9B5CF6" strokeWidth="4" />
      <rect x="137" y="182" width="48" height="32" rx="8" fill="rgba(196,181,253,0.3)" />

      {/* Glasses frame right */}
      <rect x="213" y="180" width="52" height="36" rx="10" fill="none" stroke="#9B5CF6" strokeWidth="4" />
      <rect x="215" y="182" width="48" height="32" rx="8" fill="rgba(196,181,253,0.3)" />

      {/* Glasses bridge */}
      <path d="M187 198 L213 198" stroke="#9B5CF6" strokeWidth="4" strokeLinecap="round" />

      {/* Glasses temples */}
      <line x1="135" y1="198" x2="112" y2="192" stroke="#9B5CF6" strokeWidth="4" strokeLinecap="round" />
      <line x1="265" y1="198" x2="288" y2="192" stroke="#9B5CF6" strokeWidth="4" strokeLinecap="round" />

      {/* Eyes (through glasses) */}
      <circle cx="161" cy="198" r="10" fill="#5C3D2E" />
      <circle cx="239" cy="198" r="10" fill="#5C3D2E" />
      <circle cx="165" cy="194" r="4" fill="white" opacity="0.8" />
      <circle cx="243" cy="194" r="4" fill="white" opacity="0.8" />
      <circle cx="157" cy="202" r="2" fill="white" opacity="0.5" />
      <circle cx="235" cy="202" r="2" fill="white" opacity="0.5" />

      {/* Eyebrows */}
      <path d="M148 183 Q161 178 174 183" stroke="#8B6343" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M226 183 Q239 178 252 183" stroke="#8B6343" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Blush */}
      <ellipse cx="145" cy="218" rx="14" ry="8" fill="#F9A8D4" opacity="0.5" />
      <ellipse cx="255" cy="218" rx="14" ry="8" fill="#F9A8D4" opacity="0.5" />

      {/* Paws */}
      <ellipse cx="150" cy="345" rx="32" ry="22" fill="#C4A882" />
      <ellipse cx="250" cy="345" rx="32" ry="22" fill="#C4A882" />
      {/* Toes left */}
      <circle cx="136" cy="335" r="8" fill="#D4B896" />
      <circle cx="150" cy="330" r="8" fill="#D4B896" />
      <circle cx="164" cy="335" r="8" fill="#D4B896" />
      {/* Toes right */}
      <circle cx="236" cy="335" r="8" fill="#D4B896" />
      <circle cx="250" cy="330" r="8" fill="#D4B896" />
      <circle cx="264" cy="335" r="8" fill="#D4B896" />

      {/* Sparkles */}
      <g opacity="0.8">
        <path d="M320 120 L324 130 L334 134 L324 138 L320 148 L316 138 L306 134 L316 130 Z" fill="#F59E0B" />
        <path d="M75 130 L78 138 L86 141 L78 144 L75 152 L72 144 L64 141 L72 138 Z" fill="#C084FC" />
        <path d="M340 240 L342 246 L348 248 L342 250 L340 256 L338 250 L332 248 L338 246 Z" fill="#C084FC" />
        <path d="M60 250 L62 256 L68 258 L62 260 L60 266 L58 260 L52 258 L58 256 Z" fill="#F59E0B" />
      </g>
    </svg>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-pawcream pt-16">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-pawlavender rounded-full blur-3xl opacity-60 -translate-y-10 translate-x-24 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-40 translate-y-20 -translate-x-20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Text side */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <span className="inline-block text-sm font-semibold text-pawpurple bg-pawlavender px-4 py-1.5 rounded-full mb-5">
            {hero.eyebrow}
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-pawdark leading-tight mb-5">
            Tu perro merece<br />
            <span className="text-pawpurple">ver el mundo</span><br />
            con claridad.
          </h1>

          <p className="text-lg text-pawgray max-w-md mx-auto md:mx-0 mb-8 leading-relaxed">
            {hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-6">
            <Button href={WHATSAPP_URL} size="lg" className="animate-pulse-soft">
              {hero.cta}
            </Button>
          </div>

          <p className="text-sm text-pawgray/70">{hero.ctaSub}</p>

          {/* Trust mini-badges */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-8">
            {['🏆 Únicos en Argentina', '🩺 Médicamente verificado', '❤️ +200 perritos felices'].map((b) => (
              <span key={b} className="text-xs font-medium bg-white border border-pawlavender text-pawgray px-3 py-1.5 rounded-full shadow-sm">
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Visual side */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 animate-float">
            <DogWithGlasses />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-5 h-8 rounded-full border-2 border-pawgray flex items-start justify-center pt-1">
          <div className="w-1 h-2 bg-pawgray rounded-full" />
        </div>
      </div>
    </section>
  )
}
