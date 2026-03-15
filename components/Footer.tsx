import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border-gray bg-charcoal/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 border border-gold rotate-45 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-gold rotate-45" />
              </div>
              <span className="font-display text-lg font-medium tracking-[0.2em] text-ivory uppercase">
                Elite Barber
              </span>
            </div>
            <p className="font-body text-sm font-light text-light-gray leading-relaxed max-w-xs">
              Premium grooming services for the modern gentleman. Book your appointment online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="section-label mb-6">Navigation</h4>
            <div className="flex flex-col gap-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/booking', label: 'Book Appointment' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm font-light text-light-gray hover:text-gold transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="section-label mb-6">Hours</h4>
            <div className="flex flex-col gap-2 font-body text-sm font-light text-light-gray">
              <div className="flex justify-between gap-8">
                <span>Mon – Fri</span>
                <span className="text-ivory/60">9:00 – 20:00</span>
              </div>
              <div className="flex justify-between gap-8">
                <span>Saturday</span>
                <span className="text-ivory/60">9:00 – 18:00</span>
              </div>
              <div className="flex justify-between gap-8">
                <span>Sunday</span>
                <span className="text-ivory/60">10:00 – 16:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-gray flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-light-gray tracking-wider">
            © {year} Elite Barber. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-body text-xs text-light-gray tracking-wider">
              Made with precision
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>
        </div>
      </div>
    </footer>
  )
}
