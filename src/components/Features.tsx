'use client'

import { ShieldCheck, Zap, Handshake, Lock } from 'lucide-react'
import { useStaggerReveal, useScrollReveal } from '@/hooks/useScrollReveal'

const features = [
  {
    icon: ShieldCheck,
    title: 'Quality & Excellence',
    description: 'Supplying only the best materials for durable and reliable construction.',
  },
  {
    icon: Zap,
    title: 'Efficiency',
    description: 'Ensuring timely delivery and seamless logistics for every project.',
  },
  {
    icon: Handshake,
    title: 'Commitment',
    description: 'Prioritizing client needs with personalized solutions and great service.',
  },
  {
    icon: Lock,
    title: 'Integrity',
    description: 'Building trust through honesty, professionalism, and fairness.',
  },
]

export default function Features() {
  const headerReveal = useScrollReveal({ animation: 'fade-down', delay: 0 })
  const gridReveal = useStaggerReveal(features.length, {
    animation: 'fade-up',
    staggerMs: 150,
    delay: 200,
  })

  return (
    <section className="bg-[#f8f9fa] py-8 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={headerReveal.ref} className="text-center mb-6 md:mb-10">
          <p className="text-[#00908C] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">Our Values</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1a2e]">What Sets Us Apart</h2>
        </div>
        <div ref={gridReveal.ref} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-glow bg-white rounded-xl p-4 sm:p-5 md:p-6 text-center border border-gray-100 shadow-sm group cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#00908C]/10 mb-3 sm:mb-4 icon-bounce group-hover:bg-[#00908C]/20 transition-colors">
                <feature.icon className="size-5 sm:size-6 md:size-7 text-[#00908C] group-hover:text-[#007370] transition-colors" />
              </div>
              <h3 className="text-xs sm:text-sm md:text-lg font-bold text-[#00908C] mb-1 sm:mb-2">
                {feature.title}
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-[#606060] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
