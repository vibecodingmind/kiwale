'use client'

import { Building2, Truck, Globe, ShieldCheck, Users, Clock, TrendingUp } from 'lucide-react'
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

const stats = [
  { value: '10+', label: 'Years of Experience', icon: Clock },
  { value: '500+', label: 'Projects Delivered', icon: TrendingUp },
  { value: '100+', label: 'Happy Clients', icon: Users },
  { value: '3+', label: 'Countries Served', icon: Globe },
]

export default function WhyChooseUs() {
  const headerReveal = useScrollReveal({ animation: 'fade-down' })
  const cardReveal = useStaggerReveal(reasons.length, {
    animation: 'fade-up',
    staggerMs: 150,
    delay: 200,
  })
  const statsReveal = useScrollReveal({ animation: 'zoom-in', delay: 400, duration: 800 })

  return (
    <section id="why-us" className="bg-[#f8f9fa] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div ref={headerReveal.ref} className="text-center mb-14">
          <p className="text-[#00908C] font-semibold text-sm uppercase tracking-wider mb-2">
            Why Choose Us
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e]">
            Why Choose Our Services
          </h2>
          <p className="mt-4 text-[#606060] max-w-2xl mx-auto text-base leading-relaxed">
            Your Trusted Partner in Quality Building Materials & Reliable Logistics.
            We are committed to providing high-quality building materials, efficient
            transportation, and exceptional customer service.
          </p>
        </div>

        {/* Reason Cards - 2x2 Grid */}
        <div ref={cardReveal.ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="card-tilt bg-white rounded-xl p-6 md:p-7 shadow-sm border border-gray-100 flex gap-5 cursor-pointer group"
            >
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-xl bg-[#00908C]/10 flex items-center justify-center icon-bounce group-hover:bg-[#00908C]/20 transition-colors">
                  <reason.icon className="size-7 text-[#00908C] group-hover:text-[#007370] transition-colors" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-2 group-hover:text-[#00908C] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-[#606060] text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div ref={statsReveal.ref} className="bg-gradient-to-r from-[#00908C] to-[#005c59] rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group cursor-pointer">
                <stat.icon className="size-6 text-[#00e5df] mx-auto mb-2 group-hover:scale-125 transition-transform duration-300" />
                <div className="text-[#00e5df] text-3xl md:text-4xl font-bold stat-pulse group-hover:text-white transition-colors">
                  {stat.value}
                </div>
                <p className="text-white/70 text-sm mt-1 group-hover:text-white/90 transition-colors">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
