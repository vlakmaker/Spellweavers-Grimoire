import { Container, Group, Text, Button, rem, ActionIcon } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import APIKeyModal from "./APIKeyModal";

type NavBarProps = {
  toggleColorScheme: () => void;
  colorScheme: "light" | "dark";
};

const NavBar = ({ toggleColorScheme, colorScheme }: NavBarProps) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Container
      fluid
      py="xs"
      px="md"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Group spacing="xs">
        <Text
          component={Link}
          to="/"
          fw={700}
          fz="lg"
          c="grape"
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: rem(8) }}
        >
          🧙 Spellweaver’s Grimoire
        </Text>
        <Button size="xs" onClick={open} color="grape" variant="filled">
          🔑 Set API Key
        </Button>
        <APIKeyModal opened={opened} onClose={close} />
      </Group>

      <Group spacing="md">
        <Text component={Link} to="/" style={{ textDecoration: "none" }}>
          Home
        </Text>
        <Text component={Link} to="/spellbook" style={{ textDecoration: "none" }}>
          Spellbook
        </Text>
        <Text component={Link} to="/editor" style={{ textDecoration: "none" }}>
          Editor
        </Text>

        <ActionIcon
          variant="subtle"
          onClick={toggleColorScheme}
          title="Toggle theme"
          aria-label="Toggle theme"
        >
          {colorScheme === "dark" ? <IconSun size={18} /> : <IconMoon size={18} />}
        </ActionIcon>
      </Group>
    </Container>
  );
};

export default NavBar;
