import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// NOTE: In a real production app, ensure your API key is secure.
const getClient = () => {
    if (!process.env.API_KEY) {
        console.warn("API_KEY is not defined in environment variables.");
        return null;
    }
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateHikingAdvice = async (userQuery: string): Promise<string> => {
    const client = getClient();
    
    // Fallback if no API key is present for the template demo
    if (!client) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve("El modo demostración está activo (sin API Key). En una implementación real, Gemini analizaría tu solicitud: \"" + userQuery + "\" para darte recomendaciones personalizadas sobre rutas, equipamiento o seguridad.");
            }, 1000);
        });
    }

    try {
        const response = await client.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: userQuery,
            config: {
                systemInstruction: "Eres un experto guía de montaña y senderismo llamado 'VeredaBot'. Tu objetivo es ayudar a los usuarios a encontrar rutas, dar consejos de seguridad, listas de equipamiento y motivación. Eres amable, conciso y priorizas la seguridad. Responde siempre en español. Usa formato Markdown para listas y negritas.",
            }
        });

        return response.text || "Lo siento, no pude generar una respuesta en este momento.";
    } catch (error) {
        console.error("Error connecting to Gemini:", error);
        return "Hubo un error al conectar con el asistente inteligente. Por favor intenta más tarde.";
    }
};