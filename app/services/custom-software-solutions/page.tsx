import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Custom Software Solutions - Prisbo | Tailored Business Software',
  description: 'Tailored software solutions designed specifically for your business needs. Enterprise applications, automation, CRM, ERP, and custom business software development.',
  openGraph: {
    title: 'Custom Software Solutions - Prisbo',
    description: 'Tailored software solutions for your business',
  },
};

export default function CustomSoftwareSolutionsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Custom Software Solutions',
    provider: {
      '@type': 'Organization',
      name: 'Prisbo',
    },
    description: 'Tailored software solutions designed specifically for your business needs.',
    areaServed: 'Worldwide',
  };

  return (
    <div className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Hero Image */}
      <div className="container-custom mb-12">
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
            alt="Custom software solutions tailored for your business needs"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white text-center px-4">
              Custom Software Solutions
            </h1>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Enterprise custom software development and automation"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Business process automation and workflow management systems"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Common Problems Businesses Face</h2>
            <p className="text-neutral-gray mb-6">
              Many businesses struggle with off-the-shelf software that doesn&apos;t quite fit their 
              unique processes. You might find yourself adapting your workflows to match the software, 
              rather than having software that matches your workflows. This leads to inefficiencies, 
              employee frustration, and missed opportunities for optimization.
            </p>
            <p className="text-neutral-gray mb-6">
              Data silos are another major problem. When different departments use different software 
              systems that don&apos;t communicate, information gets trapped. This makes it difficult 
              to get a complete picture of your business, leading to poor decision-making and 
              duplicated efforts across teams.
            </p>
            <p className="text-neutral-gray mb-8">
              Scalability is also a concern. As your business grows, generic software solutions often 
              become bottlenecks. You might outgrow features, hit user limits, or find that the 
              software can&apos;t handle your increased volume. This forces expensive migrations or 
              workarounds that compromise efficiency.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">Our Solutions</h2>
            <p className="text-neutral-gray mb-6">
              At Prisbo, we build custom software solutions that are designed specifically for your 
              business. Instead of forcing your processes to fit generic software, we create software 
              that fits your processes perfectly. This means higher efficiency, better user adoption, 
              and software that truly serves your business goals.
            </p>
            <p className="text-neutral-gray mb-6">
              We integrate all your systems and data sources, breaking down silos and creating a 
              unified view of your business. Our custom solutions connect your CRM, ERP, inventory 
              systems, and more, giving you real-time insights across all departments. This enables 
              better decision-making and eliminates redundant data entry.
            </p>
            <p className="text-neutral-gray mb-8">
              Our software is built to scale with your business. We design architectures that can 
              grow from startup to enterprise without requiring complete rewrites. As your needs 
              evolve, we can add features, integrate new systems, and optimize performance to keep 
              pace with your growth.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">Why Custom Software?</h2>
            <p className="text-neutral-gray mb-6">
              Off-the-shelf solutions often fall short of meeting your unique business needs. Custom 
              software is designed specifically for your workflows, processes, and goals, giving you 
              a competitive advantage that generic solutions simply can&apos;t provide.
            </p>
            <p className="text-neutral-gray mb-6">
              Custom software gives you complete control over features and functionality. You get 
              exactly what you need, without paying for features you&apos;ll never use. This 
              results in software that&apos;s more efficient, easier to use, and perfectly aligned 
              with your business objectives.
            </p>
            <p className="text-neutral-gray mb-8">
              Perhaps most importantly, custom software becomes a strategic asset for your business. 
              It can automate repetitive tasks, streamline complex processes, and provide insights 
              that help you make better decisions. Over time, this can significantly improve your 
              bottom line and competitive position.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">What We Build</h2>
            <p className="text-neutral-gray mb-6">
              Our custom software solutions cover a wide range of business needs, from enterprise 
              systems to specialized tools. We work with you to understand your requirements and 
              build exactly what you need.
            </p>

            <ul className="list-disc pl-6 space-y-3 text-neutral-gray mb-8">
              <li><strong>Enterprise Resource Planning (ERP) Systems:</strong> Comprehensive systems 
              that manage your entire business operations, from inventory and supply chain to 
              financials and human resources</li>
              <li><strong>Customer Relationship Management (CRM) Platforms:</strong> Custom CRM 
              solutions that track customer interactions, manage sales pipelines, and improve 
              customer relationships</li>
              <li><strong>Business Process Automation Tools:</strong> Software that automates 
              repetitive tasks and workflows, reducing manual work and human error</li>
              <li><strong>Data Analytics and Reporting Dashboards:</strong> Custom dashboards that 
              aggregate data from multiple sources and provide actionable insights</li>
              <li><strong>API Development and Integration:</strong> APIs that connect your various 
              systems and enable seamless data flow</li>
              <li><strong>Cloud-Based Applications:</strong> Scalable cloud solutions that can be 
              accessed from anywhere, with automatic backups and updates</li>
              <li><strong>Workflow Management Systems:</strong> Tools that streamline and automate 
              complex business processes and approval workflows</li>
              <li><strong>Inventory Management Systems:</strong> Custom solutions for tracking 
              inventory, managing stock levels, and optimizing supply chains</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mb-4">Our Development Approach</h2>
            <p className="text-neutral-gray mb-6">
              We follow a proven methodology that ensures your custom software meets your needs and 
              delivers real business value. Our approach is collaborative, transparent, and focused 
              on your success.
            </p>

            <ol className="list-decimal pl-6 space-y-3 text-neutral-gray mb-8">
              <li><strong>Deep Understanding of Your Business:</strong> We start by thoroughly 
              understanding your business processes, pain points, and goals. This ensures the 
              software we build truly serves your needs.</li>
              <li><strong>Architecture and System Design:</strong> We design a robust architecture 
              that can scale with your business and integrate with your existing systems.</li>
              <li><strong>Agile Development Methodology:</strong> We use agile practices to deliver 
              working software incrementally, allowing you to see progress and provide feedback 
              throughout development.</li>
              <li><strong>Continuous Testing and Quality Assurance:</strong> We test thoroughly at 
              every stage to ensure reliability, security, and performance.</li>
              <li><strong>Deployment and Training:</strong> We handle deployment and provide 
              comprehensive training to ensure your team can use the software effectively.</li>
              <li><strong>Ongoing Support and Evolution:</strong> We provide ongoing support and 
              can add features or make improvements as your needs evolve.</li>
            </ol>

            <h2 className="text-3xl font-bold text-primary mb-4">Our Technology Stack</h2>
            <p className="text-neutral-gray mb-6">
              We use modern, proven technologies to build custom software that&apos;s reliable, 
              scalable, and maintainable. Our tech stack is chosen to provide the best balance of 
              performance, development speed, and long-term viability.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-primary mb-4">Frontend Technologies</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-gray mb-4">
                <li><strong>Next.js & React:</strong> Modern frameworks for building responsive, 
                interactive user interfaces</li>
                <li><strong>TypeScript:</strong> Type-safe JavaScript for more reliable and 
                maintainable code</li>
                <li><strong>Tailwind CSS:</strong> Utility-first CSS for rapid UI development</li>
              </ul>
              
              <h3 className="text-xl font-bold text-primary mb-4">Backend & Server Technologies</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-gray mb-4">
                <li><strong>Node.js:</strong> JavaScript runtime for scalable server-side 
                development</li>
                <li><strong>Python:</strong> Versatile language for data processing and backend 
                services</li>
                <li><strong>RESTful APIs & GraphQL:</strong> For efficient data communication and 
                integration</li>
              </ul>
              
              <h3 className="text-xl font-bold text-primary mb-4">Databases & Storage</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-gray mb-4">
                <li><strong>MongoDB:</strong> NoSQL database for flexible data storage</li>
                <li><strong>PostgreSQL:</strong> Robust relational database for complex data 
                relationships</li>
                <li><strong>MySQL:</strong> Reliable database for traditional applications</li>
              </ul>
              
              <h3 className="text-xl font-bold text-primary mb-4">Cloud & Infrastructure</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-gray">
                <li><strong>AWS, Azure, GCP:</strong> Cloud platforms for scalable hosting and 
                services</li>
                <li><strong>Docker & Kubernetes:</strong> Containerization for consistent deployments</li>
                <li><strong>Microservices Architecture:</strong> For scalable, maintainable systems</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Prisbo for Custom Software?</h2>
            <p className="text-neutral-gray mb-6">
              We understand that custom software is a significant investment, and we&apos;re committed 
              to ensuring it delivers real value to your business. Our team combines technical expertise 
              with business acumen to build software that not only works well but also drives business 
              results.
            </p>
            <p className="text-neutral-gray mb-6">
              We take a partnership approach, working closely with you throughout the entire process. 
              From initial discovery to ongoing support, we keep you informed and involved, ensuring 
              the software we build truly serves your business needs.
            </p>
            <p className="text-neutral-gray mb-8">
              Our commitment to quality means we build software that&apos;s not just functional but 
              also maintainable and scalable. We write clean, well-documented code and follow best 
              practices, ensuring your software can evolve with your business for years to come.
            </p>
          </div>

          <div className="bg-primary/10 rounded-lg p-8 mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Ready to Build Your Custom Software?</h2>
            <p className="text-xl text-neutral-gray mb-6">
              Talk to Prisbo about your project. Let&apos;s discuss how we can help you create 
              custom software that transforms your business operations.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg"
            >
              Get Started Today
            </Link>
          </div>

          <div className="mt-12">
            <LeadForm
              interestType="service"
              interestName="Custom Software Solutions"
              title="Need a Custom Solution?"
              subtitle="Tell us about your requirements and we'll design the perfect software for your business."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
