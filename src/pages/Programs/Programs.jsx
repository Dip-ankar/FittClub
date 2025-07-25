import React from "react";
import { programsData } from "../../data/programsData";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Programs = () => {
  return (
    <motion.div
      id="programs"
      className="w-full px-4 py-16 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="text-center text-3xl md:text-5xl font-bold mb-12 flex flex-wrap justify-center gap-2">
        {["Explore our", "Programs", "to shape you"].map((text, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={textVariants}
            className={`${
              i % 2 === 0 ? "text-transparent stroke-text pr-8 pl-8" : ""
            }`}
          >
            {text}
          </motion.span>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mt-5 gap-6 max-w-6xl mx-auto">
        {programsData.map((program, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl flex flex-col items-start justify-between shadow-md hover:shadow-orange-300 transition-shadow duration-300"
            custom={index + 1}
            variants={textVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255,165,0,0.4)",
            }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <motion.div
              className="flex items-center gap-4 mb-4"
              whileHover={{ rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl">{program.image}</div>
              <span className="text-xl text-orange-400 font-semibold">
                {program.heading}
              </span>
            </motion.div>

            <motion.p
              className="text-sm text-gray-400 flex-grow"
              variants={textVariants}
            >
              {program.details}
            </motion.p>

            <motion.div className="mt-6" whileHover={{ x: 5 }}>
              <span className="text-orange-500 flex items-center gap-2 cursor-pointer hover:underline">
                Join Now <FaArrowRight />
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Programs;
