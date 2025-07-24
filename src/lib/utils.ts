import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const range = (length: number): number[] =>
  Array.from({ length }, (_, i) => i);

export const formatNumber = (number: number) => {
  return number.toLocaleString('en-US', {
    notation: 'standard',
    compactDisplay: 'short',
    maximumFractionDigits: 0,
  });
};
