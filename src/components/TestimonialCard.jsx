"use client";
import Image from "next/image";
import Rating from "./Rating";

const TestimonialCard = ({ testimonial }) => {
  return (
    <article className="shadow-md  my-4 text-center md:text-start rounded-lg pt-10 pr-[43px] pb-5 pl-[38px] bg-white w-full min-h-[265px] ">
      <div className="mb-4 flex-col md:flex-row flex items-center gap-8">
        <div>
          <Image
            src={testimonial?.image}
            className="rounded-full"
            width={90}
            height={90}
            alt="profile"
          />
        </div>
        <div>
          <h6 className="text-2xl font-bold text-dark-gray">
            {testimonial.name}
          </h6>
          <p className="text-search">{testimonial.role}</p>
          <div className="mx-auto md:mx-0 w-fit">
            <Rating value={testimonial?.rating} />
          </div>
        </div>
      </div>
      <p>{testimonial.quote}</p>
    </article>
  );
};
export default TestimonialCard;
