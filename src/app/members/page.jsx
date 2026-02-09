import ButtonShopNow from "../../components/ButtonShopNow";
import MemberCard from "../../components/MemberCard";
import Container from "../../components/Container";
import { members } from "../../data/data";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Link from "next/link";

const MembersPage = () => {
  return (
    <div>
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
              Meet The Team
            </h1>
          </Container>
          <ButtonShopNow className="flex absolute bottom-0 left-1/2 -translate-x-1/2  items-center mx-auto translate-y-[22px]  w-[260px] sm:w-fit pr-3">
            <span className="flex items-center gap-1 ">
              <Link className="hover:underline" href="/">
                Home /
              </Link>
              <span className="font-normal">Team</span>
            </span>
          </ButtonShopNow>
        </header>
        <Container className="pt-[100px] md:pt-[120px] mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-7">
            {members.concat(members).map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </Container>
        <Footer />
      </div>
    </div>
  );
};
export default MembersPage;
