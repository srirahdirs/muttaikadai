import ButtonShopNow from "../../components/ButtonShopNow";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Link from "next/link";
import { RiSecurePaymentLine, RiExchangeDollarLine } from "react-icons/ri";
import { FiTruck } from "react-icons/fi";
import SectionHeading from "./../../components/SectionHeading";
import ServiceCard from "../../components/ServiceCard";
import LoadingPage from "../loading";

const ServicePage = () => {
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
            Service
          </h1>
        </Container>
        <ButtonShopNow className="flex absolute bottom-0 left-1/2 -translate-x-1/2  items-center mx-auto translate-y-[22px]  w-[260px] sm:w-fit pr-3">
          <span className="flex items-center gap-1">
            <Link className="hover:underline" href="/">
              Home /
            </Link>
            <span className="font-normal">Service</span>
          </span>
        </ButtonShopNow>
      </header>
      <Container className="pt-[100px] md:pt-[138px] pb-[100px] md:pb-[160px]">
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
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default ServicePage;
