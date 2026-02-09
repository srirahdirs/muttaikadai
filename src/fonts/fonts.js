import {
  Barlow,
  Gloria_Hallelujah,
  Bebas_Neue,
  Montserrat,
} from "next/font/google";
import { twMerge } from "tailwind-merge";

export const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "500", "600", "700"],
  display: "swap",
});
export const gloria = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-gloria",
});
export const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-bebas",
});
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-montserrat",
});

export const fonts = twMerge(
  barlow.className,
  gloria.variable,
  gloria.variable
);
