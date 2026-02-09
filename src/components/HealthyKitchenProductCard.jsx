"use client";

import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
//import { IoEyeOutline } from "react-icons/io5";

const HealthyKitchenProductCard = ({ product, className }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  // Format price - use sale_price if available, otherwise use price
  const formatPrice = () => {
    if (!product) return '';
    
    const salePrice = product.sale_price != null ? parseFloat(product.sale_price) : null;
    const regularPrice = product.price != null ? parseFloat(product.price) : null;
    
    // If no prices available, return empty string
    if (salePrice == null && regularPrice == null) {
      return 'Price not available';
    }
    
    // If sale price exists, show both prices
    if (salePrice != null && regularPrice != null && salePrice < regularPrice) {
      return `₹${salePrice.toFixed(2)} - ₹${regularPrice.toFixed(2)}`;
    }
    
    // Otherwise show the available price
    const displayPrice = salePrice != null ? salePrice : regularPrice;
    return `₹${displayPrice.toFixed(2)}`;
  };

  // Get image URL - use image_url from API or fallback
  const imageUrl = product?.image_url || product?.image || '/assets/images/product/1.png';
  
  // Get product link - use slug if available
  const productLink = `/shop-2/${product?.id || 1}`;

  return (
    <article
      className={twMerge(
        "px-4 h-[175px] rounded border-2 flex gap-3 border-transparent hover:outline outline-gold  items-center pt-[19px] pb-[29px] bg-white shadow-card group",
        className
      )}
    >
      <div className="relative">
        <Image
          src={imageUrl}
          width={127}
          height={127}
          alt={product?.name || 'Product'}
        />
        <Link
          href={productLink}
          className="absolute text-3xl transition-all rounded opacity-0 group-hover:opacity-100 text-white bg-opacity-30 bg-slate-800 inset-0 grid place-content-center"
        >
        </Link>
      </div>
      <div className="flex  flex-col">
        <h6 className="text-lg text-purple font-bold">{product?.name}</h6>
        <div className="text-sm font-medium text-gold">
          {formatPrice()}
        </div>
        <div className="mt-2 flex items-center gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product, 1);
            }}
            className="h-7 text-nowrap flex items-center hover:text-white text-xs font-medium rounded-full bg-pearl  px-2 hover:bg-dark-green text-dark-green transition-all"
          >
            Add To Cart
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(product);
            }}
            data-tooltip-id="header-tooltip"
            data-tooltip-content="Wishlist"
            className="h-7 w-7 rounded-full bg-pearl text-dark-green text-sm grid place-content-center transition-all hover:text-white hover:bg-dark-green "
          >
            {isInWishlist(product?.id) ? <IoMdHeart /> : <IoMdHeartEmpty />}
          </button>
        </div>
      </div>
    </article>
  );
};
export default HealthyKitchenProductCard;
