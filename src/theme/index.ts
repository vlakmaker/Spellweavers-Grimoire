/**
 * Mantine theme configuration for Spellweaver’s Grimoire ✨
 * Light: Mystical Minimalist 🌙
 * Dark: Arcane Glow 🔮
 */

import { MantineProvider, createTheme, MantineColorsTuple } from '@mantine/core';

// 🎨 Light mode: Mystical Minimalist
const lightTheme = createTheme({
  colors: {
    primary: ['#f9f5ff', '#eee4fc', '#e2d3f8', '#d8c4ff', '#cbb2f5', '#bca7e8', '#ae9adf', '#9e8acb', '#6e5f94', '#45356c'] as MantineColorsTuple,
  },
  primaryColor: 'primary',
  headings: {
    fontFamily: 'Georgia, serif',
  },
});

// 🌌 Dark mode: Arcane Glow
const darkTheme = createTheme({
  colors: {
    primary: ['#0a0a23', '#181a2f', '#23203b', '#2e2647', '#361b4f', '#47215f', '#5a2980', '#7e4eb0', '#a371db', '#c3a5f5'] as MantineColorsTuple,
  },
  primaryColor: 'primary',
  headings: {
    fontFamily: 'Georgia, serif',
  },
  components: {
    Button: {
      styles: (theme) => ({
        root: {
          backgroundColor: theme.colors.primary[6],
          '&:hover': {
            backgroundColor: theme.colors.primary[7],
          },
        },
      }),
    },
  },
});

export { lightTheme, darkTheme };
