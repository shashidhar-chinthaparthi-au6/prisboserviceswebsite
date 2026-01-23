import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Website Development Services - Prisbo | Professional Web Solutions',
  description: 'Professional website development services in India. We build modern, responsive, SEO-optimized websites that drive real business results. Get your website developed today.',
  openGraph: {
    title: 'Website Development Services - Prisbo',
    description: 'Professional website development services for businesses',
  },
};

export default function WebsiteDevelopmentPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Website Development',
    provider: {
      '@type': 'Organization',
      name: 'Prisbo',
    },
    description: 'Professional website development services including responsive design, SEO optimization, and modern UI/UX.',
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
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80"
            alt="Professional website development services for modern businesses"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white text-center px-4">
              Website Development Services
            </h1>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80"
                alt="Modern responsive website design with clean interface"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                alt="Mobile-friendly website development for all devices"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Common Problems Businesses Face</h2>
            <p className="text-neutral-gray mb-6">
              Many businesses struggle with outdated websites that fail to convert visitors into customers. 
              Your website might be slow, not mobile-friendly, or simply doesn&apos;t reflect your brand 
              properly. These issues can cost you potential customers and damage your online reputation.
            </p>
            <p className="text-neutral-gray mb-6">
              Another common problem is poor search engine visibility. If your website isn&apos;t optimized 
              for search engines, potential customers won&apos;t find you when they search for your services. 
              This means you&apos;re losing valuable organic traffic to competitors who have invested in 
              proper SEO.
            </p>
            <p className="text-neutral-gray mb-8">
              Security vulnerabilities are also a major concern. Outdated websites are vulnerable to 
              cyberattacks, which can compromise customer data and your business reputation. Regular 
              updates and security patches are essential but often neglected.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">Our Solutions</h2>
            <p className="text-neutral-gray mb-6">
              At Prisbo, we build modern, high-performance websites that solve these problems. Our 
              websites are designed with conversion in mind, ensuring that every visitor has a clear 
              path to becoming a customer. We use the latest web technologies to create fast, 
              responsive websites that work perfectly on all devices.
            </p>
            <p className="text-neutral-gray mb-6">
              We implement SEO best practices from the ground up, ensuring your website ranks well 
              in search results. This includes proper meta tags, structured data, fast loading times, 
              and mobile-first design. Our websites are built to attract organic traffic and convert 
              visitors into customers.
            </p>
            <p className="text-neutral-gray mb-8">
              Security is built into every website we develop. We use secure coding practices, 
              implement SSL certificates, and ensure regular security updates. Your website and 
              customer data will be protected against common vulnerabilities.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">What We Offer</h2>
            <p className="text-neutral-gray mb-6">
              Our comprehensive website development services cover everything from initial design to 
              ongoing maintenance. We work closely with you to understand your business goals and 
              create a website that truly represents your brand.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">Key Features</h3>
            <ul className="list-disc pl-6 space-y-2 text-neutral-gray mb-8">
              <li>Responsive design that works flawlessly on desktop, tablet, and mobile devices</li>
              <li>SEO optimization for better search engine rankings and organic traffic</li>
              <li>Fast loading times optimized for Core Web Vitals and user experience</li>
              <li>Modern UI/UX design that converts visitors into customers</li>
              <li>Content management systems (CMS) for easy content updates</li>
              <li>E-commerce solutions for online stores and product sales</li>
              <li>Secure hosting and regular maintenance to keep your site running smoothly</li>
              <li>Analytics integration to track performance and user behavior</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4">Our Development Process</h3>
            <ol className="list-decimal pl-6 space-y-3 text-neutral-gray mb-8">
              <li><strong>Discovery and Planning:</strong> We start by understanding your business, 
              target audience, and goals. This helps us create a website strategy that aligns with 
              your objectives.</li>
              <li><strong>Design and Wireframing:</strong> Our designers create mockups and wireframes 
              that show exactly how your website will look and function before we start coding.</li>
              <li><strong>Development and Implementation:</strong> Our developers build your website 
              using modern technologies, ensuring it&apos;s fast, secure, and optimized.</li>
              <li><strong>Testing and Quality Assurance:</strong> We thoroughly test your website 
              across different devices and browsers to ensure everything works perfectly.</li>
              <li><strong>Launch and Deployment:</strong> We handle the technical aspects of launching 
              your website, including domain setup and hosting configuration.</li>
              <li><strong>Ongoing Support and Maintenance:</strong> We provide continuous support, 
              updates, and improvements to keep your website performing at its best.</li>
            </ol>

            <h2 className="text-3xl font-bold text-primary mb-4">Our Technology Stack</h2>
            <p className="text-neutral-gray mb-6">
              We use cutting-edge technologies to build websites that are fast, secure, and scalable. 
              Our tech stack is carefully chosen to provide the best performance and user experience.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-primary mb-4">Frontend Technologies</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-gray mb-4">
                <li><strong>Next.js:</strong> React framework for server-side rendering and static site generation</li>
                <li><strong>React:</strong> Modern JavaScript library for building interactive user interfaces</li>
                <li><strong>TypeScript:</strong> Type-safe JavaScript for more reliable code</li>
                <li><strong>Tailwind CSS:</strong> Utility-first CSS framework for rapid UI development</li>
              </ul>
              
              <h3 className="text-xl font-bold text-primary mb-4">Backend & Infrastructure</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-gray mb-4">
                <li><strong>Node.js:</strong> JavaScript runtime for server-side development</li>
                <li><strong>MongoDB:</strong> NoSQL database for flexible data storage</li>
                <li><strong>Vercel:</strong> Cloud platform for deployment and hosting</li>
                <li><strong>RESTful APIs:</strong> For seamless integration with third-party services</li>
              </ul>
              
              <h3 className="text-xl font-bold text-primary mb-4">SEO & Performance Tools</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-gray">
                <li>Google Analytics and Search Console integration</li>
                <li>Schema.org structured data markup</li>
                <li>Image optimization and lazy loading</li>
                <li>CDN integration for global content delivery</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-4">Our Completed Projects</h2>
            <p className="text-neutral-gray mb-6">
              Here are some of the websites we&apos;ve successfully delivered to our clients:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-all">
                <h3 className="text-xl font-bold text-primary mb-3">Kishore Infracons</h3>
                <p className="text-neutral-gray mb-4">
                  Professional website for infrastructure and construction company, showcasing services, projects, and company information.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm font-semibold text-green-700">Live & Active</span>
                </div>
                <a
                  href="https://www.kishoreinfracons.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  Visit Website
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Prisbo for Website Development?</h2>
            <p className="text-neutral-gray mb-6">
              We don&apos;t just build websites; we build digital experiences that drive business results. 
              Our team combines technical expertise with creative design to create websites that not only 
              look great but also perform exceptionally well.
            </p>
            <p className="text-neutral-gray mb-6">
              We understand that every business is unique, which is why we take a customized approach 
              to every project. We don&apos;t use templates or one-size-fits-all solutions. Instead, 
              we create websites that are tailored to your specific needs and goals.
            </p>
            <p className="text-neutral-gray mb-8">
              Our commitment to quality and customer satisfaction sets us apart. We work closely with 
              you throughout the entire process, ensuring that your vision becomes reality. Plus, we 
              provide ongoing support to help your website grow and evolve with your business.
            </p>
          </div>

          <div className="bg-primary/10 rounded-lg p-8 mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Ready to Transform Your Online Presence?</h2>
            <p className="text-xl text-neutral-gray mb-6">
              Talk to Prisbo about your project. Let&apos;s discuss how we can help you build a 
              website that drives real business results.
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
              interestName="Website Development"
              title="Interested in Website Development?"
              subtitle="Get a free consultation and quote for your project."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
