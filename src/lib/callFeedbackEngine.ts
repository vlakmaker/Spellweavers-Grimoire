// src/lib/callFeedbackEngine.ts
import { callLLM } from "../lib/callLLM";

type FeedbackRequest = {
  directive: string;
  role: string;
  example?: string;
  outputFormat?: string;
  context?: string;
  apiKey: string;
  model: string;
};

export async function callFeedbackEngine({
  directive,
  role,
  example,
  outputFormat,
  context,
  apiKey,
  model,
}: FeedbackRequest): Promise<{
  score: number;
  feedback: string;
  tips: string;
  sections: {
    role: string;
    directive: string;
    example: string;
    format: string;
    context: string;
  };
}> {
  const evaluationPrompt = `
You are BittyGPT, a magical prompt-crafting mentor who helps users write better prompts.
Always speak in the tone and personality of their described role: "${role}".
Your task is to review the structure of the prompt they are working on and give constructive advice.

The user provided this spell draft:
- Role: ${role || "Not provided"}
- Directive: ${directive || "Not provided"}
- Example: ${example || "None"}
- Output Format: ${outputFormat || "None"}
- Additional Context: ${context || "None"}

Your steps:
1. Evaluate each section and comment if it’s helpful, too vague, or missing.
2. Give a magical improvement tip.
3. Give a final score.

Respond in this exact format:

✨ Spell Review
- Role: <comment>
- Directive: <comment>
- Example: <comment>
- Format: <comment>
- Context: <comment>

🧙 Final Score: X/10
💡 Tip: <one specific, magical suggestion>
`.trim();

  const response = await callLLM({ prompt: evaluationPrompt, apiKey, model });

  console.log("🧪 Raw feedback response:", response);

  const scoreMatch = response.match(/Final Score:\s*(\d{1,2})\/10/i);
  const tipMatch = response.match(/💡 Tip:\s*(.+)/i);
  const sectionMatch = {
    role: (response.match(/- Role:\s*(.+)/i) || [])[1] || "",
    directive: (response.match(/- Directive:\s*(.+)/i) || [])[1] || "",
    example: (response.match(/- Example:\s*(.+)/i) || [])[1] || "",
    format: (response.match(/- Format:\s*(.+)/i) || [])[1] || "",
    context: (response.match(/- Context:\s*(.+)/i) || [])[1] || "",
  };

  if (!scoreMatch || !tipMatch) {
    throw new Error("⚠️ Failed to parse feedback response. Check formatting.");
  }

  return {
    score: parseInt(scoreMatch[1]),
    feedback: Object.values(sectionMatch).join("\n"),
    tips: tipMatch[1].trim(),
    sections: sectionMatch,
  };
}
