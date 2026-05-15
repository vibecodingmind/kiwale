'use client'

import { Building2, Truck, Globe, ShieldCheck } from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'High-Quality Materials',
    desc: 'We source only the best cement, steel, timber, and construction supplies from trusted manufacturers, ensuring durability and strength for every project.',
  },
  {
    icon: Truck,
    title: 'Reliable & On-Time Delivery',
    desc: 'Our logistics network spans East and Central Africa, guaranteeing timely delivery to your site — whether local or international, we never keep you waiting.',
  },
  {
    icon: Building2,
    title: 'All-In-One Solutions',
    desc: 'From building materials and timber supply to transportation and logistics — we provide everything you need under one roof, simplifying your procurement process.',
  },
  {
    icon: Globe,
    title: 'Local & International Reach',
    desc: 'With deep roots in Tanzania and partnerships across borders, we serve clients locally and internationally with the same level of dedication and professionalism.',
  },
]

export default function WhyChooseUs() {
  const headerReveal = useScrollReveal({ animation: 'fade-down' })
  const cardReveal = useStaggerReveal(reasons.length, {
    animation: 'fade-up',
    staggerMs: 150,
    delay: 200,
  })

  return (
    <section id="why-us" className="bg-white py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div ref={headerReveal.ref} className="text-center mb-8 md:mb-14">
          <p className="text-[#00908C] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">
            Why Choose Us
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e]">
            Why Choose Our Services
          </h2>
          <p className="mt-3 sm:mt-4 text-[#606060] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-2">
            Your Trusted Partner in Quality Building Materials & Reliable Logistics.
            We are committed to providing high-quality building materials, efficient
            transportation, and exceptional customer service.
          </p>
        </div>

        {/* Reason Cards - 2x2 Grid */}
        <div ref={cardReveal.ref} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="card-tilt bg-[#f8f9fa] rounded-xl p-5 sm:p-6 md:p-7 shadow-sm border border-gray-100 flex gap-4 sm:gap-5 cursor-pointer group"
            >
              <div className="shrink-0">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-[#00908C]/10 flex items-center justify-center icon-bounce group-hover:bg-[#00908C]/20 transition-colors">
                  <reason.icon className="size-5 sm:size-7 text-[#00908C] group-hover:text-[#007370] transition-colors" />
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-[#1a1a2e] mb-1.5 sm:mb-2 group-hover:text-[#00908C] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-[#606060] text-xs sm:text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
