import { Gem } from 'lucide-react';
import React from 'react';

function FeaturesCard({
  name,
  description,
}: {
  name: string;
  description?: string;
}) {
  return (
    <div className="bg-[#F5F8FC] p-4 rounded-md flex flex-col items-center gap-3 justify-between">
      <Gem className="text-primary" />
      <h1 className="text-lg font-medium">{name}</h1>
      <p className="text-center text-gray-500">{description}</p>
    </div>
  );
}

export default FeaturesCard;
