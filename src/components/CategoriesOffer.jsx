import ButtonShopNow from "./ButtonShopNow";
import SectionHeading from "./SectionHeading";

const CategoriesOffer = () => {
  return (
    <section className="mt-24">
      <header className=" text-center mb-16">
        <SectionHeading>
          What <span className="text-gold">We Offer</span> for You
        </SectionHeading>
        <p className="text-sm font-bold max-w-[35rem] mx-auto">
          Premium quality eggs, fresh daily delivery, and exclusive deals. Everything you need for healthy eggs, all in one place.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7  items-center">
        <article className="isolate bg-white overflow-hidden relative h-[244px] bg-center  bg-no-repeat bg-cover bg  rounded-lg shadow-card-3 hover:shadow-card-4 transition-all duration-500 pt-[52px] pl-10 md:pl-[160px]">
          <div className=" flex items-start w-full justify-between">
            <h5 className="text-2xl  font-bold mb-3">
              Premium <br />
              Country Eggs
            </h5>
            <span className="text-[22px] mr-8 sm:mr-[74px] block font-bold text-gold">
              -35% Off
            </span>
          </div>
          <p className="text-sm mb-[14px]">
            Fresh farm eggs, best quality guaranteed
          </p>
          <ButtonShopNow>Shop Now</ButtonShopNow>
          <div className="z-[-1]  absolute inset-[-40px] bg-offer bg-no-repeat bg-cover bg-center"></div>
        </article>
        <article className="h-[244px] bg-white overflow-hidden isolate relative pt-8 pl-12 rounded-lg shadow-card-3 hover:shadow-card-4 transition-all duration-500  ">
          <div className="flex items-start w-full justify-between">
            <h5 className="text-2xl  font-bold mb-3">
              Free Range <br />
              Organic Eggs
            </h5>
            <span className="text-[22px] mt-[-20px] mr-5 block font-bold text-gold">
              -35% Off
            </span>
          </div>
          <p className="text-sm mb-[14px]">
            Natural eggs from happy, free-roaming hens
          </p>
          <ButtonShopNow>Shop Now</ButtonShopNow>
          <div className="z-[-1]  absolute w-[282px] h-[173px] bg-offer2 bg-no-repeat bg-contain bg-right-bottom bottom-0 right-0"></div>
        </article>
      </div>
    </section>
  );
};
export default CategoriesOffer;
