"use client";

import { RemoveScroll } from "react-remove-scroll";
import FocusLock from "react-focus-lock";
import "../styles/mobilemenu.css";
import useKey from "../hooks/useKey";
import ReactDOM from "react-dom";
import { FaX } from "react-icons/fa6";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { FiShoppingBag } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const MyCartModal = ({ close }) => {
  // This will close the modal when user pres Escape key
  useKey("Escape", close);

  return ReactDOM.createPortal(
    <>
      <RemoveScroll>
        <FocusLock returnFocus={true}>
          <div className="fixed z-50 inset-0 p-4">
            <div onClick={close} className="backdrop" />
            <div className="drawer flex flex-col h-screen !p-0 bg-[#F9F4EE]">
              <CartContent close={close} />
            </div>
          </div>
        </FocusLock>
      </RemoveScroll>
    </>,
    document.body
  );
};
export default MyCartModal;

const CartContent = ({ close }) => {
  const router = useRouter();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();
  const totalPrice = getCartTotal();
  const cartCount = getCartCount();

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  return (
    <>
      <div className="h-[85px] px-7 py-4 flex items-center justify-between bg-pearl">
        <div>
          <h4 className="text-2xl font-bold text-purple">Cart</h4>
        </div>
        <button className="size-10 rounded-full grid place-content-center bg-white text-lg font-bold text-purple">
          {cartCount}
        </button>
      </div>
      {cartItems.length === 0 ? (
        <div className="flex-1 flex-col gap-1 px-7 py-2 flex justify-center items-center">
          <FiShoppingBag className="text-[40px] text-purple" />
          <h4 className="text-2xl font-bold text-purple">Your Cart is Empty</h4>
        </div>
      ) : (
        <div className="flex-1 px-7 py-2 overflow-auto ">
          {cartItems.map((product) => (
            <CartProductCard
              key={product.id}
              product={product}
              handleRemoveItem={handleRemoveItem}
              handleQuantityChange={handleQuantityChange}
            />
          ))}
        </div>
      )}

      <div className="px-7 border-t border-pearl pb-4 sm:pb-8 pt-4">
        <h5 className="text-lg mb-3 sm:mb-5 font-bold text-purple">
          Subtotal: ₹{totalPrice.toFixed(2)}
        </h5>
        <div className="flex flex-wrap items-center gap-2 sm:gap-6 justify-center">
          <button
            disabled={cartItems.length === 0}
            onClick={() => {
              close();
              router.push("/checkout");
            }}
            className="w-full disabled:bg-opacity-60 disabled:hover:text-white disabled:bg-gray sm:w-[150px] h-10 grid place-content-center text-sm uppercase text-nowrap  transition-all duration-500 rounded-full font-medium bg-dark-green text-white border border-green hover:bg-transparent hover:text-dark-green"
          >
            Check Out
          </button>
          <CartButton
            onClick={close}
            className="bg-transparent text-dark-green hover:bg-dark-green hover:text-white border border-dark-green "
          >
            Close
          </CartButton>
        </div>
      </div>
    </>
  );
};

const CartProductCard = ({ product, handleRemoveItem, handleQuantityChange }) => (
  <article className="px-4 min-h-[97px] border-b border-pearl py-2  flex gap-4 items-center bg-white ">
    <div className="relative">
      <Image
        src={product.image}
        width={97}
        height={97}
        className="object-contain h-[97px] w-[97px]"
        alt={product.name}
      />
    </div>
    <div className="flex-1 flex flex-col gap-1">
      <h6 className="text-lg text-purple font-bold line-clamp-2">{product.name}</h6>
      <div className="text-sm font-medium text-gold">
        ₹{Number(product.price || 0).toFixed(2)}{" "}
        {product.quantity > 1 && `× ${product.quantity}`}
      </div>
      <div className="flex items-center gap-2 mt-1">
        <button
          onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
          className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          -
        </button>
        <span className="text-sm font-medium w-8 text-center">{product.quantity}</span>
        <button
          onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
          className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          +
        </button>
      </div>
    </div>
    <button
      onClick={() => handleRemoveItem(product.id)}
      className="size-8 grid place-content-center rounded-full bg-pearl ml-auto hover:bg-red-100"
    >
      <FaX />
    </button>
  </article>
);

const CartButton = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(
        "w-full sm:w-[150px] h-10 grid place-content-center text-sm uppercase text-nowrap  transition-all duration-500 rounded-full font-medium",
        className
      )}
    >
      {children}
    </button>
  );
};
