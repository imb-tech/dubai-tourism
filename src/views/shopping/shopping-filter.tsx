'use client';
import { Button } from 'components/ui/button';
import SelectField from 'components/ui/select';
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
    <div className="lg:grid grid-cols-5 gap-2 py-3 border rounded-[12px] p-2">
      <SelectField
        value={1}
        setValue={(v) => console.log(v)}
        label="Avto type"
        options={filters}
        className="h-[50px] text-lg bg-[#f5f5f5] border-none ring-0 outline-none shadow-none px-5"
      />
      <SelectField
        value={1}
        setValue={(v) => console.log(v)}
        label="Brand"
        options={filters}
        className="h-[50px] text-lg bg-[#f5f5f5] border-none ring-0 outline-none shadow-none px-5"
      />
      <SelectField
        value={1}
        setValue={(v) => console.log(v)}
        label="Brand"
        options={filters}
        className="h-[50px] text-lg bg-[#f5f5f5] border-none ring-0 outline-none shadow-none px-5"
      />
      <SelectField
        value={1}
        setValue={(v) => console.log(v)}
        label="Brand"
        options={filters}
        className="h-[50px] text-lg bg-[#f5f5f5] border-none ring-0 outline-none shadow-none px-5"
      />
      <Button className="h-[50px] text-lg flex justify-between">
        <span>Search</span>
        <SearchIcon />
      </Button>
    </div>
  );
}
