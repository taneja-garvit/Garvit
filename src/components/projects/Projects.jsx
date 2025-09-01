import {forwardRef} from "react";

import CardSlider from "src/components/projects/CardSlider";
import SectionTitle from "src/components/common/SectionTitle";

import SectionWrapper from "src/hoc/SectionWrapper";

const Projects = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      id="projects"
      className="flex flex-col gap-16 justify-center lg:justify-center items-center
                min-h-screen relative overflow-hidden
                bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 
                dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Background decorative elements */}
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div> */}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <SectionTitle title="Projects" />
        
        <div className="mt-8 text-center mb-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore my latest projects showcasing modern web technologies, 
            innovative solutions, and creative problem-solving approaches.
          </p>
        </div>
        
        <div className="h-full md:w-full w-[90%] flex items-center justify-center md:max-h-screen">
          <CardSlider />
        </div>
      </div>
    </section>
  );
});

export default SectionWrapper(Projects);
