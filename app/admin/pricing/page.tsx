'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PricingConfig, PricingBreakdown } from '@/types/pricing';
import { defaultPricingConfig, calculateProfit, convertToINR } from '@/lib/pricing';

export default function AdminPricingPage() {
  const router = useRouter();
  const [config, setConfig] = useState<PricingConfig>(defaultPricingConfig);
  const [activePlan, setActivePlan] = useState<'starter' | 'professional' | 'enterprise'>('starter');
  const [exchangeRate, setExchangeRate] = useState<number>(83);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    // Check authentication (you can add proper auth check here)
    // For now, we'll just load the config
    loadConfig();
  }, []);

  const loadConfig = () => {
    // In future, load from API/database
    setConfig(defaultPricingConfig);
    setExchangeRate(defaultPricingConfig.exchangeRate);
  };

  const handleSave = async () => {
    setIsSaving(true);
    setMessage(null);
    
    try {
      // In future, save to API/database
      // For now, just show success message
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage({ type: 'success', text: 'Pricing configuration saved successfully!' });
      
      // Update last updated timestamp
      setConfig({
        ...config,
        exchangeRate,
        lastUpdated: new Date().toISOString(),
      });
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to save pricing configuration.' });
    } finally {
      setIsSaving(false);
    }
  };

  const updatePlan = (planKey: 'starter' | 'professional' | 'enterprise', updates: Partial<PricingBreakdown>) => {
    setConfig({
      ...config,
      plans: {
        ...config.plans,
        [planKey]: {
          ...config.plans[planKey],
          ...updates,
        },
      },
    });
  };

  const updateComponent = (
    planKey: 'starter' | 'professional' | 'enterprise',
    componentIndex: number,
    updates: { name?: string; cost?: number; percentage?: number }
  ) => {
    const plan = config.plans[planKey];
    const newComponents = [...plan.components];
    newComponents[componentIndex] = {
      ...newComponents[componentIndex],
      ...updates,
    };

    // Recalculate base price
    const newBasePrice = newComponents.reduce((sum, comp) => sum + comp.cost, 0);
    
    // Recalculate percentages
    const updatedComponents = newComponents.map(comp => ({
      ...comp,
      percentage: (comp.cost / newBasePrice) * 100,
    }));

    updatePlan(planKey, {
      components: updatedComponents,
      basePrice: newBasePrice,
    });
  };

  const updateFinalPrice = (planKey: 'starter' | 'professional' | 'enterprise', finalPrice: number) => {
    const plan = config.plans[planKey];
    const profitDetails = calculateProfit(plan.basePrice, finalPrice);
    
    updatePlan(planKey, {
      finalPrice,
      profitMargin: profitDetails.profitMargin,
    });
  };

  const currentPlan = config.plans[activePlan];
  const profitDetails = calculateProfit(currentPlan.basePrice, currentPlan.finalPrice);

  return (
    <div className="py-8">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-primary">Pricing Management</h1>
          <button
            onClick={() => router.push('/admin')}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
          >
            Back to Admin
          </button>
        </div>

        {message && (
          <div className={`mb-4 p-4 rounded-lg ${
            message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {message.text}
          </div>
        )}

        {/* Exchange Rate */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <label className="block text-sm font-medium text-primary mb-2">
            Exchange Rate (USD to INR):
          </label>
          <input
            type="number"
            value={exchangeRate}
            onChange={(e) => setExchangeRate(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            step="0.01"
          />
        </div>

        {/* Plan Selector */}
        <div className="flex gap-4 mb-6">
          {(['starter', 'professional', 'enterprise'] as const).map((planKey) => (
            <button
              key={planKey}
              onClick={() => setActivePlan(planKey)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activePlan === planKey
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {config.plans[planKey].planName}
            </button>
          ))}
        </div>

        {/* Plan Editor */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Edit {currentPlan.planName} Plan
          </h2>

          {/* Final Price */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-primary mb-2">
              Final Price (USD):
            </label>
            <input
              type="number"
              value={currentPlan.finalPrice}
              onChange={(e) => updateFinalPrice(activePlan, Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              step="0.01"
            />
            <p className="text-sm text-gray-500 mt-1">
              INR: ₹{convertToINR(currentPlan.finalPrice, exchangeRate).toLocaleString('en-IN')}
            </p>
          </div>

          {/* Components */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-primary mb-4">Cost Components:</h3>
            <div className="space-y-4">
              {currentPlan.components.map((component, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1">
                        Component Name:
                      </label>
                      <input
                        type="text"
                        value={component.name}
                        onChange={(e) => updateComponent(activePlan, index, { name: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1">
                        Cost (USD):
                      </label>
                      <input
                        type="number"
                        value={component.cost}
                        onChange={(e) => updateComponent(activePlan, index, { cost: Number(e.target.value) })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        step="0.01"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        INR: ₹{convertToINR(component.cost, exchangeRate).toLocaleString('en-IN')}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1">
                        Percentage:
                      </label>
                      <input
                        type="number"
                        value={component.percentage.toFixed(2)}
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                      />
                      <p className="text-xs text-gray-500 mt-1">Auto-calculated</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profit Summary */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-primary mb-4">Profit Summary:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600">Base Cost:</p>
                <p className="text-xl font-bold text-primary">
                  ${currentPlan.basePrice.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Profit:</p>
                <p className="text-xl font-bold text-green-600">
                  ${profitDetails.profit.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Profit Margin:</p>
                <p className="text-xl font-bold text-green-600">
                  {profitDetails.profitMargin.toFixed(2)}%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end gap-4">
          <button
            onClick={loadConfig}
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold transition-colors"
          >
            Reset Changes
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-6 py-3 bg-primary hover:bg-red-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? 'Saving...' : 'Save Configuration'}
          </button>
        </div>
      </div>
    </div>
  );
}
