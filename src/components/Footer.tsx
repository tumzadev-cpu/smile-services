import { Facebook, Instagram, Phone, Mail } from 'lucide-react';

type Page = 'home' | 'services' | 'contact';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img src="/logo2.png" alt="Smile Services Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-gray-400">
              Your online call center for heartfelt connections.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <a
                href="tel:2349015544758"
                className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +234 9015544758
              </a>
              <a
                href="tel:2348145147626"
                className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +234 8145147626
              </a>
              <a
                href="mailto:smileserviceshq@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                smileserviceshq@gmail.com
              </a>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://facebook.com/smileservices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/smileservice_s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Smile Services. All rights reserved.</p>
          <p className="mt-2 text-sm">We Spread Love and Happiness...</p>
        </div>
      </div>
    </footer>
  );
}
