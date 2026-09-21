import PageHero from '../components/ui/PageHero'
import HeroButton from '../components/ui/HeroButton'
import { BOOK_APPOINTMENT_TO } from '../components/ui/links'
import SectionPill from '../components/ui/SectionPill'
import Reveal, { Float } from '../components/ui/Reveal'
import { usePageMeta, SITE_URL } from '../utils/seo'

const IMG = '/images/about'

const storyPoints = [
  'Dental Esthetique was established with a vision to provide comprehensive dental care that combines modern technology, clinical excellence and personalized attention.',
  'Our clinic offers preventive, restorative, cosmetic and advanced dental treatments tailored to the unique needs of every patient. We believe that exceptional dentistry goes beyond procedures; it involves educating patients, understanding their concerns and delivering care in a comfortable and welcoming environment.',
  'Every treatment is planned with precision, transparency and a long-term focus on oral health.',
] as const

const clinicStandards = [
  'Registered specialist dentists',
  'In-house diagnostic imaging',
  'Digital payments incl. Paytm',
  'Sterilisation-first protocols',
]

export default function About() {
  usePageMeta({
    title: 'About Us | Dental Esthetique - Trusted Dentist in Noida',
    description:
      'Learn about Dental Esthetique, a multi-speciality dental clinic in Sector 22, Noida. Specialist-led care, advanced technology and a patient-first approach since day one.',
    path: '/about',
    image: `${SITE_URL}/images/about/abouthero.webp`,
  })
  return (
    <div className="w-full bg-white font-poppins overflow-x-hidden h-about-page">
      <div className="relative mx-auto flex w-[1440px] flex-col items-center bg-white overflow-hidden pb-16 h-canvas">
        <PageHero
          tagline="About Dental Esthetique"
          title="Your Trusted Partner in Complete Dental Care"
          description="Dental Esthetique is committed to delivering exceptional dental care through advanced technology, evidence-based treatments and a deeply patient-first approach. From routine dental check-ups to complex cosmetic smile transformations, our expert team is here to guide you every step of the way. Our ultimate goal is to ensure every patient receives highly personalized care within a safe, extraordinarily comfortable and state-of-the-art environment."
          taglineColor="text-[#D35B8F]"
          titleColor="text-[#28231F]"
          titleFont="font-fraunces"
          height="lg:h-[max(100vh,800px)]"
          backgroundImage="/images/about/team-2.png"
          hideCollage={true}
          className="h-about-hero"
        >
          <HeroButton to={BOOK_APPOINTMENT_TO} text="Book an Appointment" />
          <HeroButton to="/services#catalogue" text="See Treatments" variant="outline" />
        </PageHero>

        <div className="mt-16 w-full flex justify-center bg-white z-10 h-about-story">
          <div className="flex w-[1280px] items-center justify-between gap-16 h-st-row">
            <Reveal x={-40} y={0} duration={0.8} className="w-[600px] flex flex-col h-st-txt">
              <SectionPill>01 · OUR STORY</SectionPill>
              <h2 className="mt-3 font-poppins text-[40px] font-semibold leading-[1.1] text-[#28231F] h-st-h">
                Creating Beautiful Smiles Through Excellence in Dentistry
              </h2>

              <Reveal
                y={24}
                delay={0.2}
                duration={0.7}
                className="mt-10 flex flex-col gap-6 h-st-points"
              >
                <ul className="flex flex-col gap-5 h-st-list">
                  {storyPoints.map((point) => (
                    <li key={point} className="flex items-start gap-4">
                      <span className="mt-2 size-2 shrink-0 rounded-full bg-[#D35B8F]" />
                      <p className="font-poppins text-base leading-relaxed tracking-[0.02em] text-[#767676] h-st-p">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </Reveal>

            <Reveal x={40} y={0} duration={0.8} className="shrink-0 h-st-img">
              <div
                className="h-[540px] w-[600px] overflow-hidden rounded-[48px] relative shrink-0 h-st-img-frame"
                style={{ boxShadow: '0 0 0 3px rgba(193,135,164,0.4)' }}
              >
                <img
                  src={`${IMG}/about-story.webp`}
                  alt="Dental Esthetique clinic exterior"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />

                <Float amplitude={6} duration={4}>
                  <div className="absolute left-[30px] bottom-[30px] bg-white rounded-xl px-6 py-4 shadow-lg flex flex-col h-st-badge">
                    <span className="font-poppins text-[24px] font-bold text-[#28231F] leading-none mb-1">
                      100%
                    </span>
                    <span className="font-poppins text-[11px] font-medium text-[#767676] tracking-widest uppercase">
                      SPECIALIST-LED CARE
                    </span>
                  </div>
                </Float>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 w-full flex justify-center bg-white z-10 h-about-vm">
          <div className="flex w-[1280px] items-center justify-between gap-10 h-vm-row">
            <Reveal x={-40} y={0} duration={0.8} className="w-[460px] flex flex-col h-vm-t">
              <SectionPill>02 · VISION & MISSION</SectionPill>
              <h2 className="mt-4 font-fraunces text-[40px] font-bold leading-[1.2] text-[#28231F] h-vm-h">
                What we&apos;re working toward
              </h2>
              <p className="mt-5 font-poppins text-[16px] leading-relaxed tracking-[0.02em] text-[#767676] h-vm-lead">
                Transforming lives through ethical dentistry, advanced treatments, compassionate
                care and lasting patient relationships every day.
              </p>
            </Reveal>

            <div className="flex flex-col w-[680px] shrink-0 border-l border-[#28231F]/5 pl-12 h-vm-r">
              <Reveal
                y={30}
                duration={0.7}
                className="relative flex flex-col pt-4 pb-16 border-b border-[#28231F]/5 group cursor-default h-vm-block"
              >
                <div className="absolute top-[-20px] left-[-20px] font-fraunces text-[180px] font-bold text-[#F9F4F1] leading-none z-0 transition-colors duration-700 group-hover:text-[#F2E8EB] h-vm-num">
                  1
                </div>
                <div className="relative z-10 pl-16 h-vm-copy">
                  <h3 className="font-poppins text-[13px] font-bold tracking-[0.2em] text-[#D35B8F] uppercase mb-5 flex items-center gap-4 h-vm-label">
                    <span className="w-8 h-[1px] bg-[#D35B8F]" /> Our Mission
                  </h3>
                  <p className="font-fraunces text-[28px] leading-[1.4] text-[#28231F] group-hover:text-[#165ba7] transition-colors duration-500 h-vm-body">
                    To provide ethical, evidence-based and personalized dental care using advanced
                    technology while ensuring every patient feels informed and comfortable.
                  </p>
                </div>
              </Reveal>

              <Reveal
                y={30}
                delay={0.15}
                duration={0.7}
                className="relative flex flex-col pt-16 pb-4 group cursor-default h-vm-block2"
              >
                <div className="absolute top-0 left-[-40px] font-fraunces text-[180px] font-bold text-[#F9F4F1] leading-none z-0 transition-colors duration-700 group-hover:text-[#E0EFFB] h-vm-num2">
                  2
                </div>
                <div className="relative z-10 pl-16 h-vm-copy">
                  <h3 className="font-poppins text-[13px] font-bold tracking-[0.2em] text-[#165ba7] uppercase mb-5 flex items-center gap-4 h-vm-label">
                    <span className="w-8 h-[1px] bg-[#165ba7]" /> Our Vision
                  </h3>
                  <p className="font-fraunces text-[28px] leading-[1.4] text-[#28231F] group-hover:text-[#D35B8F] transition-colors duration-500 h-vm-body">
                    To become the most trusted destination for comprehensive dental care by
                    delivering exceptional clinical outcomes and a patient-first experience.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <Reveal
          y={40}
          duration={0.8}
          className="mt-24 w-full flex justify-center z-10 mb-4 h-about-banner-wrap"
        >
          <div className="w-[1280px] h-[340px] relative overflow-hidden flex flex-col items-center justify-center text-center px-[160px] rounded-tl-[9px] rounded-tr-[200px] rounded-br-[4px] rounded-bl-[200px] shadow-lg h-about-banner">
            <img
              src="/images/home/bgblue.webp"
              alt=""
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="relative z-10 flex flex-col items-center text-white h-about-banner-copy">
              <h2 className="font-fraunces text-[34px] font-semibold mb-5">
                Our Commitment to Every Patient
              </h2>
              <p className="font-poppins text-[15px] leading-[1.7] font-normal text-white/90 text-center mb-7 max-w-[900px] h-about-banner-p">
                At Dental Esthetique, every patient is treated with respect, empathy and honesty. We
                are committed to providing transparent consultations, personalized treatment plans
                and a comfortable experience using modern techniques and advanced technology. Our
                goal is not only to treat dental concerns but to build long-term relationships based
                on trust and exceptional care.
              </p>
              <p className="font-fraunces text-[22px] font-medium tracking-wide h-about-banner-brand">
                Dental Esthetique
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 w-full bg-[#F9F4F1] py-24 flex justify-center z-10 h-gtk-sec">
          <div className="flex w-[1280px] items-center justify-between gap-16 h-gtk-row">
            <Reveal x={-30} duration={0.8} className="w-[45%] flex flex-col gap-4 h-gtk-t">
              <SectionPill>03 · CLINIC STANDARDS</SectionPill>
              <h2 className="font-poppins text-[42px] font-semibold leading-[1.2] text-[#28231F] mt-2 h-gtk-h">
                Uncompromising Quality & Care
              </h2>
              <p className="font-poppins text-[16px] leading-relaxed text-[#767676] mt-4 max-w-[480px] h-gtk-p">
                Your health and comfort are our absolute priorities. We have built a world-class
                environment backed by elite specialists, cutting-edge diagnostic technology and
                rigid sterilization protocols so you can experience dentistry at its finest.
              </p>
            </Reveal>

            <div className="flex flex-col gap-4 w-[460px] h-gtk-list">
              {clinicStandards.map((item, index) => (
                <Reveal
                  key={index}
                  y={20}
                  delay={index * 0.1}
                  duration={0.6}
                  className="w-full flex items-center gap-5 bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_15px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_25px_-5px_rgba(22,91,167,0.08)] transition-shadow duration-300 h-gtk-item"
                >
                  <div className="w-12 h-12 rounded-full bg-[#EAF3FA] flex items-center justify-center shrink-0 h-gtk-icon">
                    <svg
                      className="w-6 h-6 text-[#165ba7]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="font-poppins text-[17px] font-medium text-[#28231F] h-gtk-item-t">
                    {item}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
