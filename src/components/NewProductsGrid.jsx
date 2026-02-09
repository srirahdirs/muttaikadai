"use client";

import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import FlipMove from "react-flip-move";
import NewProductsCard from "./NewProductsCard";

const NewProductsGrid = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([{ id: 0, title: "All", label: "all" }]);
  const [currentTab, setCurrentTab] = useState(categories[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [currentTab]);

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories');
      const data = await response.json();
      if (data.success) {
        const activeCategories = data.data.filter(cat => cat.is_active);
        setCategories([
          { id: 0, title: "All", label: "all" },
          ...activeCategories.map((cat, index) => ({
            id: index + 1,
            title: cat.name,
            label: cat.slug,
            categoryId: cat.id
          }))
        ]);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const url = currentTab.label === 'all' 
        ? '/api/products?limit=12'
        : `/api/products?limit=12&category_id=${currentTab.categoryId}`;
      
      const response = await fetch(url);
      const data = await response.json();
      if (data.success) {
        setProducts(data.data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <header className="mb-11">
        <div className="flex flex-wrap px-4 gap-4 lg:gap-10 items-center justify-center ">
          {categories.map((category) => (
            <div key={category?.id}>
              <button
                onClick={() => setCurrentTab(category)}
                className={twMerge(
                  "uppercase border-b-2 border-transparent  text-base font-bold",
                  currentTab.label === category.label && "text-gold border-gold"
                )}
              >
                {category?.title}
              </button>
            </div>
          ))}
        </div>
      </header>
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p>No products available</p>
        </div>
      ) : (
        <FlipMove className="grid gap-7 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id}>
              <NewProductsCard product={product} />
            </div>
          ))}
        </FlipMove>
      )}
    </div>
  );
};
export default NewProductsGrid;
