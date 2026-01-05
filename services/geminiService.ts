
import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (userMessage: string) => {
  // Always initialize GoogleGenAI using the direct process.env.API_KEY reference as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: "Você é o consultor virtual de Guilherme, um talentoso desenvolvedor de software de 17 anos baseado no Distrito Federal (DF), proprietário da 'Guilherme WebSites'. Seu objetivo é explicar a importância de ter um site profissional (autoridade, vendas 24/7, alcance no Google) e converter o usuário em um cliente real. Seja moderno, persuasivo, educado e use um tom amigável. Diga que o Guilherme é especialista em Landing Pages, E-commerce e Sites Institucionais. Sempre finalize sugerindo que o usuário fale diretamente com o Guilherme no WhatsApp pelo número +55 61 8229-2636. Importante: Mantenha a mensagem limpa. Nunca use caracteres especiais como asteriscos (*) ou hashtags (#) para formatar o texto. Use ocasionalmente emojis para organizar a leitura.",
        temperature: 0.7,
      },
    });

    // Access the .text property directly as it is a getter, not a method
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Olá! Tive um problema momentâneo, mas o Guilherme pode te ajudar agora mesmo! Me chama no WhatsApp: +55 61 8229-2636";
  }
};