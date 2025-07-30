
import React from 'react';
import { PredictionResult } from '../types';

interface PredictionOutputProps {
  result: PredictionResult;
}

const PredictionOutput: React.FC<PredictionOutputProps> = ({ result }) => {
  const { predictedWinner, winProbability, predictedScoreline, alternativeOutcomes, analysisSummary } = result;
  
  const winnerColor = predictedWinner === 'Draw' ? 'text-yellow-400' : 'text-green-400';

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Main Prediction Card */}
      <div className="bg-gray-800/50 border border-sky-500/50 rounded-xl shadow-2xl overflow-hidden">
        <div className="p-6">
          <p className="text-sm font-semibold text-sky-400 uppercase tracking-wider">Predicted Winner</p>
          <p className={`text-4xl font-black mt-1 ${winnerColor}`}>{predictedWinner}</p>
        </div>
        <div className="bg-gray-900/50 px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-semibold text-orange-400 uppercase tracking-wider">Predicted Scoreline</p>
            <p className="text-3xl font-bold text-white">{predictedScoreline}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-yellow-400 uppercase tracking-wider">Win Probability</p>
            <div className="flex items-baseline space-x-4 mt-1 text-white">
                <p><span className="font-bold">{winProbability.teamAName}:</span> {winProbability.teamA}%</p>
                <p><span className="font-bold">{winProbability.teamBName}:</span> {winProbability.teamB}%</p>
                <p><span className="font-bold">Draw:</span> {winProbability.draw}%</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Analysis Summary Card */}
      <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
        <h3 className="text-xl font-bold text-orange-400 mb-3">Analysis Summary</h3>
        <p className="text-gray-300 leading-relaxed">{analysisSummary}</p>
      </div>
      
      {/* Alternative Outcomes */}
      <div>
        <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Alternative Outcomes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {alternativeOutcomes.map((outcome, index) => (
            <div key={index} className="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
              <p className="text-center font-bold text-2xl text-sky-400 mb-2">{outcome.scoreline}</p>
              <p className="text-center text-gray-400 text-sm">{outcome.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PredictionOutput;
