export const metadata = {
  title: "Products - Fresh Eggs",
  description: "Browse our range of fresh eggs - country eggs, free-range eggs, organic eggs. Order online for delivery in Coimbatore.",
};

import Link from "next/link";
import { Suspense } from "react";
import ButtonShopNow from "../../components/ButtonShopNow";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import ShopGrid from "./_components/ShopGrid";
import ShopSidebar from "./_components/ShopSidebar";

const ShopGridFallback = () => (
  <div className="flex items-center justify-center py-12">
    <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const ShopPage2 = () => {
  return (
    <div>
      <header
        style={{
          background:
            "url('/assets/images/slider/3.jpg') center/cover no-repeat",
        }}
        className="h-[420px] pt-12   relative"
      >
        <Header />
        <Container>
          <h1 className="text-4xl sm:text-5xl pt-8 md:text-7xl text-purple text-center font-bold">
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

      <Container className="max-w-[1220px] pt-[100px] md:pt-[140px] pb-[100px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-28">
          <div className="flex-1">
            <Suspense fallback={<ShopGridFallback />}>
              <ShopGrid />
            </Suspense>
          </div>
          <div className="w-full lg:w-auto lg:basis-[360px] shrink-0">
            <Suspense fallback={<div className="h-64 animate-pulse rounded bg-gray-100" />}>
              <ShopSidebar />
            </Suspense>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default ShopPage2;
