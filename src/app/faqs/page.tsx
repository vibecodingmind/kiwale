'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'
import TopHeader from '@/components/TopHeader'
import Navbar from '@/components/Navbar'
import FooterSection from '@/components/FooterSection'

const faqCategories = [
  {
    category: 'General Questions',
    items: [
      {
        question: 'What is KWL?',
        answer: 'KWL is the united brand of two well-established Tanzanian companies — Kiwaleis Investment Limited (building materials supply) and Kiwale Group Limited (transportation & logistics) — now operating together under one roof. By merging, we offer a complete, seamless experience: from sourcing quality materials to delivering them to your site, KWL is your single point of contact.',
      },
      {
        question: 'Where is KWL located?',
        answer: 'Our office is located at Plot No.620, Block A, Buguruni Area, Ilala, Dar es Salaam, Tanzania. You can visit us during working hours (Monday to Friday, 9:00 AM - 5:00 PM) or contact us by phone or email.',
      },
      {
        question: 'What areas do you serve?',
        answer: 'We serve clients across Tanzania, including Dar es Salaam, Mtwara, Lindi, Dodoma, Arusha, and other regions. Our transportation and logistics network also extends to neighboring countries in East and Central Africa, making us a reliable partner for both local and international projects.',
      },
      {
        question: 'How long has KWL been in business?',
        answer: 'Our companies have over 10 years of combined experience in building materials supply and logistics. Over the years, we have built a strong reputation for quality, reliability, and customer satisfaction, serving hundreds of clients across the region. Now as KWL, we bring that same experience and trust under one brand.',
      },
      {
        question: 'I was a client of Kiwale Group / Kiwaleis Investment. What changes for me?',
        answer: 'Nothing changes except the name. You still get the same quality materials, the same reliable transportation, and the same dedicated team. The merger simply means you now have one point of contact for both building materials and logistics — making it even easier to work with us.',
      },
      {
        question: 'Why did the companies merge?',
        answer: 'By bringing Kiwaleis Investment Limited and Kiwale Group Limited together under the KWL brand, we can offer a more complete and seamless service to our clients. Instead of dealing with two separate companies for materials and transportation, you now get everything under one roof — saving you time, simplifying communication, and ensuring better coordination for your projects.',
      },
    ],
  },
  {
    category: 'Building Materials',
    items: [
      {
        question: 'What types of building materials do you supply?',
        answer: 'We supply a comprehensive range of building materials including cement and concrete, bricks and blocks, roofing materials, steel and reinforcements, timber and wood products, plumbing and electrical supplies, paints and finishes, and tiles and flooring. Our products are sourced from trusted manufacturers and meet industry quality standards.',
      },
      {
        question: 'Do you offer bulk supply for large projects?',
        answer: 'Yes, we specialize in bulk supply for commercial and large-scale construction projects. Whether you need a full truckload of cement, steel for a multi-story building, or materials for an entire housing development, we have the capacity and logistics to deliver on time and in the quantities you require.',
      },
      {
        question: 'Can I get materials delivered directly to my construction site?',
        answer: 'Absolutely. We offer direct-to-site delivery across Tanzania. Our transportation fleet and logistics partners ensure your materials arrive safely and on schedule, whether your site is in the city or a remote location. Delivery costs and timelines are discussed during the quotation process.',
      },
    ],
  },
  {
    category: 'Timber & Wood Poles',
    items: [
      {
        question: 'What types of timber do you offer?',
        answer: 'We offer both softwood and hardwood timber, including timber boards, planks, beams, and rafters. Our timber is suitable for framing, flooring, furniture, decorative applications, and general construction. Custom cuts and dimensions are available upon request.',
      },
      {
        question: 'Are your wood poles treated?',
        answer: 'Yes, all our wood poles are pressure-treated to protect against pests, termites, decay, and harsh weather conditions. This treatment ensures maximum durability and a long service life, making them suitable for utility lines, fencing, construction scaffolding, and agricultural use.',
      },
      {
        question: 'Can I order custom sizes for wood poles?',
        answer: 'Yes, we offer custom sizes and treatments for wood poles based on your specific requirements. Whether you need a particular length, diameter, or treatment type, our team can accommodate your needs. Contact us with your specifications for a tailored quote.',
      },
    ],
  },
  {
    category: 'Transportation & Delivery',
    items: [
      {
        question: 'What transportation services do you provide?',
        answer: 'We provide comprehensive transportation services including local delivery across Tanzania, international shipping and freight, cargo handling and logistics, bulk transport for oversized materials, customs clearance and documentation, and real-time GPS tracking of your shipments.',
      },
      {
        question: 'Do you handle international shipping?',
        answer: 'Yes, with a network of international shipping partners, we handle cross-border freight and logistics including documentation, customs clearance, and safe delivery. We cover routes across East and Central Africa and can arrange shipments from international origins as well.',
      },
      {
        question: 'How can I track my delivery?',
        answer: 'We provide real-time GPS tracking and regular status updates for all shipments. Once your order is dispatched, you will receive tracking information that allows you to monitor your delivery from pickup to final destination, giving you full visibility and peace of mind.',
      },
    ],
  },
  {
    category: 'Orders & Pricing',
    items: [
      {
        question: 'How do I request a quote?',
        answer: 'You can request a quote by visiting our Contact page and filling out the form, calling us directly at +255 762 525 846, or sending an email to info@kwl.co.tz. Provide details about your project, the materials you need, quantities, and delivery location, and our team will prepare a competitive quote for you.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept various payment methods including bank transfers, mobile money, and cash payments. For large orders and regular clients, we also offer credit terms subject to approval. Please contact our team to discuss the payment option that works best for your situation.',
      },
      {
        question: 'Do you offer credit sales?',
        answer: 'Yes, we offer credit sales for qualifying clients and regular customers. Credit terms are subject to approval and depend on factors such as order volume, relationship history, and financial references. Contact our sales team to learn more about our credit facilities.',
      },
    ],
  },
]

