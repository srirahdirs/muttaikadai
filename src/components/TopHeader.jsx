import Link from "next/link";
import Container from "./Container";
import { FaInstagram } from "react-icons/fa6";

const INSTAGRAM_URL = "https://www.instagram.com/muttaikadai?igsh=MWJ5MnJjaDVra2RzeQ%3D%3D&utm_source=qr";

const TopHeader = () => {
  return (
    <div className="bg-soft-mint text-sm text-dark-gray hidden lg:block">
      <Container>
        <div className="h-10  flex items-center justify-between">
          <div className="flex items-center gap-[110px]">
            <p>
              Welcome to our Fresh Egg Store {""}
              <span className="font-bold">MuttaiKadai!</span>
            </p>
            <div className="flex items-center  divide-x divide-silver-mist ">



            </div>
          </div>
          <Link
            className="text-base flex items-center gap-2 hover:text-gold duration-500 transition-all"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-lg" />
            <span>Follow us on Instagram</span>
          </Link>
        </div>
      </Container>
    </div>
  );
};
export default TopHeader;
