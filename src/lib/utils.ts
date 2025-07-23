import { clsx, type ClassValue } from 'clsx';
import {
  format,
  formatISO,
  isDate,
  parse,
  setHours,
  setMinutes,
} from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMoney(amount?: number | string | undefined): string {
  const [integerPart, decimalPart] = amount ? amount.toString().split('.') : '';
  const newIntegerPart = integerPart?.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  if (amount) {
    if (decimalPart && +decimalPart > 0) {
      return `${newIntegerPart}`;
    } else {
      return `${newIntegerPart}`;
    }
  } else {
    return '0';
  }
}

export function getTimeMinLater(): string {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
}



export function fromUtcToDateAndTime(isoUtcString: string): {
  date: string;
  time: string;
} {
  const dateObj = new Date(isoUtcString);

  const date = format(dateObj, 'dd MMM yyyy');
  const time = format(dateObj, 'HH:mm');

  return { date, time };
}
