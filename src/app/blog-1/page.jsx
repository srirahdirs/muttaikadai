import BlogCard from "../../components/BlogCard";
import ButtonShopNow from "../../components/ButtonShopNow";
import Container from "../../components/Container";
import Pagination from "../../components/Pagination";
import { allBlogs } from "../../data/data";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Link from "next/link";

const BlogPageOne = () => {
  return (
    <div>
      <header
        style={{
          background:
            "url('/assets/images/slider/3.jpg')center/cover no-repeat",
        }}
        className="h-[420px] pt-12 relative"
      >
        <Header />
        <Container>
          <h1 className="text-5xl pt-8 md:text-7xl text-purple  text-center font-bold">
            Blog
          </h1>
        </Container>
        <ButtonShopNow className="flex absolute bottom-0 left-1/2 -translate-x-1/2  items-center mx-auto translate-y-[22px]  w-[260px] sm:w-fit pr-3">
          <span className="flex items-center gap-1 ">
            <Link className="hover:underline" href="/">
              Home /
            </Link>
            <span className="font-normal">Blog</span>
          </span>
        </ButtonShopNow>
      </header>
      <Container className="pt-[100px] md:pt-[133px]">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {allBlogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
        <div className="mt-16 mb-[100px] md:mb-[145px]">
          <Pagination />
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default BlogPageOne;
