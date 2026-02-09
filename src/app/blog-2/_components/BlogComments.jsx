import BlogComment from "./BlogComment";

const BlogComments = () => {
  return (
    <section>
      <header className="mb-6">
        <h1 className=" text-2xl text-dark-gray font-bold"> Comments (2)</h1>
        <span className="inline-block w-20 bg-gold h-[3px] "></span>
      </header>

      <div className="flex flex-col gap-5">
        <BlogComment haveReplay={true} />
        <BlogComment />
      </div>
    </section>
  );
};
export default BlogComments;
