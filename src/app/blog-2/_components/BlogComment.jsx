import Image from "next/image";
import { FaReply } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

/*
  The `haveReplay` prop is solely for testing purposes. Each comment component accepts a `comment` object, which will include a `replay` property. If the `replay` property contains a list of comments (i.e., an array with a size greater than 0), the `BlogComment` component will render those comments.

  Structure:
  - The component displays a comment along with the commenter's name, date, and content.
  - If replay array size greater than 0 (indicating that there are replies to the comment), additional `BlogComment` components are nested to display those replies.
*/

const BlogComment = ({ haveReplay = false, comment }) => {
  return (
    <div className={twMerge(haveReplay && "border-b border-pearl pb-2")}>
      <article className="flex flex-col md:flex-row gap-5 items-start md:gap-11">
        <div>
          <Image
            width={106}
            height={108}
            className="object-cover size-14 md:size-[106px]"
            alt=""
            src="/assets/images/blog/avatar.png"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-end justify-between">
            <div>
              <h6 className="text-lg font-medium text-gold">Sabel Smith</h6>
              <span className="text-sm text-orange">March 23, 2021 </span>
            </div>
            <button className="group text-sm px-3 gap-1 flex items-center bg-blog-border text-dark-gray rounded-[3px] transition-all duration-300 font-medium  hover:text-gold hover:bg-black">
              Reply
              <FaReply className="group-hover:text-white transition-all duration-300" />
            </button>
          </div>
          <div className="mt-5">
            <p className="text-dark-gray line-clamp-2 text-sm">
              technology strategy and the roadmap to implement that? The leaders
              are owning their own data, refreshing it constantly and, more
              importantly, using it to inform the business decisions.
            </p>
          </div>
        </div>
      </article>
      <div className="ml-10 md:ml-28">
        {haveReplay && (
          <div className="ml-2 mt-12">
            <BlogComment />
          </div>
        )}
      </div>
    </div>
  );
};
export default BlogComment;
