'use client'

import Link from 'next/link'
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Target,
  Eye,
  Users,
  Globe,
  TrendingUp,
  Gem,
  CheckCircle2,
  Handshake,
  Lock,
  Zap,
  Heart,
  Lightbulb,
  Leaf,
  Building2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'
import TopHeader from '@/components/TopHeader'
import Navbar from '@/components/Navbar'
import FooterSection from '@/components/FooterSection'

/* ─── Data ─── */

const divisions = [
  {
    icon: Building2,
    title: 'Kiwaleis Building Solutions',
    formerly: 'Formerly Kiwaleis Investment Limited',
    desc: 'Your trusted source for high-quality building materials, timber wood, wood poles, and specialized construction materials. From cement and steel to custom timber cuts, we supply everything your project needs — sourced from trusted manufacturers and delivered to your site.',
    services: [
      'Supply of Building Materials',
      'Supply of Timber Wood',
      'Supply of Wood Poles',
      'Supply of Specialized Building Materials',
    ],
    color: 'from-[#00908C] to-[#00b0aa]',
  },
  {
    icon: Truck,
    title: 'Kiwale Group Transport & Logistics Services',
    formerly: 'Formerly Kiwale Group Limited',
    desc: 'Reliable transportation and logistics services across Tanzania and beyond. Whether you need local delivery or international freight, our fleet and logistics network ensure your goods arrive safely and on time — every time.',
    services: [
      'Transportation Services',
      'Local & International Delivery',
      'Freight & Cargo Handling',
    ],
    color: 'from-[#005c59] to-[#007370]',
  },
]

const objectives = [
  {
    icon: Target,
    title: 'Deliver Quality Materials',
    desc: 'Ensure every product we supply meets the highest industry standards for durability, strength, and performance — so our clients can build with absolute confidence.',
  },
  {
    icon: Truck,
    title: 'Ensure Timely Delivery',
    desc: 'Build a logistics network that guarantees on-time delivery across Tanzania and beyond, eliminating project delays and keeping construction timelines on track.',
  },
  {
    icon: Handshake,
    title: 'Build Lasting Partnerships',
    desc: 'Foster long-term relationships with clients, suppliers, and partners through transparency, trust, and consistent service excellence that goes beyond one-time transactions.',
  },
  {
    icon: Leaf,
    title: 'Promote Sustainable Practices',
    desc: 'Champion environmentally responsible sourcing and supply chain practices that support sustainable construction and protect our communities and natural resources.',
  },
  {
    icon: Lightbulb,
    title: 'Drive Industry Innovation',
    desc: 'Continuously adopt new materials, technologies, and methods that improve construction quality, reduce costs, and set new benchmarks in the building materials sector.',
  },
  {
    icon: Globe,
    title: 'Expand Our Regional Reach',
    desc: 'Grow our presence across East and Central Africa, making quality building materials and reliable logistics accessible to more projects and communities.',
  },
]

const coreValues = [
  {
    icon: ShieldCheck,
    title: 'Quality & Excellence',
    desc: 'We never compromise on quality. Every material we supply is sourced from trusted manufacturers and rigorously inspected to ensure it meets the highest standards of durability and performance. Our clients deserve nothing less than the best, and that is exactly what we deliver.',
  },
  {
    icon: Zap,
    title: 'Efficiency & Reliability',
    desc: 'Time is money in construction, and we understand that delays can derail entire projects. Our efficient logistics and supply chain systems are designed to deliver materials on schedule, every time — so your project stays on track and within budget.',
  },
  {
    icon: Heart,
    title: 'Customer Commitment',
    desc: 'Our clients are at the heart of everything we do. We listen to their needs, provide personalized solutions, and go the extra mile to ensure their satisfaction. From the first inquiry to final delivery, we are dedicated to making every experience seamless and rewarding.',
  },
  {
    icon: Lock,
    title: 'Integrity & Trust',
    desc: 'Honesty and transparency are the foundations of our business. We build trust through fair pricing, clear communication, and standing behind every product we supply. When you work with Kiwaleis, you work with a partner you can rely on completely.',
  },
  {
    icon: Users,
    title: 'Teamwork & Collaboration',
    desc: 'We believe that the best results come from working together — within our team, with our suppliers, and alongside our clients. Collaboration drives innovation, improves service quality, and ensures that every project benefits from collective expertise and shared purpose.',
  },
  {
    icon: TrendingUp,
    title: 'Growth & Innovation',
    desc: 'We are constantly evolving — embracing new technologies, expanding our product range, and improving our processes. Our commitment to growth ensures that we stay ahead of industry trends and continue to deliver cutting-edge solutions that meet the changing needs of our clients.',
  },
]

