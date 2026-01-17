import type { Metadata } from 'next';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Mobile App Development Services - Prisbo',
  description: 'Professional mobile app development for iOS and Android. We build native and cross-platform mobile applications.',
  openGraph: {
    title: 'Mobile App Development Services - Prisbo',
    description: 'Professional mobile app development for iOS and Android',
  },
};

export default function MobileAppDevelopmentPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Mobile App Development',
    provider: {
      '@type': 'Organization',
      name: 'Prisbo',
    },
    description: 'Professional mobile app development for iOS and Android platforms.',
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
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80"
            alt="Mobile App Development"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white text-center px-4">
              Mobile App Development
            </h1>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80"
                alt="Mobile app design"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80"
                alt="App development"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Expertise</h2>
            <p className="text-neutral-gray mb-6">
              Whether you need a native iOS app, Android app, or a cross-platform solution,
              we have the expertise to bring your mobile app idea to life.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">Platforms We Support</h3>
            <ul className="list-disc pl-6 space-y-2 text-neutral-gray mb-8">
              <li>iOS (Swift, Objective-C)</li>
              <li>Android (Kotlin, Java)</li>
              <li>Cross-platform (React Native, Flutter)</li>
              <li>Progressive Web Apps (PWA)</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4">Services Include</h3>
            <ul className="list-disc pl-6 space-y-2 text-neutral-gray mb-8">
              <li>App design and UI/UX</li>
              <li>Native and cross-platform development</li>
              <li>API integration and backend services</li>
              <li>App Store and Google Play submission</li>
              <li>Performance optimization</li>
              <li>Ongoing maintenance and updates</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4">App Types</h3>
            <ul className="list-disc pl-6 space-y-2 text-neutral-gray mb-8">
              <li>Business and productivity apps</li>
              <li>E-commerce and marketplace apps</li>
              <li>Social media and communication apps</li>
              <li>Gaming and entertainment apps</li>
              <li>Healthcare and fitness apps</li>
            </ul>
          </div>

          <div className="mt-12">
            <LeadForm
              interestType="service"
              interestName="Mobile App Development"
              title="Ready to Build Your Mobile App?"
              subtitle="Let's discuss your app idea and create a plan for success."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
