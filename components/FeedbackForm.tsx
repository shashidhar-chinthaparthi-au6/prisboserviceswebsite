'use client';

import { useState } from 'react';

interface FeedbackFormProps {
  title?: string;
  subtitle?: string;
}

export default function FeedbackForm({
  title = 'Share Your Feedback',
  subtitle = 'We value your opinion and would love to hear from you.',
}: FeedbackFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    message: '',
    category: 'general' as 'general' | 'service' | 'website' | 'suggestion' | 'complaint',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleRatingClick = (rating: number) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message || 'Thank you for your feedback!' });
        setFormData({
          name: '',
          email: '',
          rating: 0,
          message: '',
          category: 'general',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to submit feedback. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit feedback. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-2">{title}</h2>
        <p className="text-neutral-gray">{subtitle}</p>
      </div>

      {submitStatus && (
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

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-dark-gray mb-1">
            Name <span className="text-secondary">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Your name"
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
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-dark-gray mb-2">
            Rating <span className="text-secondary">*</span>
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleRatingClick(star)}
                className={`text-4xl transition-all ${
                  formData.rating >= star
                    ? 'text-yellow-400'
                    : 'text-gray-300 hover:text-yellow-300'
                }`}
                aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
              >
                ★
              </button>
            ))}
          </div>
          {formData.rating > 0 && (
            <p className="text-sm text-neutral-gray mt-1">
              {formData.rating === 5 && 'Excellent!'}
              {formData.rating === 4 && 'Great!'}
              {formData.rating === 3 && 'Good'}
              {formData.rating === 2 && 'Fair'}
              {formData.rating === 1 && 'Poor'}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-neutral-dark-gray mb-1">
            Category
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) =>
              setFormData({
                ...formData,
                category: e.target.value as typeof formData.category,
              })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="general">General Feedback</option>
            <option value="service">Service Feedback</option>
            <option value="website">Website Feedback</option>
            <option value="suggestion">Suggestion</option>
            <option value="complaint">Complaint</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-dark-gray mb-1">
            Message <span className="text-secondary">*</span>
            <span className="text-xs text-neutral-gray ml-2">(minimum 10 characters)</span>
          </label>
          <textarea
            id="message"
            required
            minLength={10}
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Tell us what you think..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting || formData.rating === 0}
          className="w-full bg-primary hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </form>
    </div>
  );
}
