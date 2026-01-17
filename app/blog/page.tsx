import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - Prisbo | Software Development Insights',
  description: 'Read our latest articles about software development, technology trends, and business insights.',
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development in 2024',
      excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
      date: '2024-01-15',
      category: 'Web Development',
    },
    {
      id: 2,
      title: 'Mobile App Development: Native vs Cross-Platform',
      excerpt: 'A comprehensive guide to choosing between native and cross-platform mobile app development.',
      date: '2024-01-10',
      category: 'Mobile Development',
    },
    {
      id: 3,
      title: 'How Custom Software Can Transform Your Business',
      excerpt: 'Discover how custom software solutions can give your business a competitive edge.',
      date: '2024-01-05',
      category: 'Business',
    },
    {
      id: 4,
      title: 'Best Practices for Software Project Management',
      excerpt: 'Learn the essential practices for managing software development projects successfully.',
      date: '2023-12-28',
      category: 'Project Management',
    },
  ];

  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-primary mb-6">Blog</h1>
          <p className="text-xl text-neutral-gray mb-12">
            Insights, tips, and updates from the world of software development.
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
