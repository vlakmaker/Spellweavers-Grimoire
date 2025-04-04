// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import '@mantine/core/styles.css';
// Only import MantineProvider from @mantine/core here
import { MantineProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

import App from "./App";
import { lightTheme, darkTheme } from "./theme"; // Make sure these are valid Mantine theme objects

function Root() {
  // 1. Get the user's preference
  const [colorScheme, setColorScheme] = useLocalStorage<"light" | "dark">({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  // 2. Define the toggle function
  const toggleColorScheme = () => {
    setColorScheme((current) => (current === "dark" ? "light" : "dark"));
  };

  // ----> REMOVED useComputedColorScheme hook call from here <----

  // 3. Render the provider using the user's preference to select the theme
  return (
    <MantineProvider
      // Directly use the state variable from useLocalStorage
      theme={colorScheme === "dark" ? darkTheme : lightTheme}
      withGlobalStyles
      withNormalizeCSS
    >
      {/* Pass the scheme preference and toggle function down */}
      <App colorScheme={colorScheme} toggleColorScheme={toggleColorScheme} />
    </MantineProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);