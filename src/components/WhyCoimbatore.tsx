import React from 'react';
import { TrendingUp, Building, Users, MapPin, Zap, Globe } from 'lucide-react';

const WhyCoimbatore = () => {
  const reasons = [
    {
      icon: Building,
      title: 'IT Parks & Industries',
      description: 'Major IT companies, textile industries, and manufacturing hubs driving economic growth',
      stats: '500+ IT Companies'
    },
    {
      icon: TrendingUp,
      title: 'Investment Growth',
      description: 'Consistent property value appreciation and strong rental yields',
      stats: '15% Annual Growth'
    },
    {
      icon: Users,
      title: 'Educational Hub',
      description: 'Top-tier educational institutions attracting students and professionals',
      stats: '100+ Colleges'
    },
    {
      icon: MapPin,
      title: 'Strategic Location',
      description: 'Well-connected to Chennai, Bangalore, and major South Indian cities',
      stats: '3-4 Hour Drive'
    },
    {
      icon: Zap,
      title: 'Infrastructure',
      description: 'Excellent roads, metro rail project, and upcoming airport expansion',
      stats: '₹50K Cr Investment'
    },
    {
      icon: Globe,
      title: 'NRI Investment Hub',
      description: 'Growing NRI community with established investment networks',
      stats: '25% NRI Buyers'
    }
  ];

  const upcomingProjects = [
    'Metro Rail Project - Phase 1 & 2',
    'Smart City Development',
    'Airport Expansion & Cargo Hub',
    'IT Corridor Development',
    'Educational City Project',
    'Medical Tourism Hub'
  ];

  return (
    <section id="why-coimbatore" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Invest in Coimbatore Region?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the fastest-growing investment destination in South India with 
            unprecedented opportunities for both residential and commercial investments
          </p>
        </div>

        {/* Key Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-teal-100 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                  <IconComponent className="h-8 w-8 text-teal-600" />
                </div>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-teal-600 mb-1">{reason.stats}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{reason.title}</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        {/* Investment Stats */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Investment Statistics</h3>
            <p className="text-teal-100 text-lg">Impressive growth numbers that speak for themselves</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">₹50K Cr</div>
              <div className="text-teal-100">Infrastructure Investment</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">25%</div>
              <div className="text-teal-100">Property Value Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-teal-100">Educational Institutions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-teal-100">Upcoming Projects</div>
            </div>
          </div>
        </div>

        {/* Upcoming Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Major Projects</h3>
            <div className="space-y-4">
              {upcomingProjects.map((project, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{project}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">NRI Investment Advantages</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Dedicated NRI Services</h4>
                  <p className="text-gray-600 text-sm">Complete support from Europe & US</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Legal Protection</h4>
                  <p className="text-gray-600 text-sm">Full compliance with FEMA regulations</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Property Management</h4>
                  <p className="text-gray-600 text-sm">Complete maintenance while you're away</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => window.open('https://wa.me/3165656565?text=I%20am%20an%20NRI%20interested%20in%20Coimbatore%20property%20investment', '_blank')}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Connect with NRI Specialist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCoimbatore;