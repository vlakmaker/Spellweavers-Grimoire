// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import SpellbookPage from "./pages/SpellbookPage";
import SpellEditorPage from "./pages/SpellEditorPage";
import NotFoundPage from "./pages/NotFoundPage";

type AppProps = {
  colorScheme: "light" | "dark";
  toggleColorScheme: () => void;
};

function App({ colorScheme, toggleColorScheme }: AppProps) {
  return (
    <Router>
      <NavBar colorScheme={colorScheme} toggleColorScheme={toggleColorScheme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/spellbook" element={<SpellbookPage />} />
        <Route path="/editor" element={<SpellEditorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
