'use client';

import { useState } from 'react';
import Link from 'next/link';
import PricingCard from './PricingCard';
import CurrencyToggle from './CurrencyToggle';

export default function ServicesPricingSection() {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Transparent Pricing
        </h2>
        <p className="text-xl text-neutral-gray">
          Affordable plans starting from just {currency === 'USD' ? '$299' : '₹24,900'}. All plans include support.
        </p>
      </div>

      <CurrencyToggle currency={currency} onCurrencyChange={setCurrency} />

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingCard
          name="Basic"
          price="299"
          priceInr="24,900"
          description="Perfect for small projects"
          features={[
            { text: 'Basic Development', included: true },
            { text: 'Email Support', included: true },
            { text: 'Monthly Updates', included: true },
            { text: 'Basic Features', included: true },
            { text: 'Priority Support', included: false },
          ]}
          ctaText="Choose Plan"
          ctaLink="/contact"
          priceColor="secondary"
          currency={currency}
        />

        <PricingCard
          name="Standard"
          price="599"
          priceInr="49,800"
          description="Most popular choice"
          features={[
            { text: 'Full Development', included: true },
            { text: 'Priority Support', included: true },
            { text: 'Weekly Updates', included: true },
            { text: 'Advanced Features', included: true },
            { text: '24/7 Support', included: true },
          ]}
          ctaText="Choose Plan"
          ctaLink="/contact"
          popular={true}
          priceColor="primary"
          currency={currency}
        />

        <PricingCard
          name="Premium"
          price="999"
          priceInr="83,000"
          description="For enterprise needs"
          features={[
            { text: 'Custom Development', included: true },
            { text: 'Dedicated Support', included: true },
            { text: 'Daily Updates', included: true },
            { text: 'All Features', included: true },
            { text: '24/7 Priority Support', included: true },
          ]}
          ctaText="Choose Plan"
          ctaLink="/contact"
          priceColor="secondary"
          currency={currency}
        />
      </div>
    </div>
  );
}
