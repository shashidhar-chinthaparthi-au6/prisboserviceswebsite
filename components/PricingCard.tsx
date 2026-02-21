import Link from 'next/link';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  priceInr?: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  ctaText: string;
  ctaLink: string;
  popular?: boolean;
  priceColor?: 'primary' | 'secondary';
  currency?: 'USD' | 'INR';
}

export default function PricingCard({
  name,
  price,
  priceInr,
  period,
  description,
  features,
  ctaText,
  ctaLink,
  popular = false,
  priceColor = 'primary',
  currency = 'USD',
}: PricingCardProps) {
  const displayPrice = currency === 'INR' && priceInr ? priceInr : price;
  const currencySymbol = currency === 'INR' ? '₹' : '$';
  return (
    <div
      className={`relative bg-white dark:bg-primary-light border-2 rounded-lg p-8 transition-all shadow-lg hover:shadow-xl dark:border-gold/20 ${
        popular
          ? 'border-primary dark:border-gold scale-105'
          : 'border-gray-200 dark:border-gold/20 hover:border-primary dark:hover:border-gold'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-primary dark:bg-gold text-white dark:text-primary px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-primary dark:text-gold mb-2">{name}</h3>
        <p className="text-neutral-gray dark:text-neutral-white/80 text-sm mb-4">{description}</p>
      </div>

      <div className="text-center mb-6">
        <div className="flex items-baseline justify-center">
          <span className={`text-5xl font-bold mr-2 ${
            priceColor === 'primary' ? 'text-primary dark:text-gold' : 'text-secondary dark:text-gold'
          }`}>
            {currencySymbol}{displayPrice}
          </span>
          {period && (
            <span className="text-neutral-gray dark:text-neutral-white/70 text-lg">{period}</span>
          )}
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            {feature.included ? (
              <span className="text-primary dark:text-gold mr-3 text-xl flex-shrink-0">✓</span>
            ) : (
              <span className="text-gray-400 dark:text-neutral-white/40 mr-3 text-xl flex-shrink-0">✗</span>
            )}
            <span
              className={`${
                feature.included ? 'text-neutral-gray dark:text-neutral-white/80' : 'text-gray-400 dark:text-neutral-white/50 line-through'
              }`}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href={ctaLink}
        className={`block w-full text-center font-semibold py-3 px-6 rounded-lg transition-colors ${
          popular
            ? 'bg-primary hover:bg-primary-dark text-white'
            : 'bg-secondary hover:bg-secondary-dark text-white'
        }`}
      >
        {ctaText}
      </Link>
    </div>
  );
}
