// src/pages/HomePage.tsx
import { Container, Title, Text, Button, Stack, Center } from "@mantine/core";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Center style={{ height: "80vh" }}>
      <Container size="sm" ta="center">
        <Stack align="center" gap="lg">
          <Title order={1}>🧙‍♀️ Welcome to the Promptweaver’s Grimoire</Title>
          <Text c="dimmed">
            Craft magical AI prompts, learn arcane techniques, and become a true Spellwright.
          </Text>
          <Button component={Link} to="/editor" size="md" color="grape">
            Begin Spellweaving ✍️
          </Button>
          <Button component={Link} to="/spellbook" variant="light" size="sm">
            Browse the Spellbook 📚
          </Button>
        </Stack>
      </Container>
    </Center>
  );
}

export default HomePage;
