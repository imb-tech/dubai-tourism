import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

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

export function normalizeDate(input: string | Date): Date {
  if (input instanceof Date) {
    return input;
  }

  // input string bo‘lsa: "23/07/2025"
  const [day, month, year] = input.split('/');
  return new Date(Number(year), Number(month) - 1, Number(day));
}

export function formatDate(date: Date, time: string): string {
  const [hours, minutes] = time.split(':').map(Number);
  const merged = new Date(date); // yangi nusxa
  merged.setHours(hours);
  merged.setMinutes(minutes);

  const pad = (n: number, len: number = 2) => String(n).padStart(len, '0');

  const year = merged.getFullYear();
  const month = pad(merged.getMonth() + 1); // 0-based
  const day = pad(merged.getDate());
  const hour = pad(merged.getHours());
  const minute = pad(merged.getMinutes());
  const second = pad(merged.getSeconds());
  const millisecond = pad(merged.getMilliseconds(), 3);

  const tzOffset = -merged.getTimezoneOffset();
  const sign = tzOffset >= 0 ? '+' : '-';
  const tzHours = pad(Math.floor(Math.abs(tzOffset) / 60));
  const tzMinutes = pad(Math.abs(tzOffset) % 60);

  return `${year}-${month}-${day} ${hour}:${minute}:${second}.${millisecond}000${sign}${tzHours}:${tzMinutes}`;
}
