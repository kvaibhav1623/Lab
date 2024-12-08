import React from 'react';
import { Stethoscope, Brain, Heart, Activity, TestTube, Users } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'General Checkup',
    description: 'Comprehensive health assessment and preventive care',
    icon: Stethoscope,
  },
  {
    title: 'Neurology',
    description: 'Expert care for neurological conditions',
    icon: Brain,
  },
  {
    title: 'Cardiology',
    description: 'Advanced cardiac care and treatment',
    icon: Heart,
  },
  {
    title: 'Diagnostics',
    description: 'State-of-the-art diagnostic services',
    icon: Activity,
  },
  {
    title: 'Laboratory',
    description: 'Accurate and timely test results',
    icon: TestTube,
  },
  {
    title: 'Family Medicine',
    description: 'Comprehensive care for the whole family',
    icon: Users,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare solutions tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}