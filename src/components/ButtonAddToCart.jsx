"use client";
import { twMerge } from "tailwind-merge";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const ButtonAddToCart = ({ children, className, product, quantity = 1, ...props }) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleClick = async (e) => {
    if (props.onClick) {
      props.onClick(e);
    }

    if (product) {
      setIsAdding(true);
      addToCart(product, quantity);
      // Show feedback
      setTimeout(() => {
        setIsAdding(false);
      }, 500);
    }
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      disabled={isAdding}
      className={twMerge(
        "flex justify-center items-center  rounded-full   duration-500  px-2 w-[160px]   bg-green  h-10 hover:bg-gold gap-1  text-white disabled:opacity-60",
        className
      )}
    >
      <FiShoppingCart className="text-base " />
      <span className="text-sm uppercase block font-medium  text-nowrap leading-5">
        {isAdding ? "Added!" : children || "Add To Cart"}
      </span>
    </button>
  );
};
export default ButtonAddToCart;
