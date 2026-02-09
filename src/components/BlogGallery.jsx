import BlogSidebarHeading from "./SidebarHeading";
import Image from "next/image";

const BlogGallery = () => {
  return (
    <div>
      <BlogSidebarHeading className="mb-5">Gallery</BlogSidebarHeading>
      <div className="flex flex-wrap lg:flex-col gap-5">
        <div className="flex gap-7">
          <Image
            alt="gallery image"
            width={95}
            height={80}
            className="object-cover"
            src="/assets/images/blog/g1.png"
          />
          <Image
            alt="gallery image"
            width={95}
            height={80}
            src="/assets/images/blog/g2.png"
            className="object-cover"
          />
          <Image
            alt="gallery image"
            width={95}
            height={80}
            src="/assets/images/blog/g3.png"
            className="object-cover"
          />
        </div>
        <div className="flex gap-7">
          <Image
            alt="gallery image"
            width={95}
            height={80}
            src="/assets/images/blog/g4.png"
            className="object-cover"
          />
          <Image
            alt="gallery image"
            width={95}
            height={80}
            src="/assets/images/blog/g1.png"
            className="object-cover"
          />
          <Image
            alt="gallery image"
            width={95}
            height={80}
            src="/assets/images/blog/g2.png"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default BlogGallery;
