import ButtonShopNow from "../../components/ButtonShopNow";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Link from "next/link";
import { RiSecurePaymentLine, RiExchangeDollarLine } from "react-icons/ri";
import { FiTruck } from "react-icons/fi";
import SectionHeading from "../../components/SectionHeading";
import ServiceCard from "../../components/ServiceCard";
import { members } from "../../data/data";
import MemberCard from "../../components/MemberCard";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <header
        style={{
          background:
            "url('/assets/images/slider/3.jpg')center/cover no-repeat",
        }}
        className="h-[420px]  pt-12   relative"
      >
        <Header />
        <Container>
          <h1 className="text-5xl pt-8 md:text-7xl text-purple  text-center font-bold">
            About Us
          </h1>
        </Container>
        <ButtonShopNow className="flex absolute bottom-0 left-1/2 -translate-x-1/2  items-center mx-auto translate-y-[22px]  w-[260px] sm:w-fit pr-3">
          <span className="flex items-center gap-1">
            <Link className="hover:underline" href="/">
              Home /
            </Link>
            <span className="font-normal">about</span>
          </span>
        </ButtonShopNow>
      </header>
      <Container className="pt-[100px] md:pt-[128px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 text-purple">
          <article className="text-center lg:text-start">
            <h2 className="text-4xl md:text-6xl md:leading-tight font-bold mb-8">
              Offer 100%
              <span className="text-gold">
                Fresh <br />
                Organic
              </span>
              Eggs
            </h2>
            <p className="text-sm max-w-[445px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </article>
          <div>
            <article className="isolate mt-5 bg-white overflow-hidden relative h-[244px] bg-center  flex bg-no-repeat bg-cover bg  rounded-lg shadow-card-3 hover:shadow-card-4 transition-all duration-500 pt-[22px] pb-[30px]">
              <div className="sm:flex-1 pl-24 sm:pl-1"></div>
              <div className="flex-1">
                <div className=" flex flex-col w-full">
                  <span className="text-[22px]  block font-bold text-gold">
                    -35% Off
                  </span>
                  <h5 className="text-2xl  font-bold mb-3">
                    Fresh eggs <br />
                    Premium quality
                  </h5>
                </div>
                <p className="text-sm mb-[14px]">
                  Aliquam pretium tellus vel sem cond
                </p>
                <ButtonShopNow>Shop Now</ButtonShopNow>
              </div>
              <div className="z-[-1]  absolute inset-[-40px] bg-offer3 bg-no-repeat bg-cover bg-center"></div>
            </article>
          </div>
        </div>

        <section className="py-[100px] md:py-[120px]  relative">
          <header className="text-center mb-[60px]">
            <SectionHeading>
              Our <span className="text-gold">Awesome</span> Services
            </SectionHeading>
            <p className="mt-4 max-w-[35rem] mx-auto">
              Aliquam pretium tellus vel sem condimentum faucibus. Curabitur
              egestas pellentesque felis ut vehicula. Cras faucibus purus sed
              risus
            </p>
          </header>

          <div className="gap-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            <ServiceCard Icon={FiTruck}>
              <div>
                <h6 className="text-lg line-clamp-2 text-gray font-medium mb-2">
                  Free Shipping
                </h6>
                <p className="text-sm line-clamp-1">
                  Aliquam pretium tellus vel sem condiment
                </p>
              </div>
            </ServiceCard>
            <ServiceCard Icon={RiExchangeDollarLine}>
              <div>
                <h6 className="text-lg line-clamp-2 text-gray font-medium mb-2">
                  Moneyback Offer
                </h6>
                <p className="text-sm line-clamp-1">
                  Aliquam pretium tellus vel sem condiment
                </p>
              </div>
            </ServiceCard>
            <ServiceCard Icon={RiSecurePaymentLine}>
              <div>
                <h6 className="text-lg line-clamp-2 text-gray font-medium mb-2">
                  Safe Payment
                </h6>
                <p className="text-sm line-clamp-1">
                  Aliquam pretium tellus vel sem condiment
                </p>
              </div>
            </ServiceCard>
          </div>
        </section>
      </Container>

      <div className="py-[100px] bg-pearl-bg">
        <Container>
          <header className="text-center mb-14">
            <SectionHeading>
              Team Member <span className="text-gold">to help</span> <br />
              support
            </SectionHeading>
            <p className="mt-4 max-w-[35rem] mx-auto">
              Aliquam pretium tellus vel sem condimentum faucibus. Curabitur
              egestas pellentesque felis ut vehicula. Cras faucibus purus sed
              risus
            </p>
          </header>
          <div className="flex gap-10  justify-center flex-wrap">
            {members.map((member, index) => (
              <div key={index}>
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Container>
        <div className=" pt-[100px] pb-[100px] md:pt-[120px] md:pb-[130px]  gap-7 text-purple flex flex-col lg:flex-row">
          <div className="flex-1">
            <Image
              src="/assets/images/vegetables.png"
              width={546}
              alt="vegetables"
              className="w-full object-contain h-[330px]"
              height={330}
            />
          </div>

          <article className="text-center lg:text-start">
            <h2 className="text-4xl md:text-6xl md:leading-tight font-bold mb-8">
              We believe in <span className="text-gold">working</span> <br />
              <span className="text-gold">with</span> accredited <br />
              farmers
            </h2>
            <p className="text-sm max-w-[445px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut.
            </p>
          </article>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default AboutPage;
