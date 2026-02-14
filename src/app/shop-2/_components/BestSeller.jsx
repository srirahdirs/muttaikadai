"use client";

import { useState, useEffect } from "react";
import HealthyKitchenProductCard from "../../../components/HealthyKitchenProductCard";
import SidebarHeading from "../../../components/SidebarHeading";

const BestSeller = ({ currentProductId }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const res = await fetch("/api/products?is_active=true&limit=3&sort=created_at");
        const json = await res.json();
        if (json.success && json.data?.length) {
          setProducts(
            json.data
              .filter((p) => p.id !== currentProductId)
              .slice(0, 3)
          );
        }
      } catch (err) {
        console.error("Error fetching best sellers:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBestSellers();
  }, [currentProductId]);

  if (loading) {
    return (
      <div>
        <SidebarHeading>Best Seller</SidebarHeading>
        <div className="flex justify-center py-8">
          <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  if (products.length === 0) return null;

  return (
    <div>
      <SidebarHeading>Best Seller</SidebarHeading>
      <div className="flex flex-col gap-4">
        {products.map((product) => (
          <article key={product.id}>
            <HealthyKitchenProductCard
              className="h-[120px] pb-[19px] shadow-none"
              product={product}
            />
          </article>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
