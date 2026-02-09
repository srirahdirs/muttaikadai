import ButtonShopNow from "../../../components/ButtonShopNow";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import Link from "next/link";

const CheckoutPageHeader = () => {
  return (
    <header
      style={{
        background: "url('/assets/images/slider/3.jpg')center/cover no-repeat",
      }}
      className="h-[420px] pt-12   relative"
    >
      <Header />
      <Container>
        <h1 className="text-5xl pt-8 md:text-7xl text-purple  text-center font-bold">
          Checkout
        </h1>
      </Container>
      <ButtonShopNow className="flex absolute bottom-0 left-1/2 -translate-x-1/2  items-center mx-auto translate-y-[22px]  w-[260px] sm:w-fit pr-3">
        <span className="flex items-center gap-1 ">
          <Link className="hover:underline" href="/">
            Home /
          </Link>
          <span className="font-normal">Checkout</span>
        </span>
      </ButtonShopNow>
    </header>
  );
};
export default CheckoutPageHeader;
