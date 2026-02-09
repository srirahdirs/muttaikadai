import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { cn } from "../lib/utils";

const Pagination = ({ className }) => {
  return (
    <div className={cn("flex justify-center flex-wrap  space-x-4", className)}>
      <Link
        href="#"
        className="ring ring-primary  px-4 py-2 ml-1    rounded-lg focus:outline-none bg-gold  hover:text-white hover:bg-gold transition-all duration-500 w-10 h-10 grid place-content-center  text-white font-medium"
      >
        1
      </Link>
      <Link
        href="#"
        className=" px-4 py-2 ml-1    bg-[#eaeaea] rounded-lg focus:outline-none hover:text-white hover:bg-gold transition-all duration-500 w-10 h-10 grid place-content-center text-purple font-medium"
      >
        2
      </Link>
      <Link
        href="#"
        className=" px-2 py-1 sm:px-4 sm:py-2 ml-1   bg-[#eaeaea]  rounded-lg focus:outline-none hover:text-white hover:bg-gold transition-all duration-500 w-10 h-10 grid place-content-center text-purple font-medium"
      >
        3
      </Link>
      <span className="px-2 py-1 sm:px-4 sm:py-2   rounded-lg focus:outline-none">
        ...
      </span>
      <Link
        href="#"
        className="px-2 py-1 sm:px-4 sm:py-2    rounded-lg  bg-[#eaeaea] focus:outline-none hover:text-white hover:bg-gold transition-all duration-500 w-10 h-10 grid place-content-center text-purple font-medium"
      >
        20
      </Link>

      <Link
        href="#"
        className="px-2 py-1 sm:px-4 bg-[#eaeaea] sm:py-2    rounded-lg  focus:outline-none hover:text-white hover:bg-gold transition-all duration-500 w-10 h-10 grid place-content-center text-purple font-medium"
      >
        <FaArrowRight />
      </Link>
    </div>
  );
};
export default Pagination;
