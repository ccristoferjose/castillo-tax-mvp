import { LanguageProvider, useLanguage } from './LanguageContext'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Schedule from './components/Schedule'
import Contact from './components/Contact'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import LanguageToggle from './components/LanguageToggle'

const WHATSAPP_URL =
  'https://wa.me/+12138045219?text=Hola,%20quiero%20información%20sobre%20mis%20taxes'

function Landing() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <LanguageToggle />
      <Hero whatsappUrl={WHATSAPP_URL} />
      <Services />
      <About />
      <Testimonials />
      <Schedule />
      <Contact whatsappUrl={WHATSAPP_URL} />
      <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
        © {new Date().getFullYear()} Miguel Castillo — {t.footer}
      </footer>
      <FloatingWhatsApp whatsappUrl={WHATSAPP_URL} />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Landing />
    </LanguageProvider>
  )
}
