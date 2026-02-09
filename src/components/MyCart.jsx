"use client";
import { FiShoppingCart } from "react-icons/fi";
import MyCartModal from "./MyCartModal";
import { useCart } from "../context/CartContext";

const MyCart = () => {
  const { getCartCount, isCartOpen, openCart, closeCart } = useCart();
  const cartCount = getCartCount();

  return (
    <>
      <button
        onClick={openCart}
        data-tooltip-id="header-tooltip"
        data-tooltip-content="My Cart"
        className="relative isolate"
      >
        {cartCount > 0 && (
          <span className="absolute -top-[6px] -right-2 size-4 rounded-full bg-gold text-white text-[10px] grid place-content-center">
            {cartCount}
          </span>
        )}
        <FiShoppingCart className="text-lg" />
      </button>

      {isCartOpen && <MyCartModal close={closeCart} />}
    </>
  );
};
export default MyCart;
