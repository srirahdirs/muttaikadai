"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import { useRouteLoader } from "./RouteLoaderProvider";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const CategoriesDropDown = ({ onClose }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { startLoading } = useRouteLoader();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories');
      const data = await response.json();
      if (data.success) {
        setCategories(data.data.filter(cat => cat.is_active));
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (value) => {
    startLoading();
    if (value === "all") {
      // Navigate to shop page without category filter
      router.push("/shop-2");
    } else {
      // Find the selected category to get its slug
      const selectedCategory = categories.find(cat => cat.name === value);
      if (selectedCategory?.slug) {
        // Navigate to shop page with category filter
        router.push(`/shop-2?category=${selectedCategory.slug}`);
      } else {
        // Fallback: navigate with category name if slug is not available
        router.push(`/shop-2?category=${encodeURIComponent(value)}`);
      }
    }
    onClose?.();
  };

  return (
    <Select defaultValue="all" onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]  px-4  gap-2  rounded-md  bg-transparent flex items-center justify-center  bg-gold   transition-all  my-[3px] text-white h-[43px]">
        <FiMenu className="text-xl" />
        <SelectValue placeholder="All Categories" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Categories</SelectItem>
        {!loading && categories.map((item) => (
          <SelectItem key={item.id} value={item.name}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CategoriesDropDown;

const MenuWrapper = ({ children, className, ...props }) => (
  <div
    {...props}
    className={twMerge(
      "rounded-md w-fit bg-transparent flex items-center justify-center  bg-gold px-1  transition-all  my-[3px] text-white h-[43px]",
      className
    )}
  >
    {children}
  </div>
);
