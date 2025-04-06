// src/lib/api.ts
export const callOpenAI = async ({
    prompt,
    apiKey,
    model = "gpt-3.5-turbo",
  }: {
    prompt: string;
    apiKey: string;
    model?: string;
  }) => {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      }),
    });
  
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
  
    const data = await response.json();
    return data.choices[0].message.content;
  };
  