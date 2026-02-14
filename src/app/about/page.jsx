import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Link from "next/link";

export const metadata = {
  title: "About Us | Muttaikadai - Fresh Eggs in Coimbatore",
  description:
    "Learn about Muttaikadai, your trusted source for fresh farm eggs in Coimbatore. We deliver country eggs, free-range eggs, and organic eggs to your doorstep.",
};
import { RiSecurePaymentLine } from "react-icons/ri";
import { FiTruck } from "react-icons/fi";
import { IoEggOutline } from "react-icons/io5";
import SectionHeading from "../../components/SectionHeading";
import ServiceCard from "../../components/ServiceCard";
import { aboutTeam } from "../../data/data";
import MemberCard from "../../components/MemberCard";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="text-purple">
      <header
        style={{
          background: "url('/placeholder-hero.svg') center/cover no-repeat",
        }}
        className="h-[420px] pt-12 relative"
      >
        <Header />
        <Container>
          <h1 className="text-5xl pt-8 md:text-7xl text-white text-center font-bold drop-shadow-lg">
            About Us
          </h1>
        </Container>
        <div className="flex absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[22px] items-center mx-auto">
          <Link
            href="/"
            className="h-11 rounded-full w-fit gap-[10px] flex items-center px-5 min-w-[150px] shadow bg-white transition-all hover:bg-gold hover:text-white duration-500 font-bold"
          >
            Home / <span className="font-normal ml-1">about</span>
          </Link>
        </div>
      </header>

      <Container className="pt-[100px] md:pt-[128px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <article className="text-center lg:text-start">
            <h2 className="text-4xl md:text-6xl md:leading-tight font-bold mb-8">
              Your trusted source for{" "}
              <span className="text-gold">
                100% Fresh <br />
                Farm Eggs
              </span>{" "}
              in Coimbatore
            </h2>
            <p className="text-sm max-w-[445px] mx-auto lg:mx-0 text-light-gray leading-relaxed">
              Muttaikadai was born from a simple belief: everyone deserves access to
              fresh, nutritious eggs delivered straight from the farm. Based in
              Vadavalli, Coimbatore, we source our eggs from trusted local farms
              and deliver them to your doorstep—ensuring quality, freshness, and
              convenience with every order.
            </p>
            <p className="text-sm max-w-[445px] mx-auto lg:mx-0 mt-4 text-light-gray leading-relaxed">
              From country eggs to free-range and organic varieties, we offer a
              range of options to suit your needs. Order online, and we&apos;ll bring
              the farm to you.
            </p>
          </article>
          <div>
            <article className="isolate mt-5 bg-white overflow-hidden relative min-h-[244px] flex rounded-lg shadow-card-3 hover:shadow-card-4 transition-all duration-500 pt-[22px] pb-[30px] px-6">
              <div className="flex-1 flex flex-col justify-center">
                <span className="text-[22px] block font-bold text-gold mb-1">
                  Fresh & Delivered
                </span>
                <h5 className="text-2xl font-bold mb-3 text-purple">
                  Premium eggs <br />
                  at your doorstep
                </h5>
                <p className="text-sm mb-4 text-light-gray">
                  Order online and get farm-fresh eggs delivered in Coimbatore.
                </p>
                <Link
                  href="/shop-2"
                  className="h-11 rounded-full w-fit gap-[10px] inline-flex items-center p-[2px] min-w-[150px] group cursor-pointer shadow bg-white transition-all hover:bg-gold duration-500 font-bold"
                >
                  <span className="w-10 h-10 grid place-content-center rounded-full bg-gold text-white">
                    →
                  </span>
                  <span className="px-3">Shop Now</span>
                </Link>
              </div>
              <div className="hidden md:block flex-1 relative min-h-[180px] w-full">
                <Image
                  src="/placeholder-offer.svg"
                  alt="Fresh eggs"
                  fill
                  className="object-cover rounded-r-lg"
                  sizes="(max-width: 768px) 0vw, 50vw"
                />
              </div>
            </article>
          </div>
        </div>

        <section className="py-[100px] md:py-[120px] relative">
          <header className="text-center mb-[60px]">
            <SectionHeading>
              Why Choose <span className="text-gold">Muttaikadai</span>
            </SectionHeading>
            <p className="mt-4 max-w-[35rem] mx-auto text-light-gray">
              We combine farm-fresh quality with hassle-free delivery so you can
              enjoy nutritious eggs without leaving home.
            </p>
          </header>

          <div className="gap-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard Icon={FiTruck}>
              <div>
                <h6 className="text-lg text-gray font-medium mb-2">
                  Home Delivery
                </h6>
                <p className="text-sm text-light-gray">
                  We deliver fresh eggs across Coimbatore. Place your order online
                  and get it delivered to your doorstep.
                </p>
              </div>
            </ServiceCard>
            <ServiceCard Icon={IoEggOutline}>
              <div>
                <h6 className="text-lg text-gray font-medium mb-2">
                  Farm-Fresh Quality
                </h6>
                <p className="text-sm text-light-gray">
                  Sourced from trusted local farms. Country eggs, free-range, and
                  organic options—all delivered at peak freshness.
                </p>
              </div>
            </ServiceCard>
            <ServiceCard Icon={RiSecurePaymentLine}>
              <div>
                <h6 className="text-lg text-gray font-medium mb-2">
                  Safe & Secure Payment
                </h6>
                <p className="text-sm text-light-gray">
                  Pay securely online. We support multiple payment options for a
                  smooth checkout experience.
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
              The Team Behind <span className="text-gold">Muttaikadai</span>
            </SectionHeading>
            <p className="mt-4 max-w-[35rem] mx-auto text-light-gray">
              From farm sourcing to delivery, our team works to bring you the
              freshest eggs in Coimbatore.
            </p>
          </header>
          <div className="flex gap-10 justify-center flex-wrap">
            {aboutTeam.map((member, index) => (
              <div key={index}>
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Container>
        <div className="pt-[100px] pb-[100px] md:pt-[120px] md:pb-[130px] gap-10 flex flex-col lg:flex-row items-center">
          <div className="flex-1 w-full max-w-[546px]">
            <Image
              src="/placeholder-farm.svg"
              width={546}
              height={330}
              alt="Fresh farm produce - Muttaikadai sources from local farms"
              className="w-full object-cover rounded-lg h-[280px] md:h-[330px]"
            />
          </div>
          <article className="flex-1 text-center lg:text-start">
            <h2 className="text-4xl md:text-6xl md:leading-tight font-bold mb-8">
              We work with{" "}
              <span className="text-gold">trusted</span> <br />
              local farmers
            </h2>
            <p className="text-sm max-w-[445px] mx-auto lg:mx-0 text-light-gray leading-relaxed">
              At Muttaikadai, we partner with local farms in and around Coimbatore
              to source the best eggs. Our farmers follow ethical practices, and
              we ensure every egg meets our quality standards before it reaches you.
            </p>
            <p className="text-sm max-w-[445px] mx-auto lg:mx-0 mt-4 text-light-gray leading-relaxed">
              When you order from us, you support local agriculture and get
              fresh, nutritious eggs for your family.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-6 h-11 rounded-full px-6 flex items-center gap-2 w-fit bg-gold text-white font-bold hover:bg-orange-600 transition-colors"
            >
              Get in Touch
            </Link>
          </article>
        </div>
      </Container>

      <div className="bg-soft-mint py-16 md:py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to order fresh eggs?
            </h2>
            <p className="text-light-gray mb-8">
              Browse our range of country eggs, free-range eggs, and more. Delivered
              fresh to your door in Coimbatore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop-2"
                className="h-12 px-8 rounded-full bg-gold text-white font-bold flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                Shop Eggs
              </Link>
              <Link
                href="/contact"
                className="h-12 px-8 rounded-full border-2 border-purple text-purple font-bold flex items-center justify-center hover:bg-purple hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
