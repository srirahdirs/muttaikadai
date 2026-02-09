"use client";

import { twMerge } from "tailwind-merge";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const SearchBar = ({ onClose, className, showCategory = true }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose?.();
  };

  const categoriesValue = (value) => {
    console.log(value);
  };

  return (
    <Select onValueChange={categoriesValue}>
      <form
        onSubmit={handleSubmit}
        className={twMerge(
          "h-12 sm:h-[55px] text-dark-gray focus-within:ring-1 ring-gold text-sm pr-7 pl-12 rounded-full border border-search flex items-center ",
          className
        )}
      >
        <input
          placeholder="Select for items …."
          className="flex-1 outline-none"
        />
        {showCategory && (
          <div className={twMerge("border-l ml-3 pl-3 hidden sm:block")}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="fresh-organic">Fresh Organic</SelectItem>
              <SelectItem value="nutt-seeds">Nutt &amp; Seeds</SelectItem>
              <SelectItem value="fresh-tomatoes">Fresh Tomatoes</SelectItem>
              <SelectItem value="superfoods-grains">
                Superfoods &amp; Grains
              </SelectItem>
              <SelectItem value="frozen-foods">Frozen Foods</SelectItem>
              <SelectItem value="bread-cookies">Bread &amp; Cookies</SelectItem>
              <SelectItem value="fresh-fruits">Fresh Fruits</SelectItem>
              <SelectItem value="vegetables-spices">
                Vegetables &amp; Spices
              </SelectItem>
              <SelectItem value="beverages">Beverages</SelectItem>
              <SelectItem value="tomato">Tomato</SelectItem>
              <SelectItem value="spices">Spices</SelectItem>
            </SelectContent>
          </div>
        )}
      </form>
    </Select>
  );
};
export default SearchBar;
