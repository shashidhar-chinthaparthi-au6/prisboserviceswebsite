'use client';

import { useState, FormEvent } from 'react';
import { usePathname } from 'next/navigation';
import { LeadFormData } from '@/types/lead';

interface LeadFormProps {
  interestType: 'service' | 'product';
  interestName: string;
  title?: string;
  subtitle?: string;
}

export default function LeadForm({
  interestType,
  interestName,
  title = 'Get in Touch',
  subtitle = 'Fill out the form below and we\'ll get back to you soon.',
}: LeadFormProps) {
  const pathname = usePathname();
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: '',
    interestType,
    interestName,
    message: '',
    sourcePage: pathname || '/',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          sourcePage: pathname || '/',
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Thank you! We will contact you soon.',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          interestType,
          interestName,
          message: '',
          sourcePage: pathname || '/',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-neutral-gray mb-6">{subtitle}</p>

      {submitStatus.type && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            submitStatus.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-dark-gray mb-1">
            Full Name <span className="text-secondary">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-dark-gray mb-1">
            Email <span className="text-secondary">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-dark-gray mb-1">
            Phone (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="+91 8792790406"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-dark-gray mb-1">
            Message <span className="text-secondary">*</span>
            <span className="text-xs text-neutral-gray ml-2">(minimum 5 characters)</span>
          </label>
          <textarea
            id="message"
            required
            minLength={5}
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
