import Container from "./Container";
import SectionHeading from "./SectionHeading";
import NewProductsGrid from "./NewProductsGrid";
import { twMerge } from "tailwind-merge";

const NewProducts = ({ className }) => {
  return (
    <div className={twMerge("pt-20", className)}>
      <Container>
        <header className="mb-8  text-center">
          <SectionHeading>
            New <span className="text-gold">Products</span>
          </SectionHeading>
          <p className="text-sm font-bold max-w-[35rem] mx-auto">
            Explore our latest additions! Fresh stock of premium eggs delivered daily. Browse through our newest products and find your favorites.
          </p>
        </header>
        <div>
          <NewProductsGrid />
        </div>
      </Container>
    </div>
  );
};
export default NewProducts;
