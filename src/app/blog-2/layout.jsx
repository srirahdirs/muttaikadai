import ButtonShopNow from "../../components/ButtonShopNow";
import Container from "../../components/Container";
import BlogSidebar from "../../components/BlogSidebar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Link from "next/link";

export default function BlogLayout({ children }) {
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
      <Container className="max-w-[1220px] pt-[100px] md:pt-[140px] pb-[100px]">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 ">{children}</div>
          <div className="basis-[440px] ">
            <BlogSidebar />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
