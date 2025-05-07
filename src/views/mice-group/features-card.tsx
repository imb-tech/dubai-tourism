import { Gem } from 'lucide-react';
import React from 'react';

function FeaturesCard() {
  return (
    <div
      className="bg-[#F5F8FC] p-4 rounded-md flex flex-col items-center gap-3 justify-between"
    >
      <Gem className="text-primary" />
      <h1 className="text-lg font-medium">Personal Shopper</h1>
      <p className="text-center text-gray-500">
        Unlock tailored shopping experiences with our dedicated personal shopper
        service.
      </p>
    </div>
  );
}

export default FeaturesCard;
