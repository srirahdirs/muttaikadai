import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

const ButtonShopNow = ({ children, className, ...pros }) => {
  return (
    <Link
      href={"/shop-1"}
      {...pros}
      className={twMerge(
        "h-11 rounded-full w-fit gap-[10px] flex items-center p-[2px] min-w-[150px] group cursor-pointer shadow bg-white transition-all hover:bg-gold  duration-500",
        className
      )}
    >
      <span className="w-10  h-10 grid place-content-center rounded-full text-wrap bg-gold text-white   duration-500 transition-all  ">
        <FaArrowRight />
      </span>
      <span className="text-base block group-hover:text-white transition-all duration-500 font-bold">
        {children}
      </span>
    </Link>
  );
};
export default ButtonShopNow;
