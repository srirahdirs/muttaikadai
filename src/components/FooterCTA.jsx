import { MdOutlineEmail } from "react-icons/md";

const FooterCTA = () => {
  return (
    <div className="w-full flex rounded-md items-center -translate-y-1/2 px-11 max-w-[1110px] min-h-[135px] py-10 lg:py-1 border-2 border-gray lg:rounded-full bg-dark-green ">
      <div className="flex flex-wrap gap-8 lg:gap-1  items-center justify-between w-full">
        <div className="flex flex-col lg:flex-row w-fit mx-auto lg:mx-0  items-center gap-10">
          <div className="w-[80px]  mx-auto sm:mx-0 h-[80px] rounded-full bg-light-green grid place-content-center text-white text-4xl">
            <MdOutlineEmail />
          </div>

          <h4 className="leading-snug text-nowrap  text-white text-2xl uppercase font-medium">
            SIGN UP FOR NEWSLETTERS
          </h4>
        </div>
        <form className="h-24 sm:h-[60px] ml-auto w-full lg:basis-[520px] bg-white flex flex-col sm:flex-row  sm:pl-[50px] rounded-lg overflow-hidden sm:rounded-full">
          <input
            type="email"
            className="text-gray bg-transparent px-4 py-2  flex-1 outline-none"
            placeholder="Email Address"
          />
          <button className="sm:rounded-full hover:bg-purple transition-all bg-gold sm:h-[60px] px-9 flex items-center justify-center sm:justify-start text-white py-2 sm:py-0 duration-500 text-lg sm:mb-[60px]">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};
export default FooterCTA;
