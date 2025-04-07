// src/components/FeedbackPreview.tsx
import { Paper, Title, Text, Group, Progress } from "@mantine/core";
import { IconWand, IconStar } from "@tabler/icons-react";


type FeedbackPreviewProps = {
  score: number;
  feedback: string;
};

const FeedbackPreview = ({ score, feedback }: FeedbackPreviewProps) => {
  return (
    <Paper withBorder shadow="sm" radius="md" p="md" mt="md">
      <Group justify="space-between" align="center" mb="xs">
        <Title order={5} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <IconWand size={18} /> BittyGPT's Feedback
        </Title>
        <Group gap="xs">
          <IconStar size={16} />
          <Text fw={600}>{score}/10</Text>
        </Group>
      </Group>

      <Progress value={score * 10} size="sm" color="grape" mb="sm" />
      <Text size="sm" style={{ whiteSpace: "pre-wrap" }}>{feedback}</Text>
    </Paper>
  );
};

export default FeedbackPreview;
