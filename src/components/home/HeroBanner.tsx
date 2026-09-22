import { useState, useEffect } from 'react'
import {
  FaTeeth,
  FaCrown,
  FaShieldHalved,
  FaWandMagicSparkles,
  FaUserDoctor,
} from 'react-icons/fa6'
import { GiScrew } from 'react-icons/gi'
import HeroButton from '../ui/HeroButton'
import { BOOK_APPOINTMENT_TO } from '../ui/links'

const IMG = '/images/home'
const heroIco = 'w-[18px] h-[18px] lg:w-[24px] lg:h-[24px] shrink-0 text-[#08549E] opacity-75'

const slides = [
  {
    image: `/images/home/hero1.webp`,
    mobileImage: '/images/home/mobile/hero1.webp',
    tabletImage: '/images/home/mobile/hero1-1120.webp',
    topLabel: 'Advanced Dental Care',
    topLabelColor: 'text-[#A66689]',
    heading: (
      <>
        Transforming Smiles <br className="hidden lg:block" />
        with Advanced <br className="hidden lg:block" />
        Dental Care.
      </>
    ),
    headingColor: 'text-[#0A5BA8]',
    content: (
      <>
        <p className="font-poppins text-[12px] lg:text-[14px] md:text-[15px] lg:text-[16px] font-normal leading-[1.55] text-[#4A5568] max-w-[550px] mb-3 lg:mb-4">
          At Dental Esthetique, we combine advanced technology, experienced dental professionals,
          and personalized care to deliver healthy, confident smiles for patients of all ages.
        </p>
        <div className="flex flex-row flex-wrap items-center gap-2.5 lg:gap-4 h-hero-btns">
          <HeroButton to={BOOK_APPOINTMENT_TO} text="Book an Appointment" />
          <HeroButton
            to="/services#catalogue"
            text="See Treatments"
            variant="outline"
            className="!border-[#0A5BA8] !text-[#0A5BA8] hover:!bg-[#0A5BA8]/5"
          />
        </div>
      </>
    ),
  },
  {
    image: '/images/home/carebanner.png',
    topLabel: 'Care For Your Smile',
    topLabelColor: 'text-[#A0557A]',
    heading: (
      <>
        Committed to <br className="hidden lg:block" />
        Excellence
      </>
    ),
    headingColor: 'text-[#08549E]',
    content: (
      <>
        <div className="flex flex-col gap-3 max-w-full lg:max-w-[750px] mb-4 lg:mb-6 h-hero-row md:flex-row md:gap-4">
          <div className="flex items-start gap-2.5 lg:gap-3">
            <FaWandMagicSparkles className={`${heroIco} mt-1`} aria-hidden />
            <div>
              <h2 className="text-[#08549E] font-poppins font-semibold text-[16px] lg:text-[18px] mb-1">
                Whitening
              </h2>
              <p className="font-poppins text-[#3B4657] text-[13px] lg:text-[14px] leading-relaxed">
                Professional whitening that <br className="hidden lg:block" />
                safely brightens your smile <br className="hidden lg:block" />
                in a single visit.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2.5 lg:gap-3">
            <FaCrown className={`${heroIco} mt-1`} aria-hidden />
            <div>
              <h2 className="text-[#08549E] font-poppins font-semibold text-[16px] lg:text-[18px] mb-1">
                Prosthesis
              </h2>
              <p className="font-poppins text-[#3B4657] text-[13px] lg:text-[14px] leading-relaxed">
                Custom prosthetic solutions for <br className="hidden lg:block" />
                comfortable chewing and a <br className="hidden lg:block" />
                natural-looking smile.
              </p>
            </div>
          </div>
        </div>
        <HeroButton
          to="/services#catalogue"
          text="View Our Services"
          className="!bg-[#A0557A] hover:!bg-[#8F4765]"
        />
      </>
    ),
  },
  {
    image: '/images/about/team-3.webp',
    topLabel: 'Care For a Lifetime',
    topLabelColor: 'text-[#A0557A]',
    heading: (
      <>
        Let Us Brighten <br className="hidden lg:block" />
        Your Smile
      </>
    ),
    headingColor: 'text-[#08549E]',
    content: (
      <>
        <div className="flex flex-col gap-3 max-w-full lg:max-w-[750px] mb-4 lg:mb-6 h-hero-row md:flex-row md:gap-4">
          <div className="flex items-start gap-2.5 lg:gap-3">
            <GiScrew className={`${heroIco} mt-1`} aria-hidden />
            <div>
              <h2 className="text-[#08549E] font-poppins font-semibold text-[16px] lg:text-[18px] mb-1">
                Implants
              </h2>
              <p className="font-poppins text-[#3B4657] text-[13px] lg:text-[14px] leading-relaxed">
                Durable dental implants that <br className="hidden lg:block" />
                restore missing teeth with <br className="hidden lg:block" />
                lasting stability.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2.5 lg:gap-3">
            <FaTeeth className={`${heroIco} mt-1`} aria-hidden />
            <div>
              <h2 className="text-[#08549E] font-poppins font-semibold text-[16px] lg:text-[18px] mb-1">
                Alignment
              </h2>
              <p className="font-poppins text-[#3B4657] text-[13px] lg:text-[14px] leading-relaxed">
                Clear aligners and braces that <br className="hidden lg:block" />
                straighten teeth with comfort <br className="hidden lg:block" />
                and precision.
              </p>
            </div>
          </div>
        </div>
        <HeroButton
          to="/services#catalogue"
          text="Dental Solutions"
          className="!bg-[#A0557A] hover:!bg-[#8F4765]"
        />
      </>
    ),
  },
  {
    image: `${IMG}/hero-clinic.webp`,
    topLabel: 'Committed to Excellence',
    topLabelColor: 'text-[#A0557A]',
    heading: (
      <>
        Personalized & <br className="hidden lg:block" />
        Comfortable
      </>
    ),
    headingColor: 'text-[#08549E]',
    content: (
      <>
        <div className="flex flex-col gap-3 max-w-full lg:max-w-[750px] mb-4 lg:mb-6 h-hero-row md:flex-row md:gap-4">
          <div className="flex items-start gap-2.5 lg:gap-3">
            <FaShieldHalved className={`${heroIco} mt-1`} aria-hidden />
            <div>
              <h2 className="text-[#08549E] font-poppins font-semibold text-[16px] lg:text-[18px] mb-1">
                Full Protection
              </h2>
              <p className="font-poppins text-[#3B4657] text-[13px] lg:text-[14px] leading-relaxed">
                Preventive care and protection <br className="hidden lg:block" />
                that keep your smile healthy <br className="hidden lg:block" />
                for the long term.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2.5 lg:gap-3">
            <FaUserDoctor className={`${heroIco} mt-1`} aria-hidden />
            <div>
              <h2 className="text-[#08549E] font-poppins font-semibold text-[16px] lg:text-[18px] mb-1">
                Complete Service
              </h2>
              <p className="font-poppins text-[#3B4657] text-[13px] lg:text-[14px] leading-relaxed">
                Full-service dentistry tailored <br className="hidden lg:block" />
                to your needs in one <br className="hidden lg:block" />
                comfortable visit.
              </p>
            </div>
          </div>
        </div>
        <HeroButton
          to={BOOK_APPOINTMENT_TO}
          text="Book an Appointment"
          className="!bg-[#A0557A] hover:!bg-[#8F4765]"
        />
      </>
    ),
  },
]

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1))
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const next = slides[(currentSlide + 1) % slides.length]
    const pre = setTimeout(() => {
      const img = new Image()
      img.src = next.image
      if (next.mobileImage) img.src = next.mobileImage
    }, 7000)
    return () => clearTimeout(pre)
  }, [currentSlide])

  return (
    <>
      <div className="relative lg:absolute left-0 top-0 h-[400px] md:h-[440px] lg:h-[778px] w-full lg:w-[1440px] overflow-hidden h-hero">
        {slides.map((slide, index) => (
          <div
            key={index}
            aria-hidden={currentSlide !== index}
            className={`absolute inset-0 flex items-center pt-14 lg:pt-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            <img
              src={currentSlide === index ? slide.image : undefined}
              srcSet={
                currentSlide === index && slide.mobileImage
                  ? `${slide.mobileImage} 480w${slide.tabletImage ? `, ${slide.tabletImage} 1120w` : ''}, ${slide.image} 1280w`
                  : undefined
              }
              sizes="100vw"
              alt=""
              fetchPriority={currentSlide === index ? 'high' : undefined}
              decoding="async"
              className={`absolute inset-0 h-full w-full object-cover h-hero-grad ${index === 1 ? 'object-[center_top]' : index === 0 ? 'object-top' : 'object-[60%_center]'}`}
            />
            <div
              className={`absolute inset-0 h-full w-full h-hero-grad ${index === 1
                ? 'bg-white/70 lg:bg-transparent lg:bg-gradient-to-r lg:from-white/60 lg:via-white/20'
                : 'bg-white/85 lg:bg-transparent lg:bg-gradient-to-r lg:from-white/90 lg:via-white/50'
                } lg:to-transparent`}
            />

            <div className="relative z-20 w-full px-5 md:px-12 lg:px-0 lg:absolute lg:left-[4%] lg:top-[58%] lg:w-[700px] lg:-translate-y-1/2 flex flex-col items-start text-left gap-2.5 lg:gap-4 h-hero-txt">
              {currentSlide === index && (
                <div className="flex flex-col gap-2.5 lg:gap-4 w-full max-w-[560px] lg:max-w-none">
                  <span
                    className={`h-hero-anim-item font-poppins bg-[#D35B8F]/10 text-[10px] md:text-[12px] lg:text-[13px] font-bold tracking-[0.1em] uppercase px-3 py-1 lg:px-4 lg:py-1.5 rounded-full w-max ${slide.topLabelColor}`}
                    style={{ animationDelay: '0.1s' }}
                  >
                    {slide.topLabel}
                  </span>

                  <h1
                    className={`h-hero-anim-item font-poppins text-[26px] md:text-[34px] lg:text-[56px] font-bold leading-[1.12] h-hero-h1 ${slide.headingColor} tracking-tight`}
                    style={{ animationDelay: '0.22s' }}
                  >
                    {slide.heading}
                  </h1>

                  <div className="h-hero-anim-item" style={{ animationDelay: '0.34s' }}>
                    {slide.content}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="relative lg:absolute left-0 top-auto lg:top-[774px] flex h-[36px] lg:h-[40px] w-full lg:w-[1440px] items-center overflow-hidden bg-gradient-to-r from-[#0A5BA8] via-[#08549E] to-[#0A5BA8] shadow-xl z-20 border-y border-white/10 h-hero-mq">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[0, 1].map((blockIndex) => (
            <div key={blockIndex} className="flex shrink-0 items-center gap-12 px-6">
              {[
                'Dental Technology',
                'Experienced Professionals',
                'Sterilized Environment',
                'Personalized Plans',
                'Advanced Dental Care',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg
                    className="w-[18px] h-[18px] text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 10h-5V5h-4v5H5v4h5v5h4v-5h5v-4z" />
                  </svg>
                  <span className="font-poppins text-[13px] font-semibold tracking-widest text-white uppercase">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
