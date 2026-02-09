import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <Link
      href={blog.link}
      className="group pb-12 border-b-2  border-blog-border hover:border-gold transition-all"
    >
      <div className="relative rounded mb-6 overflow-hidden h-[400px] md:h-[315px] w-full">
        <Image
          fill
          src={blog?.imageUrl}
          className="object-cover duration-500 group-hover:brightness-105 transition-all group-hover:scale-105  "
          alt={blog.title}
        />
      </div>
      <div>
        <div className="flex mb-4 text-sm font-medium text-light-green items-center gap-6">
          <span>{blog.date}</span>
          <span>{blog.views} views</span>
        </div>
        <h4 className="text-2xl font-bold leading-snug line-clamp-2 text-dark-gray">
          {blog.title}
        </h4>
      </div>
    </Link>
  );
};
export default BlogCard;
