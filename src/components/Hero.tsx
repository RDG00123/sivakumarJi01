import React from 'react';
import { ArrowDown, Shield, Award, Users } from 'lucide-react';

const Hero = () => {
  const scrollToProperties = () => {
    const element = document.getElementById('properties');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-teal-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-orange-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-200 rounded-full opacity-25 animation-delay-1000 animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-12 h-12 bg-purple-200 rounded-full opacity-20 animation-delay-2000 animate-bounce"></div>
      </div>

      {/* 3D House Background Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='%2314B8A6'%3E%3Cpath d='M50 10L80 40v40H20V40L50 10z' fill-opacity='0.1'/%3E%3Cpath d='M50 15L75 40v35H25V40L50 15z' fill-opacity='0.05'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px',
          animation: 'floatHouses 20s linear infinite'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Covai <span className="text-teal-600">(Namma)</span> Veedu
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto">
            Your Trusted Property Partner for Coimbatore, Palladam, Tirupur & Udumalaipettai
          </p>
          <p className="text-lg text-orange-600 font-semibold mb-8">
            NRI Protected Only Realtor in Coimbatore & Surroundings
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-teal-600 mb-2">10+</div>
            <div className="text-gray-700 font-medium">Years Experience</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-teal-600 mb-2">532+</div>
            <div className="text-gray-700 font-medium">Properties Sold</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-teal-600 mb-2">100%</div>
            <div className="text-gray-700 font-medium">Legal Compliance</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-teal-600 mb-2">A-Z</div>
            <div className="text-gray-700 font-medium">Property Solutions</div>
          </div>
        </div>

        {/* Service Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <Shield className="h-12 w-12 text-teal-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">NRI Services</h3>
            <p className="text-gray-600">Complete Europe & US NRI support</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Support</h3>
            <p className="text-gray-600">Patta, Chitta, EC & Legal Aid</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">End-to-End</h3>
            <p className="text-gray-600">Construction to Registration</p>
          </div>
        </div>

        <button
          onClick={scrollToProperties}
          className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Discover Your Dream Property
        </button>

        <div className="mt-12 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400 mx-auto" />
        </div>
      </div>

      <style jsx>{`
        @keyframes floatHouses {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;