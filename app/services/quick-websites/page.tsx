import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Quick & Affordable Web Solutions - Prisbo Services',
  description: 'Subdomain websites, digital visiting cards, portfolio sites, WhatsApp catalogues, and monthly plans. Perfect for local shops, freelancers, and small businesses.',
};

const models = [
  {
    id: 'subdomain',
    icon: '🌐',
    title: 'Subdomain Website Model',
    example: 'e.g. clientname.prisboservices.com',
    bestFor: 'Local shops, tailors, salons, tutors, small services',
    tiers: [
      { name: 'Basic', what: '1-page landing (name, photo, contact, WhatsApp button)', price: '₹499' },
      { name: 'Starter', what: '3–4 pages (Home, About, Services, Contact)', price: '₹999' },
      { name: 'Standard', what: '5–6 pages + contact form + Google Maps', price: '₹1,499' },
      { name: 'Pro', what: '+ shared database (inquiry storage, product list)', price: '₹2,499' },
      { name: 'Business', what: '+ basic admin panel to update content themselves', price: '₹3,999' },
    ],
  },
  {
    id: 'portfolio',
    icon: '📁',
    title: 'Portfolio-as-a-Service',
    example: 'Pre-made portfolio templates, just swap name/photo/projects. Done in 30 mins.',
    bestFor: 'Freshers, designers, developers, photographers, college students',
    tiers: [
      { name: 'Basic Portfolio', what: '1 page, photo, bio, links', price: '₹299' },
      { name: 'Full Portfolio', what: 'Projects section, resume download, contact', price: '₹799' },
      { name: 'Pro Portfolio', what: 'Custom subdomain + shareable link + form', price: '₹1,299' },
    ],
  },
  {
    id: 'visiting-card',
    icon: '🏪',
    title: 'Digital Visiting Card',
    subtitle: 'Fastest to sell',
    example: 'A single mobile-optimized page that replaces a physical card — people share the link on WhatsApp.',
    bestFor: 'Every shopkeeper, agent, contractor wants this. Low price = easy yes.',
    tiers: [
      { name: 'Basic', what: 'Name, photo, phone, WhatsApp, social links', price: '₹199' },
      { name: 'Standard', what: '+ short bio, services list, location', price: '₹399' },
      { name: 'Premium', what: '+ inquiry form, QR code printable', price: '₹699' },
    ],
  },
  {
    id: 'subscription',
    icon: '🗓️',
    title: 'Monthly Subscription / Rent-a-Site',
    subtitle: "Don't sell, rent. They pay monthly, you keep the site alive.",
    bestFor: '50 clients × ₹300/month = ₹15,000 recurring with zero extra work.',
    tiers: [
      { name: 'Basic', what: 'Subdomain site, hosted by you', price: '₹199/month' },
      { name: 'Standard', what: '+ form submissions emailed to them', price: '₹399/month' },
      { name: 'Pro', what: '+ monthly content update (1 change/month)', price: '₹699/month' },
    ],
  },
  {
    id: 'whatsapp-catalogue',
    icon: '🔌',
    title: 'WhatsApp Catalogue Site',
    example: 'Many retailers already use WhatsApp Business. Give them a simple product page linked from their WhatsApp.',
    bestFor: 'Retailers using WhatsApp Business',
    tiers: [
      { name: 'Starter', what: '10 products listed, WhatsApp order button', price: '₹999' },
      { name: 'Standard', what: '25 products + categories', price: '₹1,999' },
      { name: 'Pro', what: 'Shared DB, searchable catalogue, enquiry form', price: '₹3,499' },
    ],
  },
  {
    id: 'student-resume',
    icon: '🎓',
    title: 'Student / Fresher Resume Site',
    example: 'Colleges are goldmines. One student tells 10 friends.',
    bestFor: 'Students and freshers',
    tiers: [
      { name: 'Resume page', what: 'Resume page with PDF download', price: '₹199' },
      { name: '+ Projects', what: '+ Projects + GitHub + LinkedIn links', price: '₹399' },
      { name: '+ Custom', what: '+ Custom subdomain + shareable QR', price: '₹599' },
    ],
  },
];

export default function QuickWebsitesPage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-primary dark:text-gold mb-4 tracking-tight">
              Quick & <span className="text-luxury-gradient bg-gradient-to-r from-gold via-accent via-gold to-accent bg-clip-text text-transparent">Affordable</span> Web Solutions
            </h1>
            <div className="divider-luxury w-24 mx-auto mb-4"></div>
            <p className="text-xl text-neutral-gray dark:text-neutral-white/80 tracking-wide max-w-3xl mx-auto">
              Subdomain sites, digital cards, portfolios, and monthly plans — built fast, priced for local businesses and freelancers.
            </p>
          </div>

          {/* Models */}
          <div className="space-y-12 lg:space-y-16">
            {models.map((model) => (
              <article
                key={model.id}
                className="card-luxury overflow-hidden"
              >
                <div className="p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-3xl" aria-hidden>{model.icon}</span>
                    <h2 className="text-2xl lg:text-3xl font-serif font-bold text-primary dark:text-gold tracking-tight">
                      {model.title}
                    </h2>
                    {model.subtitle && (
                      <span className="text-sm font-semibold text-gold/90 uppercase tracking-wider">
                        {model.subtitle}
                      </span>
                    )}
                  </div>
                  {model.example && (
                    <p className="text-neutral-gray dark:text-neutral-white/80 mb-4 text-sm lg:text-base italic">
                      {model.example}
                    </p>
                  )}
                  {model.tiers.length > 0 ? (
                    <div className="overflow-x-auto -mx-2">
                      <table className="w-full min-w-[400px] border-collapse">
                        <thead>
                          <tr className="border-b border-gold/30">
                            <th className="text-left py-3 px-3 font-serif font-semibold text-primary dark:text-gold">Tier</th>
                            <th className="text-left py-3 px-3 font-serif font-semibold text-primary dark:text-gold">What They Get</th>
                            <th className="text-right py-3 px-3 font-serif font-semibold text-primary dark:text-gold">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {model.tiers.map((tier) => (
                            <tr key={tier.name} className="border-b border-gold/10 dark:border-gold/5 hover:bg-gold/5 dark:hover:bg-gold/10 transition-colors">
                              <td className="py-3 px-3 font-medium text-primary dark:text-neutral-white">{tier.name}</td>
                              <td className="py-3 px-3 text-neutral-gray dark:text-neutral-white/80">{tier.what}</td>
                              <td className="py-3 px-3 text-right font-semibold text-gold whitespace-nowrap">{tier.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-neutral-gray dark:text-neutral-white/80">
                      {model.example}
                    </p>
                  )}
                  <p className="mt-4 text-sm text-gold/90 font-medium">
                    <span className="text-primary dark:text-neutral-white/90">Best for: </span>
                    {model.bestFor}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 lg:mt-16">
            <p className="text-lg text-neutral-gray dark:text-neutral-white/80 mb-6 tracking-wide">
              Pick a model that fits your client. We can tailor any tier to your needs.
            </p>
            <Link
              href="/contact"
              className="btn-luxury inline-block"
            >
              <span className="relative z-10">Get a quote</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
