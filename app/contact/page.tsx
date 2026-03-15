import Link from 'next/link'

export default function ContactPage() {
  const contactInfo = [
    {
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M2 3h4l2 4-2 2c1 2 3 4 5 5l2-2 4 2v4a2 2 0 01-2 2C7 18 2 13 2 5a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'Instagram',
      value: '@elitebarber',
      href: 'https://instagram.com/elitebarber',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="2" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.2"/>
          <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.2"/>
          <circle cx="14.5" cy="5.5" r="1" fill="currentColor"/>
        </svg>
      ),
    },
    {
      label: 'Address',
      value: '247 Grand Avenue, New York, NY 10013',
      href: 'https://maps.google.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z" stroke="currentColor" strokeWidth="1.2"/>
          <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.2"/>
        </svg>
      ),
    },
    {
      label: 'Email',
      value: 'hello@elitebarber.com',
      href: 'mailto:hello@elitebarber.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="gold-divider" />
            <span className="section-label">Get in Touch</span>
          </div>
          <h1 className="font-display text-7xl md:text-[10rem] font-light leading-none text-ivory">
            Con<em className="not-italic text-gold">tact</em>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Contact Cards */}
          <div className="space-y-0.5">
            {contactInfo.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-6 p-8 border border-border-gray hover:border-gold/40 bg-charcoal/20 hover:bg-charcoal/40 transition-all duration-300"
              >
                <div className="w-12 h-12 border border-border-gray group-hover:border-gold/40 flex items-center justify-center text-light-gray group-hover:text-gold transition-all duration-300 shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-body text-xs tracking-[0.25em] text-light-gray uppercase mb-1">
                    {item.label}
                  </div>
                  <div className="font-body text-base font-light text-ivory group-hover:text-gold transition-colors duration-300 truncate">
                    {item.value}
                  </div>
                </div>
                <svg
                  className="w-4 h-4 text-light-gray group-hover:text-gold transition-all duration-300 group-hover:translate-x-1 shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>

          {/* Right side info */}
          <div className="lg:pt-4">
            {/* Hours */}
            <div className="border border-border-gray p-10 bg-charcoal/20 mb-0.5">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-6 h-px bg-gold" />
                <span className="section-label">Hours</span>
              </div>

              <div className="space-y-4">
                {[
                  { day: 'Monday – Friday', hours: '9:00 AM – 8:00 PM', open: true },
                  { day: 'Saturday', hours: '9:00 AM – 6:00 PM', open: true },
                  { day: 'Sunday', hours: '10:00 AM – 4:00 PM', open: true },
                ].map((schedule) => (
                  <div key={schedule.day} className="flex items-center justify-between py-3 border-b border-border-gray last:border-0">
                    <span className="font-body text-sm font-light text-ivory">{schedule.day}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-body text-sm font-light text-light-gray">{schedule.hours}</span>
                      <div className={`w-1.5 h-1.5 rounded-full ${schedule.open ? 'bg-green-500' : 'bg-red-500'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="border border-border-gray bg-charcoal/20 h-56 flex items-center justify-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'linear-gradient(#c9a96e 1px, transparent 1px), linear-gradient(90deg, #c9a96e 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }}
              />
              <div className="relative text-center">
                <div className="w-3 h-3 bg-gold rounded-full mx-auto mb-3 shadow-[0_0_20px_rgba(201,169,110,0.6)]" />
                <p className="font-body text-xs tracking-[0.2em] text-gold uppercase">247 Grand Avenue</p>
                <p className="font-body text-xs text-light-gray mt-1">New York, NY 10013</p>
              </div>
            </div>

            {/* Book CTA */}
            <div className="mt-8 p-8 border border-gold/20 bg-gold/5">
              <p className="font-body text-sm font-light text-light-gray mb-5 leading-relaxed">
                Ready to book? Reserve your spot online in under a minute.
              </p>
              <Link href="/booking" className="btn-primary w-full justify-center">
                Book Appointment
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
