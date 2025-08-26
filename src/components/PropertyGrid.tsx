import React from 'react';
import PropertyCard from './PropertyCard';
import { PropertyData } from '../types/Property';

interface PropertyGridProps {
  properties: PropertyData[];
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties }) => {
  return (
    <section className="pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {properties.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">No Properties Found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more properties.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyGrid;