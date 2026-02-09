import Container from "./Container";
import BestDealsCountdown from "./BestDealsCountdown";
import BestDealsCard from "./BestDealsCard";

const BestDeals = () => {
  return (
    <div className="bg-pearl-bg relative isolate">
      <Container className="pt-36 flex flex-col gap-16 lg:flex-row items-center relative z-10  pb-[90px]">
        <div className="mx-auto lg:mx-0 w-fit text-center lg:text-start">
          <span className="text-2xl font-gloria block mb-6 text-gold">
            Best Deals for week
          </span>
          <h2 className="text-4xl md:text-5xl leading-snug font-bold max-w-lg">
            Grab the best <span className="text-gold">offer of this</span> week!
          </h2>
          <div className="mx-auto lg:mx-0 w-fit">
            <BestDealsCountdown
              className="text-4xl md:text-5xl"
              endTimeInHour={24}
            />
          </div>
          <div className="font-gloria flex items-center uppercase text-xl md:text-2xl gap-7 w-fit mx-auto lg:mx-0">
            <span>Hours</span>
            <span>Mints</span>
            <span>Seconds</span>
          </div>
        </div>
        <div className="basis-[540px] w-full">
          <BestDealsCard />
        </div>
      </Container>
      <div className="absolute w-[228px] h-[245px]  bg-deals left-12 bottom-11"></div>
      <div className="absolute top-0 w-full h-[16px]  bg-deals-top  "></div>
    </div>
  );
};
export default BestDeals;
