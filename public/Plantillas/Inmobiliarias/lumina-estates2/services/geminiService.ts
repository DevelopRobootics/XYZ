import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini client
const apiKey = process.env.API_KEY || ''; // Fallback to empty string if not set, handled by UI

export const getRealEstateAdvice = async (userPrompt: string): Promise<string> => {
  if (!apiKey) {
    // Simulate a response if no API key is present for the template demo
    await new Promise(resolve => setTimeout(resolve, 1500));
    return "Como soy una demo de plantilla, no tengo una clave API configurada. En una aplicación real, aquí te daría asesoramiento personalizado sobre el mercado inmobiliario, precios por m² y tendencias de inversión basado en tu consulta.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const systemInstruction = `
      Eres un experto asesor inmobiliario de lujo para "Lumina Estates". 
      Tu tono es profesional, amable y persuasivo.
      Ayudas a los clientes a entender el mercado, evaluar precios y encontrar su hogar ideal.
      Responde de manera concisa (máximo 100 palabras) y siempre invita a ver nuestras propiedades o contactar a un agente.
      Si preguntan por precios específicos, da estimaciones generales del mercado actual.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "Lo siento, no pude procesar tu solicitud en este momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Hubo un error al conectar con el asistente virtual. Por favor intenta más tarde.";
  }
};
