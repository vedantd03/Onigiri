import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import smartphone from "../../public/assets/smartphones.webp";
import laptops from "../../public/assets/laptops.webp";
import fragrance from "../../public/assets/fragrance.webp";
import skincare from "../../public/assets/skincare.webp";
import groceries from "../../public/assets/groceries.jpeg";
import homeDeco from "../../public/assets/home-deco.webp";
import tops from "../../public/assets/tops.jpg";
import furniture from "../../public/assets/furniture.webp";
import womenDress from "../../public/assets/women-dress.webp";
import womenShoes from "../../public/assets/women-shoes.webp";
import menShirt from "../../public/assets/men-shirt.jpg";
import menShoes from "../../public/assets/men-shoes.webp";
import menWatch from "../../public/assets/men-watches.jpg";
import womenWatches from "../../public/assets/women-watches.webp";
import womenBag from "../../public/assets/women-bag.jpg";
import womenJewllery from "../../public/assets/women-jewllery.webp";
import sunglasses from "../../public/assets/sunglasses.jpg";
import automobile from "../../public/assets/automobile.jpg";
import motorcycle from "../../public/assets/men-shoes.webp";
import lamp from "../../public/assets/lamp.webp";
import { mock } from "node:test";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function decodeURI(url: string) {
  return decodeURIComponent(url);
}
export function getCurrencySign(price: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR"}).format(price);
}

/**
 * strip off every last s from 'mens' and 'womens' category name
 * 
 * @param category Product category name
 * @returns {withoutLasts} category name without the last from mens and women
 */
export function removeLastSfromCategory(category: string): string {
  const withoutLastS = category.replace(/womens|mens/g, (match) =>
    match === "womens" ? "women" : "men"
  );
  return withoutLastS;
}
export const deliveryService: Array<string> = ["DHL", "GIGS", "UPS", "FedEx"];
export const location: Array<string> = [
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Ijebu Ode",
];
export const categoryBg = [
  smartphone,
  laptops,
  fragrance,
  skincare,
  groceries,
  homeDeco,
  furniture,
  tops,
  womenDress,
  womenShoes,
  menShirt,
  menShoes,
  menWatch,
  womenWatches,
  womenBag,
  womenJewllery,
  sunglasses,
  automobile,
  motorcycle,
  lamp,
];

export function getDiscountPrice(amount: number, discountPercent: number) {
  const roundDiscount = Math.round(discountPercent);
  return (amount - amount * (Math.round(roundDiscount) / 100)) * 100;
}
export function ignoreCase(word: string) {
  return new RegExp(word, "i").ignoreCase;
}

/**
 * Returns the ordered date (from) and delivery date (to).
 * 
 * @returns {{ from: string, to: string }} the ordered date and delivery date to
 */
export function getDeliveryDate(): { from: string; to: string; } {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const deliveryDate = new Date();
  const month = months[deliveryDate.getMonth()];
  const date = deliveryDate.getDate();
  const from = `${month} ${date + 2}`;
  const to = `${month} ${date + 3}`;
  return {
    from,
    to,
  };
}

export function copyAmountToClipboard(amount: string){
  try {
    navigator.clipboard.writeText(amount);
  }catch(err){
    console.log('unable to copy');
  }
}

