import Link from "next/link";
import ButtonShopNow from "../../../components/ButtonShopNow";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BestSeller from "../_components/BestSeller";
import RelatedProducts from "../_components/RelatedProducts";
import ProductInformationTab from "../_components/ProductInformationTab";
import ProductDetails from "../_components/ProductDetails";

const ProductDetailsPage = () => {
  return (
    <div>
      <header
        style={{
          background:
            "url('/assets/images/slider/3.jpg')center/cover no-repeat",
        }}
        className="h-[420px] pt-12   relative"
      >
        <Header />
        <Container>
          <h1 className="text-5xl pt-8 md:text-7xl text-purple  text-center font-bold">
            Shop
          </h1>
        </Container>
        <ButtonShopNow className="flex absolute bottom-0 left-1/2 -translate-x-1/2  items-center mx-auto translate-y-[22px]  w-[260px] sm:w-fit pr-3">
          <span className="flex items-center gap-1 ">
            <Link className="hover:underline" href="/">
              Home /
            </Link>
            <span className="font-normal">Shop</span>
          </span>
        </ButtonShopNow>
      </header>

      <Container className="max-w-[1220px] pt-[100px] md:pt-[140px] pb-[100px]">
        <div className="flex flex-col lg:flex-row gap-5">
          <section className="flex-1">
            <ProductDetails />
          </section>
          <aside className="basis-[320px]">
            <BestSeller />
          </aside>
        </div>

        <div className="mt-[75px]">
          <ProductInformationTab />
        </div>
        <div className="mt-14">
          <RelatedProducts />
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default ProductDetailsPage;
