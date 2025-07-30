
export interface WinProbability {
  teamA: number;
  teamB: number;
  draw: number;
  teamAName: string;
  teamBName: string;
}

export interface AlternativeOutcome {
  scoreline: string;
  description: string;
}

export interface PredictionResult {
  predictedWinner: string;
  winProbability: WinProbability;
  predictedScoreline: string;
  alternativeOutcomes: AlternativeOutcome[];
  analysisSummary: string;
}
