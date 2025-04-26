'use client';
import ParamInput from 'components/params/input';
import SelectParams from 'components/params/select';

import { SearchIcon } from 'lucide-react';
import React from 'react';

const filters = [
  {
    id: 1,
    name: 'Filter 1',
  },
  {
    id: 2,
    name: 'Filter 2',
  },
  {
    id: 3,
    name: 'Filter 3',
  },
];

export default function RentFilter() {
  return (
    <div className="lg:grid grid-cols-4 gap-2 py-3 border rounded-[12px] p-2 mb-5">
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

      <ParamInput
        placeholder="Search"
        className="bg-primary placeholder:text-white"
        fullWidth
        suffix={<SearchIcon className="text-white" size={20} />}
      />
    </div>
  );
}
