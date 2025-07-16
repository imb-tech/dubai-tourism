'use client';
import ParamInput from 'components/params/input';
import SelectParams from 'components/params/select';
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
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 py-3 border rounded-[12px] p-2">
      <SelectParams
        paramKey="filter1"
        options={filters}
        placeholder="filter1"
        className="h-10"
      />
      <SelectParams
        paramKey="filter2"
        options={filters}
        placeholder="filter2"
        className="h-10"
      />
      <ParamInput
        placeholder="Search"
        className="bg-primary placeholder:text-white text-white h-10 text-base"
        fullWidth
        suffix={<SearchIcon className="text-white" size={20} />}
      />
    </div>
  );
}
