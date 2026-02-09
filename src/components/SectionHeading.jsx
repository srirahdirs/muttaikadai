import { twMerge } from "tailwind-merge";

const SectionHeading = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={twMerge(
        "text-4xl leading-snug text-purple font-bold mb mb-4",
        className
      )}
    >
      <h2>{children}</h2>
    </div>
  );
};
export default SectionHeading;
