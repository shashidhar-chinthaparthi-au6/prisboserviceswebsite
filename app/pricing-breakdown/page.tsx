import type { Metadata } from 'next';
import { getPricingConfig, convertToINR, calculateProfit } from '@/lib/pricing';
import PricingBreakdownCard from '@/components/PricingBreakdownCard';

export const metadata: Metadata = {
  title: 'Pricing Breakdown - Prisbo Services',
  description: 'Detailed breakdown of our pricing plans including costs, components, and profit margins.',
};

export default function PricingBreakdownPage() {
  const config = getPricingConfig();
  const { starter, professional, enterprise } = config.plans;

  return (
    <div className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Pricing Breakdown
          </h1>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
            Transparent pricing with detailed cost breakdowns. See exactly what goes into each plan and how we calculate our prices.
          </p>
          <p className="text-sm text-neutral-gray mt-4">
            Exchange Rate: 1 USD = ₹{config.exchangeRate} INR
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          <PricingBreakdownCard plan={starter} exchangeRate={config.exchangeRate} />
          <PricingBreakdownCard plan={professional} exchangeRate={config.exchangeRate} />
          <PricingBreakdownCard plan={enterprise} exchangeRate={config.exchangeRate} />
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-primary mb-6">How We Calculate Pricing</h2>
          <div className="space-y-4 text-neutral-gray">
            <div>
              <h3 className="font-semibold text-primary mb-2">Base Cost Components:</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Development Time:</strong> Actual hours spent on development, design, and implementation</li>
                <li><strong>Infrastructure & Hosting:</strong> Server costs, domain, SSL certificates, and hosting services</li>
                <li><strong>Support & Maintenance:</strong> Ongoing maintenance, updates, and customer support</li>
                <li><strong>SEO & Marketing:</strong> Search engine optimization and marketing efforts</li>
                <li><strong>Overhead & Operations:</strong> Business operations, tools, and administrative costs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Profit Calculation:</h3>
              <p className="ml-4">
                Final Price = Base Cost + (Base Cost × Profit Margin %)
              </p>
              <p className="ml-4 text-sm mt-2">
                Profit Margin varies by plan to ensure competitive pricing while maintaining quality service.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Currency Conversion:</h3>
              <p className="ml-4">
                INR prices are calculated using the current exchange rate: 1 USD = ₹{config.exchangeRate} INR
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
