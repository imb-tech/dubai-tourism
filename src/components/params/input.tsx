import React, {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Input, InputProps } from '../ui/input';
import { useRouter } from 'next/navigation';

type Props = {
  paramName?: string;
  clearOther?: boolean;
  redirectPath?: string;
} & InputProps;

export default function ParamInput({
  paramName = 'search',
  placeholder = 'Search..',
  clearOther,
  redirectPath,
  ...props
}: Props) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  function handlePush(val: string | undefined) {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    if (clearOther) {
      params.forEach((_, key) => {
        if (key !== paramName) {
          params.delete(key);
        }
      });
    }

    if (val) {
      params.set(paramName, val);
    } else {
      params.delete(paramName);
    }

    router.push(
      `${redirectPath || window.location.pathname}?${params.toString()}`,
      { scroll: false }
    );
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

  return isClient ? (
    <Input
      defaultValue={
        new URLSearchParams(window.location.search).get(paramName) || ''
      }
      ref={inputRef}
      onChange={handleChange}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      {...props}
    />
  ) : null;
}
