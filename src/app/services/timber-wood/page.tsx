'use client'

import ServicePageLayout, { ServicePageData } from '@/components/ServicePageLayout'

const data: ServicePageData = {
  slug: 'timber-wood',
  title: 'Supply of Timber Wood',
  heroImage: '/images/service-hero-timber.webp',
  introParagraph:
    'At Kiwaleis Investment Limited, we offer a comprehensive range of high-quality timber wood products designed to meet the diverse needs of construction, woodworking, and specialized projects. Whether you are building a new home, renovating an existing structure, or crafting bespoke furniture, we supply timber that is durable, versatile, and responsibly sourced from trusted suppliers. Our team works closely with you to understand your specifications, ensuring every piece of timber we deliver matches your exact requirements for strength, finish, and sustainability.',
  highlights: [
    { label: 'Soft & Hardwood', value: 'Options' },
    { label: 'Custom Cuts', value: 'Available' },
    { label: 'Sustainably Sourced', value: 'Certified' },
    { label: 'Bulk Supply', value: 'Ready' },
  ],
  processSteps: [
    {
      title: 'Specify Your Needs',
      description: 'Share your project details with us — timber type, dimensions, quantity, and any special treatment or finish requirements you need.',
      icon: 'clipboard',
    },
    {
      title: 'Quality Selection',
      description: 'We source and grade timber from certified forests and mills, matching each piece to your specifications for strength, grain, and moisture content.',
      icon: 'search',
    },
    {
      title: 'Processing & Treatment',
      description: 'Timber is cut, treated, and finished to your requirements — including kiln drying, pressure treatment, and custom milling for specialized applications.',
      icon: 'shield',
    },
    {
      title: 'Prompt Delivery',
      description: 'Your order is carefully packed and delivered to your site on schedule, with handling protocols that preserve timber quality from warehouse to project.',
      icon: 'truck',
    },
  ],
  productsTitle: 'What We Supply',
  categories: [
    {
      title: 'Softwood Timber',
      description: 'Lightweight, easy to handle, and affordable — ideal for framing, structural work, and general construction. Available in standard and custom dimensions.',
    },
    {
      title: 'Hardwood Timber',
      description: 'Renowned for strength, durability, and rich natural beauty — perfect for flooring, furniture, cabinetry, and high-end architectural applications.',
    },
    {
      title: 'Timber Boards & Planks',
      description: 'A wide selection of boards and planks in various sizes, thicknesses, and finishes for flooring, wall paneling, decking, and custom woodworking.',
    },
    {
      title: 'Timber Beams & Rafters',
      description: 'Strong, reliable structural beams designed for roof framing and support systems — engineered for long-lasting performance across all building types.',
    },
    {
      title: 'Timber for Furniture & Carpentry',
      description: 'Premium wood varieties carefully selected for furniture making and fine carpentry — delivering the grain quality and workability craftsmen demand.',
    },
    {
      title: 'Timber for Decorative Applications',
      description: 'Specialty timber for internal and external decorative finishes including cladding, moldings, trim, and architectural woodwork that elevates any space.',
    },
  ],
  ctaTitle: 'Get the Right Timber for Your Project',
  ctaDescription:
    'Whether you are building, renovating, or creating bespoke furniture, Kiwaleis Investment Limited provides timber wood that is reliable, durable, and tailored to your exact needs. Contact us today and let us be your trusted partner for all your timber supply requirements.',
}

export default function TimberWoodPage() {
  return <ServicePageLayout data={data} />
}
