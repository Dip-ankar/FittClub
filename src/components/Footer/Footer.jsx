import React from "react";
import { motion } from "framer-motion";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const iconVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 120 },
  }),
};

const Footer = () => {
  return (
    <motion.div
      id="footer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-black text-white pt-10 px-4 md:px-20 mt-10"
    >
      <hr className="border-gray-600 mb-8" />


      <div className="flex flex-col md:flex-row items-center justify-between gap-8">

        <div>
          <img
            src={Logo}
            alt="Logo"
            className="w-24 md:w-32 hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex gap-6">
          {[Github, Instagram, LinkedIn].map((icon, index) => (
            <motion.a
              key={index}
              href={
                index === 0
                  ? "https://github.com/"
                  : index === 1
                  ? "https://instagram.com/"
                  : "https://linkedin.com/"
              }
              target="_blank"
              rel="noopener noreferrer"
              custom={index}
              variants={iconVariant}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.2 }}
              className="transition duration-300"
            >
              <img src={icon} alt={`icon-${index}`} className="w-8 h-8" />
            </motion.a>
          ))}
        </div>

      </div>


      <div className="text-center text-sm mt-6 pb-2 text-orange-500">
        &copy; All rights reserved 2025 | Dipankar Mandal
      </div>
    </motion.div>
  );
};

export default Footer;
