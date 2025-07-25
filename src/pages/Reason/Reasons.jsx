import React from "react";
import nike from "../../assets/nike.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import tick from "../../assets/tick.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import { motion } from "framer-motion";

const imageVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.8, rotate: -5 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const contentVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Reasons = () => {
  return (
    <motion.div
      className="Reasons text-white py-16 px-6 md:px-16 lg:px-24 xl:px-32"
      id="reasons"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col lg:flex-row justify-between gap-12 items-center">
        <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">
          {[image1, image2, image3, image4].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`reason-img-${i}`}
              className="rounded-2xl shadow-xl object-cover w-full h-40 sm:h-48 md:h-56 lg:h-60 hover:scale-105 transition-transform duration-300"
              variants={imageVariant}
              custom={i + 1}
              whileHover={{
                rotate: [0, 1, -1, 0],
                scale: 1.05,
              }}
            />
          ))}
        </div>
        <div className="space-y-9 ml-20 w-full lg:w-1/2">
          <motion.span
            variants={contentVariant}
            custom={1}
            className="uppercase text-orange-500 tracking-widest text-sm sm:text-base"
          >
            some reasons
          </motion.span>

          <motion.div
            variants={contentVariant}
            custom={2}
            className="text-3xl sm:text-4xl font-bold"
          >
            <span className="stroke-text text-white">why </span>
            <span className="text-orange-400 p-3">choose us?</span>
          </motion.div>

          <div className="space-y-6">
            {[
              "OVER 140+ EXPERT COACHS",
              "TRAIN SMARTER AND FASTER THAN BEFORE",
              "1 FREE PROGRAM FOR NEW MEMBER",
              "RELIABLE PARTNERS",
            ].map((text, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3"
                variants={contentVariant}
                custom={3 + i}
              >
                <img src={tick} alt="tick" className="w-5 h-5" />
                <span className="text-sm sm:text-base">{text}</span>
              </motion.div>
            ))}
          </div>

          <motion.span
            variants={contentVariant}
            custom={8}
            className="uppercase text-orange-500 text-xs sm:text-sm"
          >
            our partners
          </motion.span>

          <motion.div
            variants={contentVariant}
            custom={9}
            className="flex gap-6 items-center"
          >
            {[nb, adidas, nike].map((logo, i) => (
              <motion.img
                key={i}
                src={logo}
                alt={`partner-${i}`}
                className="w-10 h-auto grayscale hover:grayscale-0 transition duration-300"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, 1, -1, 0],
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Reasons;
