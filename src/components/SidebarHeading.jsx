import { twMerge } from "tailwind-merge";

const SidebarHeading = ({ children, className }) => {
  return (
    <header className={twMerge("mb-6", className)}>
      <h1 className=" text-2xl text-green font-bold">{children}</h1>
      <span className="inline-block w-20 bg-gold h-[3px] "></span>
    </header>
  );
};
export default SidebarHeading;
