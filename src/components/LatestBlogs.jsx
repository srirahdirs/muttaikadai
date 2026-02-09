import Container from "./Container";
import SectionHeading from "./SectionHeading";
import LatestBlogsGrid from "./LatestBlogsGrid";

const LatestBlogs = () => {
  return (
    <div>
      <Container className="pt-[115px] pb-[180px]">
        <header className="mb-[60px]  text-center">
          <SectionHeading>
            Latest <span className="text-gold">News From</span> Blog
          </SectionHeading>
          <p className="text-sm font-bold max-w-[35rem] mx-auto">
            Aliquam pretium tellus vel sem condimentum faucibus. Curabitur
            egestas pellentesque felis ut vehicula. Cras faucibus purus sed
            risus
          </p>
        </header>
        <div>
          <LatestBlogsGrid />
        </div>
      </Container>
    </div>
  );
};
export default LatestBlogs;
