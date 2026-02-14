"use client";

import NewProductsCard from "../../../components/NewProductsCard";

const RelatedProducts = ({ products = [], currentProductId }) => {
  const filtered = products.filter((p) => p.id !== currentProductId);

  if (filtered.length === 0) return null;

  return (
    <section>
      <header className="mb-10">
        <h1 className="text-2xl text-purple font-bold">Related products</h1>
        <span className="inline-block w-20 bg-gold h-[3px]" />
      </header>

      <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((product) => (
          <div key={product.id}>
            <NewProductsCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