const whyBestReasons = [
  {
    icon: Gem,
    title: 'Top-Grade Materials',
    desc: 'We source only the highest quality building materials from trusted manufacturers, ensuring every product meets industry standards for durability and strength.',
  },
  {
    icon: Truck,
    title: 'Timely Deliveries',
    desc: 'Our robust logistics network ensures your materials arrive on schedule — whether your project is local or across borders, we deliver without delays.',
  },
  {
    icon: TrendingUp,
    title: 'Flexible Payment Options',
    desc: 'We offer convenient payment methods including bank transfers, mobile money, cash, and credit terms for qualifying clients to make procurement seamless.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to Last',
    desc: 'Every project we support is backed by materials and services built for longevity. We guarantee quality that stands the test of time.',
  },
]

/* ─── Component ─── */

export default function AboutPage() {
  const heroReveal = useScrollReveal({ animation: 'fade-up', delay: 100 })
  const storyReveal = useScrollReveal({ animation: 'fade-up', delay: 100 })
  const divisionReveal = useStaggerReveal(divisions.length, {
    animation: 'fade-up',
    staggerMs: 200,
    delay: 150,
  })
  const objectiveReveal = useStaggerReveal(objectives.length, {
    animation: 'fade-up',
    staggerMs: 100,
    delay: 150,
  })
  const valuesReveal = useStaggerReveal(coreValues.length, {
    animation: 'fade-up',
    staggerMs: 100,
    delay: 150,
  })
  const whyBestReveal = useStaggerReveal(whyBestReasons.length, {
    animation: 'fade-up',
    staggerMs: 150,
    delay: 200,
  })
  const missionReveal = useScrollReveal({ animation: 'fade-up', delay: 100 })
  const ctaReveal = useScrollReveal({ animation: 'zoom-in', delay: 200, duration: 800 })

  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      <Navbar />
      <main className="flex-1">

        {/* ═══════════ HERO ═══════════ */}
        <section className="relative w-full h-[280px] md:h-[350px] lg:h-[400px] overflow-hidden bg-[#005c59]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#005c59] via-[#007370] to-[#00908C]" />
          <div className="absolute inset-0 bg-[url('/images/hero-2.png')] bg-cover bg-center opacity-10" />

          <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
            <div ref={heroReveal.ref}>
              <nav className="flex items-center gap-2 text-sm text-white/50 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span className="text-white/30">/</span>
                <span className="text-[#00e5df]">About Us</span>
              </nav>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                About Kiwaleis
              </h1>
              <p className="mt-4 text-white/70 max-w-2xl text-base md:text-lg leading-relaxed">
                One brand. Two decades of trust. Building and transporting Tanzania&apos;s future — together.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ WHO WE ARE ═══════════ */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div ref={storyReveal.ref} className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-[#00908C] font-semibold text-sm uppercase tracking-wider mb-3">Who We Are</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-6 leading-snug">
                  Two Trusted Companies. One Stronger Brand.
                </h2>
              </div>

              <div className="space-y-5 text-[#606060] text-base md:text-lg leading-relaxed">
                <p>
                  Kiwaleis Investment Limited is a well-established Tanzanian company — <strong className="text-[#1a1a2e]">Kiwaleis Investment Limited</strong> (building materials supply) and <strong className="text-[#1a1a2e]">Kiwale Group Limited</strong> (transportation &amp; logistics) — now operating together under one roof to serve you better.
                </p>
                <p>
                  For over 10 years, our clients have trusted Kiwaleis Investment for quality building materials and Kiwale Group for reliable transportation. By bringing both companies together as Kiwaleis, we now offer a complete, seamless experience — from sourcing materials to delivering them to your site.
                </p>
                <p>
                  Whether you need cement, timber, wood poles, or specialized construction materials — or you need goods transported locally or internationally — Kiwaleis is your single point of contact. Same teams, same quality, same commitment — now stronger together.
                </p>
              </div>

              {/* Quick highlights */}
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#00908C]/5 border border-[#00908C]/10">
                  <CheckCircle2 className="size-6 text-[#00908C]" />
                  <span className="text-sm font-semibold text-[#1a1a2e] text-center">Trusted by 100+ Clients</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#00908C]/5 border border-[#00908C]/10">
                  <CheckCircle2 className="size-6 text-[#00908C]" />
                  <span className="text-sm font-semibold text-[#1a1a2e] text-center">10+ Years Experience</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#00908C]/5 border border-[#00908C]/10">
                  <CheckCircle2 className="size-6 text-[#00908C]" />
                  <span className="text-sm font-semibold text-[#1a1a2e] text-center">Local & International</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#00908C]/5 border border-[#00908C]/10">
                  <CheckCircle2 className="size-6 text-[#00908C]" />
                  <span className="text-sm font-semibold text-[#1a1a2e] text-center">Flexible Payment Options</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ OUR TWO DIVISIONS ═══════════ */}
        <section className="bg-[#f8f9fa] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12 md:mb-14">
              <p className="text-[#00908C] font-semibold text-sm uppercase tracking-wider mb-2">Our Divisions</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e]">
                Two Divisions, One Mission
              </h2>
              <p className="mt-4 text-[#606060] max-w-2xl mx-auto text-base leading-relaxed">
                Kiwaleis operates through two specialized divisions — each built on years of industry expertise and dedicated to serving your specific needs.
              </p>
            </div>

            <div ref={divisionReveal.ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {divisions.map((div) => (
                <div
                  key={div.title}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm group hover:shadow-lg hover:border-[#00908C]/20 transition-all duration-300"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${div.color} p-6 md:p-8`}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div.icon className="size-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">{div.title}</h3>
                        <p className="text-white/60 text-sm mt-0.5">{div.formerly}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <p className="text-[#606060] text-base leading-relaxed mb-5">
                      {div.desc}
                    </p>

                    <p className="text-xs font-semibold text-[#00908C] uppercase tracking-wider mb-3">Services</p>
                    <ul className="space-y-2">
                      {div.services.map((service) => (
                        <li key={service} className="flex items-center gap-2">
                          <CheckCircle2 className="size-4 text-[#00908C] shrink-0" />
                          <span className="text-sm text-[#1a1a2e] font-medium">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ OUR OBJECTIVES ═══════════ */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12 md:mb-14">
              <p className="text-[#00908C] font-semibold text-sm uppercase tracking-wider mb-2">Our Objectives</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e]">
                What We Strive to Achieve
              </h2>
              <p className="mt-4 text-[#606060] max-w-2xl mx-auto text-base leading-relaxed">
                Every decision we make and every service we deliver is guided by clear objectives that put our clients first and drive the construction industry forward.
              </p>
            </div>

            <div ref={objectiveReveal.ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {objectives.map((obj) => (
                <div
                  key={obj.title}
                  className="bg-[#f8f9fa] rounded-2xl p-7 border border-gray-100 shadow-sm group hover:shadow-md hover:border-[#00908C]/20 transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00908C] to-[#00b0aa] flex items-center justify-center mb-5 shadow-lg shadow-[#00908C]/20 group-hover:scale-110 transition-transform duration-300">
                    <obj.icon className="size-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a2e] mb-3 group-hover:text-[#00908C] transition-colors">
                    {obj.title}
                  </h3>
                  <p className="text-[#606060] text-sm leading-relaxed">
                    {obj.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ OUR CORE VALUES ═══════════ */}
        <section className="bg-[#f8f9fa] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12 md:mb-14">
              <p className="text-[#00908C] font-semibold text-sm uppercase tracking-wider mb-2">Our Core Values</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e]">
                The Principles That Guide Us
              </h2>
              <p className="mt-4 text-[#606060] max-w-2xl mx-auto text-base leading-relaxed">
                Our core values define who we are, how we work, and what our clients can always expect from us. They are the foundation of every relationship we build and every project we support.
              </p>
            </div>

            <div ref={valuesReveal.ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, idx) => (
                <div
                  key={value.title}
                  className={`card-tilt rounded-2xl p-7 border border-gray-100 group cursor-pointer h-full ${
                    idx % 3 === 1
                      ? 'bg-gradient-to-br from-[#00908C] to-[#005c59] text-white'
                      : 'bg-white'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    idx % 3 === 1
                      ? 'bg-white/20 group-hover:bg-white/30'
                      : 'bg-[#00908C]/10 group-hover:bg-[#00908C]/20'
                  } icon-bounce transition-colors`}>
                    <value.icon className={`size-6 ${
                      idx % 3 === 1 ? 'text-white' : 'text-[#00908C]'
                    }`} />
                  </div>
                  <h3 className={`text-lg font-bold mb-3 transition-colors ${
                    idx % 3 === 1
                      ? 'text-white group-hover:text-[#00e5df]'
                      : 'text-[#1a1a2e] group-hover:text-[#00908C]'
                  }`}>
                    {value.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    idx % 3 === 1 ? 'text-white/80' : 'text-[#606060]'
                  }`}>
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ WHY WE ARE THE BEST ═══════════ */}
        <section className="bg-[#005c59] py-16 md:py-24 overflow-hidden relative">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#00e5df]/[0.03] rounded-full translate-y-1/3 -translate-x-1/4" />

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="text-center mb-12 md:mb-14">
              <p className="text-[#00e5df] font-semibold text-sm uppercase tracking-wider mb-3">
                Our Advantage
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Why We Are The Best
              </h2>
              <p className="mt-4 text-white/60 max-w-2xl mx-auto text-base leading-relaxed">
                Our commitment to quality, reliability, and customer satisfaction sets us apart. We provide top-grade materials, timely deliveries, and flexible payment options — ensuring a seamless experience for businesses, contractors, and institutions.
              </p>
            </div>

            <div ref={whyBestReveal.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {whyBestReasons.map((reason) => (
                <div key={reason.title} className="group relative">
                  <div className="relative bg-white/[0.07] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/[0.12] hover:border-[#00e5df]/30 transition-all duration-500 hover:-translate-y-1 h-full">
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#00e5df]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00908C] to-[#00b0aa] flex items-center justify-center mb-4 shadow-lg shadow-[#00908C]/30 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#00e5df]/20 transition-all duration-300">
                        <reason.icon className="size-6 text-white" />
                      </div>
                      <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#00e5df] transition-colors">
                        {reason.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ MISSION & VISION ═══════════ */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-[#00908C] font-semibold text-sm uppercase tracking-wider mb-2">Our Purpose</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e]">Mission & Vision</h2>
            </div>
            <div ref={missionReveal.ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-[#f8f9fa] rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm group hover:shadow-md hover:border-[#00908C]/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00908C] to-[#00b0aa] flex items-center justify-center mb-5 shadow-lg shadow-[#00908C]/20 group-hover:scale-110 transition-transform duration-300">
                  <Target className="size-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-3 group-hover:text-[#00908C] transition-colors">Our Mission</h3>
                <p className="text-[#606060] text-base leading-relaxed">
                  To be the most reliable and customer-focused supplier of high-quality building materials and logistics solutions, ensuring that every project we support is built with strength, durability, and efficiency. We aim to simplify the construction process by providing top-notch materials and seamless delivery services tailored to our clients&apos; needs.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-[#f8f9fa] rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm group hover:shadow-md hover:border-[#00908C]/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00908C] to-[#00b0aa] flex items-center justify-center mb-5 shadow-lg shadow-[#00908C]/20 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="size-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-3 group-hover:text-[#00908C] transition-colors">Our Vision</h3>
                <p className="text-[#606060] text-base leading-relaxed">
                  To become a leading force in the construction and logistics industry, known for providing innovative, sustainable, and high-quality building materials and transportation solutions that empower businesses, contractors, and communities to create long-lasting and resilient infrastructures worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ CTA ═══════════ */}
        <section className="bg-[#f8f9fa] py-14 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div ref={ctaReveal.ref} className="relative bg-gradient-to-br from-[#00908C] to-[#005c59] rounded-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-60 h-60 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />

              <div className="relative z-10 p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Work With Us?
                </h2>
                <p className="text-white/80 max-w-2xl mx-auto mb-7 text-base leading-relaxed">
                  Partner with us for quality materials, reliable delivery, and exceptional service. Let&apos;s build something great together.
                </p>
                <Link href="/contact">
                  <Button
                    className="bg-white text-[#00908C] hover:bg-white/90 font-semibold px-8 py-3 text-base group btn-glow"
                    size="lg"
                  >
                    Contact Us Today
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
