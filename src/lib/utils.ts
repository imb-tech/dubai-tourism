import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatMoney(amount?: number): string {
  const [integerPart, decimalPart] =
    amount ? amount.toString().split(".") : ""
  const newIntegerPart = integerPart?.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  if (amount) {
    if (decimalPart && +decimalPart > 0) {
      return `${newIntegerPart}.${decimalPart}`
    } else {
      return `${newIntegerPart}.00`
    }
  } else {
    return "0"
  }
}
