// src/components/APIKeyModal.tsx
import {
    Button,
    Modal,
    TextInput,
    Group,
    useMantineTheme,
  } from "@mantine/core";
  import { useState, useEffect } from "react";
  
  type Props = {
    opened: boolean;
    onClose: () => void;
  };
  
  function APIKeyModal({ opened, onClose }: Props) {
    const [apiKey, setApiKey] = useState("");
    const theme = useMantineTheme();
  
    useEffect(() => {
      const storedKey = localStorage.getItem("openai-api-key");
      if (storedKey) setApiKey(storedKey);
    }, []);
  
    const handleSave = () => {
      localStorage.setItem("openai-api-key", apiKey);
      onClose();
    };
  
    return (
      <Modal
        opened={opened}
        onClose={onClose}
        title="🔐 Enter your OpenAI API Key"
        centered
      >
        <TextInput
          placeholder="sk-..."
          label="API Key"
          value={apiKey}
          onChange={(e) => setApiKey(e.currentTarget.value)}
        />
        <Group justify="right" mt="md">
          <Button variant="light" onClick={handleSave} color="grape">
            Save Key
          </Button>
        </Group>
      </Modal>
    );
  }
  
  export default APIKeyModal;
  