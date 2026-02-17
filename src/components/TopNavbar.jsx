"use client";
import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import MobileNavbar from "./MobileNavbar";
import CategoriesDropDown from "./CategoriesDropDown";
import SearchBar from "./SearchBar";
import MobileNavItems from "./MobileNavItems";
import { useState } from "react";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import MyCart from "./MyCart";
import { useWishlist } from "../context/WishlistContext";

const TopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const close = () => setIsMenuOpen(false);
  const toggle = () => setIsMenuOpen(!isMenuOpen);
  const { getWishlistCount } = useWishlist();
  const wishlistCount = getWishlistCount();

  return (
    <div className="py-3 sm:py-5">
      <Container>
        <div className="flex items-center ">
          <Link href="/">
            <Image
              className="w-12 md:w-16  lg:w-20 xl:lg:w-[100px]"
              width={100}
              height={100}
              src="/logo.png"
              alt="logo"
            />

          </Link>
          <span className="text-2xl font-bold">MuttaiKadai</span>
          <div className="flex-1 hidden lg:block  ml-16 mr-[70px]">
            <SearchBar />
          </div>

          <div className="ml-auto flex items-center gap-9 text-dark-gray">
            <div className="flex text-dark-gray items-center gap-6 sm:gap-8">
              <Link
                data-tooltip-id="header-tooltip"
                data-tooltip-content="Wishlist"
                className="relative isolate"
                href="/wishlist"
              >
                {wishlistCount > 0 && (
                  <span className="absolute -top-[6px] -right-2 size-4 rounded-full bg-gold text-white text-[10px] grid place-content-center">
                    {wishlistCount}
                  </span>
                )}
                <IoMdHeartEmpty className="text-lg" />
              </Link>

              <MyCart />

              <Tooltip
                style={{
                  backgroundColor: "#5C5D5F",
                  color: "#fff",
                  padding: "0",
                  paddingInline: "8px",
                  paddingBlock: "2px",
                  borderRadius: "16px",
                  fontSize: "10px",
                }}
                id="header-tooltip"
                place="top"
                effect="solid"
              />
            </div>
            <Link
              href="/contact"
              className="hidden sm:flex items-center gap-2 text-dark-gray hover:text-gold transition-colors"
            >
              <span>Contact</span>
            </Link>

            <div>
              <button
                onClick={toggle}
                className="text-2xl block lg:hidden text-dark-gray"
              >
                <FiMenu />
              </button>
              {isMenuOpen && (
                <MobileNavbar close={close}>
                  <div className="flex gap-8 flex-col text-lg">
                    <SearchBar showCategory={false} onClose={close} />
                    <Link href="/contact" onClick={close} className="text-dark-gray hover:text-gold">
                      Contact
                    </Link>
                    <CategoriesDropDown onClose={close} />
                  </div>
                  <MobileNavItems onClose={close} />
                </MobileNavbar>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default TopNavbar;
