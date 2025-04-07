// src/lib/callLLM.ts
export const callLLM = async ({
  prompt,
  apiKey,
  model = "openai/gpt-3.5-turbo", // default model
}: {
  prompt: string;
  apiKey: string;
  model?: string;
}): Promise<string> => {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "HTTP-Referer": "https://bittygpt.com", // ✅ Required by OpenRouter
      "X-Title": "Spellweaver's Grimoire",    // ✅ Nice to have for logging/debug
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("❌ API error:", response.status, errorText);
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  if (!data.choices || !data.choices[0]?.message?.content) {
    console.error("❌ Unexpected API response format:", data);
    throw new Error("Invalid response from LLM");
  }

  return data.choices[0].message.content.trim();
};
