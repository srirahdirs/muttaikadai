import Filters from "./Filters";
import Categories from "./Categories";

const ShopSidebar = () => {
  return (
    <aside>
      <div className="mb-12">
        <Filters />
      </div>
      <div className="mb-12">
        <Categories />
      </div>
    </aside>
  );
};
export default ShopSidebar;
