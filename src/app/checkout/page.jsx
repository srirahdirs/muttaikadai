"use client";
import { useState } from "react";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import CheckoutPriceInfo from "./_components/CheckoutPriceInfo";
import CheckoutPageHeader from "./_components/CheckoutPageHeader";
import { useCart } from "../../context/CartContext";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const router = useRouter();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(null);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    mobile: "",
    email: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile.replace(/\D/g, ""))) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (cartItems.length === 0) {
      setSubmitError("Your cart is empty. Please add items to cart first.");
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const orderData = {
        mobile: formData.mobile.replace(/\D/g, ""),
        email: formData.email || null,
        address: formData.address || null,
        items: cartItems.map((item) => ({
          product_id: item.id,
          quantity: item.quantity,
          price: item.price,
          name: item.name,
        })),
        total: getCartTotal(),
      };

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (data.success) {
        clearCart();
        setOrderSuccess({
          orderNumber: data.order.order_number,
          total: data.order.total,
        });
      } else {
        setSubmitError(data.error || "Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      setSubmitError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContinueShopping = () => {
    setOrderSuccess(null);
    router.push("/");
  };

  return (
    <div>
      <CheckoutPageHeader />
      <Container className="pt-[100px] md:pt-[112px] pb-[100px] md:pb-[160px]">
        {/* Order success overlay */}
        {orderSuccess && (
          <div className="order-success-overlay fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="order-success-modal bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-purple mb-2">Order Confirmed!</h2>
              <p className="text-dark-gray mb-4">Thank you for your order. We&apos;ll get back to you soon.</p>
              <p className="text-sm text-gray-500 mb-1">Order ID</p>
              <p className="font-mono font-semibold text-purple mb-6">{orderSuccess.orderNumber}</p>
              <p className="text-sm text-dark-gray mb-6">Total: ₹{Number(orderSuccess.total).toFixed(2)}</p>
              <button
                type="button"
                onClick={handleContinueShopping}
                className="w-full rounded-full bg-dark-green text-white h-12 font-medium hover:bg-green transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}

        {submitError && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-3">
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {submitError}
          </div>
        )}
        <div>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-7">
            <div>
              <div>
                <h3 className="text-2xl font-bold text-purple mb-10">
                  Order Details
                </h3>
              </div>
              <div>
                <div className="flex mb-5 flex-col">
                  <label className="checkout-input-label" htmlFor="mobile">
                    Mobile Number <span className="text-orange">*</span>
                  </label>
                  <input
                    required
                    id="mobile"
                    name="mobile"
                    className={`checkout-input ${errors.mobile ? "border-orange" : ""}`}
                    type="tel"
                    placeholder="Enter your 10-digit mobile number"
                    value={formData.mobile}
                    onChange={handleChange}
                    maxLength={10}
                  />
                  {errors.mobile && (
                    <p className="text-orange text-sm mt-1">{errors.mobile}</p>
                  )}
                </div>

                <div className="flex mb-5 flex-col">
                  <label className="checkout-input-label" htmlFor="email">
                    Email Address <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    className={`checkout-input ${errors.email ? "border-orange" : ""}`}
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-orange text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="flex mb-5 flex-col">
                  <label className="checkout-input-label" htmlFor="address">
                    Delivery Address <span className="text-gray-400">(Optional)</span>
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    className="px-5 py-4 w-full placeholder:text-[#A9ADB9] focus-visible:outline-gold border border-pearl text-sm text-[#A9ADB9] h-[120px]"
                    placeholder="Enter your delivery address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-2xl font-bold text-purple mb-10">
                  Your order
                </h3>
              </div>
              <div>
                <CheckoutPriceInfo />

                <div className="px-4 sm:px-6 lg:pl-10 lg:pr-9 py-7 shadow-icon">
                  <div className="flex mb-3 items-center gap-4">
                    <input
                      defaultChecked
                      type="radio"
                      id="cod"
                      name="payment"
                      value="cod"
                    />
                    <label
                      className="text-base font-bold text-purple"
                      htmlFor="cod"
                    >
                      Cash on delivery
                    </label>
                  </div>
                  
                  <p className="text-sm mb-10 text-dark-gray max-w-[410px]">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting || cartItems.length === 0}
                    className="rounded-full bg-dark-green text-white h-11 uppercase text-sm font-medium px-6 disabled:opacity-60 disabled:cursor-not-allowed hover:bg-green transition-colors"
                  >
                    {isSubmitting ? "Placing Order..." : "Place Order"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default CheckoutPage;
