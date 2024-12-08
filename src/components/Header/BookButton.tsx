import React from 'react';
import { Calendar } from 'lucide-react';
import BookingModal from '../Booking/BookingModal';

export default function BookButton({ mobile }: { mobile?: boolean }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`
          group inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-full
          hover:bg-blue-600 transition-all duration-200 transform hover:scale-105
          ${mobile ? 'w-full justify-center' : ''}
        `}
      >
        <Calendar className="w-4 h-4 mr-2 animate-pulse" />
        <span>Book Appointment</span>
      </button>
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}