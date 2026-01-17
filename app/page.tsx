import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import ImageCarousel from '@/components/ImageCarousel';
import PricingSection from '@/components/PricingSection';

export const metadata: Metadata = {
  title: 'Home - Prisbo | Software Services & Products',
  description: 'Prisbo provides professional software development services including website development, mobile app development, and custom software solutions.',
};

export default function HomePage() {
  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
      title: 'Transform Your Business',
      subtitle: 'With Innovative Software Solutions',
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80',
      title: 'Cutting-Edge Technology',
      subtitle: 'Built for Your Success',
    },
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80',
      title: 'Expert Development Team',
      subtitle: 'Delivering Excellence Every Day',
    },
  ];

  return (
    <>
      {/* Hero Carousel Section */}
      <section className="relative mt-8 mb-12 w-full">
        <div className="w-full">
          <ImageCarousel slides={heroSlides} height="h-[400px] md:h-[450px]" />
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Why Choose Prisbo?
              </h2>
              <p className="text-lg text-neutral-gray mb-6">
                We combine cutting-edge technology with years of experience to deliver
                software solutions that drive real business results.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl">✓</span>
                  <span className="text-neutral-gray">Expert team with proven track record</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl">✓</span>
                  <span className="text-neutral-gray">Modern technologies and best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl">✓</span>
                  <span className="text-neutral-gray">Scalable solutions that grow with you</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl">✓</span>
                  <span className="text-neutral-gray">24/7 support and maintenance</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-primary transition-all shadow-lg hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80"
                  alt="Website Development"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Website Development
                </h3>
                <p className="text-neutral-gray mb-4">
                  Modern, responsive websites that engage your audience and drive conversions.
                </p>
                <Link
                  href="/services/website-development"
                  className="text-secondary font-semibold hover:underline inline-flex items-center"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-primary transition-all shadow-lg hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80"
                  alt="Mobile App Development"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Mobile App Development
                </h3>
                <p className="text-neutral-gray mb-4">
                  Native and cross-platform mobile applications for iOS and Android.
                </p>
                <Link
                  href="/services/mobile-app-development"
                  className="text-secondary font-semibold hover:underline inline-flex items-center"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-primary transition-all shadow-lg hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80"
                  alt="Custom Software Solutions"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Custom Software Solutions
                </h3>
                <p className="text-neutral-gray mb-4">
                  Tailored software solutions designed to meet your unique business needs.
                </p>
                <Link
                  href="/services/custom-software-solutions"
                  className="text-secondary font-semibold hover:underline inline-flex items-center"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section with Lead Form */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-neutral-gray">
                Let&apos;s discuss how we can help transform your business.
              </p>
            </div>
            <LeadForm
              interestType="service"
              interestName="General Inquiry"
              title="Get in Touch"
              subtitle="Fill out the form below and we'll get back to you within 24 hours."
            />
          </div>
        </div>
      </section>
    </>
  );
}
