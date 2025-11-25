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
      Eres Lumina, un asistente de compras personal experto, amable y con mucho estilo.
      Tu objetivo es ayudar a los clientes a elegir el mejor producto de nuestra tienda.
      
      Si el usuario está viendo un producto específico, enfócate en sus características:
      ${currentProduct ? `Producto actual: ${currentProduct.name} - Precio: $${currentProduct.price} - Descripción: ${currentProduct.description}` : "El usuario está navegando la tienda general."}
      
      Responde de manera concisa, usa emojis ocasionalmente y mantén un tono profesional pero cercano.
      Si te preguntan algo fuera del contexto de compras, redirige suavemente el tema a la tienda.
    `;

    // Create a new chat session with the system instruction
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
      },
      // In a more persistent implementation, we would pass 'history' here if supported 
      // by the specific SDK version/wrapper or manually manage context.
      // For this stateless function, we are starting fresh or relying on the last message for simplicity 
      // while acknowledging that 'history' management is key for multi-turn conversations.
    });

    // We extract the last user message to send as the new prompt.
    // Ideally, for a full chat experience, we should concatenate history or use it to seed the chat.
    const lastUserMessage = history[history.length - 1].text;
    
    // Construct a context-aware prompt if we want to include previous turns in this stateless call
    // (Simplistic approach for demo purposes to avoid losing context completely if history > 1)
    let messageToSend = lastUserMessage;
    if (history.length > 1) {
       // A simple way to pass history in a stateless manner is to prepend it, 
       // though sending it as actual chat history structure is preferred where possible.
       const previousContext = history.slice(0, -1).map(h => `${h.role === 'user' ? 'User' : 'Model'}: ${h.text}`).join('\n');
       messageToSend = `Contexto previo:\n${previousContext}\n\nUsuario: ${lastUserMessage}`;
    }

    const result = await chat.sendMessage({
        message: messageToSend
    });

    return result.text || "Lo siento, no pude procesar eso.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Tuve un problema conectándome con el servidor de IA. Intenta de nuevo más tarde.";
  }
};