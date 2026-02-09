import { FaSearch } from "react-icons/fa";

const BlogSearchBar = () => {
  return (
    <form className="flex items-center h-[55px] bg-lightblue">
      <input
        className="text-[14px] border  border-pearl h-full w-full pl-6 bg-transparent  outline-0 font-normal transition-all text-dark-gray pr-1"
        placeholder="Search here"
        type="search"
      />
      <button className="text-white text-base h-full basis-[58px] shrink-0 grid place-content-center bg-gold transition-all duration-500 hover:bg-purple ">
        <FaSearch />
      </button>
    </form>
  );
};
export default BlogSearchBar;
