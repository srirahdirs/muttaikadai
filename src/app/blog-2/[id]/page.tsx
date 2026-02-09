import Image from "next/image";
import BlogTags from "../_components/BlogTags";
import BlogComments from "../_components/BlogComments";
import CommentForm from "../_components/CommentForm";
const BlogDetails = () => {
  return (
    <section>
      <article>
        <header className="mb-7">
          <div className="relative min-h-[380px] mb-9">
            <Image
              src="/assets/images/blog/blog-cover.png"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="blog title"
              className="object-cover rounded-sm"
            />
          </div>
          <div className="text-sm font-medium flex items-center gap-2 text-green mb-3">
            <span>January 04, 2024,</span>
            <span>5 views</span>
          </div>
          <h2 className="font-bold text-2xl text-dark-gray">
            Keep Your Fruits frash
          </h2>
        </header>
        <div className="text-base lg:text-sm text-dark-gray">
          <div className="flex flex-col gap-4">
            <p>
              Authoritatively fabricate multidisciplinary resources with
              mission-critical schemas. Energistically productize ubiquitous
              value for excellent supply chains. Progressively expedite
              enterprise-wide networks rather than end-to-end relationships
            </p>

            <strong>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Cras mattis consectetur purus sit amet fermentum. Vestibulum
              id ligula porta felis euismod semper.
            </strong>

            <p>
              Maecenas faucibus mollis interdum. Nullam quis risus eget urna
              mollis ornare vel eu leo. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              commodo cursus magna, vel scelerisque nisl consectetur et. Fusce
              dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
              ut fermentum massa justo sit amet risus. Integer posuere erat a
              ante venenatis dapibus posuere velit aliquet. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et.
            </p>
          </div>
          <div className="my-10 flex-wrap flex flex-col lg:flex-row gap-7">
            <Image
              className="basis-[445px] mx-auto flex-shrink h-[468px] object-contain "
              src="/assets/images/blog/blog-details.png"
              height={468}
              width={445}
              alt=""
            />

            <div className="flex-1 min-w-[250px]  flex flex-col gap-7">
              <p>
                Maecenas faucibus mollis interdum. Nullam quis risus eget urna
                mollis ornare vel eu leo. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum
                nibh, ut fermentum massa justo sit amet risus. Integer posuere
                erat a ante venenatis dapibus posuere velit{" "}
              </p>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              commodo cursus magna, vel scelerisque nisl consectetur et. Fusce
              dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
              ut fermentum massa justo sit amet risus.
            </p>
          </div>
        </div>
      </article>

      <BlogTags />

      <div className="mt-14 mb-6">
        <BlogComments />
      </div>
      <CommentForm />
    </section>
  );
};
export default BlogDetails;
