import HealthyKitchenProductCard from "../../../components/HealthyKitchenProductCard";
import SidebarHeading from "../../../components/SidebarHeading";
import { tabsProductsData } from "../../../data/data";

const BestSeller = () => {
  return (
    <div>
      <SidebarHeading>Best Seller</SidebarHeading>
      <div className="flex flex-col gap-4">
        {tabsProductsData.slice(0, 3).map((product) => (
          <article key={product.id}>
            <HealthyKitchenProductCard
              className="h-[120px] pb-[19px] shadow-none"
              product={product}
            />
          </article>
        ))}
      </div>
    </div>
  );
};
export default BestSeller;
