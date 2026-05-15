'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const slides = [
  {
    image: '/images/hero-1.png',
    title: 'Building Tanzania\'s Future With Quality You Can Trust',
    subtitle: 'Your Trusted Partner in Construction Excellence',
    description:
      'We supply the finest building materials — cement, steel, timber, and more — delivering strength and reliability to every project, on time, every time.',
  },
  {
    image: '/images/hero-2.png',
    title: 'Seamless Logistics That Deliver Results Without Delays',
    subtitle: 'Moving Materials Across East & Central Africa',
    description:
      'Whether local or international, our transportation network ensures your materials arrive safely and on schedule. No delays, no excuses — just results you can count on.',
  },
  {
    image: '/images/hero-3.png',
    title: 'Your Success Drives Our Commitment to Excellence',
    subtitle: 'Integrity, Reliability & Lasting Partnerships',
    description:
      'At Kiwaleis, we go beyond supply — we build lasting partnerships founded on trust, quality materials, and exceptional service that keeps your projects moving forward.',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const [isAnimating, setIsAnimating] = useState(true)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 'next' : 'prev')
      setIsAnimating(false)
      setTimeout(() => {
        setCurrent(index)
        setIsAnimating(true)
      }, 80)
    },
    [current]
  )

  const next = useCallback(() => {
    setDirection('next')
    setIsAnimating(false)
    setTimeout(() => {
      setCurrent((c) => (c + 1) % slides.length)
      setIsAnimating(true)
    }, 80)
  }, [])

  const prev = useCallback(() => {
    setDirection('prev')
    setIsAnimating(false)
    setTimeout(() => {
      setCurrent((c) => (c - 1 + slides.length) % slides.length)
      setIsAnimating(true)
    }, 80)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      next()
    }, 6000)
    return () => clearInterval(timer)
  }, [next])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setMousePos({ x, y })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: 0, y: 0 })
  }, [])

  const slideDir = direction === 'next' ? 1 : -1

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
    >
      {/* Background Images with Ken Burns + Parallax */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <div
            className="absolute inset-0 transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${mousePos.x * 8}px, ${mousePos.y * 5}px) scale(1.05)`,
            }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#005c59]/25 via-transparent to-[#00908C]/15" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex items-center justify-center text-center">
        <div
          key={current}
          className={isAnimating ? 'hero-slide-active' : 'hero-slide-hidden'}
          style={{ '--slide-dir': slideDir } as React.CSSProperties}
        >
          <div className="max-w-3xl mx-auto">
            <p className="hero-text-1 text-sm md:text-base uppercase tracking-[0.2em] text-[#00e5df] font-semibold mb-3">
              {slides[current].subtitle}
            </p>
            <h2 className="hero-text-2 text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-snug md:leading-tight">
              {slides[current].title}
            </h2>
            <p className="hero-text-3 mt-5 text-base md:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
              {slides[current].description}
            </p>
            <div className="hero-text-4 mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link href="/contact">
                <Button
                  className="bg-[#00908C] hover:bg-[#007370] text-white font-semibold px-8 py-3 text-base btn-glow w-full sm:w-auto"
                  size="lg"
                >
                  Get a Quote
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  className="bg-white/15 backdrop-blur-sm border border-white/30 text-white hover:bg-white/25 hover:text-white font-semibold px-8 py-3 text-base w-full sm:w-auto"
                  size="lg"
                >
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="slider-arrow absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-300 hover:scale-110 group"
      >
        <ChevronLeft className="size-5 md:size-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="slider-arrow absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-300 hover:scale-110 group"
      >
        <ChevronRight className="size-5 md:size-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-500 rounded-full ${
              index === current
                ? 'w-10 h-3 bg-[#00908C] shadow-[0_0_12px_rgba(0,144,140,0.5)]'
                : 'w-3 h-3 bg-white/40 hover:bg-white/70 hover:scale-125'
            }`}
          />
        ))}
      </div>

      {/* Side Progress Line */}
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`transition-all duration-500 rounded-full ${
              index === current
                ? 'w-1.5 h-10 bg-[#00908C]'
                : 'w-1.5 h-5 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
