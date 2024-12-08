import React from 'react';
import { X, Calendar, Clock, CreditCard } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const tests = [
  { id: 1, name: 'Complete Blood Count', price: 99 },
  { id: 2, name: 'X-Ray Chest', price: 149 },
  { id: 3, name: 'MRI Brain Scan', price: 599 },
  { id: 4, name: 'CT Scan', price: 499 },
  { id: 5, name: 'Ultrasound', price: 199 },
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = React.useState(1);
  const [selectedTests, setSelectedTests] = React.useState<number[]>([]);
  const [selectedDate, setSelectedDate] = React.useState('');
  const [selectedTime, setSelectedTime] = React.useState('');

  if (!isOpen) return null;

  const totalAmount = tests
    .filter(test => selectedTests.includes(test.id))
    .reduce((sum, test) => sum + test.price, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Booking confirmed! Thank you for choosing our services.');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-bounce-in">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Book Appointment</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="mb-8">
            <div className="flex justify-between mb-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`flex items-center ${i < 3 ? 'flex-1' : ''}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= i ? 'bg-blue-500 text-white' : 'bg-gray-200'
                    }`}
                  >
                    {i}
                  </div>
                  {i < 3 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        step > i ? 'bg-blue-500' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">Select Tests</h3>
                {tests.map((test) => (
                  <label
                    key={test.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedTests.includes(test.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedTests([...selectedTests, test.id]);
                          } else {
                            setSelectedTests(selectedTests.filter(id => id !== test.id));
                          }
                        }}
                        className="w-4 h-4 text-blue-500"
                      />
                      <span className="ml-3">{test.name}</span>
                    </div>
                    <span className="font-semibold">${test.price}</span>
                  </label>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a time slot</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-4">Payment Details</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Card Number
                      </label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total Amount:</span>
                    <span>${totalAmount}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Back
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ml-auto"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ml-auto"
                >
                  Confirm Booking
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}