'use client';
import SelectParams from 'components/params/select';
import { Button } from 'components/ui/button';
import { SearchIcon } from 'lucide-react';
import React from 'react';

const filters = [
  {
    id: 1,
    name: 'Category',
  },
  {
    id: 2,
    name: 'Material',
  },
  {
    id: 3,
    name: 'Price',
  },
  {
    id: 4,
    name: 'Sort By',
  },
];

export default function AtractionFilter() {
  return (
    <div className="lg:grid grid-cols-3 gap-2 py-3 border rounded-[12px] p-2">
      <SelectParams
        paramKey="filter1"
        options={filters}
        placeholder="filter1"
      />
      <SelectParams
        paramKey="filter2"
        options={filters}
        placeholder="filter2"
      />
      <Button className="h-[50px] text-lg flex justify-between">
        <span>Search</span>
        <SearchIcon />
      </Button>
    </div>
  );
}