function FAQItem({ question, answer, id }: { question: string; answer: string; id: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden bg-white group">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-answer-${id}`}
        id={`faq-question-${id}`}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#f8f9fa] transition-colors"
      >
        <span className="text-sm md:text-base font-semibold text-[#1a1a2e] group-hover:text-[#00908C] transition-colors pr-4">
          {question}
        </span>
        <ChevronDown
          className={`size-5 text-[#00908C] shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        id={`faq-answer-${id}`}
        role="region"
        aria-labelledby={`faq-question-${id}`}
        className={`transition-all duration-300 ease-in-out ${
          open ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-5 pb-5 pt-0">
          <p className="text-sm text-[#606060] leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQsPage() {
  const heroReveal = useScrollReveal({ animation: 'fade-up', delay: 100 })
  const catReveal = useStaggerReveal(faqCategories.length, {
    animation: 'fade-up',
    staggerMs: 200,
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

          <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
            <div ref={heroReveal.ref}>
              <nav className="flex items-center gap-2 text-sm text-white/50 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span className="text-white/30">/</span>
                <span className="text-[#00e5df]">FAQs</span>
              </nav>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Frequently Asked Questions
              </h1>
              <p className="mt-4 text-white/70 max-w-2xl text-base md:text-lg leading-relaxed">
                Find answers to common questions about our services, products, ordering process, and more.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="bg-white py-14 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div ref={catReveal.ref} className="space-y-10">
              {faqCategories.map((cat) => (
                <div key={cat.category}>
                  <h2 className="text-lg md:text-xl font-bold text-[#00908C] mb-5">
                    {cat.category}
                  </h2>
                  <div className="space-y-3">
                    {cat.items.map((faq, faqIdx) => (
                      <FAQItem
                        key={faq.question}
                        question={faq.question}
                        answer={faq.answer}
                        id={`${cat.category}-${faqIdx}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#f8f9fa] py-14 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div ref={ctaReveal.ref} className="relative bg-gradient-to-br from-[#00908C] to-[#005c59] rounded-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-60 h-60 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />

              <div className="relative z-10 p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-white/80 max-w-2xl mx-auto mb-7 text-base leading-relaxed">
                  Our team is here to help. Reach out to us directly and we&apos;ll provide the answers you need to move your project forward.
                </p>
                <Link href="/contact">
                  <Button
                    className="bg-white text-[#00908C] hover:bg-white/90 font-semibold px-8 py-3 text-base group btn-glow"
                    size="lg"
                  >
                    Contact Us
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
