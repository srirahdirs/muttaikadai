"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const WishlistContext = createContext(null);

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within a WishlistProvider");
  return ctx;
};

function normalizeWishlistItem(product) {
  const imageUrl =
    product.image_url || product.image || "/assets/images/product/1.png";
  const price = product.sale_price || product.price || 0;
  return {
    id: product.id,
    name: product.name,
    // keep both formats so it can be re-used by CartContext
    price,
    sale_price: product.sale_price ?? null,
    image: imageUrl,
    image_url: imageUrl,
    slug: product.slug,
    category_slug: product.category_slug,
  };
}

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("wishlist");
    if (saved) {
      try {
        setWishlistItems(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading wishlist from localStorage:", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const isInWishlist = (productId) =>
    wishlistItems.some((item) => item.id === productId);

  const addToWishlist = (product) => {
    if (!product?.id) return;
    setWishlistItems((prev) => {
      if (prev.some((x) => x.id === product.id)) return prev;
      return [...prev, normalizeWishlistItem(product)];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((prev) => prev.filter((x) => x.id !== productId));
  };

  const toggleWishlist = (product) => {
    if (!product?.id) return;
    setWishlistItems((prev) => {
      const exists = prev.some((x) => x.id === product.id);
      return exists
        ? prev.filter((x) => x.id !== product.id)
        : [...prev, normalizeWishlistItem(product)];
    });
  };

  const getWishlistCount = () => wishlistItems.length;

  const value = useMemo(
    () => ({
      wishlistItems,
      addToWishlist,
      removeFromWishlist,
      toggleWishlist,
      isInWishlist,
      getWishlistCount,
      clearWishlist: () => setWishlistItems([]),
    }),
    [wishlistItems]
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

