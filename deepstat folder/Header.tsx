
import React from 'react';
import { CoffeeIcon } from './Icon';

interface HeaderProps {
  onCoffeeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCoffeeClick }) => {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Deep<span className="text-sky-400">Stat</span>
        </h1>
        <button
          onClick={onCoffeeClick}
          className="flex items-center space-x-2 px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors duration-200 shadow-lg"
        >
          <CoffeeIcon className="w-5 h-5" />
          <span>Buy me a coffee</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
