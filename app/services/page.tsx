import type { Metadata } from 'next';
import Link from 'next/link';
import ServicesPricingSection from '@/components/ServicesPricingSection';

export const metadata: Metadata = {
  title: 'Services - Prisbo | Software Development Services',
  description: 'Explore our comprehensive software development services including website development, mobile app development, and custom software solutions.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Website Development',
      description: 'Modern, responsive websites built with the latest technologies. We create fast, SEO-optimized websites that convert visitors into customers.',
      href: '/services/website-development',
      features: ['Responsive Design', 'SEO Optimization', 'Fast Performance', 'Modern UI/UX'],
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. We build apps that users love and businesses rely on.',
      href: '/services/mobile-app-development',
      features: ['iOS & Android', 'Cross-Platform', 'Native Performance', 'App Store Optimization'],
    },
    {
      title: 'Custom Software Solutions',
      description: 'Tailored software solutions designed specifically for your business needs. From enterprise applications to automation tools.',
      href: '/services/custom-software-solutions',
      features: ['Custom Development', 'Enterprise Solutions', 'API Integration', 'Scalable Architecture'],
    },
    {
      title: 'Quick & Affordable Websites',
      description: 'Subdomain sites, digital visiting cards, portfolios, WhatsApp catalogues, and monthly plans. Perfect for local shops and freelancers.',
      href: '/services/quick-websites',
      features: ['From ₹199', 'Digital Cards', 'Portfolios', 'Monthly Plans'],
    },
  ];

  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">Our Services</h1>
          <p className="text-xl text-neutral-gray">
            Comprehensive software development services to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.href}
              className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-primary transition-colors"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">{service.title}</h2>
              <p className="text-neutral-gray mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-neutral-gray">
                    <span className="text-secondary mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <ServicesPricingSection />

        <div className="text-center">
          <p className="text-lg text-neutral-gray mb-4">
            Not sure which service fits your needs?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
