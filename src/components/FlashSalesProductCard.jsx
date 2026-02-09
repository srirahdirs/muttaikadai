"use client";

import Image from "next/image";

import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductCardIcon from "./ProductCardIcon";
import Rating from "./Rating";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
const FlashSalesProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  if (!product) return null;

  const regularPrice = parseFloat(product.price || 0);
  const salePrice = product.sale_price ? parseFloat(product.sale_price) : null;
  const priceRange = salePrice
    ? `₹${salePrice.toFixed(2)} - ₹${regularPrice.toFixed(2)}`
    : `₹${regularPrice.toFixed(2)}`;

  return (
    <div className=" h-[340px] ">
      <article className="p-[10px] group relative isolate shadow-md w-full h-[310px]">
        <div className="outline will-change-transform transition-all duration-300  outline-2 group-hover:outline-offset-8 h-full outline-gold">
          <div className="p-[14px]">
            <Image
              src={product.image_url || '/assets/images/product/1.png'}
              width={166}
              height={136}
              alt={product.name}
              className="mx-auto object-contain"
              onError={(e) => {
                e.target.src = '/assets/images/product/1.png';
                e.target.onerror = null;
              }}
            />
          </div>
          <div className="flex items-center justify-center text-center gap-[6px] flex-col mt-2">
            <h6 className="text-lg text-purple font-bold line-clamp-2">{product.name}</h6>
            <div className="text-sm font-medium text-gold">
              {priceRange}
            </div>

            <Rating value={product.rating || 0} />
          </div>
        </div>

        <div className="bg-slate-300 backdrop-blur-0 group-hover:backdrop-blur-[1px] bg-opacity-0 duration-[400] transition-all group-hover:bg-opacity-20 absolute inset-0 ">
          <div className="absolute  pt-[99px] left-1/2 -translate-x-1/2 flex gap-[10px]">
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
              className="duration-[650ms]"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(product, 1);
              }}
            >
              <FiShoppingCart />
            </ProductCardIcon>
          </div>
        </div>
        <Link
          href={`/shop-2/${product.id}`}
          className="flex justify-center items-center absolute opacity-0 group-hover:opacity-100 transition-all bottom-[-22px] right-1/2 translate-x-1/2  rounded-full   duration-500 translate-y-3 group-hover:translate-y-0 will-change-transform px-[22px]   bg-green  h-10 hover:bg-gold gap-1  text-white"
        >
          <span className="text-sm block text-nowrap leading-5">
            Select options
          </span>
          <FaArrowRightLong className="text-[10px] mt-1 " />
        </Link>
      </article>
    </div>
  );
};

export default FlashSalesProductCard;
