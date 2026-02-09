"use client";
import BlogSidebarHeading from "./SidebarHeading";
import Image from "next/image";
import { latestUpdatesBlogs } from "../data/data";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import FlipMove from "react-flip-move";
import Link from "next/link";

const statuses = [
  { id: 0, title: "Recent", label: "recent" },
  { id: 1, title: "Most Commented ", label: "most commented" },
  { id: 2, title: "Popular", label: "popular" },
];

const BlogLatestUpdates = () => {
  const [currentStatus, setCurrentStatus] = useState(statuses[0]);

  return (
    <div>
      <BlogSidebarHeading>Latest Updates</BlogSidebarHeading>
      <div>
        <header className="flex mb-5 gap-4 text-sm text-dark-gray justify-between flex-wrap">
          {statuses.map((status) => (
            <div key={status?.id}>
              <button
                onClick={() => setCurrentStatus(status)}
                className={twMerge(
                  "border-b-2 border-transparent hover:border-gold transition-all duration-300 mb-2",
                  currentStatus.label === status.label && "border-gold"
                )}
              >
                {status?.title}
              </button>
            </div>
          ))}
        </header>
        <div>
          <FlipMove className="flex gap-3 flex-col">
            {latestUpdatesBlogs
              ?.filter((item) => item.status === currentStatus.label)
              .map((product) => (
                <Link
                  href="/"
                  key={product.id}
                  className="px-4 py-2 h-[101px] rounded border flex gap-4 border-transparent hover:outline outline-gold  items-center  bg-white "
                >
                  <div>
                    <Image
                      src={product.image}
                      width={102}
                      height={102}
                      alt={product.name}
                    />
                  </div>
                  <div className="flex  flex-col ">
                    <h6 className="text-lg text-purple font-bold">
                      {product?.name}
                    </h6>
                    <div className="text-sm flex items-center gap-2 text-green">
                      <span>{product.date}</span>
                      <span>{product.views} views</span>
                    </div>

                    <div className="text-sm font-bold text-gold">
                      {product?.priceRange}
                    </div>
                  </div>
                </Link>
              ))}
          </FlipMove>
        </div>
      </div>
    </div>
  );
};
export default BlogLatestUpdates;
