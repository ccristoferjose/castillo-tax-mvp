import { useLanguage } from '../LanguageContext'

export default function Schedule() {
  const { t } = useLanguage()

  return (
    <section id="horario" className="px-6 py-16 md:py-24">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          {t.schedule.heading}
        </h2>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {t.schedule.days.map((item, i) => {
            const isClosed = item.hours === t.schedule.closedLabel
            return (
              <div
                key={i}
                className={`flex justify-between items-center px-6 py-3.5 ${
                  i !== t.schedule.days.length - 1 ? 'border-b border-gray-100' : ''
                } ${isClosed ? 'bg-gray-50' : ''}`}
              >
                <span className={`font-medium ${isClosed ? 'text-gray-400' : 'text-gray-800'}`}>
                  {item.day}
                </span>
                <span className={`text-sm ${isClosed ? 'text-red-400 font-medium' : 'text-gray-600'}`}>
                  {item.hours}
                </span>
              </div>
            )
          })}
        </div>

        <p className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
          <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
          {t.schedule.note}
        </p>
      </div>
    </section>
  )
}
