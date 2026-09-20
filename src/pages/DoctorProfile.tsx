import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import HeroButton from '../components/ui/HeroButton'
import { BOOK_APPOINTMENT_TO } from '../components/ui/links'
import SectionPill from '../components/ui/SectionPill'
import Reveal, { Stagger, StaggerItem } from '../components/ui/Reveal'
import { usePageMeta, SITE_URL } from '../utils/seo'

const DOCTORS_DATA = {
  ds: {
    id: 'ds',
    initials: 'DS',
    specialisations: [
      {
        n: '01',
        title: 'Single Sitting Painless Root Canal Treatment (RCT)',
        link: '/services?item=SINGLE SITTING RCT#catalogue',
      },
      { n: '02', title: 'Microscopic Root Canal Treatment (RCT)', link: '/services?category=Single Sitting RCT&item=SINGLE SITTING RCT&subtype=MICROSCOPIC RCT#catalogue' },
      { n: '03', title: 'Re-RCT Treatment', link: '/services?category=Single Sitting RCT&item=SINGLE SITTING RCT&subtype=RE-RCT#catalogue' },
      { n: '04', title: 'Smile Designing', link: '/services?item=VENEERS#catalogue' },
      { n: '05', title: 'Cosmetic Treatments', link: '/services?item=COSMETIC FILLINGS#catalogue' },
    ],
    name: 'Dr. Deepika Singhal',
    pronoun: 'Her',
    tabTitle: 'Endodontist, Cosmetic Dentist',
    image: '/images/treatment-images/dr-deepika-singhal-new.webp',
    imageClass: 'absolute w-full h-full object-cover object-top',
    pill: 'Endodontist & Cosmetic Dentist',
    desc1:
      'A distinguished Endodontist and Cosmetic Dentist with over 18 years of clinical excellence, renowned for delivering world-class dental care through precision, innovation and uncompromising clinical standards.',
    desc2:
      'MDS in Conservative Dentistry & Endodontics, BDS. Eighteen years of clinical experience, focused on root canal therapy and complex restorative cases, supported by a track record of over 15,000 successfully treated patients.',
    scheduleLine1: '· 10 AM - 2 PM and 5 PM - 8 PM',
    scheduleLine2: '· 10 AM - 2 PM',
    about: [
      {
        n: '1',
        title: 'Overview & Experience',
        body: 'With over 18 years of clinical excellence, Dr. Singhal has gained extensive experience managing complex restorative cases at reputed institutions like ESIC Dental Hospital, establishing herself as a leading specialist in Delhi NCR.',
      },
      {
        n: '2',
        title: 'Clinical Focus',
        body: 'Specializes in Microscopic Endodontics, Single-Visit RCT and Comprehensive Smile Designing. Her minimally invasive approach focuses on preserving natural dentition with aesthetically pleasing and functionally superior results.',
      },
      {
        n: '3',
        title: 'Advanced Technology',
        body: 'An early adopter of cutting-edge technology, she routinely incorporates Dental Operating Microscopes, advanced magnification systems and laser-assisted dentistry for unparalleled precision and patient comfort.',
      },
      {
        n: '4',
        title: 'Philosophy & Academics',
        body: 'Known for her calm demeanor and diagnostic acumen, she integrates scientific evidence with compassionate care. Deeply committed to academics, she has authored numerous scientific publications in national and international journals.',
      },
    ],
    quote:
      '"Her relentless pursuit of clinical excellence, commitment to innovation and patient-centric philosophy have established Dr. Deepika Singhal as a trusted name in advanced endodontics and esthetic dentistry, delivering exceptional care with precision, compassion and lasting results."',
    award: {
      image: '/images/home/awards.webp',
      pill: 'A RECOGNITION OF CLINICAL EXCELLENCE',
      title: 'Best Endodontist in North India',
      desc: "Dr. Deepika Singhal was honoured with this recognition at India's Pride Healthcare Awards 2018-19, reflecting her expertise and commitment to exceptional endodontic care.",
      buttonText: 'See Treatments',
      buttonLink: '/services',
    },
  },
  aj: {
    id: 'aj',
    initials: 'AJ',
    specialisations: [
      { n: '01', title: 'Full Mouth Rehabilitation', link: '/services?item=FULL MOUTH RECONSTRUCTION#catalogue' },
      { n: '02', title: 'Full Mouth Implants', link: '/services?category=Implants&item=IMPLANTS&subtype=FULL MOUTH IMPLANTS#catalogue' },
      {
        n: '03',
        title: 'Single/Multiple Tooth Replacements With Implants',
        link: '/services?category=Implants&item=IMPLANTS&subtype=SINGLE TOOTH IMPLANTS#catalogue',
      },
      { n: '04', title: 'Aligners', link: '/services?category=Braces&item=BRACES&subtype=TEETH ALIGNERS#catalogue' },
      { n: '05', title: 'Braces', link: '/services?item=BRACES#catalogue' },
    ],
    name: 'Dr. Abhinav Jain',
    pronoun: 'His',
    tabTitle: 'Orthodontist, Implantologist',
    image: '/images/treatment-images/dr-abhinav-jain-new.webp',
    imageClass: 'absolute w-full h-full object-cover object-top',
    pill: 'Orthodontist & Implantologist',
    desc1:
      'A distinguished Orthodontist, Implantologist and Full Mouth Rehabilitation Specialist with over 18 years of clinical excellence, dedicated to restoring oral health and aesthetics.',
    desc2:
      'B.D.S., M.D.S. (Orthodontist & Implantologist). Eighteen years of expertise in clear aligners, traditional braces and full-mouth implant rehabilitation, supported by 15,000+ happy patients.',
    scheduleLine1: '· 10 AM - 2 PM and 5 PM - 8 PM',
    scheduleLine2: '· 10 AM - 2 PM',
    about: [
      {
        n: '1',
        title: 'Overview & Experience',
        body: 'A distinguished Orthodontist, Implantologist and Full Mouth Rehabilitation Specialist with over 18 years of clinical excellence. He has managed complex cases at respected institutions like Apollo Hospital, Gurugram.',
      },
      {
        n: '2',
        title: 'Orthodontic Expertise',
        body: 'Provides customized solutions for all ages, with extensive expertise in metal, ceramic and lingual braces, as well as Invisalign® clear aligners, ensuring optimal functional correction and harmonious smiles.',
      },
      {
        n: '3',
        title: 'Full Mouth Rehabilitation',
        body: 'Specializes in comprehensive treatment for severely worn dentition and complex restorative needs. Integrates orthodontics, implant dentistry and digital smile planning to restore function, aesthetics and long-term oral health.',
      },
      {
        n: '4',
        title: 'Implantology & Philosophy',
        body: 'Proficient in single-tooth and full-mouth implant rehabilitation using digital diagnostics. Known for his ethical, patient-first philosophy and commitment to continuous professional development.',
      },
    ],
    quote:
      '"His unwavering dedication to creating perfectly aligned smiles and restoring full dental function has made Dr. Abhinav Jain a highly sought-after specialist in orthodontics and implantology, delivering transformative and confident results."',
    award: {
      image: '/images/home/awards.webp',
      pill: 'EXCELLENCE IN ORTHODONTICS',
      title: 'Top Orthodontist in Delhi NCR',
      desc: 'Dr. Abhinav Jain was recognized for his outstanding contributions to digital orthodontics and patient care at the National Dental Excellence Awards, highlighting his commitment to creating beautiful, functional smiles.',
      buttonText: 'See Treatments',
      buttonLink: '/services',
    },
  },
}

