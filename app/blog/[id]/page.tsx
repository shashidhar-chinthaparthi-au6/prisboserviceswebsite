import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const blogPosts: Record<string, { title: string; date: string; category: string; content: string }> = {
  '1': {
    title: 'The Future of Web Development in 2024',
    date: '2024-01-15',
    category: 'Web Development',
    content: `
      The landscape of web development continues to evolve rapidly, with new frameworks, tools, and
      methodologies emerging each year. In 2024, we're seeing several key trends that are shaping
      the future of how we build web applications.

      One of the most significant trends is the continued rise of server-side rendering and static
      site generation. Frameworks like Next.js and Remix are making it easier than ever to build
      fast, SEO-friendly web applications that provide excellent user experiences.

      Another important development is the increasing focus on performance and Core Web Vitals.
      Search engines are placing more emphasis on page speed and user experience metrics, making
      optimization a critical aspect of web development.

      The adoption of TypeScript continues to grow, as developers recognize the benefits of type
      safety and improved developer experience. Modern tooling and frameworks are making TypeScript
      more accessible and easier to work with.

      Looking ahead, we can expect to see more emphasis on accessibility, security, and sustainable
      web development practices. As the web becomes more central to our daily lives, the
      responsibility of developers to create inclusive, secure, and environmentally conscious
      applications becomes increasingly important.
    `,
  },
  '2': {
    title: 'Mobile App Development: Native vs Cross-Platform',
    date: '2024-01-10',
    category: 'Mobile Development',
    content: `
      When starting a mobile app project, one of the first decisions you'll need to make is
      whether to build a native app or use a cross-platform framework. Both approaches have
      their advantages and trade-offs.

      Native development involves building separate apps for iOS and Android using platform-specific
      languages (Swift/Objective-C for iOS, Kotlin/Java for Android). This approach offers the best
      performance, access to platform-specific features, and the most polished user experience.

      Cross-platform frameworks like React Native and Flutter allow you to write code once and
      deploy to both platforms. This can significantly reduce development time and cost, while still
      providing good performance and access to most native features.

      The choice between native and cross-platform depends on several factors: your budget, timeline,
      performance requirements, and the specific features your app needs. For most business
      applications, cross-platform solutions offer an excellent balance of cost, time, and quality.

      However, if your app requires cutting-edge performance, extensive use of platform-specific
      features, or you have the resources for separate development teams, native development may be
      the better choice.
    `,
  },
  '3': {
    title: 'How Custom Software Can Transform Your Business',
    date: '2024-01-05',
    category: 'Business',
    content: `
      In today's competitive business landscape, having the right software tools can make the
      difference between success and failure. While off-the-shelf solutions can work for some
      businesses, custom software offers unique advantages that can transform how you operate.

      Custom software is designed specifically for your business processes, workflows, and goals.
      This means it fits your operations perfectly, rather than forcing you to adapt your
      processes to fit the software. The result is increased efficiency, reduced errors, and
      better outcomes.

      One of the key benefits of custom software is scalability. As your business grows, your
      software can grow with you. You're not limited by the constraints of pre-built solutions,
      and you can add features and capabilities as needed.

      Custom software also provides a competitive advantage. When your software is unique to your
      business, it becomes a differentiator that competitors can't easily replicate. This can
      be especially valuable in industries where efficiency and innovation are key success factors.

      While the initial investment in custom software may be higher than purchasing off-the-shelf
      solutions, the long-term benefits often far outweigh the costs. Custom software can pay for
      itself through increased efficiency, reduced operational costs, and improved customer
      satisfaction.
    `,
  },
  '4': {
    title: 'Best Practices for Software Project Management',
    date: '2023-12-28',
    category: 'Project Management',
    content: `
      Successful software projects don't happen by accident. They require careful planning,
      effective communication, and disciplined execution. Here are some best practices that can
      help ensure your software projects succeed.

      Start with clear requirements. Before writing a single line of code, make sure you have a
      thorough understanding of what needs to be built. This includes functional requirements,
      non-functional requirements, and success criteria. Document everything clearly and get
      stakeholder buy-in.

      Use an agile methodology. Agile development practices, such as Scrum or Kanban, provide
      frameworks for iterative development, regular feedback, and continuous improvement. These
      practices help teams adapt to changing requirements and deliver value incrementally.

      Maintain open communication. Regular stand-ups, demos, and retrospectives keep everyone
      aligned and informed. Make sure stakeholders are involved throughout the project, not just
      at the beginning and end.

      Prioritize quality. Don't sacrifice quality for speed. Implement code reviews, automated
      testing, and continuous integration to catch issues early. Technical debt accumulates quickly
      and can derail a project if not managed properly.

      Finally, be realistic about timelines and resources. Software development is complex, and
      unexpected challenges will arise. Build buffer time into your estimates and be prepared
      to adjust plans as needed.
    `,
  },
};

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = blogPosts[params.id];
  if (!post) {
    return { title: 'Blog Post Not Found - Prisbo' };
  }
  return {
    title: `${post.title} - Prisbo Blog`,
    description: post.content.substring(0, 160),
  };
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id];

  if (!post) {
    notFound();
  }

  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="text-primary hover:underline mb-6 inline-block"
          >
            ← Back to Blog
          </Link>

          <article>
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-semibold text-primary">{post.category}</span>
              <time className="text-sm text-neutral-gray">{post.date}</time>
            </div>
            <h1 className="text-5xl font-bold text-primary mb-6">{post.title}</h1>
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n').map((paragraph, idx) => (
                paragraph.trim() && (
                  <p key={idx} className="text-neutral-gray mb-4">
                    {paragraph.trim()}
                  </p>
                )
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
