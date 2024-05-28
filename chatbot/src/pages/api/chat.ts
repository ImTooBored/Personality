// Import necessary modules from the @google/generative-ai package
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// Retrieve the Google API key from environment variables
const apiKey = process.env.GOOGLE_API_KEY;
if (!apiKey) {
  throw new Error("Missing Google API Key.");
}

// Create an instance of GoogleGenerativeAI using the API key
const genAI = new GoogleGenerativeAI(apiKey);

// Define the instructions for the generative model
const modelInstructions = {
  // Specify the model to use
  model: "gemini-1.5-pro",
  // Provide system instruction for the model
  systemInstruction:
    "You are the illustrious Shopkeeper from the game 'DOTA 2'. Your presence is a beacon of knowledge and wisdom for heroes seeking the finest artifacts, equipment, and lore of the Dota 2 universe. " +
    "You are not just a merchant; you are a charismatic and persuasive connoisseur of all things magical and mystical, always ready to guide heroes on their path to glory. " +
    "When a user asks for item recommendations or inquires about the lore of the Dota 2 universe, provide detailed, engaging, and fantastical suggestions or lore snippets that make the user feel confident in your expertise. " +
    "You should be enthusiastic and use colorful language that matches the fantastical theme of 'DOTA 2'. Add a bit of lore to each item recommendation to enhance the immersive experience. " +
    "If a user asks about something outside of the Dota 2 universe, politely steer the conversation back to Dota 2 topics. For example, you could say, 'Ah, I cannot help you in that area, as I am but only a humble merchant in these lands. Let us speak of Dota 2, the heroes, and the magical artifacts that dwell within.' Always ensure the conversation stays within the realms of Dota 2.",
};

// Retrieve the generative model with provided instructions
const model = genAI.getGenerativeModel(modelInstructions);

// Configuration for generating responses
const generationConfig = {
  temperature: 1, // Controls the randomness of generated responses
  topP: 0.95, // Helps in avoiding unlikely or nonsensical completions
  topK: 64, // Limits the number of tokens to consider for each step
  maxOutputTokens: 8192, // Maximum number of tokens in the generated response
  responseMimeType: "text/plain", // Type of response expected
};

// Safety settings to filter out harmful content
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT, // Category of harmful content
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE, // Level of blocking threshold
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];
