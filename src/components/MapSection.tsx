'use client'

import { MapPin } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function MapSection() {
  const headerReveal = useScrollReveal({ animation: 'fade-down', delay: 0 })

  return (
    <section id="location" className="bg-white py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={headerReveal.ref} className="text-center mb-6 md:mb-10">
          <p className="text-[#00908C] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">Our Location</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1a2e]">Find Us on the Map</h2>
          <p className="mt-2 sm:mt-3 text-[#606060] max-w-xl mx-auto text-sm sm:text-base leading-relaxed flex items-center justify-center gap-2">
            <MapPin className="size-3.5 sm:size-4 text-[#00908C] shrink-0" />
            Plot No.620, Block A, Buguruni Area, Ilala, Dar es Salaam
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <iframe
            src="https://maps.google.com/maps?q=KIWALEIS+TIMBER+POLES+SUPPLIER+AND+EXPORTER+Dar+es+Salaam&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office location"
            className="w-full sm:h-[400px] md:h-[450px]"
          />
        </div>
      </div>
    </section>
  )
}
