import Link from "next/link";

const FooterLink = ({ children, href, ...props }) => (
  <Link
    {...props}
    className="text-sm text-dark-gray transition-all duration-500 hover:text-gold"
    href={href}
  >
    {children}
  </Link>
);
export default FooterLink;
