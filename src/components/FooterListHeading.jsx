import { twMerge } from "tailwind-merge";

const FooterListHeading = ({ children, className }) => (
  <div className="mb-3">
    <h5
      className={twMerge(
        "text-2xl font-bold uppercase text-dark-gray leading-snug mb-2",
        className
      )}
    >
      {children}
    </h5>
    <span className="w-16 block h-[2px] bg-gold"></span>
  </div>
);
export default FooterListHeading;
