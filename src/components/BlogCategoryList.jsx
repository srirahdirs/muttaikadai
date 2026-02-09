import Link from "next/link";
import BlogSidebarHeading from "./SidebarHeading";
const BlogCategoryList = () => {
  return (
    <div>
      <BlogSidebarHeading>Category List</BlogSidebarHeading>
      <div className="mb-6">
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="/"
              className="flex text-dark-gray justify-between items-center text-lg hover:text-gold transition-all duration-300 border-b border-pearl hover:border-gold pb-3"
            >
              <span>Fresh</span>
              <span>(11)</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex text-dark-gray justify-between items-center text-lg hover:text-gold transition-all duration-300 border-b border-pearl hover:border-gold pb-3"
            >
              <span>Natural</span>
              <span>(8)</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex text-dark-gray justify-between items-center text-lg hover:text-gold transition-all duration-300 border-b border-pearl hover:border-gold pb-3"
            >
              <span>Green</span>
              <span>(18)</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex text-dark-gray justify-between items-center text-lg hover:text-gold transition-all duration-300 border-b border-pearl hover:border-gold pb-3"
            >
              <span>Premium</span>
              <span>(4)</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex text-dark-gray justify-between items-center text-lg hover:text-gold transition-all duration-300 border-b border-pearl hover:border-gold pb-3"
            >
              <span>Health</span>
              <span>(13)</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default BlogCategoryList;
