import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PropertyFilters from './components/PropertyFilters';
import PropertyGrid from './components/PropertyGrid';
import Services from './components/Services';
import WhyCoimbatore from './components/WhyCoimbatore';
import LegalCompliance from './components/LegalCompliance';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import { PropertyData } from './types/Property';
import { mockProperties } from './data/mockProperties';

function App() {
  const [properties, setProperties] = useState<PropertyData[]>(mockProperties);
  const [filteredProperties, setFilteredProperties] = useState<PropertyData[]>(mockProperties);
  const [showAdmin, setShowAdmin] = useState(false);
  const [filters, setFilters] = useState({
    category: 'all',
    area: 'all',
    transactionType: 'all',
    search: ''
  });

  useEffect(() => {
    let filtered = properties;

    if (filters.category !== 'all') {
      filtered = filtered.filter(property => property.category === filters.category);
    }

    if (filters.area !== 'all') {
      filtered = filtered.filter(property => property.area === filters.area);
    }

    if (filters.transactionType !== 'all') {
      filtered = filtered.filter(property => property.transactionType === filters.transactionType);
    }

    if (filters.search) {
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        property.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        property.location.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    setFilteredProperties(filtered);
  }, [properties, filters]);

  // Admin access sequence (press keys: C-O-V-A-I)
  useEffect(() => {
    let keySequence = '';
    const targetSequence = 'covai';

    const handleKeyPress = (e: KeyboardEvent) => {
      keySequence += e.key.toLowerCase();
      keySequence = keySequence.slice(-5); // Keep only last 5 characters

      if (keySequence === targetSequence) {
        setShowAdmin(true);
        keySequence = '';
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (showAdmin) {
    return (
      <AdminPanel
        properties={properties}
        setProperties={setProperties}
        onClose={() => setShowAdmin(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <PropertyFilters filters={filters} setFilters={setFilters} />
      <PropertyGrid properties={filteredProperties} />
      <Services />
      <WhyCoimbatore />
      <LegalCompliance />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;