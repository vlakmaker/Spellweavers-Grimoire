// src/pages/SpellEditorPage.tsx
import {
  Container,
  Grid,
  TextInput,
  Textarea,
  Title,
  Button,
  Stack,
  Paper,
  Text,
  Divider,
} from "@mantine/core";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import defaultSpells from "../data/defaultSpells";

function SpellEditorPage() {
  const [searchParams] = useSearchParams();
  const spellPath = searchParams.get("path");

  const [directive, setDirective] = useState("");
  const [role, setRole] = useState("");
  const [example, setExample] = useState("");
  const [outputFormat, setOutputFormat] = useState("");
  const [context, setContext] = useState("");

  useEffect(() => {
    if (spellPath && defaultSpells[spellPath]) {
      const spell = defaultSpells[spellPath];
      setDirective(spell.directive || "");
      setRole(spell.role || "");
      setExample(spell.example || "");
      setOutputFormat(spell.outputFormat || "");
      setContext(spell.context || "");
    }
  }, [spellPath]);

  const generatePrompt = () => {
    return `Act as ${role || "an assistant"}.\n\n` +
      `${directive}\n\n` +
      (context ? `Context: ${context}\n\n` : "") +
      (example ? `Example:\n${example}\n\n` : "") +
      (outputFormat ? `Format: ${outputFormat}` : "");
  };

  return (
    <Container size="xl" py="lg">
      <Title order={2} mb="md">✍️ Compose Your Spell</Title>

      <Grid>
        {/* Left: Inputs */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="sm">
            <TextInput
              label="🧭 Directive"
              placeholder="What should the model do?"
              value={directive}
              onChange={(e) => setDirective(e.currentTarget.value)}
            />
            <TextInput
              label="🧙 Role"
              placeholder="Who should the model pretend to be?"
              value={role}
              onChange={(e) => setRole(e.currentTarget.value)}
            />
            <Textarea
              label="📚 Example (optional)"
              placeholder="Input-output sample"
              minRows={3}
              value={example}
              onChange={(e) => setExample(e.currentTarget.value)}
            />
            <TextInput
              label="📦 Output Format (optional)"
              placeholder="e.g. List, JSON, paragraph"
              value={outputFormat}
              onChange={(e) => setOutputFormat(e.currentTarget.value)}
            />
            <Textarea
              label="🧠 Additional Context (optional)"
              placeholder="Anything else the model should know?"
              minRows={2}
              value={context}
              onChange={(e) => setContext(e.currentTarget.value)}
            />
          </Stack>
        </Grid.Col>

        {/* Right: Preview */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper shadow="md" p="md" radius="md" withBorder>
            <Title order={4}>🔮 Preview</Title>
            <Divider my="sm" />
            <Text size="sm" style={{ whiteSpace: "pre-wrap" }}>
              {generatePrompt()}
            </Text>
            <Button fullWidth mt="md" color="grape">
              Cast Spell
            </Button>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default SpellEditorPage;
