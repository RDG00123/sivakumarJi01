import React from 'react';
import { Search, Filter } from 'lucide-react';
import { FilterState } from '../types/Property';

interface PropertyFiltersProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
}

const PropertyFilters: React.FC<PropertyFiltersProps> = ({ filters, setFilters }) => {
  const updateFilter = (key: keyof FilterState, value: string) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <section id="properties" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover Your Dream Property
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Curated collection of properties in Coimbatore, Palladam, Tirupur & Udumalaipettai
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="flex items-center mb-6">
            <Filter className="h-5 w-5 text-teal-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900">Filter Properties</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Properties
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by title, location, description..."
                  value={filters.search}
                  onChange={(e) => updateFilter('search', e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={filters.category}
                onChange={(e) => updateFilter('category', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="land">Land</option>
                <option value="farmland">Farm Land</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
              </select>
            </div>

            {/* Area */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Area
              </label>
              <select
                value={filters.area}
                onChange={(e) => updateFilter('area', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="all">All Areas</option>
                <option value="coimbatore">Coimbatore</option>
                <option value="palladam">Palladam</option>
                <option value="tirupur">Tirupur</option>
                <option value="udumalaipettai">Udumalaipettai</option>
              </select>
            </div>

            {/* Transaction Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Transaction Type
              </label>
              <select
                value={filters.transactionType}
                onChange={(e) => updateFilter('transactionType', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
                <option value="sale">Sale</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyFilters;