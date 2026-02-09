import ButtonAddToCart from "./ButtonAddToCart";
import Container from "./Container";
import HealthyKitchenBanner from "./HealthyKitchenBanner";
import HealthyKitchenProducts from "./HealthyKitchenProducts";

const HealthyKitchen = () => {
  return (
    <div>
      <Container className="pt-[75px]">
        <div className="flex flex-col  lg:flex-row gap-[30px] ">
          <HealthyKitchenBanner />
          <HealthyKitchenProducts />
        </div>
      </Container>
    </div>
  );
};
export default HealthyKitchen;
