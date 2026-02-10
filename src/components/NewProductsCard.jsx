"use client";

import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import ProductCardIcon from "./ProductCardIcon";
import Rating from "./Rating";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

const NewProductsCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  if (!product) return null;

  const regularPrice = parseFloat(product.price || 0);
  const salePrice = product.sale_price ? parseFloat(product.sale_price) : null;
  const priceRange = salePrice 
    ? `₹${salePrice.toFixed(2)} - ₹${regularPrice.toFixed(2)}`
    : `₹${regularPrice.toFixed(2)}`;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className=" h-[340px] relative">
      <article className="p-[10px]  group relative isolate shadow-card w-full h-[310px]">
        <div className="outline will-change-transform transition-all   outline-0 duration-300  group-hover:outline-2 group-hover:outline-offset-8 h-full outline-gold">
          <div className="p-[14px]">
            <div className="h-[136px] w-full max-w-[166px] mx-auto relative overflow-hidden bg-white">
              <Image
                src={product.image_url || '/assets/images/product/1.png'}
                fill
                sizes="166px"
                alt={product.name}
                className="object-contain"
                onError={(e) => {
                  e.target.src = '/assets/images/product/1.png';
                  e.target.onerror = null;
                }}
              />
            </div>
          </div>
          <div className="flex items-center justify-center text-center gap-[6px] flex-col mt-2">
            <h6 className="text-lg text-purple font-bold line-clamp-2">{product.name}</h6>
            <div className="text-sm font-medium text-gold">
              {priceRange}
            </div>
            <div>
              <Rating value={product.rating || 0} />
            </div>
          </div>
        </div>

        <div className="absolute z-10 top-[99px] left-1/2 -translate-x-1/2 flex gap-[10px]">
          <ProductCardIcon
            className="duration-[500ms]"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(product);
            }}
          >
            {isInWishlist(product.id) ? <IoMdHeart /> : <IoMdHeartEmpty />}
          </ProductCardIcon>
          <ProductCardIcon 
            className="duration-[650ms] cursor-pointer"
            onClick={handleAddToCart}
          >
            <FiShoppingCart />
          </ProductCardIcon>
        </div>

        <Link
          href={`/shop-2/${product.id}`}
          className="bg-slate-300 backdrop-blur-0 group-hover:backdrop-blur-[1px] bg-opacity-0 duration-[400] transition-all group-hover:bg-opacity-20 absolute inset-0 "
        ></Link>
      </article>
    </div>
  );
};

export default NewProductsCard;
