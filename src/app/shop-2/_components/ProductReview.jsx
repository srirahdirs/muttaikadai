"use client";

import Rating from "../../../components/Rating";

const ProductReview = () => {
  return (
    <article className="border-b border-pearl pb-5">
      <header className="flex items-center justify-between gap-4 flex-wrap">
        <Rating value={5} />

        <div className="flex text-base items-center gap-2">
          <p className=" text-purple font-semibold"> @john.doe</p>
          <span className="font-semibold text-dark-gray">Nov 01, 2023</span>
        </div>
      </header>
      <div className="mt-5">
        <p className="text-base line-clamp-3 md:text-sm text-dark-gray">
          muttaikadai has revolutionized my grocery shopping experience. With its
          intuitive interface, extensive product range, and reliable service,
          it&apos;s become my go-to platform for all my grocery needs. Highly
          recommended!
        </p>
      </div>
    </article>
  );
};
export default ProductReview;
