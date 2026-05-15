'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  SearchCheck,
  Truck,
  Headphones,
  ShieldCheck,
  PackageCheck,
  MapPin,
  Sparkles,
  CircleDot,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'
import TopHeader from '@/components/TopHeader'
import Navbar from '@/components/Navbar'
import FooterSection from '@/components/FooterSection'

/* ─── Data Types ─── */

export interface SubCategory {
  title: string
  description: string
}

export interface ProcessStep {
  title: string
  description: string
  icon: string
}

export interface ServiceHighlight {
  label: string
  value: string
}

export interface ServicePageData {
  slug: string
  title: string
  heroImage: string
  introParagraph: string
  highlights: ServiceHighlight[]
  processSteps: ProcessStep[]
  productsTitle: string
  categories: SubCategory[]
  ctaTitle: string
  ctaDescription: string
}

/* ─── Icon Mapping ─── */

const iconMap: Record<string, React.ElementType> = {
  clipboard: ClipboardList,
  search: SearchCheck,
  truck: Truck,
  support: Headphones,
  shield: ShieldCheck,
  package: PackageCheck,
  map: MapPin,
  check: CheckCircle2,
}

function StepIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] || CheckCircle2
  return <Icon className={className} />
}

/* ─── Component ─── */

export default function ServicePageLayout({ data }: { data: ServicePageData }) {
  const aboutReveal = useScrollReveal({ animation: 'fade-up', delay: 100 })
  const highlightReveal = useStaggerReveal(data.highlights.length, {
    animation: 'fade-up',
    staggerMs: 120,
    delay: 200,
  })
  const processReveal = useStaggerReveal(data.processSteps.length, {
    animation: 'fade-up',
    staggerMs: 200,
    delay: 150,
  })
  const productsReveal = useStaggerReveal(data.categories.length, {
    animation: 'fade-up',
    staggerMs: 100,
    delay: 200,
  })
  const ctaReveal = useScrollReveal({ animation: 'zoom-in', delay: 200, duration: 800 })

  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      <Navbar />
      <main className="flex-1">

        {/* ═══════════ HERO BANNER ═══════════ */}
        <section className="relative w-full h-[320px] md:h-[400px] lg:h-[450px] overflow-hidden">
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#005c59]/30 via-transparent to-[#00908C]/20" />

          <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex flex-col justify-end pb-10 md:pb-14">
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="size-3.5" />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="size-3.5" />
              <span className="text-[#00e5df]">{data.title}</span>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
              {data.title}
            </h1>
          </div>
        </section>

        {/* ═══════════ ABOUT THIS SERVICE ═══════════ */}
        <section className="bg-white py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
              <div ref={aboutReveal.ref} className="lg:col-span-3">
                <p className="text-[#00908C] font-semibold text-sm uppercase tracking-wider mb-3">
                  About This Service
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-5 leading-snug">
                  Trusted Quality, Delivered with Excellence
                </h2>
                <p className="text-[#606060] text-base md:text-lg leading-relaxed">
                  {data.introParagraph}
                </p>
              </div>

              <div ref={highlightReveal.ref} className="lg:col-span-2 grid grid-cols-2 gap-4">
                {data.highlights.map((hl) => (
                  <div
                    key={hl.label}
                    className="card-glow highlight-shimmer bg-[#f8f9fa] rounded-xl p-5 border border-gray-100 text-center group cursor-default"
                  >
                    <p className="text-xl md:text-2xl font-extrabold text-[#00908C] group-hover:scale-110 transition-transform duration-300">
                      {hl.value}
                    </p>
                    <p className="text-xs md:text-sm text-[#606060] mt-1 font-medium leading-snug">
                      {hl.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ HOW IT WORKS — Card Style ═══════════ */}
        <section className="relative bg-[#005c59] py-16 md:py-24 overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#00e5df]/[0.03] rounded-full translate-y-1/3 -translate-x-1/4" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.01] rounded-full" />

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-[#00e5df] font-semibold text-sm uppercase tracking-wider mb-3">
                How It Works
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Simple Steps, Reliable Results
              </h2>
              <p className="mt-4 text-white/60 max-w-xl mx-auto text-base leading-relaxed">
                From your first inquiry to final delivery, we make the process seamless and transparent.
              </p>
            </div>

            <div ref={processReveal.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5">
              {data.processSteps.map((step, idx) => (
                <div
                  key={step.title}
                  className="group relative"
                >
                  {/* Glass Card */}
                  <div className="relative bg-white/[0.07] backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:bg-white/[0.12] hover:border-[#00e5df]/30 transition-all duration-500 hover:-translate-y-2 h-full">
                    {/* Glow effect on hover */}
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#00e5df]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00908C] to-[#00b0aa] flex items-center justify-center mb-5 shadow-lg shadow-[#00908C]/30 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#00e5df]/20 transition-all duration-300">
                        <StepIcon name={step.icon} className="size-7 text-white" />
                      </div>

                      {/* Step Label */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#00e5df] text-xs font-bold uppercase tracking-widest">
                          Step {idx + 1}
                        </span>
                        <div className="h-px flex-1 bg-white/10" />
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00e5df] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ PRODUCTS & SUPPLIES ═══════════ */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-[#00908C] font-semibold text-sm uppercase tracking-wider mb-2">
                Products & Supplies
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e]">
                {data.productsTitle}
              </h2>
              <div className="mt-4 mx-auto w-16 h-1 bg-[#00908C] rounded-full" />
            </div>

            {data.slug === 'wood-poles' ? (
              /* ── Wood Poles: Products + Why Choose ── */
              <div ref={productsReveal.ref}>
                {/* Products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                  {data.categories.slice(0, 5).map((cat, idx) => (
                    <div
                      key={cat.title}
                      className={`card-glow bg-[#f8f9fa] rounded-2xl p-7 border border-gray-100 group cursor-default relative overflow-hidden ${
                        idx === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                      }`}
                    >
                      {/* Top accent gradient */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00908C] to-[#00b0aa] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-12 h-12 rounded-xl bg-[#00908C] flex items-center justify-center shadow-md shadow-[#00908C]/20 group-hover:shadow-lg group-hover:shadow-[#00908C]/30 group-hover:scale-110 transition-all duration-300">
                          <Sparkles className="size-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-[#1a1a2e] mb-1.5 group-hover:text-[#00908C] transition-colors">
                            {cat.title}
                          </h4>
                          {cat.description && (
                            <p className="text-sm text-[#606060] leading-relaxed">
                              {cat.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Why Choose — Premium Cards */}
                <div className="text-center mb-8">
                  <p className="text-[#00908C] font-semibold text-sm uppercase tracking-wider mb-2">
                    The Kiwale Advantage
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1a1a2e]">
                    Why Choose Our Wood Poles?
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.categories.slice(5).map((cat) => (
                    <div
                      key={cat.title}
                      className="group cursor-default"
                    >
                      <div className="bg-gradient-to-br from-[#00908C]/5 to-transparent rounded-2xl p-6 border border-[#00908C]/10 hover:border-[#00908C]/25 hover:from-[#00908C]/10 transition-all duration-500 hover:-translate-y-1 h-full">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-lg bg-[#00908C]/10 flex items-center justify-center group-hover:bg-[#00908C] group-hover:scale-110 transition-all duration-300">
                            <CircleDot className="size-4 text-[#00908C] group-hover:text-white transition-colors" />
                          </div>
                          <h4 className="text-sm font-bold text-[#1a1a2e] group-hover:text-[#00908C] transition-colors">
                            {cat.title}
                          </h4>
                        </div>
                        {cat.description && (
                          <p className="text-xs text-[#606060] leading-relaxed ml-12">
                            {cat.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* ── Standard Product Grid — Premium Cards ── */
              <div ref={productsReveal.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.categories.map((cat) => (
                  <div
                    key={cat.title}
                    className="card-glow bg-[#f8f9fa] rounded-2xl p-7 border border-gray-100 group cursor-default relative overflow-hidden h-full"
                  >
                    {/* Top accent gradient bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00908C] to-[#00b0aa] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-[#00908C]/10 flex items-center justify-center mb-4 group-hover:bg-[#00908C]/20 transition-colors">
                      <CheckCircle2 className="size-6 text-[#00908C]" />
                    </div>

                    <h3 className="text-base md:text-lg font-bold text-[#1a1a2e] mb-2 group-hover:text-[#00908C] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-[#606060] leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ═══════════ CTA BANNER ═══════════ */}
        <section className="bg-[#f8f9fa] py-14 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div
              ref={ctaReveal.ref}
              className="relative bg-gradient-to-br from-[#00908C] to-[#005c59] rounded-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-60 h-60 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full" />

              <div className="relative z-10 p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {data.ctaTitle}
                </h2>
                <p className="text-white/80 max-w-2xl mx-auto mb-7 text-base leading-relaxed">
                  {data.ctaDescription}
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
