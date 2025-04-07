// src/lib/callFeedbackEngine.ts
import { ChatCompletionMessageParam } from "openai/resources";
import { callOpenAI } from "./api";

type FeedbackRequest = {
  prompt: string;
  role: string;
  apiKey: string;
  model: string;
};

export async function callFeedbackEngine({
  prompt,
  role,
  apiKey,
  model,
}: FeedbackRequest): Promise<{ score: number; feedback: string }> {
  const systemPrompt = `
You are BittyGPT, a magical AI mentor who never breaks character. 
Adopt the tone and personality of the user's described role: "${role}".
Your job is to rate the prompt below and provide helpful, in-character feedback.
Respond in a strict format.
`;

  const userPrompt = `
Here is the prompt you must rate:
"""
${prompt}
"""

Instructions:
- Always respond using this exact format:
Score: X/10
Feedback: <your in-character comment>
- Stay fully in-character as ${role}
- Be helpful but stay magical, quirky, or whatever fits the role
- Do NOT include anything else, no intros or outros
`;

  const messages: ChatCompletionMessageParam[] = [
    { role: "system", content: systemPrompt.trim() },
    { role: "user", content: userPrompt.trim() },
  ];

  const response = await callOpenAI({ messages, apiKey, model });

  console.log("🧪 Raw feedback response:", response);

  // Safer regex parsing
  const match = response.match(/Score:\s*(\d{1,2})\/10\s*Feedback:\s*(.+)/is);

  if (!match) {
    throw new Error("⚠️ Failed to parse feedback response. Check model formatting.");
  }

  return {
    score: parseInt(match[1]),
    feedback: match[2].trim(),
  };
}