export const metadata = {
  title: "Fresh Eggs in Coimbatore | Farm Eggs Home Delivery",
  description:
    "Buy fresh farm eggs in Coimbatore. Country eggs, free-range eggs & organic eggs delivered to your doorstep. Order online from Muttaikadai.",
};

import FlashSales from "../components/FlashSales";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HottestCategories from "../components/HottestCategories";
import BestDeals from "./../components/BestDeals";
import NewProducts from "./../components/NewProducts";
import Testimonials from "./../components/Testimonials";
import LatestBlogs from "./../components/LatestBlogs";
import Footer from "./../components/Footer";
import HealthyKitchen from "./../components/HealthyKitchen";
import NewProductsBanners from "./../components/NewProductsBanners";

export default function Home() {
  return (
    <main className="text-purple">
      <Header />
      <Hero />
      <HottestCategories />
      <FlashSales />
      <BestDeals />
      <NewProducts />
      {/* <NewProductsBanners /> */}
      {/* <Testimonials /> */}
      {/* <HealthyKitchen /> */}
      {/* <LatestBlogs /> */}
      <Footer />
    </main>
  );
}