type DoctorId = keyof typeof DOCTORS_DATA

export default function DoctorProfile() {
  usePageMeta({
    title: 'Dr. Deepika Singhal | Best Endodontist & Cosmetic Dentist in Noida',
    description:
      'Meet Dr. Deepika Singhal - MDS Endodontist with 18+ years of experience at Dental Esthetique Noida. Expert in painless root canal, smile designing and cosmetic dentistry.',
    path: '/doctors',
    image: `${SITE_URL}/images/about/docprofile.webp`,
  })

  return (
    <div className="w-full bg-white font-poppins overflow-x-hidden h-dp-page">
      <div className="relative mx-auto flex w-full max-w-[1440px] lg:w-[1440px] flex-col items-center bg-white pb-8 h-canvas">
        <PageHero
          tagline="Doctor Profile"
          title="Meet the Experts Behind Every Smile."
          description="Meet our experienced dental professionals, dedicated to delivering advanced, patient-focused care. Discover their qualifications, expertise and compassionate approach, designed to make every visit comfortable and personalized. Explore their experience and book your consultation with Dental Esthetique today for trusted dental care and confidence."
          taglineColor="text-[#D35B8F]"
          titleColor="text-[#28231F]"
          titleFont="font-fraunces"
          height="lg:h-[max(100vh,800px)]"
          backgroundImage="/images/about/team-1.png"
          hideCollage={true}
          className="h-dp-hero"
        >
          <HeroButton to={BOOK_APPOINTMENT_TO} text="Book an appointment" />
          <HeroButton to="/services#catalogue" text="See treatments" variant="outline" />
        </PageHero>

        <div className="relative z-30 mt-8 lg:mt-16 flex flex-col w-full max-w-[1210px] lg:w-[1210px] gap-8 lg:gap-12 px-5 lg:px-0 h-dp-tabs">
          {(['ds', 'aj'] as DoctorId[]).map((doctorId, docIndex) => {
            const activeDoctor = DOCTORS_DATA[doctorId]
            return (
              <div key={doctorId} id={doctorId} className="flex flex-col w-full scroll-mt-28 lg:scroll-mt-32">
                <div className={`flex w-full flex-col lg:flex-row overflow-visible items-center gap-8 lg:gap-0 h-dp-intro ${docIndex !== 0 ? 'pt-8 lg:pt-12 border-t border-gray-100' : ''}`}>
                  <Reveal
                    key={doctorId}
                    x={-40}
                    y={0}
                    duration={0.7}
                    className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[368px] lg:h-[368px] shrink-0 rounded-full bg-[#F2E8EB] ml-0 lg:ml-4 h-dp-photo"
                  >
                    <div className="absolute inset-0 rounded-full border-2 border-[#D35B8F] scale-[1.03]" />
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <img
                        key={activeDoctor.id}
                        src={activeDoctor.image}
                        loading="lazy"
                        decoding="async"
                        className={
                          activeDoctor.imageClass || 'w-full h-full object-cover object-top scale-[1.05]'
                        }
                        alt={activeDoctor.name}
                      />
                    </div>
                  </Reveal>

                  <Reveal
                    key={doctorId + 'info'}
                    x={40}
                    y={0}
                    duration={0.7}
                    className="flex flex-col flex-1 w-full pl-0 lg:pl-[90px] h-dp-info"
                  >
                    <div className="flex items-center">
                      <SectionPill variant="solid">{activeDoctor.pill}</SectionPill>
                    </div>
                    <div className="mt-4 lg:mt-5 flex items-center">
                      <h2 className="font-fraunces text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-[#28231F] leading-tight h-dp-name">
                        {activeDoctor.name}
                      </h2>
                    </div>
                    <div className="mt-3 lg:mt-4">
                      <p className="font-poppins text-[14px] lg:text-[16px] leading-[1.7] text-[#28231F]/90 font-medium">
                        {activeDoctor.desc1}
                      </p>
                    </div>
                    <div className="mt-4 lg:mt-5">
                      <p className="border-l-[1.5px] border-[#D1D1D1] pl-4 font-poppins text-[12.5px] lg:text-[13px] leading-[1.6] text-[#767676] italic w-full max-w-[518px] h-dp-d2">
                        {activeDoctor.desc2}
                      </p>
                    </div>

                    <div
                      className="mt-6 lg:mt-8 bg-[#F0F0F0] rounded-[18px] px-4 py-3 lg:px-5 lg:py-2 flex flex-col justify-center w-full max-w-[452px] min-h-[62px] shrink-0 h-dp-sched"
                      style={{ boxShadow: '5px 2px 10.1px 0px rgba(0,0,0,0.13)' }}
                    >
                      <div className="font-poppins text-[12px] text-[#28231F] flex gap-1 flex-wrap">
                        <span className="font-bold w-[65px] shrink-0">MON-SAT</span>
                        <span className="text-[#28231F]">{activeDoctor.scheduleLine1}</span>
                      </div>
                      <div className="font-poppins text-[12px] text-[#28231F] flex gap-1 flex-wrap mt-0.5">
                        <span className="font-bold w-[65px] shrink-0">SUN</span>
                        <span className="text-[#28231F]">{activeDoctor.scheduleLine2}</span>
                      </div>
                    </div>
                  </Reveal>
                </div>
                <div className="w-full max-w-[1210px] lg:w-[1210px] mt-12 lg:mt-20 flex flex-col px-5 lg:px-0 h-dp-about">
                  <Reveal y={24} duration={0.7} className="flex flex-col">
                    <SectionPill variant="solid">In {activeDoctor.pronoun} Own Practice</SectionPill>
                    <h2 className="mt-3 lg:mt-4 font-fraunces text-[26px] sm:text-[30px] lg:text-[36px] font-bold text-[#28231F] leading-tight mb-8 lg:mb-12 h-dp-about-h">
                      About {activeDoctor.name}
                    </h2>
                  </Reveal>

                  <div className="relative flex flex-col w-full pb-4 lg:pb-8">
                    <div className="absolute top-[27px] bottom-[27px] left-1/2 w-[1.5px] bg-[#241F1B]/10 -translate-x-1/2 z-0 hidden lg:block h-tl-line" />

                    {activeDoctor.about.map((item, index) => {
                      const isLeft = index % 2 === 0
                      return (
                        <Reveal
                          key={doctorId + item.n}
                          y={30}
                          delay={Math.min(index * 0.08, 0.3)}
                          duration={0.6}
                          className={`relative flex w-full justify-between items-start h-tl-row ${index !== 0 ? 'mt-8 lg:mt-16' : ''}`}
                        >
                          <div className="flex lg:hidden w-full gap-3.5 items-start h-tl-mobile">
                            <div className="flex items-center justify-center w-[42px] h-[42px] rounded-full bg-[#D35B8F] text-white font-poppins font-semibold text-[15px] shrink-0">
                              {item.n}
                            </div>
                            <div className="flex flex-col min-w-0 flex-1 pt-0.5">
                              <h3 className="font-poppins text-[16px] font-bold text-[#28231F]">
                                {item.title}
                              </h3>
                              <p className="font-poppins text-[13px] leading-[1.7] text-[#767676] mt-2">
                                {item.body}
                              </p>
                            </div>
                          </div>

                          <div
                            className={`hidden lg:flex w-1/2 pr-12 flex-col items-end text-right h-tl-l ${isLeft ? '' : 'opacity-0 invisible'}`}
                          >
                            {isLeft && (
                              <>
                                <h3 className="font-poppins text-[18px] font-bold text-[#28231F]">
                                  {item.title}
                                </h3>
                                <p className="font-poppins text-[14px] leading-[1.8] text-[#767676] max-w-[564px] mt-3">
                                  {item.body}
                                </p>
                              </>
                            )}
                          </div>

                          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-[54px] h-[54px] rounded-full bg-[#D35B8F] text-white font-poppins font-semibold text-[18px] z-10 ring-[12px] ring-white h-tl-dot">
                            {item.n}
                          </div>

                          <div
                            className={`hidden lg:flex w-1/2 pl-12 flex-col items-start text-left pt-1 h-tl-r ${!isLeft ? '' : 'opacity-0 invisible'}`}
                          >
                            {!isLeft && (
                              <>
                                <h3 className="font-poppins text-[18px] font-bold text-[#28231F]">
                                  {item.title}
                                </h3>
                                <p className="font-poppins text-[14px] leading-[1.8] text-[#767676] max-w-[564px] mt-3">
                                  {item.body}
                                </p>
                              </>
                            )}
                          </div>
                        </Reveal>
                      )
                    })}
                  </div>
                </div>

                <Reveal
                  y={40}
                  duration={0.7}
                  className="w-full flex justify-center mt-6 lg:mt-8 mb-4 px-5 lg:px-0"
                >
                  <div
                    className="flex items-center justify-center w-full max-w-[1280px] lg:w-[1280px] h-auto min-h-0 lg:h-[252px] px-5 py-10 sm:px-10 lg:px-24 bg-cover bg-center bg-no-repeat rounded-2xl lg:rounded-none h-dp-quote"
                    style={{
                      borderRadius: '9px 200px 4px 200px',
                      backgroundImage: 'url(/images/home/bgblue.webp)',
                      backgroundColor: '#165ba7',
                    }}
                  >
                    <p className="font-poppins text-[15px] sm:text-[17px] lg:text-[20px] leading-[1.6] text-center text-[#F3F3F3] font-medium max-w-[850px]">
                      {activeDoctor.quote}
                    </p>
                  </div>
                </Reveal>

                <div
                  id="specialisations"
                  className="mt-8 lg:mt-12 w-full flex justify-center scroll-mt-8 px-5 lg:px-0"
                >
                  <div className="flex w-full max-w-[1280px] lg:w-[1280px] bg-[#F9F4F1] rounded-[20px] lg:rounded-[26px] py-8 lg:py-14 px-4 sm:px-6 lg:px-12 xl:px-16 flex-col items-center gap-6 lg:gap-10 h-dp-spec">
                    <Reveal
                      y={24}
                      duration={0.7}
                      className="flex w-full max-w-[1120px] flex-col gap-2 px-1 lg:px-0"
                    >
                      <SectionPill>FOCUS AREAS</SectionPill>
                      <h2 className="font-fraunces text-[26px] sm:text-[30px] lg:text-[36px] font-bold leading-tight lg:leading-none text-[#28231F]">
                        Fields of Specialisation
                      </h2>
                    </Reveal>

                    <Stagger
                      className="flex w-full max-w-[1120px] flex-col mt-2 lg:mt-4 h-dp-spec-in"
                      gap={0.1}
                    >
                      {activeDoctor.specialisations.map((card, index) => {
                        const rowClasses = `group flex items-center justify-between w-full py-5 lg:py-8 gap-3 border-b border-[#28231F]/10 hover:border-[#D35B8F] transition-colors duration-300 h-dp-spec-row ${card.link ? 'cursor-pointer' : 'cursor-default'} ${index === 0 ? 'border-t' : ''}`
                        const rowContent = (
                          <>
                            <div className="flex items-start lg:items-center gap-3 lg:gap-12 min-w-0 flex-1">
                              <span className="font-poppins text-[14px] lg:text-[16px] font-medium text-[#D35B8F] shrink-0 pt-1 lg:pt-0">
                                {card.n}
                              </span>
                              <h3 className="font-fraunces text-[18px] sm:text-[22px] lg:text-[32px] text-[#28231F] group-hover:text-[#D35B8F] transition-colors duration-300 leading-snug">
                                {card.title}
                              </h3>
                            </div>

                            <div className="w-9 h-9 lg:w-10 lg:h-10 shrink-0 rounded-full border border-[#28231F]/10 flex items-center justify-center group-hover:bg-[#D35B8F] group-hover:border-[#D35B8F] transition-all duration-300">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-[#28231F] group-hover:text-white transition-colors duration-300"
                              >
                                <path
                                  d="M1.16669 7H12.8334M12.8334 7L6.99999 1.16666M12.8334 7L6.99999 12.8333"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </>
                        )
                        return card.link ? (
                          <StaggerItem key={card.n} y={20}>
                            <Link to={card.link} className={rowClasses}>
                              {rowContent}
                            </Link>
                          </StaggerItem>
                        ) : (
                          <StaggerItem key={card.n} y={20}>
                            <div className={rowClasses}>{rowContent}</div>
                          </StaggerItem>
                        )
                      })}
                    </Stagger>
                  </div>
                </div>

                {doctorId === 'ds' && (
                  <div className="mt-10 lg:mt-12 w-full flex justify-center mb-4 lg:mb-6">
                    <div className="w-full max-w-[1239px] lg:w-[1239px] flex flex-col gap-6 lg:gap-10">
                      <Reveal y={24} duration={0.7} className="flex flex-col gap-3 pt-4 lg:pt-8">
                        <SectionPill>RECOGNITION</SectionPill>
                        <h2 className="font-fraunces text-[26px] sm:text-[30px] lg:text-[36px] font-bold leading-tight lg:leading-none text-[#28231F]">
                          Awards
                        </h2>
                      </Reveal>

                      <div className="flex w-full flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 h-dp-award">
                        <Reveal
                          x={-40}
                          y={0}
                          duration={0.7}
                          className="w-full lg:w-auto flex justify-center"
                        >
                          <img
                            key={activeDoctor.id + 'award'}
                            src={activeDoctor.award.image}
                            loading="lazy"
                            decoding="async"
                            className="w-full max-w-[320px] sm:max-w-[400px] lg:w-[480px] h-auto shrink-0 h-dp-award-img"
                            alt="Award"
                          />
                        </Reveal>

                        <div className="hidden lg:block w-[1px] h-[266px] bg-[#D5EAE3] shrink-0 mx-12 h-dp-award-line" />

                        <Reveal
                          x={40}
                          y={0}
                          duration={0.7}
                          delay={0.15}
                          className="flex flex-col flex-1 w-full max-w-[616px]"
                        >
                          <div className="flex items-center">
                            <SectionPill>{activeDoctor.award.pill}</SectionPill>
                          </div>
                          <div className="mt-4 lg:mt-6 flex items-start">
                            <h3 className="font-fraunces text-[24px] sm:text-[28px] lg:text-[36px] font-bold text-[#28231F] leading-[1.2]">
                              {activeDoctor.award.title}
                            </h3>
                          </div>
                          <div className="mt-3 lg:mt-4">
                            <p className="font-poppins text-[14px] lg:text-[16px] leading-[1.7] text-[#28231F]/90 font-medium">
                              {activeDoctor.award.desc}
                            </p>
                          </div>
                          <HeroButton
                            to={activeDoctor.award.buttonLink}
                            text={activeDoctor.award.buttonText}
                            className="mt-6 lg:mt-8 !h-[44px]"
                          />
                        </Reveal>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
