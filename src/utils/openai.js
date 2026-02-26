import OpenAI from "openai";
import { generatePrompt } from "./promptGenerator";

export const generateEducationPlan = async (apiKey, inputData) => {
    if (!apiKey) {
        throw new Error("APIキーを入力してください。");
    }

    const openai = new OpenAI({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true // Client-side only usage
    });

    const prompt = generatePrompt(inputData);

    try {
        const completion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: "You are a helpful assistant." }, // System role is handled in the prompt content mostly, but good to have.
                { role: "user", content: prompt }
            ],
            model: "gpt-4o",
            temperature: 0.7,
        });

        return completion.choices[0].message.content;
    } catch (error) {
        console.error("OpenAI API Error:", error);
        throw error;
    }
};
