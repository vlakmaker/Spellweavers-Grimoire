export const callLLM = async ({
    prompt,
    apiKey,
    model = "openai/gpt-3.5-turbo", // You can switch this to mixtral if you want
  }: {
    prompt: string;
    apiKey: string;
    model?: string;
  }) => {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "HTTP-Referer": "https://bittygpt.com", // optional but polite
        "X-Title": "Spellweaver's Grimoire",
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      }),
    });
  
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
  
    const data = await response.json();
    return data.choices[0].message.content;
  };
  