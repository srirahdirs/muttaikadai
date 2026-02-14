import Image from "next/image";

const FooterBottom = () => {
  return (
    <div
      className="flex gap-5
     px-10 flex-col justify-between md:flex-row items-center rounded-lg py-4 lg:py-0 min-h-[60px] bg-[#EFEFEF]"
    >
      <span className="text-sm text-center sm:text-start text-search">
        Copyright © {new Date().getFullYear()} muttaikadai. All Rights Reserved.
      </span>
      <div>
        <span className="text-sm text-center sm:text-start text-search">Developed by <a href="http://www.youngzen.in/" target="_blank" rel="noopener noreferrer" className="text-gold">YoungZen Technologies</a></span>
      </div>
    </div>
  );
};
export default FooterBottom;
