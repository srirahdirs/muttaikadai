import CategoriesOffer from "./CategoriesOffer";
import CategoriesSlider from "./CategoriesSlider";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

const HottestCategories = () => {
  return (
    <section className="bg-light-pearl relative isolate">
      <Container className="pt-[106px] pb-[125px]">
        <header className="mb-14">
          <SectionHeading>
            Browse Our <span className="text-gold">Hottest</span> Categories
          </SectionHeading>
          <p className="text-sm font-bold max-w-[35rem]">
            Discover fresh, premium quality eggs from our carefully curated categories. From country chicken to free-range and exotic varieties, we bring you the finest selection.
          </p>
        </header>
        <CategoriesSlider />
        <CategoriesOffer />
      </Container>
      <div className="absolute bg-offer-main bg-no-repeat bg-contain w-[242px] h-[287px] right-0 bottom-14 z-[-1]"></div>
    </section>
  );
};
export default HottestCategories;
