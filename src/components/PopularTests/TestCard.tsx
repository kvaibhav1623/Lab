import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TestCardProps {
  title: string;
  description: string;
  price: number;
  icon: LucideIcon;
  discount?: string;
  bestSeller?: boolean;
}

export default function TestCard({ title, description, price, icon: Icon, discount, bestSeller }: TestCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      {(bestSeller || discount) && (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 text-sm font-medium">
          {bestSeller ? 'Best Seller' : discount}
        </div>
      )}
      <div className="p-6">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-200">
          <Icon className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors duration-200" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">${price}</span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}