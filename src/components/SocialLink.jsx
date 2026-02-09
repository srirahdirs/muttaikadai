import Link from "next/link";

const SocialLink = ({ children, href, Icon, ...props }) => (
  <Link
    className="relative group isolate"
    target="_blank"
    {...props}
    href={href}
  >
    {children}
    <div className="absolute inset-0 bg-gold bg-opacity-70 opacity-0  grid place-items-center group-hover:opacity-100 transition-all text-white text-2xl duration-500">
      <Icon className="translate-y-8 opacity-0  transition-all group-hover:translate-y-0 group-hover:opacity-100 duration-500" />
    </div>
  </Link>
);
export default SocialLink;
