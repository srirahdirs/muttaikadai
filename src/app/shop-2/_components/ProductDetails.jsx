"use client";

import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import ButtonAddToCart from "../../../components/ButtonAddToCart";
import Rating from "../../../components/Rating";

const ProductDetails = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const regularPrice = parseFloat(product.price || 0);
  const salePrice = product.sale_price ? parseFloat(product.sale_price) : null;
  const priceDisplay = salePrice != null && salePrice < regularPrice
    ? `₹${salePrice.toFixed(2)} - ₹${regularPrice.toFixed(2)}`
    : `₹${regularPrice.toFixed(2)}`;

  const galleryImages = Array.isArray(product.gallery_images)
    ? product.gallery_images
    : product.gallery_images && typeof product.gallery_images === "string"
    ? (() => {
        try {
          return JSON.parse(product.gallery_images);
        } catch {
          return [];
        }
      })()
    : [];

  const allImages = [
    product.image_url || "/assets/images/product/1.png",
    ...galleryImages.filter(Boolean),
  ].filter(Boolean);
  const mainImage = selectedImage || allImages[0] || "/assets/images/product/1.png";

  return (
    <article className="flex flex-col lg:flex-row gap-7">
      <div className="basis-[540px]">
        <div className="mb-11">
          <Image
            className="object-cover w-full"
            src={mainImage}
            width={540}
            height={598}
            alt={product.name}
            onError={(e) => {
              e.target.src = "/assets/images/product/1.png";
              e.target.onerror = null;
            }}
          />
        </div>
        {allImages.length > 1 && (
          <div className="flex flex-wrap gap-7">
            {allImages.map((img, index) => (
              <Image
                key={index}
                src={img}
                width={130}
                height={130}
                onClick={() => setSelectedImage(img)}
                className={twMerge(
                  "object-cover w-20 h-20 md:w-[130px] md:h-[130px] cursor-pointer ring ring-transparent hover:ring-gold rounded transition-all",
                  mainImage === img && "ring-gold"
                )}
                alt={`${product.name} ${index + 1}`}
                onError={(e) => {
                  e.target.src = "/assets/images/product/1.png";
                  e.target.onerror = null;
                }}
              />
            ))}
          </div>
        )}
      </div>
      <div className="flex-1">
        <h4 className="text-xl font-bold mb-2 text-purple">{product.name}</h4>
        <div className="text-sm font-medium text-gold">{priceDisplay}</div>
        <div className="mb-5">
          <Rating className="size-6" value={product.rating || 0} />
        </div>
        <div className="text-sm text-purple">
          <p>
            {product.short_description ||
              product.description ||
              "No description available."}
          </p>
        </div>
        <div className="flex text-base font-medium items-center gap-4 mb-7 mt-5">
          <span className="text-purple">Availability :</span>
          <span className={product.stock_status === "in_stock" ? "text-gold" : "text-orange"}>
            {product.stock_status === "in_stock" ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        <div className="mb-11 flex items-center gap-6">
          <div>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
              className="h-11 max-w-[74px] outline-none border border-pearl px-4"
              min="1"
            />
          </div>
          <ButtonAddToCart
            className="h-11 gap-2"
            product={product}
            quantity={quantity}
          >
            Add To Cart
          </ButtonAddToCart>
        </div>

        <div className="text text-base text-dark-gray mb-8">
          {product.sku && (
            <div className="flex items-center gap-2 mb-2">
              <span>SKU :</span>
              <span>{product.sku}</span>
            </div>
          )}
          {product.category_name && (
            <div className="flex items-center gap-2">
              <span>Categories:</span>
              <span>{product.category_name}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductDetails;
