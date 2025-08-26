import { PropertyData } from '../types/Property';

export const mockProperties: PropertyData[] = [
  {
    id: '1',
    title: 'Premium Villa with Garden View',
    category: 'house',
    area: 'coimbatore',
    transactionType: 'sell',
    price: 7500000,
    originalPrice: 8000000,
    discount: 6.25,
    description: 'Luxury villa with modern amenities, beautiful garden, and excellent connectivity. Perfect for families seeking comfort and style.',
    location: 'Saravanampatti, Coimbatore',
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Swimming Pool', 'Garden', 'Parking', '24/7 Security'],
    size: '3500 sqft',
    yearBuilt: 2020,
    bedrooms: 4,
    bathrooms: 3,
    isFeatured: true,
    isNew: false
  },
  {
    id: '2',
    title: 'Agricultural Land - Prime Location',
    category: 'farmland',
    area: 'udumalaipettai',
    transactionType: 'sell',
    price: 2500000,
    description: 'Fertile agricultural land with water source and road connectivity, ideal for farming and investment purposes.',
    location: 'Udumalaipettai Main Road',
    images: [
      'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Water Source', 'Road Access', 'Fertile Soil', 'Clear Title'],
    size: '5 acres',
    isFeatured: false,
    isNew: true
  },
  {
    id: '3',
    title: 'Modern Apartment Complex',
    category: 'apartment',
    area: 'coimbatore',
    transactionType: 'sell',
    price: 4200000,
    description: 'Contemporary apartment with all modern amenities in prime location. Perfect for young professionals and families.',
    location: 'RS Puram, Coimbatore',
    images: [
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Lift', 'Gym', 'Security', 'Parking'],
    size: '1200 sqft',
    yearBuilt: 2019,
    bedrooms: 3,
    bathrooms: 2,
    isFeatured: true,
    isNew: false
  },
  {
    id: '4',
    title: 'Residential Plot - Gated Community',
    category: 'land',
    area: 'tirupur',
    transactionType: 'sell',
    price: 1800000,
    description: 'Premium residential plot in gated community with all modern infrastructure and amenities.',
    location: 'Tirupur Bypass Road',
    images: [
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Gated Community', 'Water Supply', 'Electricity', 'Road'],
    size: '2400 sqft',
    isFeatured: false,
    isNew: true
  },
  {
    id: '5',
    title: 'Traditional House with Heritage Value',
    category: 'house',
    area: 'palladam',
    transactionType: 'sell',
    price: 6500000,
    description: 'Beautiful traditional house with heritage architecture, spacious rooms, and excellent connectivity.',
    location: 'Palladam Town Center',
    images: [
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Heritage Style', 'Spacious Rooms', 'Traditional Architecture', 'Central Location'],
    size: '2800 sqft',
    yearBuilt: 1995,
    bedrooms: 3,
    bathrooms: 2,
    isFeatured: false,
    isNew: false
  },
  {
    id: '6',
    title: 'Commercial Land - Highway Facing',
    category: 'land',
    area: 'coimbatore',
    transactionType: 'sell',
    price: 15000000,
    description: 'Premium commercial land facing national highway, excellent for business and investment opportunities.',
    location: 'Coimbatore Bypass',
    images: [
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Highway Facing', 'Commercial Zone', 'High Visibility', 'Investment Opportunity'],
    size: '1 acre',
    isFeatured: true,
    isNew: true
  }
];