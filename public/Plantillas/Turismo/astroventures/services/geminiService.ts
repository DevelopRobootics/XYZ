import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

try {
  // Graceful handling if API key is missing during template preview
  if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
} catch (error) {
  console.warn("Gemini API Client failed to initialize. Check API_KEY.");
}

export const generateStarResponse = async (userPrompt: string): Promise<string> => {
  if (!ai) {
    return "I'm currently offline (API Key missing). I can tell you that the stars look beautiful tonight!";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: "You are an expert astronomer and tour guide for AstroVentures. Keep answers concise, inspiring, and related to space, astronomy, or our tours.",
      }
    });
    return response.text || "I couldn't quite see that through the telescope. Try again?";
  } catch (error) {
    console.error("Gemini Request Error:", error);
    return "Interference from solar flares detected. Please try again later.";
  }
};