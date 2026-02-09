"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import HealthyKitchenProductCard from "../../../components/HealthyKitchenProductCard";

const ShopGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const minPrice = searchParams.get("min_price");
  const maxPrice = searchParams.get("max_price");
  const sort = searchParams.get("sort") || "created_at";

  useEffect(() => {
    fetchProducts();
  }, [category, minPrice, maxPrice, sort]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      params.set("is_active", "true");
      if (category) params.set("category", category);
      if (minPrice) params.set("min_price", minPrice);
      if (maxPrice) params.set("max_price", maxPrice);
      if (sort) params.set("sort", sort);

      const response = await fetch(`/api/products?${params.toString()}`);
      const data = await response.json();

      if (data.success) {
        setProducts(data.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>No products available{category ? ` in this category` : ''}</p>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {products.map((product) => (
        <article key={product.id}>
          <HealthyKitchenProductCard product={product} />
        </article>
      ))}
    </section>
  );
};
export default ShopGrid;
