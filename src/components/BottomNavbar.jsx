import Link from "next/link";
import Container from "./Container";
import CategoriesDropDown from "./CategoriesDropDown";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

// Navigation Links
export const LINKS = [
  { label: "Home+", href: "/", id: 1 },
  { label: "Shop+", href: "/", id: 3 },
  { label: "Blog", href: "/", id: 4 },
  { label: "Contact", href: "/", id: 5 },
];

const BottomNavbar = () => {
  return (
    <div className="border-y border-silver-mist text-dark-gray hidden lg:block mb-5">
      <Container className="flex items-center text-sm gap-[10px]">
        <div className="flex items-center gap-8">
          <CategoriesDropDown />

          <div className="flex  text-dark-gray font-medium  items-center gap-8 ">
            <Link className="hover:text-gold transition-all" href="/">
              Home
            </Link>
            <Link className="hover:text-gold transition-all" href="/about">
              About
            </Link>
            <Link className="hover:text-gold transition-all" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BottomNavbar;


export const BlogDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hover:text-gold font-medium text-dark-gray transition-all focus-visible:outline-none">
        Blog+
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href="/blog-1">Blog One</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/blog-2">Blog Two</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const ShopDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hover:text-gold font-medium text-dark-gray transition-all focus-visible:outline-none">
        Shop+
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href="/shop-2">Shop</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/shop-2/1">Shop Details</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const PagesDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hover:text-gold font-medium text-dark-gray transition-all focus-visible:outline-none">
        Pages+
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href="/service">Service</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/about">About</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/members">Members</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/shop-2/1">Shop Details</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/404">404</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
