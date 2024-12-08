import React from 'react';
import { Menu, X, Heart } from 'lucide-react';
import NavLinks from './NavLinks';
import BookButton from './BookButton';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-semibold text-gray-900">HealthCare Plus</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <NavLinks />
          </nav>

          <div className="hidden md:flex">
            <BookButton />
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLinks mobile />
            <div className="mt-4">
              <BookButton mobile />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}