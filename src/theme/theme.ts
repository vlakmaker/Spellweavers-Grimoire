// src/theme.ts
import { MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = {
  colors: {
    spellbook: [
      "#f3f0ff", // 0 - lightest
      "#e5dbff", // 1 - light button bg
      "#d0bfff", // 2 - light hover
      "#b197fc",
      "#9775fa",
      "#845ef7", // 5 - default primary grape
      "#7950f2",
      "#7048e8",
      "#5f3dc4", // 8 - dark button bg
      "#4c1d95", // 9 - dark hover
    ],
  },
  primaryColor: "grape",
};

export default theme;
