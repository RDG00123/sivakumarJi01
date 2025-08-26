import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const openWhatsApp = (number: string, message: string = '') => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${number}?text=${encodedMessage}`, '_blank');
  };

  const contacts = [
    {
      title: 'Property Valuation',
      description: 'Get accurate property valuation and market analysis',
      phone: '+91 6565656565',
      whatsapp: '916565656565',
      message: 'Hello, I would like property valuation service.',
      icon: Phone,
      color: 'teal'
    },
    {
      title: 'NRI Services',
      description: 'Dedicated support for NRI clients in Europe & US',
      phone: '+31 65656565',
      whatsapp: '3165656565',
      message: 'Hello, I am an NRI interested in Coimbatore property investment.',
      icon: Globe,
      color: 'blue'
    },
    {
      title: 'India Main Office',
      description: 'General inquiries and local property support',
      phone: '+91 656565655',
      whatsapp: '91656565655',
      message: 'Hello, I would like to know more about your property services.',
      icon: MapPin,
      color: 'orange'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your property journey? Our expert team is here to help you 
            every step of the way, whether you're in India or abroad.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contacts.map((contact, index) => {
            const IconComponent = contact.icon;
            const colorClasses = {
              teal: 'bg-teal-100 text-teal-600 border-teal-200',
              blue: 'bg-blue-100 text-blue-600 border-blue-200',
              orange: 'bg-orange-100 text-orange-600 border-orange-200'
            };
            
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 rounded-xl ${colorClasses[contact.color as keyof typeof colorClasses]} flex items-center justify-center mb-6`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {contact.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {contact.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-700">
                    <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                    <span>{contact.phone}</span>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={() => openWhatsApp(contact.whatsapp, contact.message)}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </button>
                  <button
                    onClick={() => window.open(`tel:${contact.phone}`, '_self')}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 px-4 rounded-lg transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Your Trusted Bridge to Indian Real Estate
          </h3>
          <p className="text-teal-100 text-lg mb-8 max-w-3xl mx-auto">
            Serving NRIs in Europe & USA with complete property solutions for over 10 years. From initial search to property management - we handle everything.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <Phone className="h-12 w-12 text-teal-200 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">NRI Europe Contact</h4>
              <button
                onClick={() => openWhatsApp('3165656565', 'Hello from Europe, I need property assistance.')}
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-colors"
              >
                WhatsApp: +31 6565 6565
              </button>
            </div>
            
            <div className="text-center">
              <MessageCircle className="h-12 w-12 text-teal-200 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">India Main Office</h4>
              <button
                onClick={() => openWhatsApp('91656565655', 'Hello, I need property consultation.')}
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-colors"
              >
                WhatsApp: +91 6565 65655
              </button>
            </div>
            
            <div className="text-center">
              <Clock className="h-12 w-12 text-teal-200 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">24/7 Support</h4>
              <p className="text-teal-100">Available across time zones for NRI clients</p>
            </div>
          </div>
        </div>

        {/* Business Hours & Location */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Clock className="h-6 w-6 text-teal-600 mr-3" />
              Business Hours
            </h4>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-medium">9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium">10:00 AM - 4:00 PM</span>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <p className="text-sm text-teal-600 font-medium">
                  Emergency support available 24/7 for NRI clients
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <MapPin className="h-6 w-6 text-teal-600 mr-3" />
              Service Areas
            </h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Coimbatore</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Palladam</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Tirupur</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Udumalaipettai</span>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <p className="text-sm text-orange-600 font-medium">
                  Expanding to more areas in Tamil Nadu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;