'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, ShieldCheck, Truck, HeadphonesIcon, Award } from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Quality Materials',
    desc: 'Sourced from trusted manufacturers',
  },
  {
    icon: Truck,
    title: 'On-Time Delivery',
    desc: 'Local & international logistics',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    desc: 'Expert customer assistance',
  },
  {
    icon: Award,
    title: '10+ Years',
    desc: 'Industry experience & trust',
  },
]

export default function AboutBanner() {
  const bannerReveal = useScrollReveal({ animation: 'zoom-in', duration: 800 })
  const cardReveal = useStaggerReveal(highlights.length, {
    animation: 'fade-up',
    staggerMs: 130,
    delay: 400,
  })

  return (
    <section id="about" className="bg-white py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          ref={bannerReveal.ref}
          className="relative bg-gradient-to-br from-[#00908C] to-[#005c59] rounded-2xl overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 float-animation" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4 float-animation" style={{ animationDelay: '1s' }} />

          <div className="relative z-10 p-6 sm:p-8 md:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
              {/* Left - Text Content */}
              <div>
                <p className="text-[#00e5df] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3">
                  About Kiwaleis Investment Limited
                </p>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Quality Materials, Reliable Service, and On-Time Delivery
                </h2>
                <p className="mt-4 sm:mt-5 text-white/80 leading-relaxed text-sm sm:text-base">
                  At Kiwaleis Investment Limited, we are dedicated to providing superior
                  building materials, seamless logistics, and exceptional customer
                  support. We ensure that every project receives the best resources,
                  delivered on time and with integrity. Your trust drives our
                  commitment to excellence!
                </p>
                <p className="mt-3 sm:mt-4 text-[#00e5df] font-semibold text-base sm:text-lg">
                  Your success is our priority!
                </p>
                <div className="mt-5 sm:mt-7">
                  <Link href="/services">
                    <Button
                      className="bg-white text-[#00908C] hover:bg-white/90 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base group btn-glow w-full sm:w-auto"
                      size="lg"
                    >
                      Explore Our Services
                      <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right - Highlight Cards */}
              <div ref={cardReveal.ref} className="grid grid-cols-2 gap-3 sm:gap-4">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/10 hover:bg-white/[0.18] hover:border-[#00e5df]/30 hover:scale-[1.03] transition-all duration-300 cursor-pointer group"
                  >
                    <item.icon className="size-6 sm:size-8 text-[#00e5df] mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-white font-bold text-xs sm:text-sm md:text-base">{item.title}</h4>
                    <p className="text-white/60 text-[10px] sm:text-xs md:text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
