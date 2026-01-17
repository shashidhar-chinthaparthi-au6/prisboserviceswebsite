export interface PricingBreakdown {
  planName: string;
  basePrice: number; // Base cost in USD
  components: {
    name: string;
    cost: number;
    percentage: number; // Percentage of base price
  }[];
  profitMargin: number; // Percentage
  finalPrice: number; // Final price after profit
  currency: 'USD' | 'INR';
}

export interface PricingConfig {
  plans: {
    starter: PricingBreakdown;
    professional: PricingBreakdown;
    enterprise: PricingBreakdown;
  };
  exchangeRate: number; // USD to INR
  lastUpdated: string;
}
