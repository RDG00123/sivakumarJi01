import React from 'react';
import { Shield, FileText, Home, MapPin, Building, Scale, Hammer, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Legal Arrangements',
      description: 'Patta, Chitta, Legal Heir, Encumbrance Certificate processing',
      features: ['Document Verification', 'Legal Clearance', 'Title Check']
    },
    {
      icon: FileText,
      title: 'Property Registration',
      description: 'Complete registration process with government compliance',
      features: ['Registration Act 1908', 'Stamp Duty', 'Registration Fees']
    },
    {
      icon: Home,
      title: 'Property Maintenance',
      description: 'Ongoing maintenance and management services for NRI clients',
      features: ['Regular Inspection', 'Maintenance Reports', 'Tenant Management']
    },
    {
      icon: MapPin,
      title: 'Surveyor Measurement',
      description: 'Professional land measurement and boundary verification',
      features: ['GPS Survey', 'Boundary Marking', 'Area Calculation']
    },
    {
      icon: Building,
      title: 'Layout Structuring',
      description: 'Site planning and layout design for optimal utilization',
      features: ['Site Planning', 'DTCP Approval', 'Layout Design']
    },
    {
      icon: Scale,
      title: 'Legal Drafting',
      description: 'Professional legal document preparation and review',
      features: ['Sale Deed', 'Agreement Draft', 'Legal Review']
    },
    {
      icon: Hammer,
      title: 'Building Approvals',
      description: 'Complete building plan approval and construction permits',
      features: ['Plan Approval', 'Building Permits', 'Completion Certificate']
    },
    {
      icon: Award,
      title: 'End-to-End Construction',
      description: 'A to Z construction services with quality assurance',
      features: ['Design & Build', 'Quality Control', 'Timely Delivery']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete NRI Property Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From legal documentation to end-to-end construction - we handle everything 
            so you can invest with confidence from anywhere in the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="bg-teal-100 rounded-xl w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors">
                  <IconComponent className="h-7 w-7 text-teal-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Get Complete Service Package
          </h3>
          <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
            Our comprehensive package covers everything from property search to final handover. 
            Perfect for NRI clients who want a hassle-free experience.
          </p>
          <button
            onClick={() => window.open('https://wa.me/916565656565?text=I%20would%20like%20to%20know%20more%20about%20your%20complete%20service%20package', '_blank')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Get Complete Service Package
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;