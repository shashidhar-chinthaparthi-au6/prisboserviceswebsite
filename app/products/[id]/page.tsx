import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';

const products: Record<string, { name: string; description: string; details: string[]; isLive?: boolean; liveUrl?: string }> = {
  'product-1': {
    name: 'Business Management Suite',
    description: 'Complete business management suite to manage customers, projects, teams, and analytics all in one integrated platform. Built for scale, designed for efficiency.',
    details: [
      'CRM Integration - Manage customers and leads with full contact details, status tracking, and activity history',
      'Project Tracking - Track projects from start to finish with task management, deadlines, and customer linking',
      'Analytics Dashboard - Get insights into your business with comprehensive analytics and visual reports',
      'Team Collaboration - Manage your team with role-based permissions, task assignments, and activity logs',
      'Integrated Platform - Everything you need to manage your business in one place',
      'Scalable Architecture - Built for scale, designed for efficiency',
      'Secure & Reliable - Enterprise-grade security and reliability',
    ],
    isLive: true,
    liveUrl: 'https://bms.prisboservices.com/',
  },
  'product-2': {
    name: 'E-Commerce Platform',
    description: 'Full-featured e-commerce platform with inventory management, payment processing, and order tracking.',
    details: [
      'Complete online store setup and customization',
      'Inventory management with real-time stock tracking',
      'Multiple payment gateway integrations',
      'Order management and fulfillment system',
      'Customer portal with order history',
      'Marketing tools and promotional campaigns',
      'Mobile-responsive design',
      'SEO optimization built-in',
    ],
  },
  'product-3': {
    name: 'Analytics Dashboard',
    description: 'Real-time analytics and reporting dashboard for data-driven business decisions.',
    details: [
      'Real-time data visualization',
      'Custom report builder',
      'Multiple data source integrations',
      'Interactive charts and graphs',
      'Scheduled report delivery',
      'Data export in multiple formats',
      'Role-based access control',
      'API for custom integrations',
    ],
  },
};

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = products[params.id];
  if (!product) {
    return { title: 'Product Not Found - Prisbo' };
  }
  return {
    title: `${product.name} - Prisbo Products`,
    description: product.description,
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products[params.id];

  if (!product) {
    notFound();
  }

  return (
    <div>
      <section className="section-luxury bg-gradient-to-b from-white to-neutral-white -mt-20 lg:-mt-24 pt-20 lg:pt-24">
        <div className="container-luxury">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-primary mb-6 tracking-tight">
                <span className="text-luxury-gradient">{product.name}</span>
              </h1>
              <div className="divider-luxury w-24 mx-auto mb-6"></div>
              <p className="text-xl lg:text-2xl text-neutral-gray tracking-wide max-w-3xl mx-auto leading-relaxed">
                {product.description}
              </p>
            </div>

            {product.isLive && product.liveUrl && (
              <div className="mb-12 card-luxury p-8 lg:p-10 bg-gradient-to-r from-gold/10 via-accent/10 to-gold/10 border-gold/30">
                <div className="flex items-center justify-between flex-wrap gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-3 h-3 bg-gold rounded-full animate-pulse shadow-gold"></span>
                      <span className="text-xl font-serif font-semibold text-gold tracking-wider">Live & Available Now</span>
                    </div>
                    <p className="text-neutral-gray tracking-wide">This product is fully functional and ready to use.</p>
                  </div>
                  <a
                    href={product.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury inline-flex items-center gap-2"
                  >
                    <span className="relative z-10">Try {product.name}</span>
                    <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            )}

            <div className="mb-12 lg:mb-16">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-8 tracking-tight">
                Key <span className="text-luxury-gradient">Features</span>
              </h2>
              <div className="divider-luxury w-16 mb-8"></div>
              <ul className="space-y-4">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start group">
                    <span className="text-gold mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">◆</span>
                    <span className="text-lg text-neutral-dark-gray leading-relaxed tracking-wide">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-luxury p-8 lg:p-12">
              <LeadForm
                interestType="product"
                interestName={product.name}
                title={`Interested in ${product.name}?`}
                subtitle="Get more information, pricing, and a demo of this product."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
