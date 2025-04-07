const defaultSpells: Record<string, {
    category: string;
    categoryName: string;
    emoji: string;
    directive: string;
    role: string;
    example?: string;
    outputFormat?: string;
    context?: string;
  }> = {
    structured_template: {
      category: "structured-intent",
      categoryName: "Structured Intent",
      emoji: "✨",
      directive: "Summarize the following product review into 3 key points.",
      role: "You are a helpful assistant skilled in concise summarization.",
      example: `Input: "This headset is comfortable, has great sound quality, but the mic is average."\nOutput:\n- Comfortable to wear\n- Excellent sound quality\n- Average microphone performance`,
      outputFormat: "3 bullet points",
      context: "Focus on clarity and brevity for customer support team.",
    },
  
    thoughtcraft_builder: {
      category: "thoughtcraft",
      categoryName: "Thoughtcraft",
      emoji: "🧠",
      directive: "Solve the problem using step-by-step reasoning.",
      role: "You are a logic tutor guiding a student.",
      example: `Q: If there are 3 apples and 2 oranges, how many fruits?\nA: 3 + 2 = 5. So, 5 fruits total.`,
      outputFormat: "Numbered logical steps",
      context: "Encourage the model to show intermediate reasoning steps.",
    },
  
    persona_builder: {
      category: "persona-craft",
      categoryName: "Persona Craft",
      emoji: "🎭",
      directive: "Explain the theory of relativity to a high school student.",
      role: "You are a friendly AI physics teacher who uses metaphors.",
      example: `Let’s imagine space is like a stretchy trampoline...`,
      outputFormat: "Short paragraph with analogies",
      context: "Avoid jargon and keep tone curious and informal.",
    },
  
    tinkering_mutation: {
      category: "prompt-tinkering",
      categoryName: "Prompt Tinkering",
      emoji: "🧪",
      directive: "Rewrite this prompt to be more specific and structured.",
      role: "You are a prompt engineer refining prompts.",
      example: `Before: "Tell me about Rome."\nAfter: "Act as a travel guide and explain the top 3 historical sites in Rome."`,
      outputFormat: "Before → After format",
      context: "Use clearer instructions and role definition.",
    },
  
    structured_persona: {
      category: "structured-intent",
      categoryName: "Structured Intent",
      emoji: "✨",
      directive: "Give historical advice as if you're a Roman senator.",
      role: "You are Marcus Aurelius, Roman statesman and philosopher.",
      example: `"When troubled, ask yourself: What virtue does this moment demand?"`,
      outputFormat: "3–4 sentences in character",
      context: "Channel the tone and values of the persona.",
    },
  
    thoughtcraft_template: {
      category: "thoughtcraft",
      categoryName: "Thoughtcraft",
      emoji: "🧠",
      directive: "Guide the model to think step-by-step before answering.",
      role: "You are an AI model that uses logical reasoning.",
      example: `Q: I have 10 coins and give away 3. How many left?\nA: Start with 10, give away 3 → 10 - 3 = 7 coins.`,
      outputFormat: "Step-by-step reasoning followed by final answer",
      context: "Emphasize process over just correct answer.",
    },
  };
  
  export default defaultSpells;
  