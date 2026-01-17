import { PricingConfig } from '@/types/pricing';

// Default pricing configuration
export const defaultPricingConfig: PricingConfig = {
  plans: {
    starter: {
      planName: 'Starter',
      basePrice: 200, // Base cost
      components: [
        { name: 'Development Time', cost: 100, percentage: 50 },
        { name: 'Infrastructure & Hosting', cost: 30, percentage: 15 },
        { name: 'Support & Maintenance', cost: 40, percentage: 20 },
        { name: 'SEO & Marketing', cost: 20, percentage: 10 },
        { name: 'Overhead & Operations', cost: 10, percentage: 5 },
      ],
      profitMargin: 49.5, // 49.5% profit margin
      finalPrice: 299,
      currency: 'USD',
    },
    professional: {
      planName: 'Professional',
      basePrice: 400,
      components: [
        { name: 'Development Time', cost: 200, percentage: 50 },
        { name: 'Infrastructure & Hosting', cost: 60, percentage: 15 },
        { name: 'Support & Maintenance', cost: 80, percentage: 20 },
        { name: 'SEO & Marketing', cost: 40, percentage: 10 },
        { name: 'Overhead & Operations', cost: 20, percentage: 5 },
      ],
      profitMargin: 49.75, // 49.75% profit margin
      finalPrice: 599,
      currency: 'USD',
    },
    enterprise: {
      planName: 'Enterprise',
      basePrice: 500,
      components: [
        { name: 'Development Time', cost: 250, percentage: 50 },
        { name: 'Infrastructure & Hosting', cost: 75, percentage: 15 },
        { name: 'Support & Maintenance', cost: 100, percentage: 20 },
        { name: 'SEO & Marketing', cost: 50, percentage: 10 },
        { name: 'Overhead & Operations', cost: 25, percentage: 5 },
      ],
      profitMargin: 99.8, // 99.8% profit margin
      finalPrice: 999,
      currency: 'USD',
    },
  },
  exchangeRate: 83, // USD to INR conversion rate
  lastUpdated: new Date().toISOString(),
};

// Calculate profit details
export function calculateProfit(basePrice: number, finalPrice: number) {
  const profit = finalPrice - basePrice;
  const profitMargin = (profit / basePrice) * 100;
  const profitPercentage = (profit / finalPrice) * 100;
  
  return {
    profit,
    profitMargin,
    profitPercentage,
  };
}

// Convert USD to INR
export function convertToINR(usdAmount: number, exchangeRate: number): number {
  return Math.round(usdAmount * exchangeRate);
}

// Get pricing config (in future, this can fetch from database)
export function getPricingConfig(): PricingConfig {
  // For now, return default config
  // Later, this can fetch from MongoDB or environment variables
  return defaultPricingConfig;
}
