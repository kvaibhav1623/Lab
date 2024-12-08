import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Revolutionizing Healthcare,{' '}
              <span className="text-blue-500">One Step at a Time</span>
            </h1>
            <p className="text-lg text-gray-600">
              Experience healthcare reimagined with cutting-edge technology and compassionate care.
              Your well-being is our priority.
            </p>
            <div className="flex space-x-4">
              <button className="group flex items-center px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-200 transform hover:scale-105">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-6 py-3 text-blue-500 border-2 border-blue-500 rounded-full hover:bg-blue-50 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
              alt="Doctor with patient"
              className="rounded-2xl shadow-2xl animate-fade-in"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-bounce-in">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-900">24/7 Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}