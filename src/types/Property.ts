export interface PropertyData {
  id: string;
  title: string;
  category: 'land' | 'farmland' | 'house' | 'apartment';
  area: 'coimbatore' | 'palladam' | 'tirupur' | 'udumalaipettai';
  transactionType: 'buy' | 'sell' | 'sale';
  price: number;
  originalPrice?: number;
  discount?: number;
  description: string;
  location: string;
  images: string[];
  features: string[];
  size: string;
  yearBuilt?: number;
  bedrooms?: number;
  bathrooms?: number;
  isFeatured: boolean;
  isNew: boolean;
}

export interface FilterState {
  category: string;
  area: string;
  transactionType: string;
  search: string;
}