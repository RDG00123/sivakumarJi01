import React, { useState } from 'react';
import { MapPin, Bed, Bath, Square, Calendar, Star, MessageCircle, Phone } from 'lucide-react';
import { PropertyData } from '../types/Property';
import BidModal from './BidModal';

interface PropertyCardProps {
  property: PropertyData;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [showBidModal, setShowBidModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)} L`;
    }
    return `₹${price.toLocaleString()}`;
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      land: 'Land',
      farmland: 'Farm Land',
      house: 'House',
      apartment: 'Apartment'
    };
    return labels[category as keyof typeof labels] || category;
  };

  const getAreaLabel = (area: string) => {
    const labels = {
      coimbatore: 'Coimbatore',
      palladam: 'Palladam',
      tirupur: 'Tirupur',
      udumalaipettai: 'Udumalaipettai'
    };
    return labels[area as keyof typeof labels] || area;
  };

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/916565656565?text=${encodedMessage}`, '_blank');
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
        {/* Image Carousel */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={property.images[currentImageIndex]}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Image Navigation */}
          {property.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all opacity-0 group-hover:opacity-100"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all opacity-0 group-hover:opacity-100"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Image Indicators */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {property.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Badges */}
          <div className="absolute top-4 left-4 flex space-x-2">
            {property.isFeatured && (
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <Star className="h-3 w-3 mr-1" />
                Featured
              </span>
            )}
            {property.isNew && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                New
              </span>
            )}
          </div>

          {/* Discount Badge */}
          {property.discount && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {property.discount}% OFF
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{property.location}</span>
              </div>
              <div className="flex space-x-3 text-sm">
                <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full font-medium">
                  {getCategoryLabel(property.category)}
                </span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                  {getAreaLabel(property.area)}
                </span>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="mb-4">
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-teal-600">{formatPrice(property.price)}</span>
              {property.originalPrice && (
                <span className="text-lg text-gray-500 line-through">{formatPrice(property.originalPrice)}</span>
              )}
            </div>
          </div>

          {/* Property Details */}
          <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              <span>{property.size}</span>
            </div>
            {property.bedrooms && (
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-1" />
                <span>{property.bedrooms} Beds</span>
              </div>
            )}
            {property.bathrooms && (
              <div className="flex items-center">
                <Bath className="h-4 w-4 mr-1" />
                <span>{property.bathrooms} Baths</span>
              </div>
            )}
            {property.yearBuilt && (
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{property.yearBuilt}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>

          {/* Features */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {property.features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium"
                >
                  {feature}
                </span>
              ))}
              {property.features.length > 3 && (
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium">
                  +{property.features.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={() => setShowBidModal(true)}
              className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
            >
              Place Bid
            </button>
            <button
              onClick={() => openWhatsApp(`I'm interested in ${property.title} located at ${property.location}. Price: ${formatPrice(property.price)}`)}
              className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors duration-200"
            >
              <MessageCircle className="h-5 w-5" />
            </button>
            <button
              onClick={() => window.open('tel:+916565656565', '_self')}
              className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg transition-colors duration-200"
            >
              <Phone className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bid Modal */}
      {showBidModal && (
        <BidModal
          property={property}
          onClose={() => setShowBidModal(false)}
        />
      )}
    </>
  );
};

export default PropertyCard;