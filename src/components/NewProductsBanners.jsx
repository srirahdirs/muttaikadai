import ButtonShopNow from "./ButtonShopNow";
import { MdOutlineEmail } from "react-icons/md";
import Container from "./Container";
const NewProductsBanners = () => {
  return (
    <Container>
      <section className="flex flex-col lg:flex-row gap-7 ">
        <article className="h-[400px] overflow-hidden isolate bg-no-repeat lg:basis-[730px] bg-deals-bg-fruits bg-cover rounded-md shadow-sm relative">
          <div className="px-10 lg:pl-40 pt-[74px] relative z-10">
            <h4 className="max-w-[360px] text-center sm:text-start  mx-auto sm:mx-0 mb-5 text-dark-gray font-bold leading-snug text-4xl">
              We Offer Premium & 100% Organic Food
            </h4>
            <ButtonShopNow className=" mx-auto sm:mx-0">Shop Now</ButtonShopNow>
          </div>
          <div className="hidden lg:block absolute w-[400px] h-[400px] bg-no-repeat bg-contain -bottom-14 -right-4 bg-deals-bg-apple"></div>
        </article>
        <article className="min-h-[400px]  pb-10 lg:pb-4 relative  shadow rounded-lg px-9 pt-10 overflow-hidden bg-green isolate basis-[350px]">
          <div className="w-[60px]  mx-auto sm:mx-0 h-[60px] rounded-full bg-light-green grid place-content-center text-white text-3xl">
            <MdOutlineEmail />
          </div>
          <div className="pt-4 text-center sm:text-start relative z-10">
            <h5 className="max-w-[168px] text-white mb-2 font-bold leading-snug text-2xl mx-auto sm:mx-0">
              Subscribe Newsletters Us
            </h5>
            <p className="text-sm mb-4 text-white">
              Sign up and get a voucher of worth ₹250.00{" "}
            </p>
            <form>
              <input
                type="email"
                className="w-full outline-2 outline-transparent focus-within:outline-purple h-11 rounded-full mb-6 bg-white text-gray px-7"
                placeholder="Email Address"
              />
              <button className="px-3 w-full sm:w-fit h-11 rounded-full bg-white text-base font-bold text-purple ">
                Subscribe
              </button>
            </form>
          </div>

          <div className="absolute -bottom-4 z-[-1]  -right-2 bg-contain bg-no-repeat w-[190px] h-[190px] bg-deals-card"></div>
        </article>
      </section>
    </Container>
  );
};
export default NewProductsBanners;
