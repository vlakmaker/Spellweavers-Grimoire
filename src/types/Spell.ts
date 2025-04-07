export interface Spell {
    id: string;
    title: string;
    description: string;
    category: string;
    difficulty: string;
    template: string;
    placeholders: string[];
    exampleInputs: Record<string, string>;
    exampleOutput: string;
    tags: string[];
    notes?: string;
    author?: string;
  }
  