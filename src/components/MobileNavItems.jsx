import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const MobileNavItems = ({ onClose }) => {
  return (
    <ul className="flex pl-1 uppercase font-kumbhSans flex-col text-bg-overly gap-2 py-4 w-full font-medium overflow-y-auto text-lg">
      <Link className="" href="/">
        Home
      </Link>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Page+</AccordionTrigger>
          <AccordionContent>
            <Link href="/service">Service</Link>
          </AccordionContent>
          <AccordionContent>
            <Link href="/about">About</Link>
          </AccordionContent>
          <AccordionContent>
            <Link href="/members">Members</Link>
          </AccordionContent>
          <AccordionContent>
            <Link href="/shop-2/1">Shop Details</Link>
          </AccordionContent>
          <AccordionContent>
            <Link href="/404">404</Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Shop+</AccordionTrigger>
          <AccordionContent>
            <Link href="/shop-1">Shop One</Link>
          </AccordionContent>
          <AccordionContent>
            <Link href="/shop-2">Shop Two</Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Blog+</AccordionTrigger>
          <AccordionContent>
            <Link href="/blog-1">Blog One</Link>
          </AccordionContent>
          <AccordionContent>
            <Link href="/blog-2">Blog Two</Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Link className="" href="/contact">
        Contact
      </Link>
    </ul>
  );
};
export default MobileNavItems;
