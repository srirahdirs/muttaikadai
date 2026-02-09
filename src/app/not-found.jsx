import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div>
      <div>
        <header className="pt-12">
          <Header />
        </header>
        <Container className="pb-[100px] md:pb-[120px] pt-[100px] md:pt-[140px]">
          <div>
            <Image
              src="/error.png"
              width={709}
              height={523}
              className="object-cover w-full max-w-[709px] mx-auto"
              alt="page not found image"
            />
            <p className="mt-7 mb-[70px] text-4xl md:text-[46px] leading-snug text-purple text-center">
              Something went wrong, looks like this page does not exist anymore.
            </p>
            <Link
              href="/"
              className="uppercase w-[150px] mx-auto font-medium text-sm text-white  transition-all hover:bg-purple duration-500 rounded-full bg-gold h-11 pt-[1px] grid place-content-center"
            >
              Back To Home
            </Link>
          </div>
        </Container>
        <Footer />
      </div>
    </div>
  );
};
export default NotFoundPage;
