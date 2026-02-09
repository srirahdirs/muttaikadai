"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";

// slider styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/home1-carousel.css";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const CategoriesSlider = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories');
      const data = await response.json();
      if (data.success) {
        setCategories(data.data.filter(cat => cat.is_active));
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
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
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (categories.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>No categories available</p>
      </div>
    );
  }

  return (
    <div className="slider-container ">
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.id} className="w-fit h-[290px]">
            <article className="bg-white group relative isolate bg-card bg-no-repeat bg-contain bg-bottom shadow-lg w-full h-[260px] md:h-[255px] rounded-lg pt-[45px] flex justify-center border-4 border-transparent duration-500 hover:border-gold transition-all ">
              <div className="mx-auto w-fit flex flex-col  text-center gap-2">
                <h5 className="text-lg font-bold">{category.name}</h5>
                <p className="text-gray text-sm">
                  {category.quantity || 0} Products
                </p>
              </div>
              <div className="overflow-hidden ">
                <Image
                  src={category.image_url || '/assets/images/category/1.jpg'}
                  width={190}
                  height={125}
                  className="absolute  transition-all h-[125px] object-cover right-1/2 translate-x-1/2 bottom-2  "
                  alt={category.name}
                  onError={(e) => {
                    e.target.src = '/assets/images/category/1.jpg';
                    e.target.onerror = null;
                  }}
                />
              </div>
              <Link
                href={`/shop-2?category=${category.slug}`}
                className="hidden md:flex items-center justify-center flex-shrink-0 absolute opacity-0 group-hover:opacity-100 transition-all bottom-[-22px] right-1/2 translate-x-1/2 w-[45px] h-[45px] rounded-full bg-white gird place-content-center duration-500 translate-y-3 group-hover:translate-y-0 will-change-transform"
              >
                <FaArrowRight className="text-lg text-purple mx-auto" />
              </Link>
            </article>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default CategoriesSlider;
