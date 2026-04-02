import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs = [
  {
    question: '¿Mi perro realmente necesita lentes?',
    answer: 'Muchos perros desarrollan condiciones oculares como cataratas, miopía, astigmatismo o sensibilidad a la luz UV. Si notas que tu perrito choca con objetos, tiene dificultad para encontrar su juguete o sus ojos se ven nublados, una evaluación oftalmológica puede revelar si necesita corrección visual.',
  },
  {
    question: '¿Los lentes le van a molestar a mi perrito?',
    answer: 'Al principio puede haber un período de adaptación de 3 a 7 días, similar a cuando un humano estrena lentes. Nuestros marcos están diseñados ergonómicamente para cada raza y usamos materiales ultraligeros e hipoalergénicos. El 95% de los perritos se adaptan completamente en la primera semana.',
  },
  {
    question: '¿Cuánto cuesta una consulta oftalmológica?',
    answer: 'La consulta inicial tiene un valor accesible que incluye el examen completo, diagnóstico y recomendación personalizada. El precio de los lentes varía según el tipo de corrección y materiales. Contáctanos para recibir información detallada de precios.',
  },
  {
    question: '¿Trabajan con todas las razas?',
    answer: 'Sí. Hemos atendido más de 15 razas diferentes, desde Chihuahuas hasta Gran Daneses. Cada par de lentes se diseña a medida para la estructura facial específica de tu perrito, sin importar su tamaño o raza.',
  },
  {
    question: '¿Tienen garantía los lentes?',
    answer: 'Todos nuestros lentes incluyen garantía de 6 meses contra defectos de fabricación. Además, ofrecemos ajustes gratuitos durante el primer mes para asegurar el calce perfecto. Si los lentes se dañan por accidente, tenemos planes de reemplazo con descuento.',
  },
  {
    question: '¿Necesito referencia de un veterinario?',
    answer: 'No es obligatorio, pero si tu veterinario de cabecera ya tiene un diagnóstico, nos ayuda a agilizar el proceso. También podemos trabajar en conjunto con tu vet para coordinar el mejor tratamiento para tu perrito.',
  },
];

function FAQItem({ faq, isOpen, onToggle, index }) {
  return (
    <div
      className="border-b border-cream-dark/60 last:border-b-0"
    >
      <button
        id={`faq-toggle-${index}`}
        onClick={onToggle}
        className="w-full text-left py-6 flex items-center justify-between gap-4 group"
        aria-expanded={isOpen}
      >
        <h3 className="font-heading font-bold text-lg text-charcoal group-hover:text-primary transition-colors duration-200 pr-4">
          {faq.question}
        </h3>
        <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-cream flex items-center justify-center transition-all duration-300 group-hover:bg-primary/10 ${isOpen ? 'rotate-45 bg-primary/10' : ''}`}>
          <svg className={`w-5 h-5 transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-gray-warm'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-warm leading-relaxed pr-14">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="faq" className="py-24 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Preguntas frecuentes
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-5">
            Resolvemos tus{' '}
            <span className="text-primary">dudas</span>
          </h2>
          <p className="text-gray-warm text-lg leading-relaxed">
            Todo lo que necesitas saber antes de darle a tu perrito el regalo de una mejor visión.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className={`bg-cream/50 rounded-3xl p-6 sm:p-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
