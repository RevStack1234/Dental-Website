import { useState } from 'react'
import Reveal from '../ui/Reveal'
import { treatments } from '../../data/treatments'
import { useAppointmentForm } from '../../hooks/useAppointmentForm'
import DateTimePicker from '../ui/DateTimePicker'

export default function BookAppointment() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { formData, updateField, setTreatment, setSubTreatment, setDate, status, errorMessage, submit } = useAppointmentForm()

  const selectedTreatmentData = treatments.find((t) => t.title === formData.treatment)
  const hasSubtypes = selectedTreatmentData?.subtypes && selectedTreatmentData.subtypes.length > 0

  const inputBaseClass =
    'w-full h-[40px] lg:h-[46px] border border-gray-200/80 rounded-md px-3 lg:px-4 font-poppins text-[13px] lg:text-[14px] text-gray-500 outline-none focus:outline-none focus:ring-1 focus:ring-[#165ba7] focus:border-[#165ba7] transition-colors'

  return (
    <div
      id="book-appointment"
      className="relative left-0 top-0 w-full h-auto lg:absolute lg:left-[60px] lg:top-[840px] lg:w-[1320px] lg:h-[640px] z-30 scroll-mt-[120px] h-book"
    >
      <Reveal
        x={120}
        y={0}
        duration={0.9}
        className="relative lg:absolute right-0 top-0 w-full lg:w-[1000px] h-auto lg:h-[640px] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.06)] flex flex-col pt-8 lg:pt-[50px] pb-8 lg:pb-12 px-5 lg:pl-[300px] lg:pr-[70px] rounded-[20px] h-book-form"
      >
        <h2 className="text-[24px] lg:text-[32px] font-medium text-[#165ba7] mb-4 lg:mb-6 font-poppins">
          Book your appointment
        </h2>
        <div className="w-full h-[1px] bg-gray-200/60 mb-6 lg:mb-8"></div>

        <div className="relative w-full flex-1">
          <img
            src="/images/home/img-booking.avif"
            alt="Booking"
            width={280}
            height={440}
            loading="lazy"
            decoding="async"
            className="absolute left-0 top-0 w-[280px] h-auto object-contain h-book-img"
          />

          <form
            onSubmit={submit}
            className="relative lg:absolute right-0 top-0 flex flex-col gap-3 w-full lg:w-[320px] h-book-form-f"
          >
            <input
              type="text"
              placeholder="Full Name *"
              aria-label="Full Name *"
              required
              minLength={3}
              pattern="[a-zA-Z\s]+"
              title="Name must contain at least 3 alphabetic characters."
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
              className={inputBaseClass}
            />

            <input
              type="tel"
              placeholder="Phone Number *"
              aria-label="Phone Number *"
              required
              pattern="^[6-9]\d{9}$"
              title="Please enter a valid 10-digit Indian mobile number starting with 6-9."
              value={formData.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              className={inputBaseClass}
            />

            <input
              type="email"
              placeholder="Your email address *"
              aria-label="Your email address *"
              required
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              className={inputBaseClass}
            />

            <DateTimePicker
              value={formData.date}
              onChange={setDate}
              min={(() => {
                const now = new Date()
                const rem = now.getMinutes() % 5
                const snapped = rem === 0 ? now.getMinutes() : now.getMinutes() + (5 - rem)
                const overflow = snapped >= 60
                const d = new Date(now)
                d.setHours(now.getHours() + (overflow ? 1 : 0), overflow ? 0 : snapped, 0, 0)
                return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16)
              })()}
              placeholder="Preferred Date *"
            />

            <div className="relative">
              <div
                role="combobox"
                aria-label="Treatment Required"
                aria-haspopup="listbox"
                aria-expanded={isDropdownOpen}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full h-[46px] border ${isDropdownOpen ? 'border-[#165ba7]' : 'border-gray-200/80'} rounded-md px-4 font-poppins text-[14px] flex items-center justify-between cursor-pointer transition-colors bg-white`}
              >
                <span className={formData.treatment ? 'text-[#333] font-medium' : 'text-gray-500'}>
                  {formData.subTreatment
                    ? `${formData.treatment} - ${formData.subTreatment}`
                    : formData.treatment || 'Treatment Required *'}
                </span>
                <div
                  className={`text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>

              {isDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsDropdownOpen(false)}
                  ></div>
                  <div className="h-drop-in absolute left-0 top-[calc(100%+4px)] w-full max-h-[220px] overflow-y-auto bg-white border border-gray-200/80 rounded-md shadow-xl z-50">
                    {hasSubtypes && !formData.subTreatment ? (
                      <>
                        <div
                          className="px-4 py-2.5 text-[13px] text-gray-500 font-poppins font-medium border-b border-gray-100 bg-gray-50 flex items-center gap-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => {
                            setTreatment('')
                          }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                          </svg>
                          Back to all treatments
                        </div>
                        {selectedTreatmentData!.subtypes!.map((sub) => (
                          <div
                            key={sub.title}
                            className="px-4 py-2.5 text-[13px] text-gray-600 font-poppins hover:bg-[#F8F6F1] hover:text-[#165ba7] cursor-pointer transition-colors pl-6 relative"
                            onClick={() => {
                              setSubTreatment(sub.title)
                              setIsDropdownOpen(false)
                            }}
                          >
                            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#D35B8F] opacity-50"></span>
                            {sub.title}
                          </div>
                        ))}
                      </>
                    ) : (
                      <>
                        {treatments.map((t) => (
                          <div
                            key={t.title}
                            className="px-4 py-2.5 text-[13px] text-gray-600 font-poppins hover:bg-[#F8F6F1] hover:text-[#165ba7] cursor-pointer transition-colors"
                            onClick={() => {
                              setTreatment(t.title)
                              if (!t.subtypes || t.subtypes.length === 0) {
                                setIsDropdownOpen(false)
                              }
                            }}
                          >
                            {t.title}
                          </div>
                        ))}
                        <div
                          className="px-4 py-2.5 text-[13px] text-gray-600 font-poppins hover:bg-[#F8F6F1] hover:text-[#165ba7] cursor-pointer transition-colors border-t border-gray-100"
                          onClick={() => {
                            setTreatment('Others')
                            setIsDropdownOpen(false)
                          }}
                        >
                          Others
                        </div>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>

            {formData.treatment === 'Others' && (
              <div className="h-drop-in">
                <textarea
                  placeholder="Description (Optional)"
                  aria-label="Description (Optional)"
                  value={formData.description}
                  onChange={(e) => updateField('description', e.target.value)}
                  className="w-full h-[54px] lg:h-[66px] border border-gray-200/80 rounded-md px-3 lg:px-4 py-2 lg:py-3 font-poppins text-[13px] lg:text-[14px] text-gray-500 outline-none focus:outline-none focus:ring-1 focus:ring-[#165ba7] focus:border-[#165ba7] transition-colors resize-none mt-0.5"
                ></textarea>
              </div>
            )}

            {status === 'success' && (
              <div className="flex items-start gap-2 rounded-md bg-green-50 border border-green-200 px-4 py-3">
                <span className="text-green-600 text-sm leading-snug font-poppins">
                  Thank you! Your appointment request has been sent. We will contact you shortly to
                  confirm.
                </span>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-start gap-2 rounded-md bg-red-50 border border-red-200 px-4 py-3">
                <span className="text-red-600 text-sm leading-snug font-poppins">
                  {errorMessage}
                </span>
              </div>
            )}

            {status !== 'success' && (
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="group flex w-full h-[46px] lg:h-[52px] items-center justify-center gap-2 rounded-[10px] bg-[#A06083] hover:bg-[#8F5675] transition-colors shadow-sm text-white font-poppins text-[14px] lg:text-[15px] font-medium mt-0 lg:mt-1 shrink-0 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Book your appointment
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            )}
          </form>
        </div>
      </Reveal>

      <Reveal
        x={-120}
        y={0}
        delay={0.15}
        duration={0.9}
        className="relative lg:absolute left-0 top-0 lg:top-[100px] w-full lg:w-[560px] h-auto lg:h-[440px] bg-[#0A5BA8] flex flex-col justify-center items-center px-6 lg:px-[80px] py-10 lg:py-0 text-center shadow-lg rounded-[20px] h-book-quote"
      >
        <div className="w-[20px] lg:w-[80px] h-[2px] bg-[#D35B8F] mb-2 lg:mb-12"></div>
        <p className="font-poppins font-light text-white text-[10px] lg:text-[24px] leading-relaxed relative">
          <span className="absolute -top-[8px] lg:-top-[30px] -left-[8px] lg:-left-[40px] font-fraunces text-[#FFFFFF] text-[18px] lg:text-[60px] font-bold opacity-80 leading-none">
            "
          </span>
          At Dental Esthetique, we are committed to providing you and your family with the highest
          quality of compassionate dental care.
          <span className="absolute -bottom-[10px] lg:-bottom-[50px] -right-[4px] font-fraunces text-[#FFFFFF] text-[18px] lg:text-[60px] font-bold opacity-80 leading-none">
            "
          </span>
        </p>
        <div className="w-[20px] lg:w-[80px] h-[2px] bg-[#D35B8F] mt-2 lg:mt-12 mb-2 lg:mb-8"></div>
        <span className="font-poppins text-white text-[13px] lg:text-[32px] font-medium italic tracking-wide">
          Dr. Deepika Singhal<br /> Dr. Abhinav Jain
        </span>
      </Reveal>
    </div>
  )
}
