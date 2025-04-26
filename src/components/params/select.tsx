'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ClassNameValue } from 'tailwind-merge';
import {
  Select as Select2,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'components/ui/select2';

interface Option {
  name: string | number;
  id: string | number;
  [key: string]: any;
}

interface thisProps {
  paramKey: string;
  placeholder?: string;
  options?: Option[];
  className?: ClassNameValue;
  disabled?: boolean;
  returnVal?: 'name' | 'id';
}

const SelectParams = ({
  paramKey,
  options = [],
  placeholder,
  className,
  disabled,
  returnVal = 'id',
}: thisProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentValue = searchParams.get(paramKey) || '';

  const handleChange = (newValue: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (newValue === 'all') {
      params.delete(paramKey);
    } else {
      params.set(paramKey, newValue);
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <Select2
      disabled={disabled}
      value={currentValue || 'all'}
      onValueChange={handleChange}
    >
      <SelectTrigger
        className={`w-full h-[50px] text-lg bg-[#f5f5f5] border-none ring-0 outline-none shadow-none px-5 ${className}`}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value={'all'}>Barchasi</SelectItem>
          {options.map((opt) => (
            <SelectItem key={opt.id} value={opt[returnVal]?.toString()}>
              {opt.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select2>
  );
};

export default SelectParams;
