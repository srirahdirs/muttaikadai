import ButtonShopNow from "./ButtonShopNow";

const HeroSlider2 = () => {
  return (
    <section className="h-[550px] md:min-h-[750px] bg-hero-slider-2 bg-no-repeat bg-cover bg-bottom px-10  pt-20 md:pt-48 item">
      <div className="text-center flex flex-col justify-center items-center">
        <h5 className="mb-[22px] font-bold text-lg ">
          Organic Eggs
        </h5>

        <h2 className="mb-6 font-bold text-5xl md:text-7xl animated">
          Pure Nutrition <br /> in Every Egg
        </h2>

        <p className="text-sm mb-7 leading-normal">
          Clean, protein-rich eggs for breakfast, snacks,
          <br />
          and healthy meal prep
        </p>

        <ButtonShopNow className="mx-auto md:mx-0">Shop Now</ButtonShopNow>
      </div>
    </section>
  );
};
export default HeroSlider2;
