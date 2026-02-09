"use client";

import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import ButtonAddToCart from "../../../components/ButtonAddToCart";
import Rating from "../../../components/Rating";

const imagesData = [
  "/assets/images/product/product1.png",
  "/assets/images/product/product2.png",
  "/assets/images/product/product3.png",
];

const ProductDetails = () => {
  const [image, setImage] = useState(imagesData[0]);

  return (
    <article className="flex flex-col lg:flex-row gap-7">
      <div className="basis-[540px]">
        <div className="mb-11">
          <Image
            className="object-cover w-full "
            src={image}
            width={540}
            height={598}
            alt=""
          />
        </div>
        <div className="flex flex-wrap gap-7">
          {imagesData.map((item, index) => (
            <Image
              key={index}
              src={image}
              width={130}
              height={130}
              onClick={() => setImage(item)}
              className={twMerge(
                "object-cover w-20 h-20 md:w-[130px] md:h-[130px] cursor-pointer ring ring-transparent hover:ring-gold rounded transition-all",
                image === item && "ring-gold"
              )}
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="flex-1">
        <h4 className="text-xl font-bold mb-2 text-purple">
          Fresh Peach Fruits
        </h4>
        <div className="text-sm  font-medium text-gold">₹10.00 - ₹15.00</div>
        <div className="mb-5">
          <Rating className="size-6" value={5} />
        </div>
        <div className="text-sm text-purple">
          <p>
            Aliquam pretium tellus vel sem condiment tum faucibus. Curabitur
            egestas pellentesque felis ut vehicula. Cras f aucibus purus sed
            risus
          </p>
        </div>
        <div className="flex text-base font-medium items-center gap-4 mb-7 mt-5">
          <span className="text-purple">Availability :</span>
          <span className="text-gold">In Stock</span>
        </div>
        <div className="mb-11 flex items-center gap-6">
          <div>
            <input
              id="quantity-input"
              defaultValue={1}
              type="number"
              className="h-11 max-w-[74px] outline-none border border-pearl px-4"
              min="1"
            />
          </div>
          <ButtonAddToCart 
            className="h-11 gap-2"
            product={null}
            quantity={1}
            onClick={(e) => {
              const quantityInput = document.getElementById('quantity-input');
              const quantity = parseInt(quantityInput?.value || 1);
              // Product will be passed from parent component
            }}
          >
            Add To Cart
          </ButtonAddToCart>
        </div>

        <div className="text text-base text-dark-gray mb-8">
          <div className="flex  items-center gap-2 ">
            <span>SKU :</span>
            <span>VG 2013 </span>
          </div>
          <div className="flex items-center gap-2">
            <span>Categories:</span>
            <span>Vegetables</span>
          </div>
        </div>
      </div>
    </article>
  );
};
export default ProductDetails;
