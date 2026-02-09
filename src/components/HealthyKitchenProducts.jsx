"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { tabsProductsData } from "../data/data";
import FlipMove from "react-flip-move";
import HealthyKitchenProductCard from "./HealthyKitchenProductCard";
const statuses = [
  { id: 0, title: "Featured", label: "featured" },
  { id: 1, title: "Top Rated ", label: "top rated" },
  { id: 2, title: "On Sale ", label: "on sale" },
];

const HealthyKitchenProducts = () => {
  const [currentStatus, setCurrentStatus] = useState(statuses[0]);

  return (
    <section className="flex-1 mt-5 w-full  h-full">
      <header className="mb-9">
        <div className="flex flex-wrap px-4 gap-4 sm:gap-8 md:gap-14 items-center justify-center ">
          {statuses.map((status) => (
            <div key={status?.id}>
              <button
                onClick={() => setCurrentStatus(status)}
                className={twMerge(
                  "capitalize md:w-[144px] flex justify-center text-base transition-all sm:text-xl px-4 rounded-full    items-center h-8 sm:h-[50px] hover:bg-gold gap-1  hover:text-white text-purple bg-transparent  font-semibold",
                  currentStatus.label === status.label &&
                    "bg-gold gap-1  text-white"
                )}
              >
                {status?.title}
              </button>
            </div>
          ))}
        </div>
      </header>
      <FlipMove className="grid grid-cols-1 md:grid-cols-2 gap-7 ">
        {tabsProductsData
          ?.filter((item) => item.status === currentStatus.label)
          .map((product) => (
            <article key={product.id}>
              <HealthyKitchenProductCard product={product} />
            </article>
          ))}
      </FlipMove>
    </section>
  );
};
export default HealthyKitchenProducts;
