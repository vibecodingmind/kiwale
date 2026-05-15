'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, Truck } from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'

const buildingServices = [
  {
    image: '/images/service-hero-building.jpg',
    title: 'Supply of Building Materials',
    description:
      'We provide a wide range of building materials, including cement, steel products, gypsum boards, roofing, tiles, sanitary ware and more.',
    href: '/services/building-materials',
  },
  {
    image: '/images/service-hero-timber.webp',
    title: 'Supply of Timber Wood',
    description:
      'We offer both softwood and hardwood timber for various construction needs. Customers can also place custom orders for specific requirements.',
    href: '/services/timber-wood',
  },
  {
    image: '/images/service-hero-poles.webp',
    title: 'Supply of Wood Poles',
    description:
      'We supply durable wood poles for construction, fencing, and utility purposes. Sourced from quality timber, treated for longevity and strength.',
    href: '/services/wood-poles',
  },
  {
    image: '/images/service-hero-specialized.jpg',
    title: 'Supply of Specialized Building Materials',
    description:
      'High-performance materials for unique construction needs — waterproofing, fire-resistant, acoustic, insulation, and eco-friendly solutions.',
    href: '/services/specialized-materials',
  },
]

const transportServices = [
  {
    image: '/images/service-hero-transport.jpg',
    title: 'Transportation Services',
    description:
      'Our logistics network covers East and Central Africa, ensuring timely delivery to your site. Whether you need local or international transport.',
    href: '/services/transportation',
  },
]

export default function Services() {
  const headerReveal = useScrollReveal({ animation: 'fade-down', delay: 0 })
  const buildingReveal = useStaggerReveal(buildingServices.length, {
    animation: 'fade-up',
    staggerMs: 150,
    delay: 200,
  })
  const transportReveal = useStaggerReveal(transportServices.length, {
    animation: 'fade-up',
    staggerMs: 150,
    delay: 200,
  })

  return (
    <section id="services" className="bg-[#f8f9fa] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div ref={headerReveal.ref} className="text-center mb-12">
          <p className="text-[#00908C] font-semibold text-sm uppercase tracking-wider mb-2">
            What We Offer
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e]">
            Solutions Built for Your Success
          </h2>
          <p className="mt-4 text-[#606060] max-w-2xl mx-auto text-base leading-relaxed">
            From premium building materials to seamless logistics — we deliver the quality and reliability your projects demand, every step of the way.
          </p>
        </div>

        {/* ─── Kiwaleis ─── */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00908C] to-[#00b0aa] flex items-center justify-center">
              <Building2 className="size-4 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1a1a2e]">Kiwaleis</h3>
            </div>
          </div>
          <div ref={buildingReveal.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {buildingServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="card-glow bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer"
              >
                <div className="relative h-40 overflow-hidden img-reveal">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-bold text-[#00908C] mb-1.5 line-clamp-2 group-hover:text-[#007370] transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-xs text-[#606060] leading-relaxed mb-2 line-clamp-2">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[#00908C] hover:text-[#007370] transition-colors group/link link-underline">
                    Read More
                    <ArrowRight className="size-3 group-hover/link:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ─── Kiwale Group Limited Transport and Logistics ─── */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#005c59] to-[#007370] flex items-center justify-center">
              <Truck className="size-4 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1a1a2e]">Kiwale Group Limited Transport and Logistics</h3>
            </div>
          </div>
          <div ref={transportReveal.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {transportServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="card-glow bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer sm:col-span-2 lg:col-span-2"
              >
                <div className="relative h-48 overflow-hidden img-reveal">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <h4 className="text-base font-bold text-[#00908C] mb-2 group-hover:text-[#007370] transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm text-[#606060] leading-relaxed mb-3 line-clamp-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[#00908C] hover:text-[#007370] transition-colors group/link link-underline">
                    Read More
                    <ArrowRight className="size-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
