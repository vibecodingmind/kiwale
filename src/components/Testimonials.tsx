'use client'

import { Quote, Star, MapPin } from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'

const testimonials = [
  {
    text: 'Kiwale Group Limited has been our trusted supplier for building materials. Their quality is outstanding, and deliveries are always on time. Highly recommended!',
    name: 'James M.',
    location: 'Dar es Salaam',
  },
  {
    text: "We've sourced timber and other materials from Kiwale Group for multiple projects. Their professionalism and commitment to excellence set them apart!",
    name: 'Sarah K.',
    location: 'Mtwara',
  },
  {
    text: 'The transportation services are efficient, and their materials meet industry standards. Kiwale Group Limited ensures smooth operations for our construction projects.',
    name: 'David L.',
    location: 'Lindi',
  },
]

export default function Testimonials() {
  const headerReveal = useScrollReveal({ animation: 'fade-down' })
  const cardReveal = useStaggerReveal(testimonials.length, {
    animation: 'fade-up',
    staggerMs: 200,
    delay: 200,
  })

  return (
    <section className="bg-[#f8f9fa] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div ref={headerReveal.ref} className="text-center mb-12">
          <p className="text-[#00908C] font-semibold text-sm uppercase tracking-wider mb-2">
            What Our Clients Say
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e]">
            Client Testimonials
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div ref={cardReveal.ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="card-glow bg-white rounded-xl p-6 shadow-sm border border-gray-100 group cursor-pointer"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-[#00908C] text-[#00908C]" />
                ))}
              </div>
              <Quote className="size-8 text-[#00908C]/20 mb-3 group-hover:text-[#00908C]/40 transition-colors" />
              <p className="text-[#606060] leading-relaxed text-sm md:text-base">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#00908C] flex items-center justify-center text-white font-bold text-sm group-hover:bg-[#007370] group-hover:scale-110 transition-all duration-300">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#00908C] text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-[#606060] text-xs flex items-center gap-1">
                      <MapPin className="size-3" />
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
