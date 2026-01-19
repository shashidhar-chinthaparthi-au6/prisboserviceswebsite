import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Products - Prisbo | Software Products',
  description: 'Explore our software products designed to help businesses streamline operations and boost productivity.',
};

export default function ProductsPage() {
  const products = [
    {
      id: 'product-1',
      name: 'Business Management Suite',
      description: 'Complete business management suite to manage customers, projects, teams, and analytics all in one integrated platform. Built for scale, designed for efficiency.',
      features: ['CRM Integration', 'Project Tracking', 'Analytics Dashboard', 'Team Collaboration'],
      isLive: true,
      liveUrl: 'https://bms.prisboservices.com/',
    },
    {
      id: 'product-2',
      name: 'E-Commerce Platform',
      description: 'Full-featured e-commerce platform with inventory management, payment processing, and order tracking.',
      features: ['Inventory Management', 'Payment Gateway', 'Order Tracking', 'Customer Portal'],
      isLive: false,
    },
    {
      id: 'product-3',
      name: 'Analytics Dashboard',
      description: 'Real-time analytics and reporting dashboard for data-driven business decisions.',
      features: ['Real-time Data', 'Custom Reports', 'Data Visualization', 'Export Options'],
      isLive: false,
    },
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <div className="container-custom mb-16">
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
            alt="Our Products"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Products</h1>
              <p className="text-xl md:text-2xl">
                Powerful software products designed to help your business grow and succeed.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-primary transition-all shadow-lg hover:shadow-xl"
            >
              <div className="relative h-48">
                <Image
                  src={`https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&sig=${product.id}`}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
              <h2 className="text-2xl font-bold text-primary mb-4">{product.name}</h2>
              <p className="text-neutral-gray mb-6">{product.description}</p>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-neutral-gray">
                    <span className="text-secondary mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                {product.isLive && product.liveUrl ? (
                  <>
                    <a
                      href={product.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-primary hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                    >
                      Try Now
                    </a>
                    <Link
                      href={`/products/${product.id}`}
                      className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                    >
                      Learn More
                    </Link>
                  </>
                ) : (
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                  >
                    Learn More
                  </Link>
                )}
              </div>
              {product.isLive && (
                <div className="mt-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    Live & Available
                  </span>
                </div>
              )}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <LeadForm
            interestType="product"
            interestName="Product Inquiry"
            title="Interested in Our Products?"
            subtitle="Get more information about our software products and pricing."
          />
        </div>
      </div>
    </div>
  );
}
