import { GoogleGenAI, Chat } from "@google/genai";
import { MOCK_PROPERTIES } from "../constants";

// Initialize the client. The API_KEY is injected by the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Eres "Lumina AI", un asistente virtual experto en bienes raíces para la inmobiliaria "Lumina Estates".
Tu objetivo es ayudar a los usuarios a encontrar propiedades, responder dudas sobre el mercado inmobiliario y agendar visitas.

Datos de propiedades disponibles (usa esto para recomendar):
${JSON.stringify(MOCK_PROPERTIES.map(p => ({ title: p.title, price: p.price, city: p.city, type: p.type, features: p.features })))}

Reglas:
1. Sé amable, profesional y conciso.
2. Si te preguntan por casas, busca en la lista de datos proporcionada y sugiere opciones específicas.
3. Si el usuario quiere contactar, dile que use el formulario de contacto en la página.
4. Responde siempre en Español.
5. No inventes propiedades que no existen en los datos.
`;

export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};
