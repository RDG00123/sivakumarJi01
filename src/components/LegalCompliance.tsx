import React from 'react';
import { Scale, FileText, Shield, CheckCircle, AlertTriangle } from 'lucide-react';

const LegalCompliance = () => {
  const legalServices = [
    {
      icon: FileText,
      title: 'Registration Act, 1908',
      description: 'Complete compliance with property registration laws and procedures',
      details: [
        'Property registration formalities',
        'Stamp duty calculation',
        'Registration fee compliance',
        'Document execution'
      ]
    },
    {
      icon: Shield,
      title: 'Tamil Nadu Patta/Chitta System',
      description: 'Comprehensive Patta and Chitta document processing',
      details: [
        'Patta document verification',
        'Chitta extract processing',
        'Survey settlement documents',
        'Revenue records check'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Encumbrance Certificate (EC)',
      description: 'Thorough encumbrance certificate verification and legal checking',
      details: [
        '30-year encumbrance verification',
        'Past ownership history',
        'Legal dispute checking',
        'Clear title confirmation'
      ]
    },
    {
      icon: Scale,
      title: 'Legal Heirship Procedures',
      description: 'Complete legal heir certification and property succession',
      details: [
        'Succession certificate',
        'Legal heir affidavit',
        'Property inheritance clearance',
        'Court approval assistance'
      ]
    }
  ];

  const additionalSafeguards = [
    {
      title: 'Property Title Verification',
      description: 'Comprehensive title chain verification going back 30+ years'
    },
    {
      title: 'Guideline Value Compliance',
      description: 'Strict adherence to government guideline value and registration'
    },
    {
      title: 'RERA Compliance',
      description: 'All projects comply with Real Estate Regulatory Authority norms'
    },
    {
      title: 'Environmental Clearance',
      description: 'Environmental impact assessment and clearance verification'
    }
  ];

  const legalProcess = [
    'Initial Documentation',
    'Title Search',
    'Legal Due Diligence',
    'Approval & Clearances',
    'Registration Process',
    'Handover'
  ];

  return (
    <section id="legal" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Legal Compliance & Documentation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete adherence to Tamil Nadu Property Laws ensuring secure and legally sound property transactions for all clients
          </p>
        </div>

        {/* Legal Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {legalServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 rounded-xl w-14 h-14 flex items-center justify-center mr-4">
                    <IconComponent className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Legal Safeguards */}
        <div className="bg-white rounded-3xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Additional Legal Safeguards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalSafeguards.map((safeguard, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-xl">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{safeguard.title}</h4>
                <p className="text-sm text-gray-600">{safeguard.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Process Flow */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Our Legal Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {legalProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <p className="text-white font-medium text-sm">{step}</p>
                {index < legalProcess.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-4 text-center">
                    <span className="text-white">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-blue-100 mb-6">
              Complete legal protection with the best of expertise
            </p>
            <button
              onClick={() => window.open('https://wa.me/916565656565?text=I%20need%20legal%20consultation%20for%20property%20purchase', '_blank')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Free Legal Consultation
            </button>
          </div>
        </div>

        {/* Important Legal Disclaimer */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1 mr-3" />
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Important Legal Disclaimer</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                All property transactions are subject to final legal documentation and government approvals. Our service ensures complete legal compliance, and buyers are advised to independently verify all legal documents before purchase. We recommend consulting with legal experts for complex transactions and ensure all statutory requirements are met as per Tamil Nadu Property Laws.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalCompliance;