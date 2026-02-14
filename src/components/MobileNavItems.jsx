"use client";

import Link from "next/link";

const MobileNavItems = ({ onClose }) => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop-2" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <ul className="flex pl-1 uppercase font-kumbhSans flex-col text-bg-overly gap-2 py-4 w-full font-medium overflow-y-auto text-lg">
      {links.map(({ label, href }) => (
        <li key={href}>
          <Link
            href={href}
            onClick={onClose}
            className="block py-2 hover:text-gold transition-colors"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileNavItems;
