'use client';

interface CurrencyToggleProps {
  currency?: 'USD' | 'INR';
  onCurrencyChange: (currency: 'USD' | 'INR') => void;
}

export default function CurrencyToggle({ currency = 'USD', onCurrencyChange }: CurrencyToggleProps) {
  const toggleCurrency = () => {
    onCurrencyChange(currency === 'USD' ? 'INR' : 'USD');
  };

  return (
    <div className="flex items-center justify-center space-x-2 mb-8">
      <span className={`text-lg font-semibold ${currency === 'USD' ? 'text-primary' : 'text-neutral-gray'}`}>USD</span>
      <button
        onClick={toggleCurrency}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          currency === 'INR' ? 'bg-primary' : 'bg-gray-200'
        }`}
        aria-pressed={currency === 'INR'}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            currency === 'INR' ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <span className={`text-lg font-semibold ${currency === 'INR' ? 'text-primary' : 'text-neutral-gray'}`}>INR</span>
    </div>
  );
}
