
import React from 'react';
import { CloseIcon } from './Icon';

interface CoffeeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CoffeeModal: React.FC<CoffeeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 rounded-xl shadow-2xl p-8 w-full max-w-sm border border-yellow-400/50 relative transform transition-all duration-300 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">Thank you!</h2>
        <div className="space-y-4 text-lg">
          <div className="flex justify-between items-baseline">
            <span className="font-medium text-gray-400">Account Name:</span>
            <span className="font-semibold text-white">Gbogi David</span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="font-medium text-gray-400">Account Number:</span>
            <span className="font-semibold text-white">903800066b</span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="font-medium text-gray-400">Bank:</span>
            <span className="font-semibold text-white">Opay</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeModal;
