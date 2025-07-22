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
      return `${newIntegerPart}`;
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

  return `${hours}:${minutes}`;
}

export function toUtcISOString(dateInput: Date | string, time: string): string {
  let dateObj: Date;

  if (typeof dateInput === 'string') {
    dateObj = parse(dateInput, 'dd/MM/yyyy', new Date());
  } else if (isDate(dateInput)) {
    dateObj = dateInput;
  } else {
    throw new Error('Noto‘g‘ri sana formati');
  }

  const [hourStr, minuteStr] = time.split(':');
  const hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);

  const withHour = setHours(dateObj, hour);
  const withMinute = setMinutes(withHour, minute);
  return withMinute.toISOString().slice(0, 19) + 'Z';
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
