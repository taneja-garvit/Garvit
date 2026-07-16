import SectionTitle from "components/common/SectionTitle";
import TestimonialsBentoGrid from "components/testimonials/TestimonialsBentoGrid";
import {forwardRef} from "react";
import SectionWrapper from "src/hoc/SectionWrapper";

const Testimonials = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative flex flex-col justify-center items-center py-12 px-6"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-12">
          <SectionTitle title="Testimonials" />
          <TestimonialsBentoGrid />
        </div>
      </div>
    </section>
  );
});

export default SectionWrapper(Testimonials);
