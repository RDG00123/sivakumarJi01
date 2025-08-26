import React, { useState } from 'react';
import { Menu, X, Home, Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openWhatsApp = (number: string, message: string = '') => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${number}?text=${encodedMessage}`, '_blank');
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-teal-600 mr-3" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Covai (Namma) Veedu</h1>
              <p className="text-xs text-gray-600">Your Trusted Property Partner</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('properties')}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              Properties
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('why-coimbatore')}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              Why Coimbatore
            </button>
            <button
              onClick={() => scrollToSection('legal')}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              Legal
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => openWhatsApp('916565656565', 'Hello, I would like property valuation service.')}
              className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Property Valuation
            </button>
            <button
              onClick={() => openWhatsApp('916565656565')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center"
            >
              <Phone className="h-4 w-4 mr-2" />
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('properties')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50"
              >
                Properties
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('why-coimbatore')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50"
              >
                Why Coimbatore
              </button>
              <button
                onClick={() => scrollToSection('legal')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50"
              >
                Legal
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50"
              >
                Contact
              </button>
              <div className="pt-2 space-y-2">
                <button
                  onClick={() => openWhatsApp('916565656565', 'Hello, I would like property valuation service.')}
                  className="block w-full bg-teal-600 text-white px-3 py-2 rounded-lg text-center"
                >
                  Property Valuation
                </button>
                <button
                  onClick={() => openWhatsApp('916565656565')}
                  className="block w-full bg-orange-500 text-white px-3 py-2 rounded-lg text-center"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;