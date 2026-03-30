import { useLanguage } from '../LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="sobre-mi" className="px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
          src="/images/image-body.webp"
          alt="Miguel Castillo"
          width={400}
          height={500}
          className="w-52 md:w-72 rounded-2xl object-cover shadow-lg shrink-0"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.about.heading}</h2>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            {t.about.text}
          </p>
        </div>
      </div>
    </section>
  )
}
