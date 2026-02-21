import type { Metadata } from 'next';
import Image from 'next/image';
import FeedbackForm from '@/components/FeedbackForm';

export const metadata: Metadata = {
  title: 'Feedback - Prisbo | Share Your Thoughts',
  description: 'Share your feedback about Prisbo. We value your opinion and use it to improve our services.',
};

export default function FeedbackPage() {
  return (
    <div className="py-20">
      {/* Hero Image */}
      <div className="container-custom mb-12">
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
            alt="Feedback and customer satisfaction"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white text-center px-4">
              Share Your Feedback
            </h1>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl text-neutral-gray">
              Your feedback helps us improve our services and better serve our customers. 
              We appreciate you taking the time to share your thoughts with us.
            </p>
          </div>

          <FeedbackForm />

          <div className="mt-12 bg-gray-50 dark:bg-primary-light rounded-lg p-8 border border-transparent dark:border-gold/20">
            <h2 className="text-2xl font-bold text-primary dark:text-gold mb-4">Why Your Feedback Matters</h2>
            <ul className="space-y-3 text-neutral-gray dark:text-neutral-white/80">
              <li className="flex items-start">
                <span className="text-primary dark:text-gold mr-3 text-xl flex-shrink-0">✓</span>
                <span>Helps us improve our services and customer experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary dark:text-gold mr-3 text-xl flex-shrink-0">✓</span>
                <span>Guides our product development and feature priorities</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary dark:text-gold mr-3 text-xl flex-shrink-0">✓</span>
                <span>Enables us to address issues and concerns promptly</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary dark:text-gold mr-3 text-xl flex-shrink-0">✓</span>
                <span>Shapes the future direction of our company</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
