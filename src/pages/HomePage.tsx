// src/pages/NotFoundPage.tsx
import { Container, Title, Text, Button, Center } from "@mantine/core";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <Center style={{ height: '80vh' }}>
      <Container ta="center">
        <Title order={1}>🧩 Page Not Found</Title>
        <Text mt="sm" color="dimmed">
          Uh oh... this part of the grimoire seems to be missing!
        </Text>
        <Button
          mt="lg"
          variant="light"
          color="grape"
          component={Link}
          to="/"
        >
          Return to the Library 🏛️
        </Button>
      </Container>
    </Center>
  );
}

export default NotFoundPage;