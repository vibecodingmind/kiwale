'use client'

import ServicePageLayout, { ServicePageData } from '@/components/ServicePageLayout'

const data: ServicePageData = {
  slug: 'specialized-materials',
  title: 'Supply of Specialized Building Materials',
  heroImage: '/images/service-hero-specialized.jpg',
  introParagraph:
    'At Kiwaleis Investment Limited, we go beyond the basics to provide specialized building materials designed for the unique demands of modern construction. Our extensive selection includes high-performance materials that deliver superior quality, sustainability, and functionality — whether your project requires fire resistance, acoustic insulation, waterproofing, or eco-friendly solutions. We work with leading manufacturers and innovators to source materials that push the boundaries of performance, ensuring your construction is built to last while meeting the most stringent industry standards and certifications.',
  highlights: [
    { label: 'Green Certified', value: 'Options' },
    { label: 'Fire & Water', value: 'Resistant' },
    { label: 'Acoustic & Insulation', value: 'Solutions' },
    { label: 'Custom Specs', value: 'Available' },
  ],
  processSteps: [
    {
      title: 'Consultation & Needs Analysis',
      description: 'We start by understanding your project challenges — whether it is fire safety, moisture control, energy efficiency, or acoustic performance — to identify the right specialized solutions.',
      icon: 'clipboard',
    },
    {
      title: 'Product Recommendation',
      description: 'Based on your needs, our experts recommend high-performance materials from our curated portfolio, explaining benefits, compliance ratings, and application methods.',
      icon: 'search',
    },
    {
      title: 'Sourcing & Quality Check',
      description: 'Materials are sourced from certified manufacturers and undergo rigorous quality verification to ensure they meet your specifications and industry standards.',
      icon: 'shield',
    },
    {
      title: 'Delivery & Guidance',
      description: 'We deliver your specialized materials on schedule and provide technical guidance on proper installation and handling to maximize performance and longevity.',
      icon: 'truck',
    },
  ],
  productsTitle: 'What We Supply',
  categories: [
    {
      title: 'Green Building Materials',
      description: 'Environmentally-friendly and sustainable materials including recycled products, energy-efficient insulation, and eco-friendly finishes that contribute to green building certifications and reduced environmental impact.',
    },
    {
      title: 'Waterproofing Solutions',
      description: 'Advanced waterproofing membranes, sealants, and coatings engineered to protect your building from water intrusion, ensuring long-term structural durability in any climate.',
    },
    {
      title: 'Fire-Resistant Materials',
      description: 'Fire-rated insulation, fireproof cladding, and fire-resistant boards designed to meet the highest safety standards and provide critical protection in the event of fire.',
    },
    {
      title: 'Acoustic Materials',
      description: 'Professional soundproofing and acoustic control materials for commercial spaces, residential buildings, studios, and auditoriums — ensuring optimal noise reduction and sound quality.',
    },
    {
      title: 'High-Performance Insulation',
      description: 'Thermally efficient insulation solutions including rigid boards, spray foam, and reflective foils that maintain comfortable indoor temperatures and significantly reduce energy costs.',
    },
    {
      title: 'Structural Adhesives & Sealants',
      description: 'Industrial-grade adhesives and sealants for construction applications — ensuring secure, lasting bonds for windows, tiles, panels, and weatherproofing joints.',
    },
    {
      title: 'Precast Concrete Products',
      description: 'Factory-made precast elements such as beams, slabs, and panels that accelerate construction timelines while maintaining consistent quality and dimensional accuracy.',
    },
    {
      title: 'Decorative & Architectural Finishes',
      description: 'Premium decorative stone, glass, cladding materials, and specialty tiles that enhance the aesthetic value of any building while maintaining functional performance.',
    },
    {
      title: 'Masonry & Stone Products',
      description: 'Natural stone, granite, and marble products for both interior and exterior design applications — delivering elegance, durability, and timeless visual appeal.',
    },
    {
      title: 'Reinforced Polymers & Composites',
      description: 'Lightweight yet exceptionally strong composite materials for modern construction, offering flexibility, corrosion resistance, and resilience in extreme weather conditions.',
    },
  ],
  ctaTitle: 'Specialized Materials for Every Need',
  ctaDescription:
    'Whether you are focused on energy efficiency, fire safety, acoustic performance, or sustainable design, Kiwaleis Investment Limited provides the specialized materials that will elevate your project. We deliver top-tier products that meet the highest industry standards — giving you confidence that your construction is built with the best.',
}

export default function SpecializedMaterialsPage() {
  return <ServicePageLayout data={data} />
}
