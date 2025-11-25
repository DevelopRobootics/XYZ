import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePropertyDescription = async (
  features: string,
  type: string,
  location: string
): Promise<string> => {
  try {
    const prompt = `
      Write a compelling, professional, and luxurious real estate listing description for a property with the following details:
      Type: ${type}
      Location: ${location}
      Key Features: ${features}
      
      Keep it under 150 words. Focus on the lifestyle and benefits. Use evocative language.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Could not generate description at this time.";
  } catch (error) {
    console.error("Error generating description:", error);
    return "An error occurred while generating the description. Please try again.";
  }
};