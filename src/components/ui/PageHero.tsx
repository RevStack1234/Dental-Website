import { type ReactNode } from 'react'
import HeroToothCollage from '../HeroToothCollage'
import { Stagger, StaggerItem } from './Reveal'

interface PageHeroProps {
  tagline: ReactNode
  title: ReactNode
  description?: string
  children?: ReactNode
  taglineColor?: string
  taglineBgColor?: string
  titleColor?: string
  titleFont?: string

  height?: string
  backgroundImage?: string
  bgPosition?: string
  hideCollage?: boolean
  className?: string
}

export default function PageHero({
  tagline,
  title,
  description,
  children,
  taglineColor = 'text-[#D35B8F]',
  taglineBgColor = 'bg-[#D35B8F]/10',
  titleColor = 'text-[#28231F]',
  titleFont = 'font-poppins',
  height = 'lg:h-[720px]',
  backgroundImage,
  bgPosition = 'object-cover',
  hideCollage = false,
  className = '',
}: PageHeroProps) {
  return (
    <div
      className={`relative w-full h-auto min-h-[320px] overflow-hidden shrink-0 flex justify-center ${backgroundImage ? 'bg-white' : 'bg-[#F9F4F1]'} ${height} ${className} h-page-hero`}
    >
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt=""
            fetchPriority="high"
            decoding="async"
            className={`absolute inset-0 w-full h-full z-0 ${bgPosition}`}
          />
          <div className="absolute inset-0 w-full h-full bg-white/85 lg:bg-transparent lg:bg-gradient-to-r lg:from-white/95 lg:from-0% lg:via-white/70 lg:via-[40%] lg:to-transparent lg:to-[70%] z-0" />
        </>
      )}
      <div className="relative w-full lg:w-[1440px] h-full z-10 h-ph-inner">
        {!hideCollage && <HeroToothCollage className="hidden lg:block h-ph-col" />}
        <Stagger
          className="relative lg:absolute left-0 lg:left-[80px] top-auto lg:top-1/2 lg:-translate-y-[35%] flex w-full lg:w-[634px] flex-col z-20 gap-3 lg:gap-[40px] px-5 pt-[88px] pb-8 lg:px-0 lg:pt-0 lg:pb-0 h-ph-content"
          gap={0.12}
        >
          <StaggerItem y={24} className="flex w-full lg:w-[634px] flex-col gap-1.5 lg:gap-[8px]">
            <p
              className={`font-poppins text-[10px] lg:text-[11px] font-bold tracking-[0.1em] px-3 lg:px-4 py-1.5 rounded-full w-max uppercase ${taglineColor} ${taglineBgColor}`}
            >
              {tagline}
            </p>
            <h1
              className={`w-full ${titleFont} text-[26px] md:text-[40px] lg:text-[54px] font-semibold leading-tight ${titleColor} h-ph-h1`}
            >
              {title}
            </h1>
            {description && (
              <p className="mt-1 lg:mt-2 w-full lg:w-[493px] font-poppins text-[13px] lg:text-base font-normal leading-[1.5] lg:leading-[1.6] tracking-[0.03em] text-[#767676] h-ph-desc">
                {description}
              </p>
            )}
          </StaggerItem>
          {children && (
            <StaggerItem
              y={24}
              className="flex flex-wrap lg:flex-nowrap h-auto lg:h-12 w-full lg:w-[634px] items-center gap-2.5 lg:gap-[12px] h-ph-btns"
            >
              {children}
            </StaggerItem>
          )}
        </Stagger>
      </div>
    </div>
  )
}
