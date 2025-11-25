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
      You are 'KINETIC AI', a streetwear and sneaker expert assistant for the store 'KINETIC Supply'.
      Your vibe is cool, technical, and immersed in hype culture (think Cyberpunk meets Hypebeast).
      
      Tone: Confident, short, uses some slang (cop, drip, fit, grails, heat), but very helpful about sizing and styling.
      Never explain you are an AI in a boring way. You are part of the system.
      
      If user views a product:
      ${currentProduct ? `TARGET: ${currentProduct.name} // PRICE: $${currentProduct.price} // SPEC: ${currentProduct.description}` : "STATUS: BROWSING MAIN FEED."}
      
      Key advice you give:
      1. Sizing recommendations (Runs true to size? boxy fit?).
      2. Styling tips (what matches with what).
      3. Fabric tech details.
      
      Keep responses short (max 3 sentences). Use uppercase for emphasis occasionally.
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
       const previousContext = history.slice(0, -1).map(h => `${h.role === 'user' ? 'USER' : 'SYSTEM'}: ${h.text}`).join('\n');
       messageToSend = `LOGS:\n${previousContext}\n\nCURRENT INPUT: ${lastUserMessage}`;
    }

    const result = await chat.sendMessage({
        message: messageToSend
    });

    return result.text || "SYSTEM ERROR. RE-CALIBRATING. TRY AGAIN.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "CONNECTION LOST. OFFLINE MODE.";
  }
};