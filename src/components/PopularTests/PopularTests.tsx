import React from 'react';
import { Activity, Microscope, Stethoscope, Brain } from 'lucide-react';
import TestCard from './TestCard';

const popularTests = [
  {
    id: 1,
    title: 'Complete Blood Count',
    description: 'Comprehensive blood analysis including hemoglobin and cell counts',
    price: 99,
    icon: Microscope,
    discount: '20% off',
  },
  {
    id: 2,
    title: 'Full Body Checkup',
    description: 'Complete health screening with detailed reports',
    price: 299,
    icon: Activity,
    discount: '15% off',
  },
  {
    id: 3,
    title: 'X-Ray Chest',
    description: 'High-quality digital X-ray imaging',
    price: 149,
    icon: Stethoscope,
    discount: '10% off',
  },
  {
    id: 4,
    title: 'MRI Brain Scan',
    description: 'Detailed brain imaging with expert analysis',
    price: 599,
    icon: Brain,
    bestSeller: true,
  },
];

export default function PopularTests() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Health Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Most sought-after diagnostic tests and health packages
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularTests.map((test) => (
            <TestCard key={test.id} {...test} />
          ))}
        </div>
      </div>
    </section>
  );
}