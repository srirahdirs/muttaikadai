import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import FooterLink from "./FooterLink";
import FooterListHeading from "./FooterListHeading";

const INSTAGRAM_URL = "https://www.instagram.com/muttaikadai?igsh=MWJ5MnJjaDVra2RzeQ%3D%3D&utm_source=qr";

const FooterContent = () => {
  return (
    <section className="mb-20 flex-col md:flex-row text-sm text-footer-text gap-10 flex justify-start items-start flex-wrap md:justify-between ">
      <div>
        <FooterListHeading>Follow us</FooterListHeading>
        <Link
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gold duration-500 transition-all"
        >
          <FaInstagram className="text-gold text-xl" />
          <span>Follow us on Instagram</span>
        </Link>
      </div>
      <div>
        <FooterListHeading>Contact us</FooterListHeading>
        <div className="flex flex-col gap-1">
          <p>
            Karthikeyan N<br />
            Poo thottam (near BSNL tower)<br />
            Vadavalli, V.N Palayam (post)<br />
            Sulur (taluk) Coimbatore-641669.
          </p>
          <div className="flex items-center gap-3">
            <MdOutlineEmail className="text-gold text-xl" />
            <p>sales@muttaikadai.com</p>
          </div>
          <div className="flex items-center gap-3">
            <FaMobileAlt className="text-gold text-xl" />
            <p>+91 9663460555</p>
          </div>
        </div>
      </div>
      <div>
        <FooterListHeading>INFORMATION</FooterListHeading>
        <div className="flex flex-col gap-1">
          <FooterLink href="/about">About us</FooterLink>
          <FooterLink href="/blog-1">Blog</FooterLink>
          <FooterLink href="/checkout">Check out</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          <FooterLink href="/service">Service</FooterLink>
        </div>
      </div>
      <div>
        <FooterListHeading>MY ACCOUNT</FooterListHeading>
        <div className="flex flex-col gap-1">
          <FooterLink href="/">My Account</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          <FooterLink href="/">Shopping cart</FooterLink>
          <FooterLink href="/shop-1">Shop</FooterLink>
        </div>
      </div>
      <div>
        <FooterListHeading>CATEGORIES</FooterListHeading>
        <div className="flex flex-col gap-1">
          <FooterLink href="/">Country Eggs</FooterLink>
          <FooterLink href="/">Free Range Eggs</FooterLink>
          <FooterLink href="/">Organic Eggs</FooterLink>
          <FooterLink href="/">Premium Eggs</FooterLink>
          <FooterLink href="/">Exotic Eggs</FooterLink>
        </div>
      </div>
    </section>
  );
};
export default FooterContent;
