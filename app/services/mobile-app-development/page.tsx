import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Mobile App Development Services - Prisbo | iOS & Android Apps',
  description: 'Professional mobile app development for iOS and Android. We build native and cross-platform mobile applications that engage users and drive business growth.',
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
            alt="Professional mobile app development for iOS and Android platforms"
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
                alt="Modern mobile app design with intuitive user interface"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80"
                alt="Cross-platform mobile app development for multiple devices"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Common Problems Businesses Face</h2>
            <p className="text-neutral-gray mb-6">
              Many businesses struggle to reach their customers effectively in today&apos;s mobile-first 
              world. Your customers are using mobile devices more than ever, but if you don&apos;t have 
              a mobile app, you&apos;re missing out on valuable engagement opportunities. A mobile-responsive 
              website isn&apos;t enough anymore; customers expect native app experiences.
            </p>
            <p className="text-neutral-gray mb-6">
              Another major challenge is choosing between native and cross-platform development. Native 
              apps offer better performance but require separate development for iOS and Android, which 
              can be costly and time-consuming. Cross-platform solutions can save time and money but 
              may compromise on performance and native features.
            </p>
            <p className="text-neutral-gray mb-8">
              App store approval processes can also be frustrating. Both Apple&apos;s App Store and 
              Google Play have strict guidelines, and getting rejected can delay your launch significantly. 
              Without proper knowledge of these guidelines, you might face multiple rejections and revisions.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">Our Solutions</h2>
            <p className="text-neutral-gray mb-6">
              At Prisbo, we help you navigate these challenges with expert mobile app development services. 
              We start by understanding your business goals and target audience to recommend the best 
              development approach. Whether you need a native iOS app, Android app, or a cross-platform 
              solution, we have the expertise to deliver.
            </p>
            <p className="text-neutral-gray mb-6">
              We guide you through the entire app development lifecycle, from concept to launch. Our 
              team ensures your app meets all App Store and Google Play guidelines, reducing the risk 
              of rejections. We also handle the submission process, making it as smooth as possible for you.
            </p>
            <p className="text-neutral-gray mb-8">
              Our apps are built with scalability in mind. As your user base grows, your app will 
              continue to perform well. We also provide ongoing maintenance and updates to keep your 
              app current with the latest OS versions and user expectations.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">Our Expertise</h2>
            <p className="text-neutral-gray mb-6">
              Whether you need a native iOS app, Android app, or a cross-platform solution, we have 
              the expertise to bring your mobile app idea to life. Our team stays current with the 
              latest mobile development trends and technologies.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">Platforms We Support</h3>
            <ul className="list-disc pl-6 space-y-2 text-neutral-gray mb-8">
              <li><strong>iOS Development:</strong> Native apps built with Swift and Objective-C for 
              iPhone and iPad, optimized for the latest iOS features and design guidelines</li>
              <li><strong>Android Development:</strong> Native apps built with Kotlin and Java, 
              designed to work seamlessly across all Android devices and versions</li>
              <li><strong>Cross-Platform Development:</strong> Single codebase apps using React Native 
              or Flutter that work on both iOS and Android, reducing development time and cost</li>
              <li><strong>Progressive Web Apps (PWA):</strong> Web-based apps that function like native 
              apps, providing app-like experiences without app store distribution</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4">Services Include</h3>
            <ul className="list-disc pl-6 space-y-2 text-neutral-gray mb-8">
              <li>App design and UI/UX that creates engaging user experiences</li>
              <li>Native and cross-platform development tailored to your needs</li>
              <li>API integration and backend services for data management</li>
              <li>App Store and Google Play submission and approval assistance</li>
              <li>Performance optimization for fast, responsive apps</li>
              <li>Security implementation to protect user data</li>
              <li>Ongoing maintenance, updates, and feature additions</li>
              <li>Analytics integration to track user behavior and app performance</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4">App Types We Build</h3>
            <ul className="list-disc pl-6 space-y-2 text-neutral-gray mb-8">
              <li><strong>Business and Productivity Apps:</strong> Tools that help businesses operate 
              more efficiently, manage tasks, and improve productivity</li>
              <li><strong>E-commerce and Marketplace Apps:</strong> Shopping apps that enable online 
              sales, product browsing, and secure payment processing</li>
              <li><strong>Social Media and Communication Apps:</strong> Apps that connect people, 
              enable messaging, and facilitate social interactions</li>
              <li><strong>Gaming and Entertainment Apps:</strong> Engaging apps that provide 
              entertainment and gaming experiences</li>
              <li><strong>Healthcare and Fitness Apps:</strong> Apps that help users track health 
              metrics, manage medical information, and maintain fitness goals</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mb-4">Our Technology Stack</h2>
            <p className="text-neutral-gray mb-6">
              We use industry-leading technologies and frameworks to build mobile apps that are fast, 
              secure, and scalable. Our tech stack is chosen to provide the best balance of performance, 
              development speed, and maintainability.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-primary mb-4">Native Development</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-gray mb-4">
                <li><strong>iOS:</strong> Swift, Objective-C, SwiftUI, UIKit</li>
                <li><strong>Android:</strong> Kotlin, Java, Jetpack Compose, Material Design</li>
              </ul>
              
              <h3 className="text-xl font-bold text-primary mb-4">Cross-Platform Frameworks</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-gray mb-4">
                <li><strong>React Native:</strong> JavaScript-based framework for building native apps</li>
                <li><strong>Flutter:</strong> Dart-based framework for high-performance cross-platform apps</li>
              </ul>
              
              <h3 className="text-xl font-bold text-primary mb-4">Backend & Services</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-gray">
                <li>RESTful APIs and GraphQL for data communication</li>
                <li>Firebase for authentication, databases, and cloud services</li>
                <li>Cloud storage and CDN for media and content delivery</li>
                <li>Push notification services for user engagement</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Prisbo for Mobile App Development?</h2>
            <p className="text-neutral-gray mb-6">
              We understand that a mobile app is more than just code; it&apos;s an extension of your 
              brand and a direct channel to your customers. Our team combines technical expertise with 
              user experience design to create apps that users love and businesses rely on.
            </p>
            <p className="text-neutral-gray mb-6">
              We take a collaborative approach, working closely with you throughout the development 
              process. From initial concept to app store launch, we keep you informed and involved, 
              ensuring the final product meets your vision and business objectives.
            </p>
            <p className="text-neutral-gray mb-8">
              Our commitment doesn&apos;t end at launch. We provide ongoing support, maintenance, and 
              feature updates to ensure your app continues to serve your business and users effectively. 
              We monitor app performance, user feedback, and market trends to suggest improvements and 
              new features.
            </p>
          </div>

          <div className="bg-primary/10 rounded-lg p-8 mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Ready to Build Your Mobile App?</h2>
            <p className="text-xl text-neutral-gray mb-6">
              Talk to Prisbo about your project. Let&apos;s discuss how we can help you create a 
              mobile app that engages users and drives business growth.
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
