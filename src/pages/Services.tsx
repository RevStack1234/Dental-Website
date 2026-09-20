import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroButton from '../components/ui/HeroButton'
import { BOOK_APPOINTMENT_TO } from '../components/ui/links'
import PageHero from '../components/ui/PageHero'
import SectionPill from '../components/ui/SectionPill'
import Reveal, { Stagger, StaggerItem } from '../components/ui/Reveal'
import { treatmentCategories, treatments } from '../data/treatments'
import { usePageMeta, SITE_URL } from '../utils/seo'

export default function Services() {
  usePageMeta({
    title: 'Dental Treatments in Noida | Root Canal, Implants, Smile Design',
    description:
      'Explore our complete range of dental treatments in Noida - single sitting RCT, dental implants, braces, veneers, dentures, teeth whitening and more at Dental Esthetique.',
    path: '/services',
    image: `${SITE_URL}/images/about/treatment%20hero.webp`,
  })
  const [active, setActive] = useState<(typeof treatmentCategories)[number]>('All')
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [expandedSubtypes, setExpandedSubtypes] = useState<string[]>([])
  const [showAll, setShowAll] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const itemParam = params.get('item')
    const subtypeParam = params.get('subtype')
    const categoryParam = params.get('category')

    if (categoryParam) {
      setActive(categoryParam as (typeof treatmentCategories)[number])
    } else if (itemParam) {
      // If we only passed 'item', we can automatically select the right category
      const foundTreatment = treatments.find(t => t.title === itemParam)
      if (foundTreatment) {
        setActive(foundTreatment.category)
      }
    }

    if (itemParam) {
      setExpandedItem(itemParam)
      setShowAll(true)

      const foundItem = treatments.find(t => t.title === itemParam)
      if (foundItem?.subtypes) {
        // If they asked for a specific subtype, maybe just open that one, or all of them.
        // We'll open all of them by default when a parent opens.
        setExpandedSubtypes(foundItem.subtypes.map(s => s.title))
      }
    } else if (subtypeParam) {
      setExpandedSubtypes([subtypeParam])
    }

    // Scroll down to the specific item if we came with specific params
    if (itemParam || categoryParam) {
      setTimeout(() => {
        let el = null
        if (subtypeParam) {
          el = document.getElementById(`subtype-${subtypeParam}`)
        }
        if (!el && itemParam) {
          el = document.getElementById(`treatment-${itemParam}`)
        }
        if (!el) {
          el = document.getElementById('catalogue')
        }
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 100
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 400) // slight delay to let state render and Framer Motion mount
    }
  }, [location.search])

  const filteredTreatments = treatments.filter(
    (item) => active === 'All' || item.category === active,
  )
  const visibleTreatments = showAll
    ? filteredTreatments
    : filteredTreatments.slice(0, Math.ceil(filteredTreatments.length / 2))

  return (
    <div className="w-full bg-white font-poppins overflow-x-hidden h-svc-page">
      <div className="relative mx-auto flex w-full max-w-[1440px] lg:w-[1440px] flex-col items-center bg-white pb-8 h-canvas">
        <PageHero
          tagline="Treatments"
          title="Smile Solutions for Everyone"
          description="At Dental Esthetique, we provide a full spectrum of world-class dental treatments under one roof, tailored specifically to your unique needs. From essential preventive care and painless root canals to advanced dental implants and complete smile makeovers, our dedicated specialists utilize cutting-edge technology to ensure flawless, long-lasting results."
          taglineColor="text-[#D35B8F]"
          titleColor="text-[#28231F]"
          titleFont="font-fraunces lg:!text-[62px] !leading-[1.06] tracking-[0.01em]"
          height="lg:h-[max(100vh,800px)]"
          backgroundImage="/images/treatment-images/hero.png"
          hideCollage={true}
          className="h-svc-hero"
        >
          <HeroButton to={BOOK_APPOINTMENT_TO} text="Book an appointment" />
          <HeroButton href="#catalogue" text="See treatments" variant="outline" />
        </PageHero>

        <div
          id="catalogue"
          className="relative mt-12 lg:mt-24 flex w-full max-w-[1210px] lg:w-[1210px] flex-col px-5 lg:px-0 h-cat"
        >
          <Reveal y={24} duration={0.7} className="flex flex-col">
            <SectionPill size="lg">01 · CARE CATALOGUE</SectionPill>
            <h2 className="mt-2 font-poppins text-[26px] sm:text-[30px] lg:text-[36px] font-bold leading-tight text-[#28231F] h-cat-h">
              Comprehensive Dental Treatments
            </h2>
          </Reveal>

          <Stagger
            className="mt-6 lg:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3 lg:gap-[22px] w-full max-w-[1182px] lg:w-[1182px] h-cat-pills"
            gap={0.05}
          >
            {treatmentCategories.map((cat) => {
              const isActive = active === cat
              return (
                <StaggerItem key={cat} y={16}>
                  <button
                    type="button"
                    onClick={() => {
                      setActive(cat)
                      setShowAll(false)
                      setExpandedItem(null)
                      setExpandedSubtypes([])
                    }}
                    className={`flex items-center justify-center h-[36px] lg:h-[40px] rounded-[18px] px-3.5 lg:px-5 font-poppins text-[12px] lg:text-[13px] font-medium transition-colors whitespace-nowrap ${isActive
                      ? 'bg-[#D35B8F] text-white border border-[#D35B8F]'
                      : 'border border-[#D35B8F] bg-white text-[#404040] hover:bg-[#D35B8F]/5'
                      }`}
                  >
                    {cat}
                  </button>
                </StaggerItem>
              )
            })}
          </Stagger>

          <div className="mt-10 lg:mt-16 flex flex-col w-full max-w-[1222px] lg:w-[1222px] gap-7 lg:gap-[40px] h-cat-list">
            {visibleTreatments.map((item) => {
              const isExpanded = expandedItem === item.title
              return (
                <Reveal
                  key={item.title}
                  y={30}
                  duration={0.5}
                  className="flex flex-col border-b border-[#D9D9D9] pb-5 lg:pb-6"
                >
                  <div
                    id={`treatment-${item.title}`}
                    className="group flex w-full items-start sm:items-center justify-between gap-3 cursor-pointer transition-colors scroll-mt-32"
                    onClick={() => {
                      const willExpand = !isExpanded
                      setExpandedItem(willExpand ? item.title : null)
                      if (willExpand && item.subtypes) {
                        setExpandedSubtypes(item.subtypes.map(s => s.title))
                      } else {
                        setExpandedSubtypes([])
                      }

                      if (willExpand) {
                        setTimeout(() => {
                          const el = document.getElementById(`treatment-${item.title}`)
                          if (el) {
                            const y = el.getBoundingClientRect().top + window.scrollY - 120
                            window.scrollTo({ top: y, behavior: 'smooth' })
                          }
                        }, 300)
                      }
                    }}
                    onMouseEnter={() => {
                      const img = new Image()
                      img.src = `/treatment/${encodeURIComponent(item.title)}.webp`
                    }}
                  >
                    <h3 className="font-poppins text-[18px] sm:text-[22px] lg:text-[32px] font-semibold text-[#28231F] group-hover:text-[#1E73BE] transition-colors uppercase tracking-wide leading-snug lg:leading-tight min-w-0 flex-1">
                      {item.title}
                    </h3>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`text-[#28231F] group-hover:text-[#1E73BE] transition-all duration-300 shrink-0 mt-1 sm:mt-0 ${isExpanded ? 'rotate-180' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>

                  {isExpanded && (
                    <div className="mt-6 lg:mt-8 flex flex-col gap-6 h-cat-exp">
                      {item.subtypes && item.subtypes.length > 0 ? (
                        <div className="flex flex-col gap-6">
                          <p className="font-poppins text-[15px] sm:text-[17px] lg:text-[20px] text-[#28231F] leading-[1.65] lg:leading-[1.6]">
                            {item.content}
                          </p>
                          <div className="flex flex-col gap-4 border-t border-gray-200 pt-6">
                            {item.subtypes.map((sub) => {
                              const isSubExpanded = expandedSubtypes.includes(sub.title)
                              return (
                                <div
                                  key={sub.title}
                                  id={`subtype-${sub.title}`}
                                  className="flex flex-col border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all scroll-mt-32"
                                >
                                  <div
                                    className="flex w-full items-center justify-between p-4 lg:px-6 lg:py-5 cursor-pointer hover:bg-gray-50 transition-colors"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      setExpandedSubtypes(prev =>
                                        isSubExpanded ? prev.filter(t => t !== sub.title) : [...prev, sub.title]
                                      )
                                    }}
                                  >
                                    <h4 className="font-poppins font-semibold text-[15px] sm:text-[17px] lg:text-[18px] text-[#28231F] uppercase tracking-wide">
                                      {sub.title}
                                    </h4>
                                    <svg
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className={`text-[#28231F] transition-all duration-300 shrink-0 ${isSubExpanded ? 'rotate-180' : ''}`}
                                    >
                                      <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                  </div>

                                  {isSubExpanded && (
                                    <div className="p-4 lg:p-6 pt-0 flex flex-col lg:flex-row gap-5 lg:gap-[40px] border-t border-gray-100 mt-2">
                                      <img
                                        src={sub.image || `/treatment/${encodeURIComponent(sub.title)}.webp`}
                                        className={`shrink-0 bg-[#F3F4F6] mx-auto lg:mx-0 rounded-[12px] ${(sub as any).isVerticalImage
                                          ? 'w-full max-w-[250px] lg:w-[250px] h-auto object-contain max-h-[250px]'
                                          : 'w-full max-w-[300px] lg:w-[260px] h-auto aspect-[300/160] lg:h-[140px] object-cover'
                                          }`}
                                        alt={sub.title}
                                        style={{ objectPosition: (sub as any).imagePosition || 'center' }}
                                        onError={(e) => {
                                          e.currentTarget.style.display = 'none'
                                        }}
                                        loading="lazy"
                                        decoding="async"
                                      />
                                      <div className="flex flex-col justify-between flex-1 min-w-0">
                                        <p className="font-poppins text-[14px] lg:text-[15px] text-gray-700 leading-[1.65] lg:leading-[1.6]">
                                          {sub.content}
                                        </p>
                                        <HeroButton
                                          to={BOOK_APPOINTMENT_TO}
                                          text="Enquiry"
                                          className="mt-5 lg:mt-6 !h-[40px] self-start text-[13px] px-6"
                                        />
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col lg:flex-row gap-5 lg:gap-[74px]">
                          <img
                            src={item.image || `/treatment/${encodeURIComponent(item.title)}.webp`}
                            className={`shrink-0 bg-[#F3F4F6] mx-auto lg:mx-0 rounded-[14px] lg:rounded-[16px] ${item.isVerticalImage
                              ? 'w-full max-w-[250px] lg:w-[250px] h-auto object-contain max-h-[300px]'
                              : 'w-full max-w-[300px] lg:w-[300px] h-auto aspect-[300/160] lg:h-[160px] object-cover'
                              }`}
                            alt={item.title}
                            onError={(e) => {
                              e.currentTarget.style.display = 'none'
                            }}
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="flex flex-col justify-between py-0 lg:py-1 min-w-0 flex-1">
                            <p className="font-poppins text-[15px] sm:text-[17px] lg:text-[20px] text-[#28231F] leading-[1.65] lg:leading-[1.6] max-w-[800px]">
                              {item.content}
                            </p>
                            <HeroButton
                              to={BOOK_APPOINTMENT_TO}
                              text="Enquiry"
                              className="mt-6 lg:mt-8 !h-[44px] self-start"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </Reveal>
              )
            })}

            {filteredTreatments.length > Math.ceil(filteredTreatments.length / 2) && (
              <button
                type="button"
                onClick={() => setShowAll(!showAll)}
                className="mt-4 lg:mt-8 mx-auto flex items-center justify-center font-poppins text-[13px] lg:text-[14px] font-semibold uppercase tracking-[0.05em] text-[#D35B8F] hover:opacity-80 transition-opacity py-2"
              >
                {showAll ? 'SHOW LESS' : 'SHOW MORE'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
