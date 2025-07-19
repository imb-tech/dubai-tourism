import { clsx, type ClassValue } from 'clsx';
import { format, formatISO, parse } from 'date-fns';
import { twMerge } from 'tailwind-merge';
import { string } from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMoney(amount?: number | string | undefined): string {
  const [integerPart, decimalPart] = amount ? amount.toString().split('.') : '';
  const newIntegerPart = integerPart?.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  if (amount) {
    if (decimalPart && +decimalPart > 0) {
      return `${newIntegerPart}.${decimalPart}`;
    } else {
      return `${newIntegerPart}.00`;
    }
  } else {
    return '0';
  }
}

export function getTime30MinLater(): string {
  const now = new Date();
  now.setMinutes(now.getMinutes() + 30);

  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`; // HH:mm format
}

export function normalizeDate(input: string | Date): string {
  if (typeof input === 'string') {
    return input;
  } else {
    return format(input, 'dd/MM/yyyy');
  }
}

export const dateForBackend = (date: string, time: string) => {
  const parsedDate = parse(`${date} ${time}`, 'dd/MM/yyyy HH:mm', new Date());
  return formatISO(parsedDate, { representation: 'complete' });
};
