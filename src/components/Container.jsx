import { twMerge } from "tailwind-merge";

const Container = ({ children, className }) => {
  return (
    <div className={twMerge("max-w-[1140px] px-gutter mx-auto", className)}>
      {children}
    </div>
  );
};
export default Container;
