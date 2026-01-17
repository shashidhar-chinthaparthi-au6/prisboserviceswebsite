import type { Metadata } from 'next';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Custom Software Solutions - Prisbo',
  description: 'Tailored software solutions designed specifically for your business needs. Enterprise applications, automation, and more.',
  openGraph: {
    title: 'Custom Software Solutions - Prisbo',
    description: 'Tailored software solutions for your business',
  },
};

export default function CustomSoftwareSolutionsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Custom Software Solutions',
    provider: {
      '@type': 'Organization',
      name: 'Prisbo',
    },
    description: 'Tailored software solutions designed specifically for your business needs.',
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
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
            alt="Custom Software Solutions"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white text-center px-4">
              Custom Software Solutions
            </h1>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Custom software"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Enterprise solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Custom Software?</h2>
            <p className="text-neutral-gray mb-6">
              Off-the-shelf solutions often fall short of meeting your unique business needs.
              Custom software is designed specifically for your workflows, processes, and goals,
              giving you a competitive advantage.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">What We Build</h3>
            <ul className="list-disc pl-6 space-y-2 text-neutral-gray mb-8">
              <li>Enterprise resource planning (ERP) systems</li>
              <li>Customer relationship management (CRM) platforms</li>
              <li>Business process automation tools</li>
              <li>Data analytics and reporting dashboards</li>
              <li>API development and integration</li>
              <li>Cloud-based applications</li>
              <li>Workflow management systems</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4">Our Approach</h3>
            <ol className="list-decimal pl-6 space-y-2 text-neutral-gray mb-8">
              <li>Deep understanding of your business needs</li>
              <li>Architecture and system design</li>
              <li>Agile development methodology</li>
              <li>Continuous testing and quality assurance</li>
              <li>Deployment and training</li>
              <li>Ongoing support and evolution</li>
            </ol>

            <h3 className="text-2xl font-bold text-primary mb-4">Technologies We Use</h3>
            <ul className="list-disc pl-6 space-y-2 text-neutral-gray mb-8">
              <li>Modern frameworks (Next.js, React, Node.js)</li>
              <li>Cloud platforms (AWS, Azure, GCP)</li>
              <li>Databases (MongoDB, PostgreSQL, MySQL)</li>
              <li>Microservices architecture</li>
              <li>Containerization (Docker, Kubernetes)</li>
            </ul>
          </div>

          <div className="mt-12">
            <LeadForm
              interestType="service"
              interestName="Custom Software Solutions"
              title="Need a Custom Solution?"
              subtitle="Tell us about your requirements and we'll design the perfect software for your business."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
