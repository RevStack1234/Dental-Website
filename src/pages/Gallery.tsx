import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BadgeCheck, Star, Award } from 'lucide-react'
import HeroButton from '../components/ui/HeroButton'
import { BOOK_APPOINTMENT_TO } from '../components/ui/links'
import SectionPill from '../components/ui/SectionPill'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal, { Stagger, StaggerItem, CountUp } from '../components/ui/Reveal'
import { usePageMeta, SITE_URL } from '../utils/seo'

function HeroImageCollage({ images }: { images: string[] }) {
  const col1Base = images.slice(0, 6)
  const col2Base = images.slice(6, 12).reverse()
  const col3Base = images.slice(12, 17)
  const col4Base = images.slice(17, 22).reverse()

  const col1Images = [...col1Base, ...col1Base]
  const col2Images = [...col2Base, ...col2Base]
  const col3Images = [...col3Base, ...col3Base]
  const col4Images = [...col4Base, ...col4Base]

  return (
    <>
      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-scroll-up {
          animation: scroll-up 50s linear infinite;
        }
        .animate-scroll-down {
          animation: scroll-down 50s linear infinite;
        }
        .animate-scroll-up:hover,
        .animate-scroll-down:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="absolute right-[20px] top-[120px] w-[640px] h-[680px] overflow-hidden flex gap-4 marquee-container justify-center h-gal-col"
        style={{
          maskImage:
            'linear-gradient(to bottom, transparent 0px, black 120px, black calc(100% - 120px), transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0px, black 120px, black calc(100% - 120px), transparent 100%)',
        }}
      >
        {[
          { images: col1Images, dir: 'animate-scroll-up', pad: 'pt-8' },
          { images: col2Images, dir: 'animate-scroll-down', pad: '' },
          { images: col3Images, dir: 'animate-scroll-up', pad: 'pt-16' },
          { images: col4Images, dir: 'animate-scroll-down', pad: 'pt-8' },
        ].map((col, colIdx) => (
          <div key={colIdx} className={`flex flex-col gap-4 w-[140px] ${col.dir} ${col.pad}`}>
            {col.images.map((src, idx) => (
              <div
                key={`col${colIdx + 1}-${idx}`}
                className="w-full h-auto shrink-0 rounded-[20px] overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.08)] border-[3px] border-white"
              >
                <img src={src} alt="" loading="lazy" decoding="async" className="w-full h-auto object-cover block" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

const treatmentImages = [
  '/images/before-after/WhatsApp Image 2026-09-01 at 12.52.08 PM.webp',
  '/images/before-after/WhatsApp Image 2026-09-01 at 12.13.04 PM (1).webp',
  '/images/before-after/WhatsApp Image 2026-09-01 at 1.04.56 PM.webp',
  '/images/before-after/WhatsApp Image 2026-09-01 at 12.13.05 PM (1).webp',
  '/images/before-after/WhatsApp Image 2026-09-01 at 12.13.06 PM.webp',
  '/images/before-after/WhatsApp Image 2026-09-01 at 12.13.06 PM (2).webp',
  '/images/before-after/WhatsApp Image 2026-09-01 at 12.13.04 PM.webp',
  '/images/before-after/WhatsApp Image 2026-09-01 at 12.13.05 PM (2).webp',
  '/images/before-after/WhatsApp Image 2026-09-01 at 12.13.05 PM.webp',
  '/images/before-after/WhatsApp Image 2026-09-01 at 12.13.06 PM (1).png',
]

const galleryImages = [
  { src: '/images/treatment-images/doc1.webp', category: 'other' },
  { src: '/images/treatment-images/doc2.webp', category: 'other' },
  { src: '/images/treatment-images/doc3.webp', category: 'other' },
  { src: '/images/treatment-images/doc4.webp', category: 'other' },
  { src: '/images/gallery/doctor-patient-2.webp', category: 'patient' },
  { src: '/images/gallery/clinic-machine-1.webp', category: 'clinic' },
  { src: '/images/gallery/clinic-machine-10.webp', category: 'clinic' },
  { src: '/images/gallery/Clinic machine 4.webp', category: 'clinic' },
  { src: '/images/gallery/clinic machine 10 (1).webp', category: 'clinic' },
  { src: '/images/gallery/gallery-1.webp', category: 'patient' },
  { src: '/images/gallery/gallery-2.webp', category: 'patient' },
  { src: '/images/gallery/clinic-machine-2.webp', category: 'clinic' },
  { src: '/images/gallery/clinic-machine-3.webp', category: 'clinic' },
  { src: '/images/gallery/clinic-machine-5.webp', category: 'clinic' },
  { src: '/images/gallery/clinic-machine-9.webp', category: 'clinic' },
  { src: '/images/gallery/doctor-patient-1.webp', category: 'patient' },
  { src: '/images/gallery/doctor-patient-11.webp', category: 'patient' },
  { src: '/images/patient/unnamed (10).webp', category: 'patient' },
  { src: '/images/patient/unnamed (13).webp', category: 'patient' },
  { src: '/images/patient/unnamed (14).webp', category: 'patient' },
  { src: '/images/patient/unnamed (15).webp', category: 'patient' },
  { src: '/images/patient/unnamed (16).webp', category: 'patient' },
  { src: '/images/patient/unnamed (17).webp', category: 'patient' },
  { src: '/images/patient/unnamed (18).webp', category: 'patient' },
  { src: '/images/patient/unnamed (19).webp', category: 'patient' },
  { src: '/images/patient/unnamed (20).webp', category: 'patient' },
  { src: '/images/patient/unnamed (21).webp', category: 'patient' },
  { src: '/images/patient/unnamed (22).webp', category: 'patient' },
  { src: '/images/patient/unnamed (23).webp', category: 'patient' },
  { src: '/images/patient/unnamed (3).webp', category: 'patient' },
  { src: '/images/patient/unnamed (4).webp', category: 'patient' },
  { src: '/images/patient/unnamed (5).webp', category: 'patient' },
  { src: '/images/patient/unnamed (7).webp', category: 'patient' },
  { src: '/images/patient/unnamed (8).webp', category: 'patient' },
  { src: '/images/patient/unnamed (9).webp', category: 'patient' },

]

const patientImageUrls = galleryImages.map((img) => img.src)

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'patient' | 'clinic'>('all')

  const displayedImages =
    filter === 'all' ? galleryImages : galleryImages.filter((img) => img.category === filter)
  usePageMeta({
    title: 'Smile Gallery | Dental Esthetique - Real Patient Results in Noida',
    description:
      'Browse real patient smile transformations and clinic photos from Dental Esthetique, Noida - root canals, implants, smile designing, veneers and more.',
    path: '/gallery',
    image: `${SITE_URL}/images/gallery/image.webp`,
  })
  return (
    <div className="w-full bg-[#FAF8F9] font-poppins overflow-x-hidden min-h-screen h-gal-page">
      <div className="relative w-full h-auto min-h-0 lg:h-[800px] bg-white flex justify-center overflow-hidden shrink-0 h-gal-hero-wrap">
        <div className="relative w-full lg:w-[1440px] h-full z-10 h-gal-hero-in">
          <div className="lg:hidden w-full overflow-hidden pt-[76px] px-4 h-gal-strip">
            <div className="flex gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
              {patientImageUrls.slice(0, 12).map((src, i) => (
                <div
                  key={`strip-${i}`}
                  className="snap-center shrink-0 w-[72px] h-[96px] sm:w-[88px] sm:h-[118px] rounded-xl overflow-hidden shadow-md border-2 border-white bg-gray-100"
                >
                  <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <Stagger
            className="relative lg:absolute left-0 lg:left-[80px] top-auto lg:top-1/2 lg:-translate-y-[35%] flex w-full lg:w-[634px] flex-col z-20 px-5 pt-6 pb-8 lg:px-0 lg:pt-0 lg:pb-0 h-gal-hero"
            gap={0.15}
          >
            <StaggerItem y={30}>
              <div className="flex flex-col gap-3 lg:gap-4">
                <div>
                  <SectionPill size="lg">Transformation</SectionPill>
                </div>
                <h1 className="w-full lg:w-[634px] font-fraunces text-[28px] sm:text-[36px] md:text-[48px] lg:text-[62px] font-semibold leading-[1.1] lg:leading-[1.06] tracking-[0.01em] text-[#28231F] h-gal-hero-h">
                  Our Smile Gallery
                </h1>
                <p className="mt-1 lg:mt-2 w-full lg:w-[493px] font-poppins text-[13px] sm:text-[14px] lg:text-[16px] font-normal leading-[1.6] lg:leading-[1.7] text-[#767676] h-gal-hero-p">
                  See the life-changing results of our world-class dental treatments. From subtle
                  enhancements to complete smile makeovers, every transformation is planned with
                  precision, executed with care and finished to perfection. Browse our gallery to
                  witness the artistry behind each confident smile and imagine what yours could look
                  like.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem y={30} className="mt-4 lg:mt-6">
              <div className="flex w-full lg:w-[493px] items-start sm:items-center gap-3 sm:gap-4 lg:gap-6 h-gal-stats flex-wrap">
                <div className="flex flex-col min-w-[100px]">
                  <div className="flex items-center gap-1.5 lg:gap-2">
                    <p className="font-poppins text-[22px] sm:text-[26px] font-bold leading-none text-[#165ba7]">
                      <CountUp value={20} suffix="K+" />
                    </p>
                    <BadgeCheck className="w-5 h-5 lg:w-[22px] lg:h-[22px] text-[#165ba7] -mt-1" />
                  </div>
                  <p className="mt-1.5 font-poppins text-[10px] sm:text-[12px] font-medium uppercase tracking-[0.08em] text-[#767676]">
                    Smiles Transformed
                  </p>
                </div>
                <div className="hidden sm:block h-[38px] w-px bg-[#E5E7EB] shrink-0" />
                <div className="flex flex-col min-w-[90px]">
                  <div className="flex items-center gap-1.5 lg:gap-2">
                    <p className="font-poppins text-[22px] sm:text-[26px] font-bold leading-none text-[#165ba7]">
                      4.8/5
                    </p>
                    <Star className="w-4 h-4 lg:w-5 lg:h-5 text-[#F59E0B] fill-[#F59E0B] -mt-1" />
                  </div>
                  <p className="mt-1.5 font-poppins text-[10px] sm:text-[12px] font-medium uppercase tracking-[0.08em] text-[#767676]">
                    Google Rating
                  </p>
                </div>
                <div className="hidden sm:block h-[38px] w-px bg-[#E5E7EB] shrink-0" />
                <div className="flex flex-col gap-1 min-w-[90px]">
                  <div className="flex items-center gap-1.5 lg:gap-2">
                    <span className="font-poppins text-[22px] sm:text-[28px] font-bold leading-none text-[#165ba7]">
                      <CountUp value={18} suffix="+" />
                    </span>
                    <Award className="w-5 h-5 lg:w-[22px] lg:h-[22px] text-[#165ba7] -mt-1" />
                  </div>
                  <span className="font-poppins text-[9px] sm:text-[10px] font-semibold tracking-widest text-[#767676] uppercase">
                    Years of
                    <br />
                    Excellence
                  </span>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem y={30} className="mt-8 lg:mt-12">
              <HeroButton to={BOOK_APPOINTMENT_TO} text="Book an appointment" />
            </StaggerItem>
          </Stagger>

          <div className="hidden lg:block">
            <HeroImageCollage images={patientImageUrls} />
          </div>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center pt-10 sm:pt-12 lg:pt-16 pb-0 px-0 h-gal-body">
        <section className="w-full max-w-[1200px] px-4 sm:px-6 flex flex-col items-center h-gal-ba">
          <SectionHeading
            pill="Real Results"
            pillColor="blue"
            align="center"
            title="Before & After Treatments"
            titleClassName="font-poppins text-[26px] sm:text-[34px] lg:text-[42px] font-semibold h-gal-sechead"
            description="Explore the remarkable difference our care makes for your smile."
            descriptionClassName="text-[13px] sm:text-[14px] lg:text-[15px] h-gal-secdesc"
            className="mb-8 sm:mb-12 lg:mb-16"
          />

        </section>
      </div>

      <div className="relative w-full overflow-hidden">
        <style>{`
          @keyframes marquee-ba {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-ba {
            animation: marquee-ba ${treatmentImages.length * 6}s linear infinite;
          }
          .animate-marquee-ba:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div
          className="flex items-center w-max animate-marquee-ba hover:[animation-play-state:paused] gap-3 sm:gap-4 lg:gap-6 px-4"
        >
          {[...treatmentImages, ...treatmentImages, ...treatmentImages, ...treatmentImages].map((src, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-xl lg:rounded-2xl bg-white shadow-md border border-gray-100 shrink-0 h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px]"
            >
              <img
                src={src}
                alt={`Treatment result ${(idx % treatmentImages.length) + 1}`}
                className="block w-auto h-full object-cover transform transition-transform duration-700 group-hover:scale-105 bg-gray-50"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center pb-0 px-0 h-gal-body-2">

        <div className="w-full max-w-[1200px] h-[1px] bg-gray-200 my-8 lg:my-8 mx-4 sm:mx-6" />

        <section className="w-full max-w-[1300px] px-4 sm:px-6 mb-8 flex flex-col items-center h-gal-family">
          <SectionHeading
            pill="Gallery"
            align="center"
            title="Our Clinic & Patients"
            titleClassName="font-poppins text-[26px] sm:text-[34px] lg:text-[42px] font-semibold h-gal-sechead"
            description="Join thousands of happy patients across Noida who trust Dental Esthetique with their smiles. Take a tour of our modern clinic facilities and see the confident smiles of our patient family."
            descriptionClassName="max-w-[800px] text-[13px] sm:text-[14px] lg:text-[16px] h-gal-secdesc"
            className="mb-6 sm:mb-8 lg:mb-10"
          />

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full px-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full font-poppins text-[13px] sm:text-[14px] font-medium transition-all ${filter === 'all' ? 'bg-[#165ba7] text-white shadow-md' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
            >
              All Photos
            </button>
            <button
              onClick={() => setFilter('clinic')}
              className={`px-5 py-2 rounded-full font-poppins text-[13px] sm:text-[14px] font-medium transition-all ${filter === 'clinic' ? 'bg-[#165ba7] text-white shadow-md' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
            >
              Our Clinic
            </button>
            <button
              onClick={() => setFilter('patient')}
              className={`px-5 py-2 rounded-full font-poppins text-[13px] sm:text-[14px] font-medium transition-all ${filter === 'patient' ? 'bg-[#165ba7] text-white shadow-md' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
            >
              Happy Patients
            </button>
          </div>

          <Stagger
            key={filter}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3 lg:gap-4 w-full max-w-[1300px] mx-auto h-gal-family-grid"
            gap={0.04}
          >
            {displayedImages.map((img, imgIdx) => (
              <StaggerItem
                key={imgIdx}
                y={24}
                className="relative group overflow-hidden rounded-xl lg:rounded-2xl bg-gray-100 shadow-[0_4px_10px_rgba(0,0,0,0.05)] cursor-pointer border-[3px] lg:border-[4px] border-white transition-all duration-500 hover:shadow-[0_15px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 aspect-square"
              >
                <img
                  src={img.src}
                  alt={`Gallery photo ${imgIdx + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </StaggerItem>
            ))}

            {filter !== 'clinic' && (
              <StaggerItem
                y={24}
                className="relative overflow-hidden rounded-xl lg:rounded-2xl bg-[#165ba7] p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center text-center shadow-[0_4px_10px_rgba(0,0,0,0.05)] border-[3px] lg:border-[4px] border-white aspect-square group transition-all duration-500 hover:-translate-y-1 h-gal-cta-card"
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 rounded-full flex items-center justify-center mb-3 lg:mb-4">
                  <svg
                    className="w-5 h-5 lg:w-6 lg:h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-poppins text-lg sm:text-xl lg:text-2xl font-semibold mb-1.5 lg:mb-2 leading-tight">
                  Your Smile Is Next!
                </h3>
                <p className="text-white/80 text-xs sm:text-sm mb-0 lg:mb-6 px-1">
                  Join thousands of our confident patients.
                </p>
              </StaggerItem>
            )}

            {filter !== 'clinic' && (
              <StaggerItem
                y={24}
                className="relative overflow-hidden rounded-xl lg:rounded-2xl bg-[#D35B8F] p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center text-center shadow-[0_4px_10px_rgba(0,0,0,0.05)] border-[3px] lg:border-[4px] border-white aspect-square group transition-all duration-500 hover:-translate-y-1 h-gal-cta-card"
              >
                <h3 className="text-white font-poppins text-3xl sm:text-4xl lg:text-5xl font-semibold mb-1.5 lg:mb-2">
                  20K+
                </h3>
                <p className="text-white/90 text-[11px] sm:text-sm font-poppins uppercase tracking-wider font-semibold">
                  Transformations
                </p>
                <p className="text-white/70 text-[10px] sm:text-xs mt-1.5 lg:mt-2">
                  completed with excellence.
                </p>
              </StaggerItem>
            )}
          </Stagger>

          <Reveal y={24} duration={0.6} className="mt-8 lg:mt-10 text-center">
            <Link
              to="/testimonials#patient-stories"
              className="inline-flex h-11 lg:h-12 items-center justify-center gap-2 rounded-full bg-[#165ba7] px-6 lg:px-8 font-poppins text-[14px] lg:text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(22,91,167,0.3)] transition-all hover:bg-[#114076] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(22,91,167,0.4)] h-gal-link"
            >
              Patient Testimonials
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </Link>
          </Reveal>
        </section>
      </div>
    </div>
  )
}
