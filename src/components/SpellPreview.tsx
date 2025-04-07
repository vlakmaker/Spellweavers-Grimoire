import React from "react";

function SpellPreview({ prompt }: { prompt: string }) {
  return (
    <div className="p-4 bg-gray-50 border border-gray-300 rounded shadow">
      <h3 className="text-lg font-semibold">Preview</h3>
      <p className="text-gray-700">{prompt || "Write a spell to preview it here!"}</p>
    </div>
  );
}

export default SpellPreview;
