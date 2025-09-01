import {motion} from "framer-motion";
import {BsGithub, BsLinkedin, BsWhatsapp} from "react-icons/bs";
import {MdEmail, MdLocationOn} from "react-icons/md";
import logo from "src/assets/logo.svg";
import logoWhite from "src/assets/logo-white.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 
                       dark:from-black dark:via-gray-900 dark:to-black 
                       overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          
          {/* Brand Section with Logo */}
          <motion.div 
            className="lg:col-span-2 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={logo}
                alt="Logo"
                className="h-20 w-20 dark:hidden"
                draggable="false"
              />
              <img
                src={logoWhite}
                alt="Logo"
                className="hidden h-20 w-20 dark:flex"
                draggable="false"
              />
              <h3 className="text-3xl font-bold text-white"> Garvit Taneja </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions and 
              delivering exceptional user experiences. Let's build something amazing together.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/taneja-garvit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 
                           hover:from-gray-600 hover:to-gray-700
                           rounded-xl flex items-center justify-center
                           text-white hover:text-gray-200 transition-all duration-300
                           shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <BsGithub className="text-xl" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/garvit-taneja/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 
                           hover:from-blue-500 hover:to-blue-600
                           rounded-xl flex items-center justify-center
                           text-white hover:text-blue-200 transition-all duration-300
                           shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <BsLinkedin className="text-xl" />
              </motion.a>
              
              <motion.a
                href="https://wa.me/8052466655"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 
                           hover:from-green-500 hover:to-green-600
                           rounded-xl flex items-center justify-center
                           text-white hover:text-green-200 transition-all duration-300
                           shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <BsWhatsapp className="text-xl" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Me", href: "#aboutme" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Contact", href: "#contactme" },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300
                               hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <MdEmail className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <p className="text-white font-medium"> taneja.garvit29@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <MdLocationOn className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Location</p>
                  <p className="text-white font-medium">Delhi, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Garvit Taneja. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 