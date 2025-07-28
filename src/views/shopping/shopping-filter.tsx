'use client';
import ParamInput from 'components/params/input';
import SelectParams from 'components/params/select';
import { useGet } from 'hooks/useGet';
import { SearchIcon } from 'lucide-react';
import React from 'react';


export default function SHoppingFilter() {
  const { data } = useGet<{
    results: { id: number; name: string }[];
  }>('services/shopping/category');

  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 gap-2 py-3 border rounded-[12px] p-2">
      <SelectParams
        paramKey="category"
        options={data?.results}
        placeholder="Category"
        className="md:col-span-3"
      />
      <ParamInput
        placeholder="Search"
        className="bg-primary placeholder:text-white text-white h-[44.6px]"
        fullWidth
        suffix={<SearchIcon className="text-white" size={20} />}
      />
    </div>
  );
}
