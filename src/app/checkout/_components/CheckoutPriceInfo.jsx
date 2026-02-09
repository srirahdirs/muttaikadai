"use client";
import { useCart } from "../../../context/CartContext";

const CheckoutPriceInfo = () => {
  const { cartItems, getCartTotal } = useCart();
  const total = getCartTotal();

  return (
    <article className="border border-pearl mb-9">
      <header className="flex h-14 border-b border-pearl items-center justify-between px-[18px] text-purple text-base font-bold">
        <span>Product</span>
        <span>Subtotal</span>
      </header>

      {cartItems.length === 0 ? (
        <div className="flex items-center justify-center h-20 px-[18px] text-gray-500">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center text text-sm text justify-between h-14 border-b border-pearl px-[18px] text-search"
            >
              <div>
                {item.name}{" "}
                <span className="text-dark-gray font-bold">× {item.quantity}</span>
              </div>
              <div>₹{(item.price * item.quantity).toFixed(2)}</div>
            </div>
          ))}
        </>
      )}

      <footer>
        <div className="flex h-14 border-b border-pearl items-center justify-between px-[18px] text-dark-gray text-sm font-bold">
          <span>Subtotal</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
        <div className="flex h-14 items-center justify-between px-[18px] text-dark-gray text-sm font-bold">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </footer>
    </article>
  );
};
export default CheckoutPriceInfo;
