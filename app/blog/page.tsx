import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - Prisbo | Software Development Insights',
  description: 'Read our latest articles about software development, technology trends, website development costs, and business insights.',
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 'website-development-cost-india',
      title: 'Website Development Cost in India: Complete Guide 2024',
      excerpt: 'Understanding website development costs in India. Learn about pricing factors, what to expect, and how to get the best value for your investment.',
      date: '2024-01-20',
      category: 'Web Development',
    },
    {
      id: 'choose-software-development-company',
      title: 'How to Choose a Software Development Company: 10 Essential Tips',
      excerpt: 'A comprehensive guide to selecting the right software development partner. Learn what to look for, questions to ask, and red flags to avoid.',
      date: '2024-01-15',
      category: 'Business',
    },
    {
      id: 'nextjs-vs-react-business-websites',
      title: 'Next.js vs React for Business Websites: Which Should You Choose?',
      excerpt: 'Comparing Next.js and React for business websites. Understand the differences, use cases, and which framework is right for your project.',
      date: '2024-01-10',
      category: 'Web Development',
    },
  ];

  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-primary mb-6">Blog</h1>
          <p className="text-xl text-neutral-gray mb-12">
            Insights, tips, and updates from the world of software development. Learn about 
            <Link href="/services" className="text-primary hover:underline mx-1">our services</Link>
            and industry best practices.
          </p>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-primary transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-primary">{post.category}</span>
                  <time className="text-sm text-neutral-gray">{post.date}</time>
                </div>
                <h2 className="text-2xl font-bold text-primary mb-3">{post.title}</h2>
                <p className="text-neutral-gray mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-secondary font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
