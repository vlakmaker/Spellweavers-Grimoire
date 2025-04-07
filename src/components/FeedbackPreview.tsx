// src/components/FeedbackPreview.tsx
import {
    Paper,
    Title,
    Text,
    Group,
    Progress,
    Stack,
    Divider,
  } from "@mantine/core";
  import { IconStar } from "@tabler/icons-react";
  
  interface FeedbackPreviewProps {
    score: number;
    feedback: string;
    tips: string;
    sections?: {
      role: string;
      directive: string;
      example: string;
      format: string;
      context: string;
    };
  }
  
  const FeedbackPreview = ({ score, feedback, tips, sections }: FeedbackPreviewProps) => {
    if (!sections) return null; // 🛡️ Prevent rendering if undefined
  
    return (
      <Paper withBorder shadow="sm" radius="md" p="md" mt="md">
        <Group justify="space-between" align="center" mb="xs">
          <Title order={5}>🧙 BittyGPT's Feedback</Title>
          <Group gap="xs">
            <IconStar size={16} />
            <Text fw={600}>{score}/10</Text>
          </Group>
        </Group>
  
        <Progress value={score * 10} size="sm" color="grape" mb="sm" />
  
        <Stack spacing="xs">
          <Divider label="✨ Spell Review" labelPosition="left" />
          <Text size="sm"><strong>🧙 Role:</strong> {sections.role || "-"}</Text>
          <Text size="sm"><strong>📜 Directive:</strong> {sections.directive || "-"}</Text>
          <Text size="sm"><strong>📚 Example:</strong> {sections.example || "-"}</Text>
          <Text size="sm"><strong>📦 Format:</strong> {sections.format || "-"}</Text>
          <Text size="sm"><strong>🧠 Context:</strong> {sections.context || "-"}</Text>
  
          <Divider label="💡 Tip for Improvement" labelPosition="left" mt="sm" />
          <Text size="sm">{tips}</Text>
        </Stack>
      </Paper>
    );
  };
  
  export default FeedbackPreview;
  