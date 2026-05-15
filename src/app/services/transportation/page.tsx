'use client'

import ServicePageLayout, { ServicePageData } from '@/components/ServicePageLayout'

const data: ServicePageData = {
  slug: 'transportation',
  title: 'Transportation Services',
  heroImage: '/images/service-hero-transport.jpg',
  introParagraph:
    'At Kiwale Group Limited, we understand that reliable transportation is the lifeline of every construction and supply project. Whether your materials need to move across town or across borders, our comprehensive transportation services ensure safe, timely, and cost-effective delivery. Backed by a fleet of well-maintained vehicles, a network of international shipping partners, and a team of logistics professionals, we handle the complexity of freight movement so you can focus entirely on building. From single-site deliveries to multi-destination logistics, we are your trusted transportation partner across East and Central Africa.',
  highlights: [
    { label: 'Coverage Area', value: 'E. Africa' },
    { label: 'GPS Tracking', value: 'Real-Time' },
    { label: 'Customs Support', value: 'Full Service' },
    { label: 'Modern Fleet', value: 'Reliable' },
  ],
  processSteps: [
    {
      title: 'Request a Quote',
      description: 'Share your logistics requirements — pickup location, delivery destination, cargo type, and timeline — and we will provide a competitive, transparent quote.',
      icon: 'clipboard',
    },
    {
      title: 'Route Planning',
      description: 'Our logistics team maps the most efficient route for your shipment, whether local or international, optimizing for speed, cost, and safety.',
      icon: 'map',
    },
    {
      title: 'Cargo Handling',
      description: 'Your goods are professionally packed, loaded, and secured using industry best practices to prevent damage and ensure safe transit to the destination.',
      icon: 'package',
    },
    {
      title: 'Real-Time Tracking',
      description: 'Monitor your shipment with live GPS tracking and regular status updates — from pickup through customs clearance to final delivery at your site.',
      icon: 'truck',
    },
  ],
  productsTitle: 'What We Offer',
  categories: [
    {
      title: 'Local Transportation',
      description: 'Efficient, reliable, and cost-effective local delivery services covering both urban centers and rural areas — getting your materials to site quickly and safely across Tanzania.',
    },
    {
      title: 'International Shipping & Freight',
      description: 'With a global network of shipping partners, we handle international transportation from documentation and customs clearance to safe cross-border delivery of goods.',
    },
    {
      title: 'Cargo Handling & Logistics',
      description: 'Expert cargo handling services ensuring your goods are professionally packed, loaded, and transported with care to prevent any damage during transit.',
    },
    {
      title: 'Bulk Transport',
      description: 'Specialized bulk transport for oversized materials and heavy equipment — including cement, steel, construction machinery, and large-volume orders.',
    },
    {
      title: 'Customs Clearance & Documentation',
      description: 'Our experienced team manages all customs documentation, regulatory compliance, and clearance procedures to ensure your international shipments move without delays.',
    },
    {
      title: 'Tracking & Updates',
      description: 'Real-time GPS tracking and proactive status updates throughout the transportation process, giving you full visibility and peace of mind from origin to destination.',
    },
  ],
  ctaTitle: 'Reliable Transportation for Every Project',
  ctaDescription:
    'Whether you are moving materials within the country or shipping goods internationally, Kiwale Group Limited is committed to providing reliable, cost-effective, and timely transportation solutions. Trust us to handle the logistics so you can focus on building.',
}

export default function TransportationPage() {
  return <ServicePageLayout data={data} />
}
