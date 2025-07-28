'use client';
import ParamInput from 'components/params/input';
import SelectParams from 'components/params/select';
import { useGet } from 'hooks/useGet';

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

const sortBy = [
  {
    id: 'price',
    name: 'Eng yuqori',
  },
  {
    id: '-price',
    name: 'Eng past',
  },
];

export default function RentFilter() {
  const { data: dataBrand } = useGet<{
    results: { id: number; name: string }[];
  }>('services/cars/brands');

  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 gap-2 py-3 border rounded-[12px] p-2 mb-5">
      <SelectParams
        paramKey="filter2"
        options={filters}
        placeholder="filter2"
      />
      <SelectParams
        paramKey="brand"
        options={dataBrand?.results}
        placeholder="Brand"
      />
      <SelectParams
        paramKey="ordering"
        options={sortBy}
        placeholder="Sort By"
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
