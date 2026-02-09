import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { FaAddressBook } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
const ContactPage = () => {
  return (
    <div>
      <header className="h-[650px] pt-12 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.967410377096!2d-111.89998968453055!3d33.31966746342457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDE5JzEwLjgiTiAxMTHCsDUzJzUyLjEiVw!5e0!3m2!1sen!2sus!4v1516690469899"
          width="600"
          height="450"
          className="absolute inset-0 z-[-1] w-full h-[650px]"
          style={{ border: 0 }}
          allowfullscreen
        ></iframe>
        <Header />
      </header>

      <Container className="pt-[100px] pb-[100px] md:pb-[140px]">
        <header className="mb-10">
          <span className="inline-block mb-5 text-base text-gold tracking-[5px]">
            #Contact
          </span>
          <h4 className="text-dark-gray mb-1 font-bold uppercase text-2xl">
            Get in touch any time for
          </h4>
          <h4 className="uppercase text-2xl text-gold mb-2">any help!</h4>
          <span className="h-[2px] w-14 bg-gold inline-block"></span>
        </header>

        <div className="flex flex-col gap-16 lg:flex-row">
          <div className="basis-[730px] shadow-card-3 pt-24 pl-6 lg:pl-[100px] pb-16 pr-6">
            <form className="flex w-full flex-col gap-5 md:gap-[10px]">
              <div className="flex flex-col md:flex-row w-full gap-5 md:gap-[30px]">
                <div className="bg-mint w-full  px-5  relative">
                  <input
                    className="h-[46px] text-light-gray pr-5 outline-none pb-5 w-full pt-3 bg-transparent"
                    type="text"
                    placeholder="Name*"
                    required
                  />
                </div>
                <div className="bg-mint w-full   px-5  relative">
                  <input
                    className="h-[46px] text-light-gray pr-5 outline-none pb-5 w-full pt-3 bg-transparent"
                    type="email"
                    placeholder="Email*"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row w-full gap-5 md:gap-[30px]">
                <div className="bg-mint w-full   px-5  relative">
                  <input
                    className="h-[46px] text-light-gray pr-5 outline-none pb-5 w-full pt-3 bg-transparent"
                    type="number"
                    id="contact"
                    placeholder="Phone*"
                    required
                  />
                </div>
                <div className="bg-mint w-full   px-5  relative">
                  <input
                    className="h-[46px] text-light-gray pr-5 outline-none pb-5 w-full pt-3 bg-transparent"
                    type="text"
                    placeholder="Address*"
                    required
                  />
                </div>
              </div>
              <div className="bg-mint w-full  px-5  relative">
                <textarea
                  className="h-[197px] text-light-gray pr-5 outline-none pb-5 w-full pt-3 bg-transparent"
                  type="text"
                  placeholder="Comment*"
                  required
                />
              </div>
              <button className="h-[66px] rounded-sm duration-500 transition-all hover:bg-purple bg-gold w-full sm:w-[188px] grid place-content-center text-lg font-medium text-white mt-[35px]">
                Message Me
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-16">
            <div className="flex gap-10 items-center">
              <div className="text-gold text-6xl">
                <FaAddressBook />
              </div>
              <div className="flex flex-col gap-3">
                <h6 className="text-dark-gray text-2xl uppercase">Address</h6>
                <div className="text-light-gray text-sm">
                  <p>Karthikeyan N</p>
                  <p>Poo thottam (near BSNL tower)</p>
                  <p>Vadavalli, V.N Palayam (post)</p>
                  <p>Sulur (taluk) Coimbatore-641669.</p>
                </div>
              </div>
            </div>

            <div className="flex gap-10 items-center">
              <div className="text-gold text-6xl">
                <FaPhoneSquareAlt />
              </div>
              <div className="flex flex-col gap-3">
                <h6 className="text-dark-gray text-2xl uppercase">
                  Phone
                </h6>
                <div className="text-light-gray text-sm">
                  <p>+91 9663460555</p>
                </div>
              </div>
            </div>

            <div className="flex gap-10 items-center">
              <div className="text-gold text-6xl">
                <MdAlternateEmail />
              </div>
              <div className="flex flex-col gap-3">
                <h6 className="text-dark-gray text-2xl uppercase">
                  Email
                </h6>
                <div className="text-light-gray text-sm">
                  <p>sales@muttaikadai.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default ContactPage;
