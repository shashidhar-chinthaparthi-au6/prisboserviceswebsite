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
    <div className="py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-primary mb-6">{product.name}</h1>
          <p className="text-xl text-neutral-gray mb-12">{product.description}</p>

          {product.isLive && product.liveUrl && (
            <div className="mb-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border-2 border-primary/20">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-lg font-semibold text-primary">Live & Available Now</span>
                  </div>
                  <p className="text-neutral-gray">This product is fully functional and ready to use.</p>
                </div>
                <a
                  href={product.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  Try Business Management Suite
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          )}

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Features</h2>
            <ul className="list-disc pl-6 space-y-3 text-neutral-gray">
              {product.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <LeadForm
              interestType="product"
              interestName={product.name}
              title={`Interested in ${product.name}?`}
              subtitle="Get more information, pricing, and a demo of this product."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
