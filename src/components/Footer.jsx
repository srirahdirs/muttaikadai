import Container from "./Container";
import FooterBottom from "./FooterBottom";
import FooterCTA from "./FooterCTA";
import FooterContent from "./FooterContent";

const Footer = () => {
  return (
    <div className="relative isolate pb-[60px] pt-[175px] mt-20 bg-footer ">
      <Container className="relative z-10">
        <FooterCTA />
        <FooterContent />
        <FooterBottom />
      </Container>

      <div className="hidden md:block absolute w-[374px] h-[332px] bg-no-repeat bottom-0 left-0 bg-footer-bg-left bg-contain"></div>

      <div className="hidden md:block absolute w-[546px] h-[546px] bg-no-repeat bottom-0 right-0 bg-footer-bg-right  bg-cover"></div>
    </div>
  );
};
export default Footer;
