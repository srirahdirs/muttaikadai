import { twMerge } from "tailwind-merge";

const ProductCardIcon = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(
        "w-[30px] h-[30px] rounded-full bg-dark-gray text-sm grid place-content-center translate-y-14 group-hover:translate-y-0 transition-all  sm:opacity-0 group-hover:opacity-100 cursor-pointer hover:bg-gold text-white ",
        className
      )}
    >
      {children}
    </button>
  );
};
export default ProductCardIcon;
