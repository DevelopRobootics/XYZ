import { GoogleGenAI } from "@google/genai";
import { Product } from "../types";

// Initialize the client with the API key directly from the environment variable.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getShoppingAdvice = async (
  history: { role: string; text: string }[],
  currentProduct?: Product
): Promise<string> => {
  try {
    const systemInstruction = `
      Eres 'Verde', un botánico experto y asistente de la tienda 'Verde Botanics'.
      Tu pasión es ayudar a las personas a crear junglas urbanas y cuidar de sus plantas.
      
      Tono: Calmado, orgánico, educativo y alentador (tipo "plant parent").
      
      Si el usuario ve un producto específico:
      ${currentProduct ? `Producto actual: ${currentProduct.name} - Precio: $${currentProduct.price} - Info: ${currentProduct.description}` : "El usuario navega la tienda."}
      
      Consejos clave que sueles dar:
      1. Preguntar sobre la iluminación del hogar del usuario (Luz directa vs indirecta).
      2. Si tienen mascotas (recomendar plantas Pet Friendly).
      3. Frecuencia de riego.
      
      Mantén las respuestas concisas (máx 3 oraciones), usa emojis de plantas (🌿, 🪴, 💧) y sé muy amable.
    `;

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
      },
    });

    const lastUserMessage = history[history.length - 1].text;
    
    let messageToSend = lastUserMessage;
    if (history.length > 1) {
       const previousContext = history.slice(0, -1).map(h => `${h.role === 'user' ? 'Usuario' : 'Verde'}: ${h.text}`).join('\n');
       messageToSend = `Contexto previo:\n${previousContext}\n\nUsuario actual: ${lastUserMessage}`;
    }

    const result = await chat.sendMessage({
        message: messageToSend
    });

    return result.text || "Mis hojas están un poco secas hoy, no pude procesar eso. ¿Intentamos de nuevo?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Tuve un problema de conexión con el invernadero digital. Intenta más tarde.";
  }
};