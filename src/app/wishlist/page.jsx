"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="min-h-[70vh] bg-white">
      <Header />
      <div className="max-w-[1220px] mx-auto px-4 py-10">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold text-purple">Wishlist</h1>
          {wishlistItems.length > 0 && (
            <button
              onClick={clearWishlist}
              className="text-sm font-medium text-orange hover:underline"
            >
              Clear all
            </button>
          )}
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            <p className="mb-4">Your wishlist is empty.</p>
            <Link
              href="/shop-2"
              className="inline-flex items-center justify-center rounded-full bg-dark-green text-white px-6 h-10 hover:bg-gold transition-all"
            >
              Browse products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 rounded-lg border border-pearl bg-[#F9F4EE]"
              >
                <div className="w-[90px] h-[90px] rounded bg-white grid place-content-center overflow-hidden">
                  <Image
                    src={item.image || "/assets/images/product/1.png"}
                    width={90}
                    height={90}
                    alt={item.name}
                    className="object-contain"
                  />
                </div>

                <div className="flex-1">
                  <Link
                    href={`/shop-2/${item.id}`}
                    className="text-lg font-bold text-purple hover:underline line-clamp-2"
                  >
                    {item.name}
                  </Link>
                  <div className="text-sm font-medium text-gold mt-1">
                    ₹{Number(item.price || 0).toFixed(2)}
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <button
                      onClick={() =>
                        addToCart(
                          {
                            ...item,
                            image_url: item.image_url || item.image,
                            price: item.price,
                          },
                          1
                        )
                      }
                      className="h-9 px-4 rounded-full bg-dark-green text-white text-sm font-medium hover:bg-gold transition-all"
                    >
                      Add to cart
                    </button>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="h-9 px-4 rounded-full bg-white text-purple text-sm font-medium border border-pearl hover:border-gold transition-all"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

