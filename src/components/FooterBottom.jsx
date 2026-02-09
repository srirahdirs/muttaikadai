import Image from "next/image";

const FooterBottom = () => {
  return (
    <div
      className="flex gap-5
     px-10 flex-col justify-between md:flex-row items-center rounded-lg py-4 lg:py-0 min-h-[60px] bg-[#EFEFEF]"
    >
      <span className="text-sm text-center sm:text-start text-search ">
        Copyright © 2024 muttaikadai. All Rights Reserved.
      </span>
      <div>
        <Image
          src={"/assets/images/payment.png"}
          width={240}
          height={25}
          alt="patners"
        />
      </div>
    </div>
  );
};
export default FooterBottom;
