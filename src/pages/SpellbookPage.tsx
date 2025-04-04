// src/pages/SpellbookPage.tsx
import { Container, Title, Text, Stack } from "@mantine/core";

function SpellbookPage() {
  return (
    <Container>
      <Title order={1}>📖 Spellbook</Title>

      <Stack spacing="xl" mt="md">
        <div>
          <Title order={2}>Chain of Thought Reasoning</Title>
          <Text>
            Encourages the model to think step by step to solve complex problems.
          </Text>
        </div>

        <div>
          <Title order={2}>Summon the Whimsical Historian</Title>
          <Text>
            Summon a quirky yet insightful AI historian to explain events with charm and accuracy.
          </Text>
        </div>

        <div>
          <Title order={2}>React with Verification</Title>
          <Text>
            A self-checking prompt where the AI provides an answer and then verifies its correctness.
          </Text>
        </div>
      </Stack>
    </Container>
  );
}

export default SpellbookPage;
