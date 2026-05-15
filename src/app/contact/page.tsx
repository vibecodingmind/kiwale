'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'
import TopHeader from '@/components/TopHeader'
import Navbar from '@/components/Navbar'
import FooterSection from '@/components/FooterSection'

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    detail: '+255 762 525 846',
    subDetail: 'Available Mon - Fri, 9AM - 5PM',
    href: 'tel:+255762525846',
  },
  {
    icon: Mail,
    title: 'Email Us',
    detail: 'info@kwl.co.tz',
    subDetail: 'We respond within 24 hours',
    href: 'mailto:info@kwl.co.tz',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    detail: 'Plot No.620, Block A, Buguruni Area',
    subDetail: 'Ilala, Dar es Salaam, Tanzania',
    href: 'https://maps.google.com/?q=Plot+No.620+Block+A+Buguruni+Dar+es+Salaam',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    detail: 'Monday - Friday',
    subDetail: '9:00 AM - 5:00 PM',
    href: 'tel:+255762525846',
  },
]

export default function ContactPage() {
  const heroReveal = useScrollReveal({ animation: 'fade-up', delay: 100 })
  const infoReveal = useStaggerReveal(contactInfo.length, {
    animation: 'fade-up',
    staggerMs: 120,
    delay: 200,
  })
  const formReveal = useScrollReveal({ animation: 'fade-up', delay: 200 })

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      setFormData({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' })
    }, 1500)
  }

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
                <span className="text-[#00e5df]">Contact Us</span>
              </nav>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Get In Touch
              </h1>
              <p className="mt-4 text-white/70 max-w-2xl text-base md:text-lg leading-relaxed">
                Have a question, need a quote, or want to discuss your project? We&apos;d love to hear from you. Reach out and our team will respond promptly.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="bg-white py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div ref={infoReveal.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="card-glow bg-[#f8f9fa] rounded-xl p-6 border border-gray-100 text-center group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#00908C]/10 flex items-center justify-center mx-auto mb-4 icon-bounce group-hover:bg-[#00908C]/20 transition-colors">
                    <info.icon className="size-7 text-[#00908C]" />
                  </div>
                  <h3 className="text-base font-bold text-[#1a1a2e] mb-1 group-hover:text-[#00908C] transition-colors">
                    {info.title}
                  </h3>
                  <p className="text-[#1a1a2e] font-semibold text-sm">{info.detail}</p>
                  <p className="text-[#606060] text-xs mt-0.5">{info.subDetail}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form + Map */}
        <section className="bg-[#f8f9fa] py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div ref={formReveal.ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Form */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                <h2 className="text-xl md:text-2xl font-bold text-[#1a1a2e] mb-2">
                  Send Us a Message
                </h2>
                <p className="text-[#606060] text-sm mb-6">
                  Fill in the form below and our team will get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#00908C]/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="size-8 text-[#00908C]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">Message Sent!</h3>
                    <p className="text-[#606060] text-sm mb-6">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className="bg-[#00908C] hover:bg-[#007370] text-white font-semibold"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-[#1a1a2e] mb-1.5">
                          First Name *
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00908C]/30 focus:border-[#00908C] transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-[#1a1a2e] mb-1.5">
                          Last Name *
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Doe"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00908C]/30 focus:border-[#00908C] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#1a1a2e] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00908C]/30 focus:border-[#00908C] transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#1a1a2e] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+255 xxx xxx xxx"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00908C]/30 focus:border-[#00908C] transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-[#1a1a2e] mb-1.5">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-[#606060] focus:outline-none focus:ring-2 focus:ring-[#00908C]/30 focus:border-[#00908C] transition-all bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="building-materials">Supply of Building Materials</option>
                        <option value="timber-wood">Supply of Timber Wood</option>
                        <option value="wood-poles">Supply of Wood Poles</option>
                        <option value="specialized-materials">Supply of Specialized Building Materials</option>
                        <option value="transportation">Transportation Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#1a1a2e] mb-1.5">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or requirements..."
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00908C]/30 focus:border-[#00908C] transition-all resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-[#00908C] hover:bg-[#007370] disabled:bg-[#00908C]/50 disabled:cursor-not-allowed text-white font-semibold py-3 text-base group btn-glow"
                      size="lg"
                    >
                      {submitting ? 'Sending...' : 'Send Message'}
                      {!submitting && <Send className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />}
                    </Button>
                  </form>
                )}
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm lg:flex-1 min-h-[400px] md:min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5!2d39.25!3d-6.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTEnMDAuMCJTIDM5wrAxNScwMC4wIkU!5e0!3m2!1sen!2stz!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kiwaleis Investment Limited Location"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}
