import Link from "next/link";
const HealthyKitchenBanner = () => {
  return (
    <article className="h-[486px] relative isolate bg-organic bg-right-bottom bg-no-repeat bg-contain basis-[350px] rounded-xl bg-[#F3F3F3]">
      <div className="relative z-10 px-7 pt-[150px]">
        <p className="text-sm text-gold font-medium ">Summer Sale</p>
        <h5 className="my-1 text-dark-gray text-[26px] font-medium">
          Healthy Eggs
        </h5>
        <p className="text-sm font-medium mb-6 text-dark-gray">
          Get <span className="text-gold ">₹15.55</span> Off All Products
        </p>
        <Link
          href="/shop-2"
          className="flex justify-center items-center rounded-full duration-500 px-2 w-[160px] bg-dark-green h-10 hover:bg-gold gap-1 text-white"
        >
          Shop Now
        </Link>
      </div>

      <div className="absolute w-[47px] h-[126px] bg-gold rounded-b-md top-0 left-7 "></div>
    </article>
  );
};
export default HealthyKitchenBanner;
