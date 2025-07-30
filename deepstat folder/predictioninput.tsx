
import React from 'react';

interface PredictionInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const PredictionInput: React.FC<PredictionInputProps> = ({ value, onChange, onSubmit, isLoading }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
        onSubmit();
    }
  };
    
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-lg">
      <label htmlFor="match-data" className="block text-lg font-semibold mb-3 text-sky-300">
        Enter Match Data
      </label>
      <textarea
        id="match-data"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
        placeholder="e.g., Manchester United vs Liverpool, Premier League. Provide details like team form, key players, recent results, and any other relevant stats..."
        className="w-full h-40 p-4 bg-gray-900 border border-gray-600 rounded-lg text-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition duration-200 resize-none disabled:opacity-50"
      />
      <p className="text-xs text-gray-500 mt-2">Tip: Press Ctrl+Enter or Cmd+Enter to submit.</p>
      <button
        onClick={onSubmit}
        disabled={isLoading}
        className="mt-4 w-full bg-sky-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-sky-600 transition-all duration-200 disabled:bg-sky-800 disabled:cursor-not-allowed flex items-center justify-center shadow-sky-500/30 shadow-lg"
      >
        {isLoading ? 'Analyzing...' : 'Get Results'}
      </button>
    </div>
  );
};

export default PredictionInput;
