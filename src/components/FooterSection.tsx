'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Building2, Truck } from 'lucide-react'

const infoLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'All Services', href: '/services' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact Us', href: '/contact' },
]

const buildingServiceLinks = [
  { label: 'Supply of Building Materials', href: '/services/building-materials' },
  { label: 'Supply of Timber Wood', href: '/services/timber-wood' },
  { label: 'Supply of Wood Poles', href: '/services/wood-poles' },
  { label: 'Supply of Specialized Building Materials', href: '/services/specialized-materials' },
]

const transportServiceLinks = [
  { label: 'Transportation Services', href: '/services/transportation' },
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#005c59] text-white">
      <div className="max-w-7xl mx-auto px-4 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - Company Info + Social */}
          <div>
            <div className="mb-4">
              <Image
                src="/KIWALE-white.png"
                alt="Kiwale"
                width={180}
                height={52}
                className="h-12 w-auto object-contain"
                priority
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Building materials and transportation solutions — under one roof. Kiwaleis &amp; Kiwale Group Limited, now stronger together as Kiwale.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00908C] transition-colors"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2.5">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-[#00b0aa] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Building Solutions + Transport */}
          <div>
            <h3 className="text-base font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2.5">
              {/* Building Solutions */}
              <li className="flex items-center gap-1.5 pt-1">
                <Building2 className="size-3 text-[#00e5df]" />
                <span className="text-[10px] font-bold text-[#00e5df] uppercase tracking-wider">Building Solutions</span>
              </li>
              {buildingServiceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-[#00b0aa] transition-colors pl-5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {/* Transport & Logistics */}
              <li className="flex items-center gap-1.5 pt-3">
                <Truck className="size-3 text-[#00e5df]" />
                <span className="text-[10px] font-bold text-[#00e5df] uppercase tracking-wider">Transport & Logistics</span>
              </li>
              {transportServiceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-[#00b0aa] transition-colors pl-5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Get In Touch */}
          <div>
            <h3 className="text-base font-bold mb-4 text-white">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+255762525846"
                  className="flex items-start gap-3 text-white/60 text-sm hover:text-[#00b0aa] transition-colors"
                >
                  <Phone className="size-4 mt-0.5 shrink-0" />
                  <span>+255 762 525 846</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@kwl.co.tz"
                  className="flex items-start gap-3 text-white/60 text-sm hover:text-[#00b0aa] transition-colors"
                >
                  <Mail className="size-4 mt-0.5 shrink-0" />
                  <span>info@kwl.co.tz</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="size-4 mt-0.5 shrink-0" />
                <span>
                  Plot No.620, Block A, Buguruni Area, Ilala, Dar es Salaam
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            Copyright &copy; {currentYear} Kiwale | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
