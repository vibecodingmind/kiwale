'use client'

import TopHeader from '@/components/TopHeader'
import Navbar from '@/components/Navbar'
import HeroSlider from '@/components/HeroSlider'
import Features from '@/components/Features'
import AboutBanner from '@/components/AboutBanner'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import MapSection from '@/components/MapSection'
import FooterSection from '@/components/FooterSection'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <AboutBanner />
        <Features />
        <Services />
        <WhyChooseUs />
        <MapSection />
      </main>
      <FooterSection />
    </div>
  )
}
