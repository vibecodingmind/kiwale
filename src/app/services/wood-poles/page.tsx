'use client'

import ServicePageLayout, { ServicePageData } from '@/components/ServicePageLayout'

const data: ServicePageData = {
  slug: 'wood-poles',
  title: 'Supply of Wood Poles',
  heroImage: '/images/service-hero-poles.webp',
  introParagraph:
    'At Kiwaleis Investment Limited, we supply high-quality wood poles engineered for a wide range of applications — from electrical line support and telecommunications infrastructure to fencing, construction scaffolding, agriculture, and landscaping. Every pole we deliver is carefully sourced, pressure-treated, and graded to meet both local and international standards. We understand that durability and safety are non-negotiable when it comes to wood poles, which is why our treatment process protects against pests, decay, and extreme weather — ensuring a long-lasting, cost-effective solution for every project.',
  highlights: [
    { label: 'Pressure-Treated', value: 'Durable' },
    { label: 'Pole Types', value: '5+' },
    { label: 'Custom Sizes', value: 'On Request' },
    { label: 'Regional Delivery', value: 'Available' },
  ],
  processSteps: [
    {
      title: 'Project Assessment',
      description: 'We evaluate your specific pole requirements based on application — whether for utility lines, fencing, construction, or agriculture — and recommend the best options.',
      icon: 'clipboard',
    },
    {
      title: 'Sourcing & Treatment',
      description: 'Poles are sourced from sustainable forests and undergo pressure treatment with preservatives that protect against termites, rot, and harsh weather for decades.',
      icon: 'shield',
    },
    {
      title: 'Quality Inspection',
      description: 'Each pole is inspected, measured, and graded against strict quality standards to guarantee structural integrity, straightness, and treatment penetration.',
      icon: 'search',
    },
    {
      title: 'Delivery & Support',
      description: 'We deliver your poles safely to the site with proper handling, and provide guidance on storage and installation practices to maximize service life.',
      icon: 'truck',
    },
  ],
  productsTitle: 'What We Supply',
  categories: [
    {
      title: 'Electric Utility Poles',
      description: 'For power distribution and telecom lines',
    },
    {
      title: 'Fencing Poles',
      description: 'For farms, schools, homes, and boundaries',
    },
    {
      title: 'Construction Support Poles',
      description: 'Scaffolding, sheds, and temporary structures',
    },
    {
      title: 'Agricultural Poles',
      description: 'For plant support, animal enclosures, and more',
    },
    {
      title: 'Custom Sizes',
      description: 'Available upon request to meet your specific requirements',
    },
    {
      title: 'Sustainably Sourced',
      description: 'Environmentally friendly and responsibly harvested wood from certified forests',
    },
    {
      title: 'Pressure-Treated',
      description: 'Maximum durability and protection against pests, termites, and decay for decades',
    },
    {
      title: 'Versatile Use',
      description: 'Suitable across utility, construction, agricultural, and landscaping industries',
    },
    {
      title: 'Timely Delivery',
      description: 'Reliable delivery schedules and bulk supply options to keep your project on track',
    },
    {
      title: 'Custom Treatments',
      description: 'Various treatment options and custom specifications available on demand',
    },
  ],
  ctaTitle: 'Strong, Reliable, and Long-Lasting Wood Poles',
  ctaDescription:
    'Whether you are working on a power line extension, a fencing project, or agricultural infrastructure, Kiwaleis Investment Limited is your trusted supplier for strong, reliable, and long-lasting wood poles. Reach out today for a tailored quote.',
}

export default function WoodPolesPage() {
  return <ServicePageLayout data={data} />
}
