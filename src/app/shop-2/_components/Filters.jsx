"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import SidebarHeading from "../../../components/SidebarHeading";

const Filters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const minFromUrl = searchParams.get("min_price");
  const maxFromUrl = searchParams.get("max_price");

  const [minPrice, setMinPrice] = useState(
    minFromUrl ? Number(minFromUrl) : 0
  );
  const [maxPrice, setMaxPrice] = useState(
    maxFromUrl ? Number(maxFromUrl) : 5000
  );

  useEffect(() => {
    setMinPrice(minFromUrl ? Number(minFromUrl) : 0);
    setMaxPrice(maxFromUrl ? Number(maxFromUrl) : 5000);
  }, [minFromUrl, maxFromUrl]);

  const applyFilters = useCallback(
    (min, max) => {
      const next = new URLSearchParams(searchParams.toString());
      if (min != null && min > 0) {
        next.set("min_price", String(min));
      } else {
        next.delete("min_price");
      }
      if (max != null && max < 5000) {
        next.set("max_price", String(max));
      } else {
        next.delete("max_price");
      }
      router.replace(`/shop-2?${next.toString()}`);
    },
    [router, searchParams]
  );

  const handleMinChange = (e) => {
    const v = parseInt(e.target.value, 10) || 0;
    setMinPrice(v);
    applyFilters(v, maxPrice);
  };

  const handleMaxChange = (e) => {
    const v = parseInt(e.target.value, 10) || 5000;
    setMaxPrice(v);
    applyFilters(minPrice, v);
  };

  const handleClear = () => {
    setMinPrice(0);
    setMaxPrice(5000);
    const next = new URLSearchParams(searchParams.toString());
    next.delete("min_price");
    next.delete("max_price");
    router.replace(`/shop-2?${next.toString()}`);
  };

  return (
    <div>
      <SidebarHeading>Filters</SidebarHeading>
      <div className="space-y-4">
        <div>
          <label className="block mb-1 text-purple font-semibold text-sm">
            Min: ₹{minPrice}
          </label>
          <input
            type="number"
            min={0}
            max={maxPrice - 1}
            value={minPrice}
            onChange={handleMinChange}
            className="w-full border border-pearl px-3 py-2 rounded outline-none focus:border-gold"
          />
        </div>
        <div>
          <label className="block mb-1 text-purple font-semibold text-sm">
            Max: ₹{maxPrice}
          </label>
          <input
            type="number"
            min={minPrice + 1}
            max={10000}
            value={maxPrice}
            onChange={handleMaxChange}
            className="w-full border border-pearl px-3 py-2 rounded outline-none focus:border-gold"
          />
        </div>
        <button
          type="button"
          onClick={handleClear}
          className="text-sm font-semibold text-dark-gray hover:text-gold"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filters;
