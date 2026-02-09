import Container from "./Container";
import SectionHeading from "./SectionHeading";
import TestimonialsSlider from "./TestimonialsSlider";
const Testimonials = () => {
  return (
    <div>
      <Container>
        <header className="mb-20 pt-[135px] text-center">
          <SectionHeading>
            What Our <span className="text-gold">Customer</span> Saying?
          </SectionHeading>
          <p className="text-sm font-bold max-w-[35rem] mx-auto">
            Read what our satisfied customers have to say about our fresh, premium quality eggs and excellent service.
          </p>
        </header>
        <div>
          <TestimonialsSlider />
        </div>
      </Container>
    </div>
  );
};
export default Testimonials;
