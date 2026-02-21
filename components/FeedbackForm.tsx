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

  const inputClass =
    'w-full px-4 py-2 border border-gray-300 dark:border-gold/30 rounded-lg focus:ring-2 focus:ring-primary focus:ring-gold/50 focus:border-transparent bg-white dark:bg-primary-dark dark:text-neutral-white placeholder:text-neutral-gray dark:placeholder:text-neutral-white/50';

  return (
    <div className="bg-white dark:bg-primary-light rounded-lg shadow-lg p-8 border border-transparent dark:border-gold/20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary dark:text-gold mb-2">{title}</h2>
        <p className="text-neutral-gray dark:text-neutral-white/80">{subtitle}</p>
      </div>

      {submitStatus && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            submitStatus.type === 'success'
              ? 'bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-700'
              : 'bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-700'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-dark-gray dark:text-neutral-white mb-1">
            Name <span className="text-secondary">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClass}
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-dark-gray dark:text-neutral-white mb-1">
            Email <span className="text-secondary">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClass}
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-dark-gray dark:text-neutral-white mb-2">
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
                    : 'text-gray-300 dark:text-gold/40 hover:text-yellow-400 dark:hover:text-gold'
                }`}
                aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
              >
                ★
              </button>
            ))}
          </div>
          {formData.rating > 0 && (
            <p className="text-sm text-neutral-gray dark:text-neutral-white/70 mt-1">
              {formData.rating === 5 && 'Excellent!'}
              {formData.rating === 4 && 'Great!'}
              {formData.rating === 3 && 'Good'}
              {formData.rating === 2 && 'Fair'}
              {formData.rating === 1 && 'Poor'}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-neutral-dark-gray dark:text-neutral-white mb-1">
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
            className={inputClass}
          >
            <option value="general" className="bg-white dark:bg-primary-dark text-primary dark:text-neutral-white">General Feedback</option>
            <option value="service" className="bg-white dark:bg-primary-dark text-primary dark:text-neutral-white">Service Feedback</option>
            <option value="website" className="bg-white dark:bg-primary-dark text-primary dark:text-neutral-white">Website Feedback</option>
            <option value="suggestion" className="bg-white dark:bg-primary-dark text-primary dark:text-neutral-white">Suggestion</option>
            <option value="complaint" className="bg-white dark:bg-primary-dark text-primary dark:text-neutral-white">Complaint</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-dark-gray dark:text-neutral-white mb-1">
            Message <span className="text-secondary">*</span>
            <span className="text-xs text-neutral-gray dark:text-neutral-white/70 ml-2">(minimum 10 characters)</span>
          </label>
          <textarea
            id="message"
            required
            minLength={10}
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={inputClass}
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
