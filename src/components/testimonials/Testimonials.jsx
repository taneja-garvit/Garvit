import SectionTitle from "components/common/SectionTitle";
import TestimonialsBentoGrid from "components/testimonials/TestimonialsBentoGrid";

import {forwardRef} from "react";
import SectionWrapper from "src/hoc/SectionWrapper";

const Testimonials = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative min-h-screen flex flex-col justify-center items-center 
                 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 
                 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900
                 overflow-hidden py-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-rose-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-16">
          <SectionTitle title="Testimonials" />
          
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              How I strive to deliver value
            </p>
          </div>
          
          <TestimonialsBentoGrid />
        </div>
      </div>
    </section>
  );
});

export default SectionWrapper(Testimonials);
