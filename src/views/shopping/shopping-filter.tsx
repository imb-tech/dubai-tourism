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



export default function SHoppingFilter() {
  return (
    <div className="grid lg:grid-cols-5 grid-cols-1 gap-2 py-3 border rounded-[12px] p-2">
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
      <SelectParams
        paramKey="filter3"
        options={filters}
        placeholder="filter3"
      />
      <SelectParams
        paramKey="filter4"
        options={filters}
        placeholder="filter4"
      />
      <ParamInput
        placeholder="Search"
        className="bg-primary placeholder:text-white text-white"
        fullWidth
        suffix={<SearchIcon className="text-white" size={20} />}
      />
    </div>
  );
}
