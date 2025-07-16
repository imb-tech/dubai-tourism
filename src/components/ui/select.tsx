import React from 'react';
import { ClassNameValue } from 'tailwind-merge';
import {
  Select as Select2,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger
} from './select2';
const Select = ({
  value,
  setValue,
  options,
  label,
  className,
  disabled,
  returnVal = 'id',
}: thisProps) => {
  return (
    <Select2
      disabled={disabled}
      value={value?.toString()}
      onValueChange={setValue}
    >
      <SelectTrigger className={`w-full ${className}`}>
        <span className={`${className}`}>
          {options?.find(
            (opt) => opt[returnVal]?.toString() === value?.toString()
          )?.name ?? label}
        </span>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options?.map((s) => (
            <SelectItem key={s.id} value={s[returnVal]?.toString()}>
              {s.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select2>
  );
};

export default Select;

interface thisProps {
  value: string | number | null;
  setValue: (val: string) => void;
  options?: { name: string | number; id: string | number }[];
  label?: string;
  className?: ClassNameValue;
  disabled?: boolean;
  returnVal?: 'name' | 'id';
}
