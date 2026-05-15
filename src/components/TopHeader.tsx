'use client'

import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function TopHeader() {
  return (
    <div className="bg-[#005c59] text-white text-[10px] sm:text-xs md:text-sm">
      <div className="max-w-7xl mx-auto px-3 md:px-4 py-1.5 sm:py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-1.5">
        {/* Left side - Email & Phone */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 md:gap-5 text-white/80">
          <a href="tel:+255762525846" className="flex items-center gap-1 hover:text-[#00b0aa] transition-colors">
            <Phone className="size-3 shrink-0" />
            <span>+255 762 525 846</span>
          </a>
          <a href="mailto:info@kwl.co.tz" className="flex items-center gap-1 hover:text-[#00b0aa] transition-colors">
            <Mail className="size-3 shrink-0" />
            <span>info@kwl.co.tz</span>
          </a>
        </div>

        {/* Right side - Address & Working Hours */}
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-3 md:gap-5 text-white/80">
          <div className="hidden md:flex items-center gap-1">
            <MapPin className="size-3 shrink-0" />
            <span>Plot No.620, Block A, Buguruni, Dar es Salaam</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="size-3 shrink-0" />
            <span>Mon - Fri: 9:00 AM - 5:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  )
}
