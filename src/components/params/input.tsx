'use client';

import React, { ChangeEvent, KeyboardEvent, useRef } from 'react';
import { Input, InputProps } from '../ui/input';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

type Props = {
  paramName?: string;
  clearOther?: boolean;
  redirectPath?: string;
} & InputProps;

export default function ParamInput({
  paramName = 'search',
  placeholder = 'Qidirish..',
  clearOther,
  redirectPath,
  ...props
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const inputRef = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function handlePush(val: string | undefined) {
    const params = new URLSearchParams(clearOther ? '' : searchParams.toString());

    if (val) {
      params.set(paramName, val);
    } else {
      params.delete(paramName);
    }

    router.push(`${redirectPath || pathname}?${params.toString()}`);
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      const searchVal = inputRef.current?.value;
      handlePush(searchVal);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      handlePush(val);
    }, 400);
  }

  return (
    <Input
      defaultValue={searchParams.get(paramName) || ''}
      ref={inputRef}
      onChange={handleChange}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      {...props}
    />
  );
}
