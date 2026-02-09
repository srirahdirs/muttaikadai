import BlogSearchBar from "./BlogSearchBar";
import BlogCategoryList from "./BlogCategoryList";
import BlogLatestUpdates from "./BlogLatestUpdates";
import BlogArchives from "./BlogArchives";
import BlogGallery from "./BlogGallery";

const BlogSidebar = () => {
  return (
    <aside>
      <div className="mb-16">
        <BlogSearchBar />
      </div>
      <div className="mb-8">
        <BlogCategoryList />
      </div>
      <div className="mb-14">
        <BlogLatestUpdates />
      </div>

      <div className="mb-4">
        <BlogArchives />
      </div>

      <div className="mb-4">
        <BlogGallery />
      </div>
    </aside>
  );
};
export default BlogSidebar;
