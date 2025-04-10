// src/pages/SpellEditorPage.tsx

// --- Keep these imports (only once) ---
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
  import { useState } from "react";
  // --- End Imports ---
  
  function SpellEditorPage() {
    // --- ADD THE CONSOLE LOG HERE, right at the start of the function ---
    console.log(`--- EXECUTING SpellEditorPage - Timestamp: ${Date.now()} ---`);
  
    // --- Keep the rest of your component code ---
    const [directive, setDirective] = useState("");
    const [role, setRole] = useState("");
    const [example, setExample] = useState("");
    const [outputFormat, setOutputFormat] = useState("");
    const [context, setContext] = useState("");
  
    // Final prompt preview
    const generatePrompt = () => {
      return `Act as ${role || "an assistant"}.\n
  ${directive}\n
  ${context && `Context: ${context}\n`}
  ${example && `Example:\n${example}\n`}
  ${outputFormat && `Format: ${outputFormat}\n`}`.trim();
    };
  
    return (
      <Container size="xl" py="lg">
        <Title order={2} mb="md">
          ✍️ Compose Your Spell
        </Title>
  
        <Grid>
          {/* Left column - inputs */}
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
  
          {/* Right column - preview */}
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
    // --- End component code ---
  }
  
  // --- Keep the export ---
  export default SpellEditorPage;