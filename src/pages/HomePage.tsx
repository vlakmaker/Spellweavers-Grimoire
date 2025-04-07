import { Button, Container, Stack, Text, Title } from "@mantine/core";
import { IconWand } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useMantineColorScheme } from "@mantine/core";

const HomePage = () => {
  const navigate = useNavigate();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <Container
      size="sm"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Title order={2} mb="sm">
        🧙 Welcome to the Promptweaver’s Grimoire
      </Title>

      <Text c="dimmed" mb="xl">
        Craft magical AI prompts, learn arcane techniques, and become a true Spellwright.
      </Text>

      <Stack spacing="md" align="center">
        {/* Primary button with default grape color */}
        <Button
          size="md"
          color="grape"
          onClick={() => navigate("/start")}
          leftSection={<IconWand size={18} />}
        >
          Begin Spellweaving
        </Button>

        {/* Secondary button with manual hover and color fix */}
        <Button
          size="md"
          color="grape"
          variant="filled"
          onClick={() => navigate("/spellbook")}
          leftSection={<span>📖</span>}
        >
          Open Spellbook
        </Button>
      </Stack>
    </Container>
  );
};

export default HomePage;
