import { blogs } from "../data/data";
import BlogCard from "./BlogCard";

const LatestBlogsGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </div>
  );
};
export default LatestBlogsGrid;
