'use client';

import { useState } from 'react';
import Link from 'next/link';
import PricingCard from './PricingCard';
import CurrencyToggle from './CurrencyToggle';

export default function PricingSection() {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

  return (
    <section className="section-luxury bg-gradient-to-b from-neutral-white to-white">
      <div className="container-luxury">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-primary mb-4 tracking-tight">
            Premium <span className="text-luxury-gradient">Pricing</span>
          </h2>
          <div className="divider-luxury w-24 mx-auto mb-4"></div>
          <p className="text-xl text-neutral-gray tracking-wide max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include support and maintenance.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <CurrencyToggle currency={currency} onCurrencyChange={setCurrency} />
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-8">
          <PricingCard
            name="Starter"
            price="299"
            priceInr="24,900"
            description="Perfect for small businesses getting started"
            features={[
              { text: 'Basic Website/App Development', included: true },
              { text: 'Email Support', included: true },
              { text: 'Monthly Maintenance', included: true },
              { text: 'Basic SEO Optimization', included: true },
              { text: 'Up to 5 Pages', included: true },
              { text: 'Priority Support', included: false },
              { text: 'Advanced Features', included: false },
            ]}
            ctaText="Get Started"
            ctaLink="/contact"
            priceColor="secondary"
            currency={currency}
          />

          <PricingCard
            name="Professional"
            price="599"
            priceInr="49,800"
            description="Ideal for growing businesses"
            features={[
              { text: 'Full Website/App Development', included: true },
              { text: 'Priority Email Support', included: true },
              { text: 'Weekly Maintenance', included: true },
              { text: 'Advanced SEO Optimization', included: true },
              { text: 'Unlimited Pages', included: true },
              { text: 'Priority Support (24/7)', included: true },
              { text: 'Advanced Features & Integrations', included: true },
            ]}
            ctaText="Get Started"
            ctaLink="/contact"
            popular={true}
            priceColor="primary"
            currency={currency}
          />

          <PricingCard
            name="Enterprise"
            price="999"
            priceInr="83,000"
            description="For large businesses with custom needs"
            features={[
              { text: 'Custom Software Solutions', included: true },
              { text: 'Dedicated Support Team', included: true },
              { text: 'Daily Maintenance & Updates', included: true },
              { text: 'Full SEO & Marketing Support', included: true },
              { text: 'Unlimited Everything', included: true },
              { text: '24/7 Priority Support', included: true },
              { text: 'Custom Features & Development', included: true },
            ]}
            ctaText="Contact Sales"
            ctaLink="/contact"
            priceColor="secondary"
            currency={currency}
          />
        </div>

        <div className="text-center mt-8">
          <p className="text-neutral-gray mb-4 text-lg tracking-wide">
            All plans include free consultation and flexible payment options.
          </p>
          <Link
            href="/contact"
            className="text-gold font-semibold hover:text-accent transition-colors inline-flex items-center gap-2 tracking-wide group"
          >
            Need a custom quote? Contact us
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
