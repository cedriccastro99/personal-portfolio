import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getDuration = (startDate: Date, endDate: Date = new Date()): string => {
  let start = new Date(startDate);
  let end = new Date(endDate);

  if (end < start) [start, end] = [end, start]; // swap if start > end

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const yearStr = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
  const monthStr = months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "";

  if (years && months) return `${yearStr} ${monthStr}`;
  if (years) return yearStr;
  if (months) return monthStr;

  return "Less than a month";
}
