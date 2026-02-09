"use client";

import { useEffect, useState } from "react";
import ButtonAddToCart from "./ButtonAddToCart";
import Rating from "./Rating";
import Image from "next/image";

const BestDealsCard = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProduct();
  }, []);

  const fetchFeaturedProduct = async () => {
    try {
      const response = await fetch('/api/products?limit=1&featured=true');
      const data = await response.json();
      if (data.success && data.data.length > 0) {
        setProduct(data.data[0]);
      }
    } catch (error) {
      console.error('Error fetching featured product:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <article className="max-w-[540px] isolate mx-auto lg:mx-0 bg-white w-full px-8 py-10 md:px-16 md:py-10 flex flex-col relative rounded-lg shadow-md">
        <div className="flex items-center justify-center py-8">
          <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
        </div>
      </article>
    );
  }

  if (!product) {
    return (
      <article className="max-w-[540px] isolate mx-auto lg:mx-0 bg-white w-full px-8 py-10 md:px-16 md:py-10 flex flex-col relative rounded-lg shadow-md">
        <p className="text-gray-500 text-center">No featured product available</p>
      </article>
    );
  }

  const price = parseFloat(product.sale_price || product.price || 0);
  const regularPrice = parseFloat(product.price || 0);
  const salePrice = product.sale_price ? parseFloat(product.sale_price) : null;
  const displayPrice = salePrice
    ? `₹${salePrice.toFixed(2)} - ₹${regularPrice.toFixed(2)}`
    : `₹${regularPrice.toFixed(2)}`;

  return (
    <article className="max-w-[540px] isolate mx-auto lg:mx-0 bg-white w-full px-8 py-10 md:px-16 md:py-10 flex flex-col relative rounded-lg shadow-md">
      <h5 className="text-2xl line-clamp-2 font-bold mb mb-3">
        {product.name}
      </h5>
      <div className="mb-6">
        <Rating size={16} value={product.rating || 0} />
        <div className="text-sm font-medium text-gold">{displayPrice}</div>
      </div>
      <p className="text-sm mb-6 line-clamp-4 max-w-56">
        {product.short_description || product.description || 'Premium quality product'}
      </p>
      <ButtonAddToCart product={product} quantity={1}>Add To Cart</ButtonAddToCart>
      <div className="absolute top-4 right-[10px] bg-contain bg-no-repeat w-[116px] h-[99px] bg-deals-card-bg z-[-1]"></div>
      
      <div className="absolute -bottom-4 z-[-1] -right-2 bg-contain bg-no-repeat w-[290px] h-[290px]">
      <div className="absolute inset-0 bg-black/45 -right-2 -bottom-4 backdrop-blur-sm border border-white/20 rounded-lg z-[1]"> </div>
        <div className="absolute -bottom-4 z-[-1] -right-2 w-[290px] h-[290px] relative overflow-hidden">
          <Image
            src="/img/home/free_range_organic_eggs_natural_eggs_from_happy.jpg"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </article>
  );
};
export default BestDealsCard;
