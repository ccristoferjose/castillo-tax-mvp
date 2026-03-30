import { useLanguage } from '../LanguageContext'

export default function Testimonials() {
  const { t } = useLanguage()

  return (
    <section id="testimonios" className="px-6 py-16 md:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          {t.testimonials.heading}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item) => (
            <blockquote
              key={item.name}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <svg className="w-8 h-8 text-green-300 mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-600 leading-relaxed mb-4 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="font-semibold text-gray-800">— {item.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
