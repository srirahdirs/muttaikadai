"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import ButtonShopNow from "../../../components/ButtonShopNow";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BestSeller from "../_components/BestSeller";
import RelatedProducts from "../_components/RelatedProducts";
import ProductDetails from "../_components/ProductDetails";

const ProductDetailsPage = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const productId = params?.id;

  useEffect(() => {
    if (!productId) return;
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/products/${productId}`);
        const json = await res.json();
        if (json.success) {
          setProduct(json.data);
        } else {
          setError(json.error || "Product not found");
        }
      } catch (err) {
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-purple font-medium">{error || "Product not found"}</p>
        <Link href="/shop-2" className="text-gold hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div>
      <header
        style={{
          background:
            "url('/assets/images/slider/3.jpg')center/cover no-repeat",
        }}
        className="h-[420px] pt-12   relative"
      >
        <Header />
        <Container>
          <h1 className="text-5xl pt-8 md:text-7xl text-purple  text-center font-bold">
            Shop
          </h1>
        </Container>
        <ButtonShopNow className="flex absolute bottom-0 left-1/2 -translate-x-1/2  items-center mx-auto translate-y-[22px]  w-[260px] sm:w-fit pr-3">
          <span className="flex items-center gap-1 ">
            <Link className="hover:underline" href="/">
              Home /
            </Link>
            <Link className="hover:underline" href="/shop-2">
              Shop /
            </Link>
            <span className="font-normal">{product.name}</span>
          </span>
        </ButtonShopNow>
      </header>

      <Container className="max-w-[1220px] pt-[100px] md:pt-[140px] pb-[100px]">
        <div className="flex flex-col lg:flex-row gap-5">
          <section className="flex-1">
            <ProductDetails product={product} />
          </section>
          <aside className="basis-[320px]">
            <BestSeller currentProductId={product.id} />
          </aside>
        </div>

        <div className="mt-14">
          <RelatedProducts
            products={product.related_products || []}
            currentProductId={product.id}
          />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
