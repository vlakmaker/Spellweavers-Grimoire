import { Container, Grid, Paper, Title, Text, Button, Stack } from "@mantine/core";
import { useNavigate } from "react-router-dom";

// Step 1: Define static spell paths
const spellPaths = [
  {
    key: "structured-intent",
    title: "✨ Structured Intent",
    emoji: "✨",
    description: "Design complete prompts using role, context, and output rules.",
  },
  {
    key: "thoughtcraft",
    title: "🧠 Thoughtcraft",
    emoji: "🧠",
    description: "Use chain-of-thought and logic to guide the model.",
  },
  {
    key: "prompt-tinkering",
    title: "🧪 Prompt Tinkering",
    emoji: "🧪",
    description: "Improve or mutate existing prompts into something better.",
  },
  {
    key: "persona-craft",
    title: "🎭 Persona Craft",
    emoji: "🎭",
    description: "Summon a character-like AI to respond with flavor and tone.",
  },
];

function CategorySelector() {
  const navigate = useNavigate();

  return (
    <Container size="md" py="lg">
      <Title order={2} mb="lg" ta="center">
        🔮 Choose Your Spell Path
      </Title>

      <Grid gutter="md">
        {spellPaths.map((spell) => (
          <Grid.Col span={{ base: 12, sm: 6 }} key={spell.key}>
            <Paper shadow="sm" p="md" radius="md" withBorder>
              <Stack gap="xs">
                <Title order={4}>
                  {spell.emoji} {spell.title}
                </Title>
                <Text size="sm" color="dimmed">
                  {spell.description}
                </Text>
                <Button
                  color="grape"
                  fullWidth
                  mt="sm"
                  onClick={() => navigate(`/spells?path=${spell.key}`)}
                >
                  Begin
                </Button>
              </Stack>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

export default CategorySelector;
