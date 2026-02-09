import BlogCard from "../../components/BlogCard";
import ButtonShopNow from "../../components/ButtonShopNow";
import Container from "../../components/Container";
import NewProductsCard from "../../components/NewProductsCard";
import Pagination from "../../components/Pagination";
import SectionHeading from "../../components/SectionHeading";
import { newProductsData } from "../../data/data";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Link from "next/link";

const ShopPage = () => {
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
            Products
          </h1>
        </Container>
        <ButtonShopNow className="flex absolute bottom-0 left-1/2 -translate-x-1/2  items-center mx-auto translate-y-[22px]  w-[260px] sm:w-fit pr-3">
          <span className="flex items-center gap-1 ">
            <Link className="hover:underline" href="/">
              Home /
            </Link>
            <span className="font-normal">Products</span>
          </span>
        </ButtonShopNow>
      </header>
      <Container className="pt-[100px] md:pt-[120px] pb-[100px] md:pb-[140px]">
        <header className="text-center mb-[40px]">
          <SectionHeading>
            New <span className="text-gold">Products</span>
          </SectionHeading>
          <p className="mt-4 max-w-[35rem] mx-auto">
            Aliquam pretium tellus vel sem condimentum faucibus. Curabitur
            egestas pellentesque felis ut vehicula. Cras faucibus purus sed
            risus
          </p>
        </header>

        <div className="grid  gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {newProductsData?.map((product) => (
            <div key={product.id}>
              <NewProductsCard product={product} />
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default ShopPage;
