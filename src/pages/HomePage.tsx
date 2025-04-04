import { Button, Container, Title } from "@mantine/core";

function HomePage() {
  return (
    <Container>
      <Title order={1}>Hello from Spellweaver’s Grimoire 🪄</Title>
      <Button color="grape" mt="md">
        Cast a Spell!
      </Button>
    </Container>
  );
}

export default HomePage;
