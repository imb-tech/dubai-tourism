'use client';
import ParamInput from 'components/params/input';
import PriceFilter from 'components/params/price-filter';
import SelectParams from 'components/params/select';
import { TOUR_FILTERS } from 'constants/api-endpoints';
import { useGet } from 'hooks/useGet';
import { SearchIcon } from 'lucide-react';
import React from 'react';
import { sortBy } from 'views/atraction/atraction-filter';


export default function TourPackagesFilter() {
  const { data: dataPrice } = useGet<{ price_min: number; price_max: number }>(
    TOUR_FILTERS
  );

  return (
    <div className="grid lg:grid-cols-3 items-center grid-cols-1 gap-2 py-3 border rounded-[12px] p-2">
      <PriceFilter
        maxPrice={dataPrice?.price_max}
        minPrice={dataPrice?.price_min}
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
