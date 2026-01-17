'use client';

import { PricingBreakdown } from '@/types/pricing';
import { calculateProfit, convertToINR } from '@/lib/pricing';
import { useState } from 'react';

interface PricingBreakdownCardProps {
  plan: PricingBreakdown;
  exchangeRate: number;
}

export default function PricingBreakdownCard({ plan, exchangeRate }: PricingBreakdownCardProps) {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const profitDetails = calculateProfit(plan.basePrice, plan.finalPrice);
  
  const displayPrice = (price: number) => {
    return currency === 'USD' 
      ? `$${price.toFixed(2)}` 
      : `₹${convertToINR(price, exchangeRate).toLocaleString('en-IN')}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-red-700 text-white p-6">
        <h3 className="text-2xl font-bold mb-2">{plan.planName}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold">{displayPrice(plan.finalPrice)}</span>
          <span className="text-lg opacity-90">/month</span>
        </div>
      </div>

      <div className="p-6">
        {/* Currency Toggle */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          <span className={`text-sm font-semibold ${currency === 'USD' ? 'text-primary' : 'text-gray-400'}`}>USD</span>
          <button
            onClick={() => setCurrency(currency === 'USD' ? 'INR' : 'USD')}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              currency === 'INR' ? 'bg-primary' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                currency === 'INR' ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm font-semibold ${currency === 'INR' ? 'text-primary' : 'text-gray-400'}`}>INR</span>
        </div>

        {/* Cost Breakdown */}
        <div className="mb-6">
          <h4 className="font-semibold text-primary mb-3">Cost Breakdown:</h4>
          <div className="space-y-2">
            {plan.components.map((component, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <span className="text-neutral-gray">{component.name}</span>
                <span className="font-medium">{displayPrice(component.cost)}</span>
              </div>
            ))}
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between items-center font-semibold">
                <span>Base Cost:</span>
                <span className="text-primary">{displayPrice(plan.basePrice)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profit Section */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-primary mb-3">Profit Analysis:</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-neutral-gray">Profit Amount:</span>
              <span className="font-medium text-green-600">{displayPrice(profitDetails.profit)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-gray">Profit Margin:</span>
              <span className="font-medium text-green-600">{profitDetails.profitMargin.toFixed(2)}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-gray">Profit % of Price:</span>
              <span className="font-medium text-green-600">{profitDetails.profitPercentage.toFixed(2)}%</span>
            </div>
          </div>
        </div>

        {/* Visual Breakdown */}
        <div className="mb-4">
          <h4 className="font-semibold text-primary mb-3 text-sm">Component Distribution:</h4>
          <div className="space-y-2">
            {plan.components.map((component, index) => (
              <div key={index}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-neutral-gray">{component.name}</span>
                  <span>{component.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${component.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="border-t pt-4">
          <div className="flex justify-between items-center text-lg font-bold">
            <span>Final Price:</span>
            <span className="text-primary">{displayPrice(plan.finalPrice)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
