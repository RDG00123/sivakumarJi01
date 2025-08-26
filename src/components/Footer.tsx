import React from 'react';
import { Home, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const openWhatsApp = (number: string, message: string = '') => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${number}?text=${encodedMessage}`, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <Home className="h-8 w-8 text-teal-400 mr-3" />
              <div>
                <h3 className="text-xl font-bold">Covai (Namma) Veedu</h3>
                <p className="text-gray-400 text-sm">Your Trusted Property Partner</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With over 10 years of experience and 532+ successful property transactions, 
              we are the leading NRI-focused property consultants in Coimbatore region. 
              From legal documentation to end-to-end construction, we provide complete 
              property solutions.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => openWhatsApp('916565656565')}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Support
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Properties
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('legal')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Legal Compliance
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-teal-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">India Main Office</p>
                  <p className="text-white">+91 6565656565</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-teal-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">NRI Europe Contact</p>
                  <p className="text-white">+31 65656565</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-teal-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Service Areas</p>
                  <p className="text-white">Coimbatore, Palladam, Tirupur, Udumalaipettai</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                <div>Property Buying & Selling</div>
                <div>Legal Documentation</div>
                <div>Property Valuation</div>
                <div>NRI Services</div>
                <div>Property Management</div>
                <div>Construction Services</div>
                <div>Investment Guidance</div>
                <div>Legal Compliance</div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Why Choose Us?</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <div>✓ 10+ Years Experience</div>
                <div>✓ 532+ Properties Sold</div>
                <div>✓ NRI Protected Services</div>
                <div>✓ Complete Legal Compliance</div>
                <div>✓ End-to-End Solutions</div>
                <div>✓ 24/7 NRI Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Covai (Namma) Veedu. All rights reserved. | 
            Your Trusted Property Partner in Coimbatore Region
          </p>
          <p className="text-gray-500 text-xs mt-2">
            NRI Protected Only Realtor | Complete Legal Compliance | A to Z Property Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;