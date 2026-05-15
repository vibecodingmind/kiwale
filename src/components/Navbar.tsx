'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, ChevronDown, Building2, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const buildingServices = [
  { label: 'Supply of Building Materials', href: '/services/building-materials' },
  { label: 'Supply of Timber Wood', href: '/services/timber-wood' },
  { label: 'Supply of Wood Poles', href: '/services/wood-poles' },
  { label: 'Supply of Specialized Building Materials', href: '/services/specialized-materials' },
]

const transportServices = [
  { label: 'Transportation Services', href: '/services/transportation' },
]

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQs', href: '/faqs' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setServicesOpen(true)
  }

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false)
    }, 200)
  }

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/KIWALE.png"
            alt="Kiwaleis"
            width={220}
            height={66}
            className="h-14 md:h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.label}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={link.href}
                  className="text-sm font-medium text-[#606060] hover:text-[#00908C] transition-colors relative py-1 flex items-center gap-1"
                >
                  {link.label}
                  <ChevronDown
                    className={`size-3.5 transition-transform duration-200 ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </Link>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                    servicesOpen
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-3 min-w-[320px] overflow-hidden">
                    {/* Building Solutions Section */}
                    <div className="px-5 pt-1 pb-2">
                      <div className="flex items-center gap-2 mb-1">
                        <Building2 className="size-3.5 text-[#00908C]" />
                        <span className="text-[10px] font-bold text-[#00908C] uppercase tracking-widest">Building Solutions (KIWALE)</span>
                      </div>
                    </div>
                    {buildingServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex items-center px-5 py-2 text-sm text-[#606060] hover:text-[#00908C] hover:bg-[#00908C]/5 transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}

                    {/* Divider */}
                    <div className="my-2 border-t border-gray-100" />

                    {/* Transport & Logistics Section */}
                    <div className="px-5 pt-1 pb-2">
                      <div className="flex items-center gap-2 mb-1">
                        <Truck className="size-3.5 text-[#005c59]" />
                        <span className="text-[10px] font-bold text-[#005c59] uppercase tracking-widest">Transport & Logistics (KIWALEIS)</span>
                      </div>
                    </div>
                    {transportServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex items-center px-5 py-2 text-sm text-[#606060] hover:text-[#00908C] hover:bg-[#00908C]/5 transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#606060] hover:text-[#00908C] transition-colors relative py-1"
              >
                {link.label}
              </Link>
            )
          )}
          <Link href="/contact">
            <Button
              className="bg-[#00908C] hover:bg-[#007370] text-white font-semibold px-6 ml-2"
              size="default"
            >
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <Link href="/contact">
            <Button
              className="bg-[#00908C] hover:bg-[#007370] text-white text-xs px-3 py-1.5 h-8"
              size="sm"
            >
              Get a Quote
            </Button>
          </Link>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="p-2 text-[#00908C] hover:text-[#00b0aa] transition-colors"
              >
                <Menu className="size-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-white">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Image
                    src="/KIWALE.png"
                    alt="Kiwaleis"
                    width={160}
                    height={48}
                    className="h-11 w-auto object-contain"
                  />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-4 mt-4">
                {navLinks.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-[#606060] hover:bg-gray-100 hover:text-[#00908C] transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          className={`size-4 transition-transform duration-200 ${
                            mobileServicesOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {mobileServicesOpen && (
                        <div className="ml-3 border-l-2 border-[#00908C]/20 pl-3 mb-1">
                          {/* Building Solutions Header */}
                          <div className="flex items-center gap-1.5 px-4 py-2">
                            <Building2 className="size-3 text-[#00908C]" />
                            <span className="text-[10px] font-bold text-[#00908C] uppercase tracking-wider">Building Solutions (KIWALE)</span>
                          </div>
                          {buildingServices.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-4 py-2.5 rounded-lg text-sm text-[#606060] hover:text-[#00908C] hover:bg-[#00908C]/5 transition-colors"
                            >
                              {service.label}
                            </Link>
                          ))}
                          {/* Transport Header */}
                          <div className="flex items-center gap-1.5 px-4 py-2 mt-1">
                            <Truck className="size-3 text-[#005c59]" />
                            <span className="text-[10px] font-bold text-[#005c59] uppercase tracking-wider">Transport & Logistics (KIWALEIS)</span>
                          </div>
                          {transportServices.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-4 py-2.5 rounded-lg text-sm text-[#606060] hover:text-[#00908C] hover:bg-[#00908C]/5 transition-colors"
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-3 rounded-lg text-sm font-medium text-[#606060] hover:bg-gray-100 hover:text-[#00908C] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
              <div className="px-4 mt-6">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-[#00908C] hover:bg-[#007370] text-white font-semibold">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
