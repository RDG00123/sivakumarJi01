import React, { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { PropertyData } from '../types/Property';

interface BidModalProps {
  property: PropertyData;
  onClose: () => void;
}

const BidModal: React.FC<BidModalProps> = ({ property, onClose }) => {
  const [bidAmount, setBidAmount] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmitBid = () => {
    if (!bidAmount || !name || !phone) {
      alert('Please fill in all required fields');
      return;
    }

    const bidMessage = `Hello! I would like to place a bid for the property:

Property: ${property.title}
Location: ${property.location}
Listed Price: ₹${property.price.toLocaleString()}

My Bid: ₹${parseInt(bidAmount).toLocaleString()}
Name: ${name}
Phone: ${phone}

Additional Message: ${message || 'None'}

Please let me know if this bid is acceptable.`;

    const encodedMessage = encodeURIComponent(bidMessage);
    window.open(`https://wa.me/916565656565?text=${encodedMessage}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-screen overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Place Your Bid</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Property Info */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">{property.title}</h4>
            <p className="text-sm text-gray-600 mb-2">{property.location}</p>
            <p className="text-lg font-bold text-teal-600">
              Listed at: ₹{property.price.toLocaleString()}
            </p>
          </div>

          {/* Bid Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Bid Amount (₹) *
              </label>
              <input
                type="number"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                placeholder="Enter your bid amount"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Message (Optional)
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Any additional details or questions..."
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-6">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-4 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmitBid}
              className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Submit Bid
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-4">
            Your bid will be sent via WhatsApp to our property consultant
          </p>
        </div>
      </div>
    </div>
  );
};

export default BidModal;