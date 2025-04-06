// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import SpellbookPage from "./pages/SpellbookPage";
import SpellEditorPage from "./pages/SpellEditorPage";
import NotFoundPage from "./pages/NotFoundPage";
import CategorySelector from "./pages/CategorySelector";
import SpellTypeSelector from "./pages/SpellTypeSelector";
import SpellListPage from "./pages/SpellListPage";

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
        <Route path="/start" element={<CategorySelector />} />
        <Route path="/start/type" element={<SpellTypeSelector />} />
        <Route path="/spells" element={<SpellListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
