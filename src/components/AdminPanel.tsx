import React, { useState } from 'react';
import { X, Upload, Plus, Trash2, Edit, Save, Image } from 'lucide-react';
import { PropertyData } from '../types/Property';

interface AdminPanelProps {
  properties: PropertyData[];
  setProperties: (properties: PropertyData[]) => void;
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ properties, setProperties, onClose }) => {
  const [activeTab, setActiveTab] = useState('properties');
  const [editingProperty, setEditingProperty] = useState<PropertyData | null>(null);
  const [newProperty, setNewProperty] = useState<Partial<PropertyData>>({
    title: '',
    category: 'house',
    area: 'coimbatore',
    transactionType: 'sell',
    price: 0,
    description: '',
    location: '',
    images: [],
    features: [],
    size: '',
    isFeatured: false,
    isNew: false
  });

  const handleExcelUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // In a real implementation, you would parse the Excel file
      // For now, we'll just show an alert
      alert('Excel upload functionality would be implemented here. The file would be parsed and properties added automatically.');
    }
  };

  const handleCreateProperty = () => {
    if (!newProperty.title || !newProperty.price) {
      alert('Please fill in required fields');
      return;
    }

    const property: PropertyData = {
      id: Date.now().toString(),
      title: newProperty.title || '',
      category: newProperty.category as PropertyData['category'] || 'house',
      area: newProperty.area as PropertyData['area'] || 'coimbatore',
      transactionType: newProperty.transactionType as PropertyData['transactionType'] || 'sell',
      price: newProperty.price || 0,
      description: newProperty.description || '',
      location: newProperty.location || '',
      images: newProperty.images || [],
      features: newProperty.features || [],
      size: newProperty.size || '',
      bedrooms: newProperty.bedrooms,
      bathrooms: newProperty.bathrooms,
      yearBuilt: newProperty.yearBuilt,
      isFeatured: newProperty.isFeatured || false,
      isNew: newProperty.isNew || false
    };

    setProperties([...properties, property]);
    setNewProperty({
      title: '',
      category: 'house',
      area: 'coimbatore',
      transactionType: 'sell',
      price: 0,
      description: '',
      location: '',
      images: [],
      features: [],
      size: '',
      isFeatured: false,
      isNew: false
    });
    alert('Property created successfully!');
  };

  const handleDeleteProperty = (id: string) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      setProperties(properties.filter(p => p.id !== id));
    }
  };

  const handleSaveEdit = () => {
    if (editingProperty) {
      setProperties(properties.map(p => p.id === editingProperty.id ? editingProperty : p));
      setEditingProperty(null);
      alert('Property updated successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('properties')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'properties'
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Manage Properties
              </button>
              <button
                onClick={() => setActiveTab('upload')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'upload'
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Upload Data
              </button>
              <button
                onClick={() => setActiveTab('create')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'create'
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Create Property
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'properties' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Manage Properties ({properties.length} total)
            </h2>
            
            <div className="space-y-4">
              {properties.map((property) => (
                <div key={property.id} className="bg-white rounded-lg shadow-md p-6">
                  {editingProperty?.id === property.id ? (
                    // Edit Mode
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          value={editingProperty.title}
                          onChange={(e) => setEditingProperty({...editingProperty, title: e.target.value})}
                          className="px-4 py-2 border border-gray-300 rounded-lg"
                          placeholder="Property Title"
                        />
                        <input
                          type="number"
                          value={editingProperty.price}
                          onChange={(e) => setEditingProperty({...editingProperty, price: parseInt(e.target.value)})}
                          className="px-4 py-2 border border-gray-300 rounded-lg"
                          placeholder="Price"
                        />
                        <input
                          type="text"
                          value={editingProperty.location}
                          onChange={(e) => setEditingProperty({...editingProperty, location: e.target.value})}
                          className="px-4 py-2 border border-gray-300 rounded-lg"
                          placeholder="Location"
                        />
                        <input
                          type="text"
                          value={editingProperty.size}
                          onChange={(e) => setEditingProperty({...editingProperty, size: e.target.value})}
                          className="px-4 py-2 border border-gray-300 rounded-lg"
                          placeholder="Size"
                        />
                      </div>
                      <textarea
                        value={editingProperty.description}
                        onChange={(e) => setEditingProperty({...editingProperty, description: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        rows={3}
                        placeholder="Description"
                      />
                      <div className="flex space-x-2">
                        <button
                          onClick={handleSaveEdit}
                          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center"
                        >
                          <Save className="h-4 w-4 mr-2" />
                          Save
                        </button>
                        <button
                          onClick={() => setEditingProperty(null)}
                          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    // View Mode
                    <div>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">{property.title}</h3>
                          <p className="text-gray-600">{property.location}</p>
                          <p className="text-teal-600 font-bold">₹{property.price.toLocaleString()}</p>
                          <p className="text-sm text-gray-500 mt-2">{property.description}</p>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <button
                            onClick={() => setEditingProperty(property)}
                            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteProperty(property.id)}
                            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'upload' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Upload Property Data</h2>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-center">
                <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Excel File</h3>
                <p className="text-gray-600 mb-6">
                  Upload an Excel file (.xlsx, .xls) with property data to automatically add multiple properties
                </p>
                
                <input
                  type="file"
                  accept=".xlsx,.xls"
                  onChange={handleExcelUpload}
                  className="hidden"
                  id="excel-upload"
                />
                <label
                  htmlFor="excel-upload"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg cursor-pointer inline-flex items-center"
                >
                  <Upload className="h-5 w-5 mr-2" />
                  Choose Excel File
                </label>
                
                <div className="mt-6 text-left">
                  <h4 className="font-medium text-gray-900 mb-2">Excel Format Requirements:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Column A: Title</li>
                    <li>• Column B: Category (land/farmland/house/apartment)</li>
                    <li>• Column C: Area (coimbatore/palladam/tirupur/udumalaipettai)</li>
                    <li>• Column D: Transaction Type (buy/sell/sale)</li>
                    <li>• Column E: Price (numbers only)</li>
                    <li>• Column F: Location</li>
                    <li>• Column G: Description</li>
                    <li>• Column H: Size</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'create' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Create New Property</h2>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                    <input
                      type="text"
                      value={newProperty.title}
                      onChange={(e) => setNewProperty({...newProperty, title: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                      placeholder="Property Title"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price *</label>
                    <input
                      type="number"
                      value={newProperty.price}
                      onChange={(e) => setNewProperty({...newProperty, price: parseInt(e.target.value)})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                      placeholder="Price in Rupees"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                      value={newProperty.category}
                      onChange={(e) => setNewProperty({...newProperty, category: e.target.value as PropertyData['category']})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="land">Land</option>
                      <option value="farmland">Farm Land</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Area</label>
                    <select
                      value={newProperty.area}
                      onChange={(e) => setNewProperty({...newProperty, area: e.target.value as PropertyData['area']})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="coimbatore">Coimbatore</option>
                      <option value="palladam">Palladam</option>
                      <option value="tirupur">Tirupur</option>
                      <option value="udumalaipettai">Udumalaipettai</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <input
                      type="text"
                      value={newProperty.location}
                      onChange={(e) => setNewProperty({...newProperty, location: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                      placeholder="Specific Location"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                    <input
                      type="text"
                      value={newProperty.size}
                      onChange={(e) => setNewProperty({...newProperty, size: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                      placeholder="e.g., 2000 sqft, 2 acres"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    value={newProperty.description}
                    onChange={(e) => setNewProperty({...newProperty, description: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                    rows={4}
                    placeholder="Property Description"
                  />
                </div>
                
                <div className="flex items-center space-x-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={newProperty.isFeatured}
                      onChange={(e) => setNewProperty({...newProperty, isFeatured: e.target.checked})}
                      className="mr-2"
                    />
                    <span className="text-sm font-medium text-gray-700">Featured Property</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={newProperty.isNew}
                      onChange={(e) => setNewProperty({...newProperty, isNew: e.target.checked})}
                      className="mr-2"
                    />
                    <span className="text-sm font-medium text-gray-700">New Property</span>
                  </label>
                </div>
                
                <button
                  onClick={handleCreateProperty}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium flex items-center"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Create Property
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;