import React, { useState } from "react";

function SpellEditor() {
  const [prompt, setPrompt] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Spell Editor</h2>
      <textarea
        className="w-full h-32 mt-2 p-2 border border-gray-300 rounded"
        value={prompt}
        onChange={handleChange}
        placeholder="Write your spell here..."
      />
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Cast Spell</button>
    </div>
  );
}

export default SpellEditor;
