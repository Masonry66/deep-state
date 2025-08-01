
import { GoogleGenAI } from "@google/genai";

// --- IMPORTANT SECURITY WARNING ---
// Hardcoding API keys is not recommended if your repository is public.
// This key will be visible to anyone who can see your code.
// Replace "YOUR_API_KEY_HERE" with your actual Gemini API key.
const API_KEY = "AIzaSyCBo7RHWD44JG-QVmg7qJKfdnvPNV1rzVE";

const ai = new GoogleGenAI({ apiKey: API_KEY });

const PROMPT_TEMPLATE = (matchData: string) => `
You are 'Deep Stat', the world's most advanced football analysis engine. Your task is to provide a hyper-accurate prediction for the given football match.

Instructions:
1.  Carefully analyze the provided match data.
2.  Use the integrated Google Search tool to find the most up-to-date information. This includes team form, player injuries, head-to-head stats, weather, and any other relevant news.
3.  Based on your comprehensive analysis, generate a prediction.
4.  You MUST return your response as a single, valid JSON object enclosed in a markdown code block (\`\`\`json ... \`\`\`). Do not add any text before or after the JSON block.

JSON Structure:
The JSON object must have the following exact structure:
{
  "predictedWinner": "string",
  "winProbability": {
    "teamAName": "string",
    "teamA": number,
    "teamBName": "string",
    "teamB": number,
    "draw": number
  },
  "predictedScoreline": "string",
  "alternativeOutcomes": [
    { "scoreline": "string", "description": "string" },
    { "scoreline": "string", "description": "string" }
  ],
  "analysisSummary": "string"
}

JSON Field Explanations:
- "predictedWinner": The name of the team you predict will win, or "Draw".
- "winProbability":
    - "teamAName": The name of the first team.
    - "teamA": The win percentage for team A (number between 0 and 100).
    - "teamBName": The name of the second team.
    - "teamB": The win percentage for team B (number between 0 and 100).
    - "draw": The percentage chance of a draw.
    - The sum of teamA, teamB, and draw probabilities MUST equal 100.
- "predictedScoreline": The most likely final score (e.g., "2-1").
- "alternativeOutcomes": An array of two other plausible outcomes, each with a scoreline and a brief description of the scenario.
- "analysisSummary": A concise summary of your key findings and the reasoning behind your prediction.

Match Data to Analyze:
---
${matchData}
---

Now, perform your analysis and provide the JSON output.
`;


export const getMatchPrediction = async (matchData: string): Promise<string> => {
  // This check provides a clear error message if the key hasn't been added.
  if (API_KEY === "YOUR_API_KEY_HERE") {
    throw new Error("Please add your API Key to services/geminiService.ts");
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: PROMPT_TEMPLATE(matchData),
      config: {
        tools: [{ googleSearch: {} }],
      },
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Forward the actual error from the API if it's not a connection issue
    if (error instanceof Error) {
        throw new Error(`AI Engine Error: ${error.message}`);
    }
    throw new Error("Failed to get prediction from the AI engine due to an unknown error.");
  }
};
