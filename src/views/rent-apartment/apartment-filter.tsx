'use client';
import { MapIcon } from 'components/icons';
import ParamInput from 'components/params/input';
import SelectParams from 'components/params/select';
import { Button } from 'components/ui/button';
import { Label } from 'components/ui/label';
import { RadioGroup, RadioGroupItem } from 'components/ui/radio-group';
import { cn } from 'lib/utils';
import { List, SearchIcon } from 'lucide-react';
import React, { useState } from 'react';
import { useTextApartmentStore } from 'store/rent-apartment';

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

export default function ApartmentFilter() {
  const { text, setText } = useTextApartmentStore();

  const [propertyStatus, setPropertyStatus] = useState('off-plan');

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mb-4 border rounded-[12px] p-2">
        <Button
          variant={text === 'list' ? 'default' : 'outline'}
          className={cn(
            'shadow-none h-12 flex justify-start',
            text === 'map' ? 'bg-[#F5F5F5]' : ''
          )}
          onClick={() => setText('list')}
        >
          <List className="h-5 w-5" />
          <span className="font-medium">List view</span>
        </Button>
        <Button
          variant={text === 'map' ? 'default' : 'outline'}
          className={cn(
            'shadow-none h-12 justify-start',
            text === 'list'
              ? 'bg-[#F5F5F5] text-primary hover:text-primary'
              : 'text-white'
          )}
          onClick={() => setText('map')}
        >
          <MapIcon />
          <span className="font-medium">Map view</span>
        </Button>
      </div>

      <div className="hidden lg:grid lg:grid-cols-7 grid-cols-1 gap-2 py-3 border rounded-[12px] p-2">
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
          paramKey="filter1"
          options={filters}
          placeholder="filter1"
        />
        <SelectParams
          paramKey="filter1"
          options={filters}
          placeholder="filter1"
        />
        <div className="flex items-center lg:col-span-2 bg-[#F5F5F5] rounded-md py-2 px-4 h-12 w-full">
          <RadioGroup
            value={propertyStatus}
            onValueChange={setPropertyStatus}
            className=" gap-4 flex items-center justify-between w-full"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ready" id="ready" />
              <Label htmlFor="ready" className="text-lg">
                Ready properties
              </Label>
            </div>
            <div className="h-7 w-[1px] bg-gray-300 " />
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="off-plan" id="off-plan" />
              <Label htmlFor="off-plan" className="text-lg">
                Off plan
              </Label>
            </div>
          </RadioGroup>
        </div>
        <ParamInput
          placeholder="Search"
          className="bg-primary placeholder:text-white text-white"
          fullWidth
          suffix={<SearchIcon className="text-white" size={20} />}
        />
      </div>
    </div>
  );
}
