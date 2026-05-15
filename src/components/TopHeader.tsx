'use client'

import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function TopHeader() {
  return (
    <div className="bg-[#005c59] text-white text-xs md:text-sm">
      <div className="max-w-7xl mx-auto px-3 md:px-4 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
        {/* Left side - Email & Phone */}
        <div className="flex flex-wrap items-center gap-3 md:gap-5 text-white/80">
          <a href="tel:+255762525846" className="flex items-center gap-1.5 hover:text-[#00b0aa] transition-colors">
            <Phone className="size-3.5 shrink-0" />
            <span>+255 762 525 846</span>
          </a>
          <a href="mailto:info@kwl.co.tz" className="flex items-center gap-1.5 hover:text-[#00b0aa] transition-colors">
            <Mail className="size-3.5 shrink-0" />
            <span>info@kwl.co.tz</span>
          </a>
        </div>

        {/* Right side - Address & Working Hours */}
        <div className="flex flex-wrap items-center gap-3 md:gap-5 text-white/80">
          <div className="hidden md:flex items-center gap-1.5">
            <MapPin className="size-3.5 shrink-0" />
            <span>Plot No.620, Block A, Buguruni, Dar es Salaam</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="size-3.5 shrink-0" />
            <span>Mon - Fri: 9:00 AM - 5:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  )
}
