"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SidebarHeading from "../../../components/SidebarHeading";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        if (data.success) {
          setCategories((data.data || []).filter((c) => c.is_active));
        }
      } catch (e) {
        console.error("Error fetching categories:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const preserveParams = (categorySlug) => {
    const next = new URLSearchParams(searchParams.toString());
    if (categorySlug) {
      next.set("category", categorySlug);
    } else {
      next.delete("category");
    }
    const q = next.toString();
    return q ? `/shop-2?${q}` : "/shop-2";
  };

  if (loading) {
    return (
      <div>
        <SidebarHeading>Categories</SidebarHeading>
        <div className="h-10 w-full rounded bg-gray-200 animate-pulse" />
      </div>
    );
  }

  return (
    <div>
      <SidebarHeading>Categories</SidebarHeading>
      <div className="space-y-5">
        <Link
          href={preserveParams("")}
          className={`flex justify-between text-sm font-semibold cursor-pointer hover:text-gold transition-all border-b border-dashed pb-1 border-[#D8D8D8] ${
            !currentCategory ? "text-gold" : "text-dark-gray hover:border-gold"
          }`}
        >
          <span>All Categories</span>
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={preserveParams(cat.slug || "")}
            className={`flex justify-between text-sm font-semibold cursor-pointer hover:text-gold transition-all border-b border-dashed pb-1 border-[#D8D8D8] ${
              currentCategory === (cat.slug || "")
                ? "text-gold"
                : "text-dark-gray hover:border-gold"
            }`}
          >
            <span>{cat.name}</span>
            <span>({cat.quantity ?? 0})</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Categories;
