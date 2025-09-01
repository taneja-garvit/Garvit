import {forwardRef} from "react";
import {motion} from "framer-motion";

import ScrollButton from "src/components/common/ScrollButton";
import ContactForm from "src/components/contactMe/ContactForm";
import SectionWrapper from "src/hoc/SectionWrapper";

import {slideIn, textVariant} from "lib/constants/motion";
import {BsFillTelephoneFill, MdEmail, MdLocationOn} from "src/components/icons";

const ContactMe = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      id="contactme"
      className="relative min-h-screen flex flex-col justify-center items-center 
                 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 
                 dark:from-black dark:via-gray-900 dark:to-black
                 overflow-hidden py-40"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Moving particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <motion.div 
          variants={textVariant(0.1)} 
          initial="hidden" 
          whileInView="show"
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold 
                         bg-gradient-to-r from-white via-purple-300 to-white 
                         bg-clip-text text-transparent mb-6 relative">
            Get In Touch
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-purple-300/20 to-white/20 blur-xl -z-10"></div>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </motion.div>

        <motion.div
          variants={slideIn("up", "spring", 0.2, 0.8)}
          initial="hidden"
          whileInView="show"
          className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {/* Contact Information Card */}
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white/10 dark:bg-black/20 backdrop-blur-xl 
                            border border-white/20 dark:border-gray-700/50 
                            rounded-3xl p-8 h-full">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">Let's Connect</h3>
                <p className="text-gray-300">I'm always excited to hear about new opportunities and collaborations.</p>
              </div>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 dark:bg-black/20 
                             border border-white/10 dark:border-gray-600/30
                             hover:bg-white/10 dark:hover:bg-black/30 transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <BsFillTelephoneFill className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <p className="text-white font-medium">+91 - 9058911880</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 dark:bg-black/20 
                             border border-white/10 dark:border-gray-600/30
                             hover:bg-white/10 dark:hover:bg-black/30 transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <MdEmail className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <p className="text-white font-medium"> taneja.garvit29@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 dark:bg-black/20 
                             border border-white/10 dark:border-gray-600/30
                             hover:bg-white/10 dark:hover:bg-black/30 transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                    <MdLocationOn className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Location</p>
                    <p className="text-white font-medium">Delhi, India</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white/10 dark:bg-black/20 backdrop-blur-xl 
                            border border-white/20 dark:border-gray-700/50 
                            rounded-3xl p-8">
              <ContactForm />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

export default SectionWrapper(ContactMe);
