import { Menu, X } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'services' | 'contact';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const bookingUrl = 'https://wa.me/message/PKYOFMM62K6GB1';

  const navItems = [
    { label: 'Home', page: 'home' as Page },
    { label: 'Services', page: 'services' as Page },
    { label: 'Contact', page: 'contact' as Page },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavigate('home')}
          >
            <img src="/logo.png" alt="Smile Services Logo" className="h-16 w-auto object-contain" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`text-lg font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-yellow-500'
                    : 'text-gray-700 hover:text-yellow-500'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
            >
              Book a Call
            </a>
          </div>

          <button
            className="md:hidden text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`block w-full text-left px-4 py-2 rounded-lg text-lg font-medium ${
                  currentPage === item.page
                    ? 'bg-yellow-50 text-yellow-500'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors text-center"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
