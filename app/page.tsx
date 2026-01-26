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
      <section className="relative w-full -mt-20 lg:-mt-24">
        <div className="w-full relative pt-20 lg:pt-24">
          <ImageCarousel slides={heroSlides} height="h-[500px] md:h-[550px] lg:h-[600px]" />
        </div>
        <div className="absolute bottom-12 lg:bottom-16 left-1/2 -translate-x-1/2 z-30">
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/services"
              className="btn-luxury-secondary"
            >
              <span className="relative z-10">Our Services</span>
            </Link>
            <Link
              href="/contact"
              className="btn-luxury"
            >
              <span className="relative z-10">Get Started</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-luxury section-why-choose">
        <div className="container-luxury">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-primary dark:text-gold mb-4 tracking-tight">
              Why Choose <span className="text-luxury-gradient bg-gradient-to-r from-gold via-accent via-gold to-accent bg-clip-text text-transparent">Prisbo</span>?
            </h2>
            <div className="divider-luxury w-24 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4">
              <p className="text-xl lg:text-2xl text-neutral-gray dark:text-neutral-white/80 leading-relaxed tracking-wide">
                We combine cutting-edge technology with years of experience to deliver
                software solutions that drive real business results.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start group">
                  <span className="text-gold mr-4 text-2xl mt-1 group-hover:scale-110 transition-transform">◆</span>
                  <span className="text-lg text-neutral-dark-gray dark:text-neutral-white tracking-wide">Expert team with proven track record</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-gold mr-4 text-2xl mt-1 group-hover:scale-110 transition-transform">◆</span>
                  <span className="text-lg text-neutral-dark-gray dark:text-neutral-white tracking-wide">Modern technologies and best practices</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-gold mr-4 text-2xl mt-1 group-hover:scale-110 transition-transform">◆</span>
                  <span className="text-lg text-neutral-dark-gray dark:text-neutral-white tracking-wide">Scalable solutions that grow with you</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-gold mr-4 text-2xl mt-1 group-hover:scale-110 transition-transform">◆</span>
                  <span className="text-lg text-neutral-dark-gray dark:text-neutral-white tracking-wide">24/7 support and maintenance</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-luxury-lg group">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-luxury section-services">
        <div className="container-luxury">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-primary dark:text-gold mb-4 tracking-tight">
              Our <span className="text-luxury-gradient bg-gradient-to-r from-gold via-accent via-gold to-accent bg-clip-text text-transparent">Services</span>
            </h2>
            <div className="divider-luxury w-24 mx-auto mb-4"></div>
            <p className="text-xl text-neutral-gray dark:text-neutral-white/80 tracking-wide max-w-4xl mx-auto">
              Exquisite software solutions crafted with precision and elegance
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="card-luxury overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80"
                  alt="Website Development"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-primary dark:text-gold mb-4 tracking-tight">
                  Website Development
                </h3>
                <p className="text-neutral-gray dark:text-neutral-white/80 mb-6 leading-relaxed tracking-wide">
                  Modern, responsive websites that engage your audience and drive conversions.
                </p>
                <Link
                  href="/services/website-development"
                  className="text-gold font-semibold hover:text-accent transition-colors inline-flex items-center gap-2 tracking-wide group/link"
                >
                  Learn More
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            <div className="card-luxury overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80"
                  alt="Mobile App Development"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-primary mb-4 tracking-tight">
                  Mobile App Development
                </h3>
                <p className="text-neutral-gray mb-6 leading-relaxed tracking-wide">
                  Native and cross-platform mobile applications for iOS and Android.
                </p>
                <Link
                  href="/services/mobile-app-development"
                  className="text-gold font-semibold hover:text-accent transition-colors inline-flex items-center gap-2 tracking-wide group/link"
                >
                  Learn More
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            <div className="card-luxury overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80"
                  alt="Custom Software Solutions"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-primary mb-4 tracking-tight">
                  Custom Software Solutions
                </h3>
                <p className="text-neutral-gray mb-6 leading-relaxed tracking-wide">
                  Tailored software solutions designed to meet your unique business needs.
                </p>
                <Link
                  href="/services/custom-software-solutions"
                  className="text-gold font-semibold hover:text-accent transition-colors inline-flex items-center gap-2 tracking-wide group/link"
                >
                  Learn More
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Completed Projects */}
      <section className="section-luxury section-portfolio">
        <div className="container-luxury">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-primary dark:text-gold mb-4 tracking-tight">
              Our <span className="text-luxury-gradient bg-gradient-to-r from-gold via-accent via-gold to-accent bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <div className="divider-luxury w-24 mx-auto mb-4"></div>
            <p className="text-xl text-neutral-gray dark:text-neutral-white/80 tracking-wide max-w-4xl mx-auto">
              Real websites and applications we&apos;ve built for our clients
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Business Management Suite */}
            <div className="card-luxury overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Business Management Suite"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <h3 className="text-3xl font-serif font-bold text-white mb-3 drop-shadow-lg">Business Management Suite</h3>
                    <p className="text-gold/90 text-base tracking-wide drop-shadow">Complete business management platform</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2 h-2 bg-gold rounded-full animate-pulse shadow-gold"></span>
                  <span className="text-sm font-semibold text-gold tracking-wider uppercase">Live & Active</span>
                </div>
                <p className="text-neutral-gray dark:text-neutral-white/80 mb-6 leading-relaxed tracking-wide">
                  Comprehensive business management solution with CRM, project tracking, analytics dashboard, and team collaboration features.
                </p>
                <a
                  href="https://bms.prisboservices.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury-secondary inline-flex items-center gap-2"
                >
                  <span>Visit Website</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Kishore Infracons */}
            <div className="card-luxury overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="Kishore Infracons"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <h3 className="text-3xl font-serif font-bold text-white mb-3 drop-shadow-lg">Kishore Infracons</h3>
                    <p className="text-gold/90 text-base tracking-wide drop-shadow">Infrastructure & Construction Company</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2 h-2 bg-gold rounded-full animate-pulse shadow-gold"></span>
                  <span className="text-sm font-semibold text-gold tracking-wider uppercase">Live & Active</span>
                </div>
                <p className="text-neutral-gray dark:text-neutral-white/80 mb-6 leading-relaxed tracking-wide">
                  Professional website for infrastructure and construction company, showcasing services, projects, and company information.
                </p>
                <a
                  href="https://www.kishoreinfracons.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury-secondary inline-flex items-center gap-2"
                >
                  <span>Visit Website</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section with Lead Form */}
      <section className="section-luxury section-cta">
        <div className="container-luxury">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-5xl lg:text-6xl font-serif font-bold text-primary dark:text-gold mb-4 tracking-tight">
                Ready to Get <span className="text-luxury-gradient bg-gradient-to-r from-gold via-accent via-gold to-accent bg-clip-text text-transparent">Started</span>?
              </h2>
              <div className="divider-luxury w-24 mx-auto mb-4"></div>
              <p className="text-xl lg:text-2xl text-neutral-gray dark:text-neutral-white/80 tracking-wide max-w-3xl mx-auto">
                Let&apos;s discuss how we can help transform your business.
              </p>
            </div>
            <div className="card-luxury p-8 lg:p-12">
              <LeadForm
                interestType="service"
                interestName="General Inquiry"
                title="Get in Touch"
                subtitle="Fill out the form below and we'll get back to you within 24 hours."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
