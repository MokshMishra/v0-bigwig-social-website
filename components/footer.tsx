'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-neutral-dark)] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⚡</span>
              <span className="font-bold text-lg">Bigwig Social</span>
            </div>
            <p className="text-gray-300 text-sm">
              Building global brands from Jabalpur. We don't charge for services, we invoice for results.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-[var(--color-accent)] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[var(--color-accent)] transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-[var(--color-accent)] transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-[var(--color-accent)] transition-colors">Portfolio</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>hello@bigwigsocial.com</li>
              <li>+91 XXXXX XXXXX</li>
              <li>Jabalpur, India</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {['f', 'i', 'l', 't'].map((letter, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-[var(--color-accent)] rounded-full flex items-center justify-center transition-all"
                >
                  {['Facebook', 'Instagram', 'LinkedIn', 'Twitter'][idx][0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} Bigwig Social. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
