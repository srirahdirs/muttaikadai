import ButtonShopNow from "./ButtonShopNow";

const HeroSlider1 = () => {
  return (
    <section className="h-[550px] md:min-h-[750px] bg-hero-slider-1 bg-no-repeat bg-cover bg-bottom px-10 pt-20 lg:pl-40 md:pt-44 ">
      <div className=" text-center lg:text-start flex lg:block flex-col justify-center items-center">
        <h5 className="mb-[22px] font-bold text-lg ">
          Farm Fresh Eggs
        </h5>
        <h2 className="mb-6 font-bold text-5xl md:text-7xl animated">
          Daily Eggs <br /> Straight from the Farm
        </h2>
        <p className="text-sm mb-7 leading-normal">
          Fresh eggs, carefully packed and delivered
          <br />
          for your everyday cooking
        </p>
        <ButtonShopNow data-aos-delay="500" className="mx-auto md:mx-0">
          Shop Now
        </ButtonShopNow>
      </div>
    </section>
  );
};
export default HeroSlider1;
