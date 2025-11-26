import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// Note: In a real production app, ensure API_KEY is strictly in env vars.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const getCosmicAdvice = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "Lo siento, la conexión con el servidor de IA no está configurada (Falta API KEY). Por favor contacta al administrador.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: `Eres "Celestia", un experto guía de astroturismo y astronomía apasionado. 
        Tu objetivo es inspirar a los usuarios a observar el cielo, explicar fenómenos astronómicos de forma sencilla y poética, 
        y recomendar destinos de astroturismo. 
        Mantén tus respuestas breves (máximo 100 palabras) pero fascinantes. 
        Si te preguntan por precios, sugiere visitar la sección de "Destinos".
        Habla siempre en Español.`,
      }
    });

    return response.text || "Hubo un silencio en las estrellas. Intenta preguntar de nuevo.";
  } catch (error) {
    console.error("Error fetching from Gemini:", error);
    return "Parece que hay interferencia atmosférica. Por favor, intenta más tarde.";
  }
};