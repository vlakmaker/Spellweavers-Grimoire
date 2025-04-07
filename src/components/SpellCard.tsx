import React from "react";

interface SpellCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

const SpellCard: React.FC<SpellCardProps> = ({ title, description, onClick }) => {
  return (
    <div
      className="cursor-pointer rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow p-4"
      onClick={onClick}
    >
      <h2 className="text-xl font-semibold text-indigo-700">{title}</h2>
      <p className="mt-2 text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default SpellCard;
