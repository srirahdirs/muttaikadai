import { newProductsData } from "../../../data/data";
import NewProductsCard from "../../../components/NewProductsCard";
const RelatedProducts = () => {
  return (
    <section>
      <header className={"mb-10"}>
        <h1 className="text-2xl text-purple font-bold">Related products</h1>
        <span className="inline-block w-20 bg-gold h-[3px] "></span>
      </header>

      <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {newProductsData.slice(0, 4).map((product) => (
          <div key={product.id}>
            <NewProductsCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default RelatedProducts;
