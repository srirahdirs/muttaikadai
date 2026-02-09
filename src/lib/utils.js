import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Format price in INR
export function formatPrice(price) {
  if (price === null || price === undefined) return '₹0';
  return `₹${parseFloat(price).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// Format price range
export function formatPriceRange(min, max) {
  if (min === max || !max) return formatPrice(min);
  return `${formatPrice(min)} - ${formatPrice(max)}`;
}
