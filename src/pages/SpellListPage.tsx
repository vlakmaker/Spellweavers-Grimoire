// src/pages/SpellListPage.tsx
import {
    Container,
    Title,
    Text,
    Paper,
    Stack,
    Button,
    Grid,
  } from "@mantine/core";
  import { useSearchParams, useNavigate } from "react-router-dom";
  import defaultSpells from "../data/defaultSpells";
  
  function SpellListPage() {
    const [searchParams] = useSearchParams();
    const category = searchParams.get("path");
    const navigate = useNavigate();
  
    // Filter spells by selected category
    const matchingSpells = Object.entries(defaultSpells).filter(
      ([, spell]) => spell.category === category
    );
  
    const categoryName = matchingSpells[0]?.[1].categoryName || "Unknown";
  
    return (
      <Container size="lg" py="lg">
        <Title order={2} mb="md">
          🧙 Spells of {categoryName}
        </Title>
  
        {matchingSpells.length === 0 ? (
          <Text>No spells found in this category. 🫥</Text>
        ) : (
          <Grid>
            {matchingSpells.map(([key, spell]) => (
              <Grid.Col span={{ base: 12, sm: 6 }} key={key}>
                <Paper shadow="sm" p="md" radius="md" withBorder>
                  <Stack gap="xs">
                    <Title order={4}>
                      {spell.emoji} {key.replaceAll("_", " ")}
                    </Title>
                    <Text size="sm" color="dimmed">
                      {spell.directive}
                    </Text>
                    <Button
                      fullWidth
                      color="grape"
                      onClick={() => navigate(`/editor?path=${key}`)}
                    >
                      Select Spell
                    </Button>
                  </Stack>
                </Paper>
              </Grid.Col>
            ))}
          </Grid>
        )}
      </Container>
    );
  }
  
  export default SpellListPage;