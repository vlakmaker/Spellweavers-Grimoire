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
  Loader,
  Alert,
  Select,
} from "@mantine/core";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import defaultSpells from "../data/defaultSpells";
import { callLLM } from "../lib/callLLM";
import modelOptions from "../data/modelOptions";

function SpellEditorPage() {
  const [searchParams] = useSearchParams();
  const spellPath = searchParams.get("path");

  const [directive, setDirective] = useState("");
  const [role, setRole] = useState("");
  const [example, setExample] = useState("");
  const [outputFormat, setOutputFormat] = useState("");
  const [context, setContext] = useState("");

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState("");
  const [model, setModel] = useState("openai/gpt-3.5-turbo");

  useEffect(() => {
    if (spellPath && defaultSpells[spellPath]) {
      const spell = defaultSpells[spellPath];
      setDirective(spell.directive || "");
      setRole(spell.role || "");
      setExample(spell.example || "");
      setOutputFormat(spell.outputFormat || "");
      setContext(spell.context || "");
    }

    const savedKey = localStorage.getItem("openai-api-key");
    if (savedKey) setApiKey(savedKey);
  }, [spellPath]);

  const generatePrompt = () => {
    return `Act as ${role || "an assistant"}.\n\n` +
      `${directive}\n\n` +
      (context ? `Context: ${context}\n\n` : "") +
      (example ? `Example:\n${example}\n\n` : "") +
      (outputFormat ? `Format: ${outputFormat}` : "");
  };

  const handleCastSpell = async () => {
    if (!apiKey) {
      setError("No API key found. Please set your API key.");
      return;
    }

    const prompt = generatePrompt();
    setLoading(true);
    setError(null);
    setResult("");

    try {
      const response = await callLLM({ prompt, apiKey, model });
      setResult(response);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
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
            <Select
              label="🧠 Model"
              placeholder="Choose an LLM"
              data={modelOptions}
              value={model}
              onChange={(value) => value && setModel(value)}
              withinPortal
            />
          </Stack>
        </Grid.Col>

        {/* Right: Preview + Output */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper shadow="md" p="md" radius="md" withBorder>
            <Title order={4}>🔮 Preview</Title>
            <Divider my="sm" />
            <Text size="sm" style={{ whiteSpace: "pre-wrap" }}>
              {generatePrompt()}
            </Text>

            <Button fullWidth mt="md" color="grape" onClick={handleCastSpell} loading={loading}>
              Cast Spell
            </Button>

            {loading && (
              <Text c="dimmed" mt="sm">
                ✨ The spell is being cast...
              </Text>
            )}

            {error && (
              <Alert color="red" mt="sm">
                {error}
              </Alert>
            )}

            {result && (
              <>
                <Divider my="sm" />
                <Title order={5}>📝 Result</Title>
                <Text mt="xs" style={{ whiteSpace: "pre-wrap" }}>
                  {result}
                </Text>
              </>
            )}
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default SpellEditorPage;
