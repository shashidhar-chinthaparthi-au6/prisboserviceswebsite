import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Prisbo - Software Services & Products Company',
  description: 'Learn about Prisbo, a leading software services and products company dedicated to helping businesses succeed through innovative technology solutions.',
};

export default function AboutPage() {
  return (
    <div className="py-20">
      {/* Hero Image */}
      <div className="container-custom mb-12">
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
            alt="About Prisbo"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white text-center px-4">
              About Prisbo
            </h1>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Our team"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-neutral-gray mb-8">
                We believe that every business deserves access to world-class software solutions.
                Our mission is to deliver innovative, scalable, and reliable software that empowers
                businesses to achieve their goals and exceed their expectations.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-neutral-gray mb-8">
              Prisbo is a leading software services and products company dedicated to helping
              businesses transform and succeed in the digital age.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">What We Do</h2>
            <p className="text-neutral-gray mb-6">
              Prisbo specializes in:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-gray mb-8">
              <li>Website development and design</li>
              <li>Mobile application development</li>
              <li>Custom software solutions</li>
              <li>Enterprise software development</li>
              <li>Software product development</li>
              <li>Consulting and technical advisory</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mb-4">Our Values</h2>
            <ul className="list-disc pl-6 space-y-2 text-neutral-gray mb-8">
              <li><strong>Quality First:</strong> We never compromise on quality and always deliver excellence.</li>
              <li><strong>Client Focus:</strong> Your success is our success. We&apos;re committed to your goals.</li>
              <li><strong>Innovation:</strong> We stay ahead of the curve with the latest technologies and best practices.</li>
              <li><strong>Transparency:</strong> Clear communication and honest feedback throughout every project.</li>
              <li><strong>Reliability:</strong> You can count on us to deliver on time and within budget.</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Prisbo?</h2>
            <p className="text-neutral-gray mb-6">
              With years of experience in software development, we&apos;ve helped countless businesses
              achieve their digital transformation goals. Our team of skilled developers, designers,
              and project managers work together to deliver solutions that make a real impact.
            </p>
            <p className="text-neutral-gray">
              Whether you&apos;re a startup looking to build your first product or an enterprise
              seeking to modernize your systems, Prisbo has the expertise and dedication to
              bring your vision to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
