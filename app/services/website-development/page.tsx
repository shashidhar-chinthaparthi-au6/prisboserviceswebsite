import type { Metadata } from 'next';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Website Development Services - Prisbo',
  description: 'Professional website development services. We build modern, responsive, SEO-optimized websites that drive results.',
  openGraph: {
    title: 'Website Development Services - Prisbo',
    description: 'Professional website development services',
  },
};

export default function WebsiteDevelopmentPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Website Development',
    provider: {
      '@type': 'Organization',
      name: 'Prisbo',
    },
    description: 'Professional website development services including responsive design, SEO optimization, and modern UI/UX.',
    areaServed: 'Worldwide',
  };

  return (
    <div className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Hero Image */}
      <div className="container-custom mb-12">
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80"
            alt="Website Development"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white text-center px-4">
              Website Development
            </h1>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80"
                alt="Modern web design"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                alt="Responsive design"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">What We Offer</h2>
            <p className="text-neutral-gray mb-6">
              Our website development services are designed to help your business establish a strong
              online presence. We use the latest technologies and best practices to build websites
              that are fast, secure, and optimized for search engines.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">Key Features</h3>
            <ul className="list-disc pl-6 space-y-2 text-neutral-gray mb-8">
              <li>Responsive design that works on all devices</li>
              <li>SEO optimization for better search engine rankings</li>
              <li>Fast loading times and optimal performance</li>
              <li>Modern UI/UX design that converts visitors</li>
              <li>Content management systems (CMS) integration</li>
              <li>E-commerce solutions</li>
              <li>Secure hosting and maintenance</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4">Our Process</h3>
            <ol className="list-decimal pl-6 space-y-2 text-neutral-gray mb-8">
              <li>Discovery and requirements gathering</li>
              <li>Design and wireframing</li>
              <li>Development and implementation</li>
              <li>Testing and quality assurance</li>
              <li>Launch and deployment</li>
              <li>Ongoing support and maintenance</li>
            </ol>
          </div>

          <div className="mt-12">
            <LeadForm
              interestType="service"
              interestName="Website Development"
              title="Interested in Website Development?"
              subtitle="Get a free consultation and quote for your project."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
