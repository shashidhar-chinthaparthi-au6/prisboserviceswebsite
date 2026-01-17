import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LeadForm from '@/components/LeadForm';

const products: Record<string, { name: string; description: string; details: string[] }> = {
  'product-1': {
    name: 'Business Management Suite',
    description: 'Comprehensive business management solution with CRM, project management, and analytics.',
    details: [
      'Complete CRM system for managing customer relationships',
      'Project management tools with task tracking and team collaboration',
      'Advanced analytics dashboard with real-time insights',
      'Customizable workflows to match your business processes',
      'Integration with popular business tools',
      'Mobile app for iOS and Android',
      'Secure cloud hosting with 99.9% uptime guarantee',
    ],
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
