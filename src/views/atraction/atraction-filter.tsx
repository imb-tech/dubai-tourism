'use client';
import ParamInput from 'components/params/input';
import PriceFilter from 'components/params/price-filter';
import SelectParams from 'components/params/select';
import { ATRACTIONS_FILTERS } from 'constants/api-endpoints';
import { useGet } from 'hooks/useGet';
import { SearchIcon } from 'lucide-react';
import React from 'react';

export const sortBy = [
  {
    id: 'price',
    name: 'Eng yuqori',
  },
  {
    id: '-price',
    name: 'Eng past',
  },
];

export default function AtractionFilter() {
  const { data: dataPrice } = useGet<{ price_min: number; price_max: number }>(
    ATRACTIONS_FILTERS
  );

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 py-3 border rounded-[12px] p-2">
      <PriceFilter
        maxPrice={dataPrice?.price_max}
        minPrice={dataPrice?.price_min}
      />
      <SelectParams
        paramKey="ordering"
        options={sortBy}
        placeholder="Sort by"
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
