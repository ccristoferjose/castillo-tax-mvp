import { useLanguage } from '../LanguageContext'

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      onClick={toggleLang}
      aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur text-gray-800 font-semibold text-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all border border-gray-200"
    >
      {lang === 'es' ? 'EN' : 'ES'}
    </button>
  )
}
