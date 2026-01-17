import type { Metadata } from 'next';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Contact Prisbo - Get in Touch',
  description: 'Contact Prisbo for software development services, product inquiries, or general questions. We\'re here to help.',
};

export default function ContactPage() {
  return (
    <div className="py-20">
      {/* Hero Image */}
      <div className="container-custom mb-12">
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80"
            alt="Contact Us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white text-center px-4">
              Contact Prisbo
            </h1>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl text-neutral-gray">
              Have a question or ready to start your project? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
              <div className="space-y-4 text-neutral-gray">
                <div>
                  <h3 className="font-semibold text-primary mb-2">Email</h3>
                  <p>prisboservices@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Phone</h3>
                  <p>+91 8792790406</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">WhatsApp</h3>
                  <a 
                    href="https://wa.me/918792790406" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    +91 8792790406
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Why Choose Prisbo?</h2>
              <ul className="space-y-3 text-neutral-gray">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Expert team with years of experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Proven track record of successful projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Transparent communication and pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Ongoing support and maintenance</span>
                </li>
              </ul>
            </div>
          </div>

          <LeadForm
            interestType="service"
            interestName="General Contact"
            title="Send Us a Message"
            subtitle="Fill out the form below and we'll get back to you within 24 hours."
          />
        </div>
      </div>
    </div>
  );
}
