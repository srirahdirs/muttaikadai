"use client";

import { useEffect, useState } from "react";
import ButtonAddToCart from "./ButtonAddToCart";
import Rating from "./Rating";
import Image from "next/image";

const BestDealsCard = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("/api/products?limit=1&featured=true");
        const data = await res.json();
        if (data.success && data.data?.length > 0) {
          setProduct(data.data[0]);
        } else {
          const fallback = await fetch("/api/products?limit=1");
          const fb = await fallback.json();
          if (fb.success && fb.data?.length > 0) setProduct(fb.data[0]);
        }
      } catch (err) {
        console.error("Error fetching featured product:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-card p-8 md:p-10 flex items-center justify-center min-h-[320px]">
        <div className="w-10 h-10 border-2 border-green border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-white rounded-2xl shadow-card p-8 md:p-10 text-center text-gray-500 min-h-[320px] flex items-center justify-center">
        No product available
      </div>
    );
  }

  const regularPrice = parseFloat(product.price || 0);
  const salePrice = product.sale_price ? parseFloat(product.sale_price) : null;
  const displayPrice =
    salePrice && salePrice < regularPrice
      ? `₹${salePrice.toFixed(2)} - ₹${regularPrice.toFixed(2)}`
      : `₹${regularPrice.toFixed(2)}`;

  const imageUrl = product.image_url || "/assets/images/product/1.png";

  return (
    <article className="bg-white rounded-2xl shadow-card overflow-hidden flex flex-col md:flex-row min-h-[320px]">
      {/* Content - left side */}
      <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
        <div>
          <h5 className="text-xl md:text-2xl font-bold text-purple mb-3 line-clamp-2 md:hidden">
            {product.name}
          </h5>
          <div className="mb-4">
            <Rating value={product.rating || 0} className="size-5" />
          </div>
          <div className="text-orange font-semibold text-lg mb-4">
            {displayPrice}
          </div>
          {product.unit && (
            <p className="text-sm text-gray-500 mb-2">{product.unit}</p>
          )}
          <p className="text-sm text-light-gray line-clamp-3 mb-6">
            {product.short_description ||
              product.description ||
              "Premium quality product from our farm."}
          </p>
        </div>
        <ButtonAddToCart
          product={product}
          quantity={1}
          className="h-12 px-6 rounded-full bg-green hover:bg-gold text-white font-medium flex items-center gap-2 w-fit"
        >
          ADD TO CART
        </ButtonAddToCart>
      </div>

      {/* Image - right side with product name overlay in empty space */}
      <div className="relative w-full md:w-[220px] lg:w-[260px] flex-shrink-0 flex items-center justify-center min-h-[200px] md:min-h-0">
        <h5 className="absolute top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 text-lg md:text-xl font-bold text-purple line-clamp-2 z-10">
          {product.name}
        </h5>
        <Image
          src={imageUrl}
          alt={product.name}
          width={260}
          height={260}
          className="object-contain w-full h-auto"
          sizes="(max-width: 768px) 100vw, 260px"
          onError={(e) => {
            e.target.src = "/assets/images/product/1.png";
            e.target.onerror = null;
          }}
        />
      </div>
    </article>
  );
};

export default BestDealsCard;
