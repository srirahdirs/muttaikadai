import { blogs } from "../../data/data";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../../components/Pagination";

const BlogPageOne = () => {
  return (
    <div>
      <div className="flex gap-12 flex-col">
        {blogs.map((blog, index) => (
          <article
            key={index}
            className="group gap-7 flex-col md:flex-row  flex items-start   transition-all"
          >
            <div className="relative rounded-[10px] mb-6 overflow-hidden h-[400px] md:h-[315px] w-full">
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
              <h4 className="text-2xl font-bold leading-snug line-clamp-2 text-dark-gray mb-5">
                {blog.title}
              </h4>
              <p className="text-sm md:max-w-[350px] text-dark-gray line-clamp-5">
                {blog.desc}
              </p>
              <Link
                className="mt-4 text-base font-semibold text-dark-green underline"
                href={blog.link}
              >
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-14 mb-16 ">
        <Pagination className="justify-start" />
      </div>
    </div>
  );
};
export default BlogPageOne;
