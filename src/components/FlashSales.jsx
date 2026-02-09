"use client";
import { useEffect, useState } from "react";
import Container from "./Container";
import SalesCountdown from "./SalesCountdown";
import SectionHeading from "./SectionHeading";
import FlashSalesProductCard from "./FlashSalesProductCard";

// slider styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/home1-carousel.css";
import Slider from "react-slick";

const FlashSales = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const response = await fetch('/api/products?limit=8&featured=true');
      const data = await response.json();
      if (data.success) {
        setProducts(data.data);
      }
    } catch (error) {
      console.error('Error fetching featured products:', error);
    } finally {
      setLoading(false);
    }
  };
  // Slider settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,

    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white">
      <Container className="pt-[106px] pb-[125px]">
        <header className="mb-9 text-center">
          <SectionHeading>
            Today <span className="text-gold">Flash</span> Sales
          </SectionHeading>
          <p className="text-sm font-bold max-w-[35rem] mx-auto">
            Don't miss out on today's amazing deals! Get premium eggs at special prices. Limited time offers on our best-selling products.
          </p>
        </header>
        <SalesCountdown endTimeInHour={24} />

        {loading ? (
          <div className="flex items-center justify-center py-12 mt-11">
            <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12 text-gray-500 mt-11">
            <p>No featured products available</p>
          </div>
        ) : (
          <div className="slider-container mt-11">
            <Slider {...settings}>
              {products.map((product) => (
                <FlashSalesProductCard key={product.id} product={product} />
              ))}
            </Slider>
          </div>
        )}
      </Container>
    </section>
  );
};
export default FlashSales;
