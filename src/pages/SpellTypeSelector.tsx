// src/pages/SpellTypeSelector.tsx
import {
    Container,
    Title,
    SimpleGrid,
    Card,
    Text,
    Button,
    Stack,
  } from "@mantine/core";
  import { useNavigate, useSearchParams } from "react-router-dom";
  
  const spellTypes = [
    {
      key: "builder",
      label: "✨ Spell Builder",
      description: "Compose your own prompt from scratch.",
      icon: "✨",
    },
    {
      key: "tinker",
      label: "🧪 Prompt Tinker",
      description: "Improve or mutate a given prompt.",
      icon: "🧪",
    },
    {
      key: "template",
      label: "📜 Prompt Template",
      description: "Fill in a structured prompt form.",
      icon: "📜",
    },
    {
      key: "persona",
      label: "🎭 Persona Summoner",
      description: "Craft prompts with a unique character or voice.",
      icon: "🎭",
    },
  ];
  
  function SpellTypeSelector() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const category = searchParams.get("category");
  
    const handleSelect = (spellTypeKey: string) => {
      navigate(`/editor?path=${category}_${spellTypeKey}`);
    };
  
    return (
      <Container size="md" py="xl">
        <Title order={2} mb="lg">
          🪄 Choose Your Spell Type
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          {spellTypes.map((type) => (
            <Card key={type.key} shadow="md" padding="lg" radius="md" withBorder>
              <Stack>
                <Title order={4}>
                  {type.icon} {type.label}
                </Title>
                <Text color="dimmed">{type.description}</Text>
                <Button onClick={() => handleSelect(type.key)} color="grape">
                  Begin
                </Button>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    );
  }
  
  export default SpellTypeSelector;
  