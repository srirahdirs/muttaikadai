"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import FooterLink from "./FooterLink";
import FooterListHeading from "./FooterListHeading";

const INSTAGRAM_URL = "https://www.instagram.com/muttaikadai?igsh=MWJ5MnJjaDVra2RzeQ%3D%3D&utm_source=qr";
const GOOGLE_MAPS_URL = "https://www.google.com/maps?q=10.878676414489746,77.15547180175781&z=17&hl=en";

const FooterContent = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        if (data.success && data.data?.length) {
          setCategories(data.data.filter((c) => c.is_active));
        }
      } catch (e) {
        console.error("Footer categories:", e);
      }
    };
    fetchCategories();
  }, []);

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
          <Link
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline mt-1"
          >
            View on Google Maps
          </Link>
          <div className="flex items-center gap-3">
            <MdOutlineEmail className="text-gold text-xl" />
            <p>nkarthikeyan@live.com</p>
          </div>
          <div className="flex items-center gap-3">
            <FaMobileAlt className="text-gold text-xl" />
            <p>+91 9663460555</p>
          </div>
        </div>
      </div>
      <div>
        <FooterListHeading>Quick links</FooterListHeading>
        <div className="flex flex-col gap-1">
          <FooterLink href="/shop-2">Products</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          <FooterLink href="/checkout">Checkout</FooterLink>
          <FooterLink href="/wishlist">Wishlist</FooterLink>
          <FooterLink href="/about">About us</FooterLink>
        </div>
      </div>
      {categories.length > 0 && (
        <div>
          <FooterListHeading>Categories</FooterListHeading>
          <div className="flex flex-col gap-1">
            {categories.map((cat) => (
              <FooterLink
                key={cat.id}
                href={`/shop-2?category=${encodeURIComponent(cat.slug || "")}`}
              >
                {cat.name}
              </FooterLink>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default FooterContent;
