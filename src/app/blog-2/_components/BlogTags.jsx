import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

const INSTAGRAM_URL = "https://www.instagram.com/muttaikadai?igsh=MWJ5MnJjaDVra2RzeQ%3D%3D&utm_source=qr";

const BlogTags = () => {
  return (
    <div className="flex flex-col sm:flex-row text-sm text-dark-gray mt-11 justify-between items-center py-2 border-y gap-2  border-pearl">
      <div className="flex items-center gap-1">
        <p className="font-bold">Tags:</p>
        <span>Smoothie, Been, Cheese </span>
      </div>
      <div className="flex items-center gap-1">
        <Link
          className="text-sm flex items-center gap-2 hover:text-gold duration-500 transition-all"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-lg" />
          <span>Follow us on Instagram</span>
        </Link>
      </div>
    </div>
  );
};
export default BlogTags;
