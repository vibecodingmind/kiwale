'use client'

import ServicePageLayout, { ServicePageData } from '@/components/ServicePageLayout'

const data: ServicePageData = {
  slug: 'building-materials',
  title: 'Supply of Building Materials',
  heroImage: '/images/service-hero-building.jpg',
  introParagraph:
    'At Kiwaleis Investment Limited, we are dedicated to providing top-quality building materials to meet the needs of both commercial and residential construction projects across Tanzania. With years of industry expertise, we understand that reliable, durable, and cost-effective materials are the backbone of every successful build. From foundation to finish, our comprehensive inventory ensures you have access to exactly what your project demands — sourced from trusted manufacturers, inspected for quality, and delivered right to your site on schedule.',
  highlights: [
    { label: 'Projects Supplied', value: '500+' },
    { label: 'Material Categories', value: '8+' },
    { label: 'Same-Day Delivery', value: 'Available' },
    { label: 'Quality Guarantee', value: '100%' },
  ],
  processSteps: [
    {
      title: 'Consultation & Assessment',
      description: 'We begin by understanding your project scope, timeline, and material requirements so we can recommend the most suitable products for your build.',
      icon: 'clipboard',
    },
    {
      title: 'Product Selection & Sourcing',
      description: 'Our team sources premium materials from certified suppliers, ensuring every product meets industry standards for strength, durability, and performance.',
      icon: 'search',
    },
    {
      title: 'Delivery to Your Site',
      description: 'We coordinate reliable logistics to deliver your materials directly to the construction site — on time, every time, anywhere across the region.',
      icon: 'truck',
    },
    {
      title: 'Ongoing Support',
      description: 'After delivery, we remain available for reorders, material advice, and any additional supply needs throughout your project lifecycle.',
      icon: 'support',
    },
  ],
  productsTitle: 'What We Supply',
  categories: [
    {
      title: 'Bricks & Blocks',
      description: 'High-strength, durable bricks and concrete blocks for all masonry work — from load-bearing walls to decorative partitions, available in various sizes and grades.',
    },
    {
      title: 'Cement & Concrete',
      description: 'A full range of cement types including Portland, rapid-set, and ready-mix concrete, tailored for foundations, structural work, and general construction.',
    },
    {
      title: 'Roofing Materials',
      description: 'Premium metal roofing sheets, clay and concrete tiles, waterproofing membranes, and ridge caps designed to withstand harsh weather conditions year-round.',
    },
    {
      title: 'Timber & Wood Products',
      description: 'Carefully selected timber for framing, flooring, and finishing touches — sourced for strength, appearance, and long-lasting performance in any environment.',
    },
    {
      title: 'Plumbing & Electrical Supplies',
      description: 'Complete plumbing systems including pipes, fittings, and fixtures, plus electrical wiring, panels, switches, and accessories for full installations.',
    },
    {
      title: 'Paints & Finishes',
      description: 'Premium interior and exterior paints, primers, varnishes, and protective coatings that enhance appearance while extending the life of any building surface.',
    },
    {
      title: 'Tiles & Flooring',
      description: 'An extensive selection of ceramic, porcelain, vinyl, and natural stone tiles — along with adhesives and grout — for floors, walls, and wet areas.',
    },
    {
      title: 'Steel & Reinforcements',
      description: 'High-grade steel bars, rods, mesh, and reinforcement materials engineered to ensure the structural integrity and longevity of any building project.',
    },
  ],
  ctaTitle: 'Your Trusted Partner for Building Materials',
  ctaDescription:
    'Whether you are working on a residential development, commercial construction, or renovation project, Kiwaleis Investment Limited is here to provide the materials you need — on time, within budget, and to the highest standards. Let us be your partner in building success.',
}

export default function BuildingMaterialsPage() {
  return <ServicePageLayout data={data} />
}
