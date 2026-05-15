'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'
import TopHeader from '@/components/TopHeader'
import Navbar from '@/components/Navbar'
import FooterSection from '@/components/FooterSection'

const services = [
  {
    image: '/images/service-hero-building.jpg',
    title: 'Supply of Building Materials',
    description:
      'From cement and steel to tiles, plumbing, and finishes — we supply everything your construction project needs, sourced from trusted manufacturers and delivered on schedule.',
    href: '/services/building-materials',
    items: ['Cement & Concrete', 'Bricks & Blocks', 'Roofing', 'Tiles & Flooring', 'Steel & Reinforcements'],
  },
  {
    image: '/images/service-hero-timber.webp',
    title: 'Supply of Timber Wood',
    description:
      'Premium softwood and hardwood timber for construction, furniture, and decorative applications. Custom cuts and treatments available to match your exact specifications.',
    href: '/services/timber-wood',
    items: ['Softwood Timber', 'Hardwood Timber', 'Boards & Planks', 'Beams & Rafters', 'Furniture Grade'],
  },
  {
    image: '/images/service-hero-poles.webp',
    title: 'Supply of Wood Poles',
    description:
      'Pressure-treated wood poles for utility lines, fencing, construction support, and agriculture. Durable, versatile, and available in custom sizes to meet any requirement.',
    href: '/services/wood-poles',
    items: ['Utility Poles', 'Fencing Poles', 'Construction Poles', 'Agricultural Poles', 'Custom Sizes'],
  },
  {
    image: '/images/service-hero-specialized.jpg',
    title: 'Supply of Specialized Building Materials',
    description:
      'High-performance materials for unique construction needs — waterproofing, fire-resistant, acoustic, insulation, and eco-friendly solutions built for modern standards.',
    href: '/services/specialized-materials',
    items: ['Green Building', 'Waterproofing', 'Fire-Resistant', 'Acoustic Materials', 'Insulation'],
  },
  {
    image: '/images/service-hero-transport.jpg',
    title: 'Transportation Services',
    description:
      'Comprehensive logistics covering East and Central Africa. Local delivery, international freight, cargo handling, customs clearance, and real-time tracking — all under one roof.',
    href: '/services/transportation',
    items: ['Local Transport', 'International Freight', 'Cargo Handling', 'Customs Clearance', 'GPS Tracking'],
  },
]

export default function ServicesOverviewPage() {
  const heroReveal = useScrollReveal({ animation: 'fade-up', delay: 100 })
  const gridReveal = useStaggerReveal(services.length, {
    animation: 'fade-up',
    staggerMs: 150,
    delay: 200,
  })
  const ctaReveal = useScrollReveal({ animation: 'zoom-in', delay: 200, duration: 800 })

  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative w-full h-[280px] md:h-[350px] lg:h-[400px] overflow-hidden bg-[#005c59]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#005c59] via-[#007370] to-[#00908C]" />
          <div className="absolute inset-0 bg-[url('/images/hero-1.png')] bg-cover bg-center opacity-10" />

          <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
            <div ref={heroReveal.ref}>
              <nav className="flex items-center gap-2 text-sm text-white/50 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span className="text-white/30">/</span>
                <span className="text-[#00e5df]">Services</span>
              </nav>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Our Services
              </h1>
              <p className="mt-4 text-white/70 max-w-2xl text-base md:text-lg leading-relaxed">
                From premium building materials to seamless logistics, we deliver the quality and reliability your projects demand — every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-white py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div ref={gridReveal.ref} className="space-y-8">
              {services.map((service, idx) => (
                <div
                  key={service.title}
                  className="card-glow bg-[#f8f9fa] rounded-2xl overflow-hidden border border-gray-100 group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className={`relative h-56 md:h-72 overflow-hidden img-reveal ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className={`p-6 md:p-8 flex flex-col justify-center ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                      <h3 className="text-xl md:text-2xl font-bold text-[#1a1a2e] mb-3 group-hover:text-[#00908C] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[#606060] text-sm md:text-base leading-relaxed mb-5">
                        {service.description}
                      </p>

                      {/* Quick Items */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.items.map((item) => (
                          <span
                            key={item}
                            className="bg-[#00908C]/10 text-[#00908C] text-xs font-medium px-3 py-1.5 rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <Link href={service.href}>
                        <Button
                          className="bg-[#00908C] hover:bg-[#007370] text-white font-semibold px-6 group/btn btn-glow"
                        >
                          Learn More
                          <ArrowRight className="size-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#f8f9fa] py-14 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div
              ref={ctaReveal.ref}
              className="relative bg-gradient-to-br from-[#00908C] to-[#005c59] rounded-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-60 h-60 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />

              <div className="relative z-10 p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Need a Custom Solution?
                </h2>
                <p className="text-white/80 max-w-2xl mx-auto mb-7 text-base leading-relaxed">
                  Whether you need a single material supply or a complete logistics solution, our team is ready to tailor a package that fits your project perfectly.
                </p>
                <Link href="/contact">
                  <Button
                    className="bg-white text-[#00908C] hover:bg-white/90 font-semibold px-8 py-3 text-base group btn-glow"
                    size="lg"
                  >
                    Get a Quote
                    <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}
