import ButtonShopNow from "./ButtonShopNow";

const HeroSlider3 = () => {
  return (
    <section className="h-[550px] md:min-h-[750px] bg-hero-slider-3 bg-no-repeat bg-cover bg-bottom px-10 lg:pr-40 pt-20 md:pt-48 item">
      <div className=" text-center lg:text-end flex lg:block flex-col justify-center lg:justify-end items-center">
        <h5 className="mb-[22px] font-bold text-lg ">
          Fresh Fruits and Vegetables
        </h5>
        <h2 className="mb-6 font-bold text-5xl md:text-7xl animated">
          Seasonal Produce <br className="hidden md:block" /> Picked at Peak
        </h2>
        <p className="text-sm mb-7 leading-normal">
          Vegetables and Fresh Fruits sourced from local farms
          <br />
          for clean and wholesome meals
        </p>
        <ButtonShopNow className="mx-auto md:mx-0 lg:ml-auto">
          Shop Now
        </ButtonShopNow>
      </div>
    </section>
  );
};
export default HeroSlider3;
