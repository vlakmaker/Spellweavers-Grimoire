import React, { useEffect, useState } from "react";
import SpellCard from "../components/SpellCard";
import exampleSpells from "../spells/example-spells.json"; // Import JSON
import { Spell } from "../types/Spell"; // (Optional) if you define types

function SpellbookPage() {
  const [spells, setSpells] = useState<Spell[]>([]); // or useState<any[]>([]);

  useEffect(() => {
    console.log("🔍 Loaded Spells:", exampleSpells);
    setSpells(exampleSpells as Spell[]); // Casting to Spell[] or any[]
  }, []);

  const handleClick = (id: string) => {
    console.log(`🧙‍♂️ Spell clicked: ${id}`);
    // Future: Navigate to the editor page
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📖 Spellbook</h1>

      {spells.length === 0 ? (
        <p className="text-center text-gray-500">No spells loaded...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {spells.map((spell) => (
            <SpellCard
              key={spell.id}
              title={spell.title}
              description={spell.description}
              onClick={() => handleClick(spell.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SpellbookPage;
