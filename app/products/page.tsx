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
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      isLive: true,
      liveUrl: 'https://bms.prisboservices.com/',
    },
    {
      id: 'product-2',
      name: 'E-Commerce Platform',
      description: 'Full-featured e-commerce platform with inventory management, payment processing, and order tracking.',
      features: ['Inventory Management', 'Payment Gateway', 'Order Tracking', 'Customer Portal'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      isLive: false,
    },
    {
      id: 'product-3',
      name: 'Analytics Dashboard',
      description: 'Real-time analytics and reporting dashboard for data-driven business decisions.',
      features: ['Real-time Data', 'Custom Reports', 'Data Visualization', 'Export Options'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      isLive: false,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-luxury bg-gradient-to-b from-white to-neutral-white -mt-20 lg:-mt-24 pt-20 lg:pt-24">
        <div className="container-luxury">
          <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-luxury-lg">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
              alt="Our Products"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 tracking-tight animate-fade-in-up">
                  <span className="text-luxury-gradient">Our Products</span>
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wider text-gold/90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  Powerful software products designed to help your business grow and succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-luxury">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="card-luxury overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl lg:text-3xl font-serif font-bold text-primary mb-4 tracking-tight">{product.name}</h2>
                <p className="text-neutral-gray mb-6 leading-relaxed tracking-wide">{product.description}</p>
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-neutral-gray group/feature">
                      <span className="text-gold mr-3 mt-1 text-lg group-hover/feature:scale-110 transition-transform">◆</span>
                      <span className="tracking-wide">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3 flex-wrap">
                  {product.isLive && product.liveUrl ? (
                    <>
                      <a
                        href={product.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-luxury"
                      >
                        <span className="relative z-10">Try Now</span>
                      </a>
                      <Link
                        href={`/products/${product.id}`}
                        className="btn-luxury-secondary"
                      >
                        <span className="relative z-10">Learn More</span>
                      </Link>
                    </>
                  ) : (
                    <Link
                      href={`/products/${product.id}`}
                      className="btn-luxury-secondary"
                    >
                      <span className="relative z-10">Learn More</span>
                    </Link>
                  )}
                </div>
                {product.isLive && (
                  <div className="mt-4">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gold/10 text-gold border border-gold/30 tracking-wider">
                      <span className="w-2 h-2 bg-gold rounded-full mr-2 animate-pulse shadow-gold"></span>
                      Live & Available
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-luxury p-8 lg:p-12">
            <LeadForm
              interestType="product"
              interestName="Product Inquiry"
              title="Interested in Our Products?"
              subtitle="Get more information about our software products and pricing."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
