import {forwardRef} from "react";
import {motion} from "framer-motion";

import ContactForm from "src/components/contactMe/ContactForm";
import SectionWrapper from "src/hoc/SectionWrapper";
import SectionTitle from "src/components/common/SectionTitle";

import {slideIn} from "lib/constants/motion";
import {BsFillTelephoneFill, MdEmail, MdLocationOn} from "src/components/icons";
import {AiFillCalendar} from "react-icons/ai";

const ContactMe = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      id="contactme"
      className="relative flex flex-col justify-center items-center py-12 px-6"
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-12">
          {/* Title */}
          <div className="text-center">
            <SectionTitle title="Get In Touch" />
            <p className="font-jetbrains text-text-muted text-sm mt-4">
              <span className="text-accent">{">"}</span>{" "}
              Open to backend engineering roles, consulting, and technical collaborations.
            </p>
          </div>

          <motion.div
            variants={slideIn("up", "spring", 0.2, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            className="grid lg:grid-cols-2 gap-6 w-full"
          >
            {/* Contact Information */}
            <div className="bg-bg-surface border border-border rounded-sm p-8 flex flex-col gap-6">
              <div>
                <h3 className="font-jetbrains font-bold text-text-primary text-lg border-b border-border pb-3">
                  <span className="text-accent mr-2">//</span> Let's Connect
                </h3>
                <p className="font-jetbrains text-text-muted text-sm mt-3">
                  Always happy to hear about new opportunities and collaborations.
                </p>
              </div>

              <div className="space-y-4">
                {/* Phone */}
                {/* <div className="flex items-center gap-3 p-3 border border-border rounded-sm hover:border-accent transition-colors duration-150 group">
                  <BsFillTelephoneFill className="text-accent text-sm flex-shrink-0" />
                  <div>
                    <p className="font-jetbrains text-text-muted text-xs">phone</p>
                    <p className="font-jetbrains text-text-primary text-sm">+91 - 9058911880</p>
                  </div>
                </div> */}

                {/* Email */}
                <div className="flex items-center gap-3 p-3 border border-border rounded-sm hover:border-accent transition-colors duration-150 group">
                  <MdEmail className="text-accent text-base flex-shrink-0" />
                  <div>
                    <p className="font-jetbrains text-text-muted text-xs">email</p>
                    <p className="font-jetbrains text-text-primary text-sm">taneja.garvit29@gmail.com</p>
                  </div>
                </div>

                {/* Location */}
                {/* <div className="flex items-center gap-3 p-3 border border-border rounded-sm hover:border-accent transition-colors duration-150 group">
                  <MdLocationOn className="text-accent text-base flex-shrink-0" />
                  <div>
                    <p className="font-jetbrains text-text-muted text-xs">location</p>
                    <p className="font-jetbrains text-text-primary text-sm">Delhi, India</p>
                  </div>
                </div> */}

                {/* Booking */}
                <a
                  href="https://cal.com/garvit-taneja/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 border border-border rounded-sm hover:border-accent transition-colors duration-150 group cursor-pointer"
                >
                  <AiFillCalendar className="text-accent text-base flex-shrink-0" />
                  <div>
                    <p className="font-jetbrains text-text-muted text-xs">Schedule</p>
                    <p className="font-jetbrains text-text-primary text-sm group-hover:text-accent transition-colors duration-150">book a meeting</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-bg-surface border border-border rounded-sm p-8">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default SectionWrapper(ContactMe);
