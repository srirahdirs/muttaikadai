import Image from "next/image";
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
        <article className="isolate overflow-hidden relative h-[244px] rounded-lg shadow-card-3 hover:shadow-card-4 transition-all duration-500">
          <div className="absolute inset-0 pt-[52px] pl-10 md:pl-[160px] bg-black/45 backdrop-blur-md border border-white/20 rounded-lg">
            <div className=" flex items-start w-full justify-between">
              <h5 className="text-2xl font-bold mb-3 text-white drop-shadow-sm">
                Premium <br />
                Country Eggs
              </h5>
              <span className="text-[22px] mr-8 sm:mr-[74px] block font-bold text-gold drop-shadow-sm">
                -35% Off
              </span>
            </div>
            <p className="text-sm mb-[14px] text-white/95 drop-shadow-sm">
              Fresh farm eggs, best quality guaranteed
            </p>
            <ButtonShopNow>Shop Now</ButtonShopNow>
          </div>
          <div className="z-[-1] absolute inset-[-40px]">
            <div className="relative w-full h-full">
              <Image
                src="/img/home/premium-country-eggs.jpg"
                alt="Premium Country Eggs"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </article>
        <article className="isolate overflow-hidden relative h-[244px] rounded-lg shadow-card-3 hover:shadow-card-4 transition-all duration-500">
          <div className="absolute inset-0 pt-8 pl-12 bg-black/25 backdrop-blur-md border border-white/20 rounded-lg">
            <div className="flex items-start w-full justify-between">
              <h5 className="text-2xl font-bold mb-3 text-white drop-shadow-sm">
                Free Range <br />
                Organic Eggs
              </h5>
              <span className="text-[22px] mt-[-20px] mr-5 block font-bold text-gold drop-shadow-sm">
                -35% Off
              </span>
            </div>
            <p className="text-sm mb-[14px] text-white/95 drop-shadow-sm">
              Natural eggs from happy, free-roaming hens
            </p>
            <ButtonShopNow>Shop Now</ButtonShopNow>
          </div>
          <div className="z-[-1] absolute inset-[-40px]">
            <div className="relative w-full h-full">
              <Image
                src="/img/home/free_range_organic_eggs_natural_eggs_from_happy.jpg"
                alt="Free Range Organic Eggs"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
export default CategoriesOffer;
