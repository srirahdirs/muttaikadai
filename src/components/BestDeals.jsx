import Container from "./Container";
import BestDealsCountdown from "./BestDealsCountdown";
import BestDealsCard from "./BestDealsCard";

const BestDeals = () => {
  return (
    <section className="bg-[#f5f5f5] relative overflow-hidden py-20 md:py-28">
      {/* Subtle lemon/decorative graphic - left side */}
      <div className="absolute left-0 bottom-0 w-48 md:w-64 h-64 md:h-80 opacity-15 pointer-events-none bg-deals bg-contain bg-no-repeat bg-left-bottom" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Promo + Countdown */}
          <div className="flex-1 text-center lg:text-left w-full">
            <span className="inline-block text-lg md:text-xl font-gloria text-orange mb-4">
              Best Deals for week
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple leading-tight mb-8">
              Grab the best{" "}
              <span className="text-orange">offer of this week!</span>
            </h2>
            <div className="flex flex-col items-center lg:items-start">
              <BestDealsCountdown
                className="text-4xl md:text-5xl font-bold text-purple tracking-tight mb-1"
                endTimeInHour={24}
              />
              <div className="font-gloria text-purple/70 text-sm md:text-base flex gap-3 md:gap-6">
                <span>HOURS</span>
                <span>MINTS</span>
                <span>SECONDS</span>
              </div>
            </div>
          </div>

          {/* Right: Product Card */}
          <div className="flex-1 w-full max-w-[540px]">
            <BestDealsCard />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BestDeals;
