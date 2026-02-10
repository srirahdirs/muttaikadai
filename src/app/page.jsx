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
