import React from "react";
import whiteTick from "../../assets/whiteTick.png";
import { plansData } from "../../data/plansData";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeIn = {
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

const cardVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Plans = () => {
  return (
    <motion.div
      id="plans"
      className="w-full px-4 py-16 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="text-center space-y-2 mb-12"
        variants={fadeIn}
        custom={1}
      >
        <motion.span
          variants={fadeIn}
          custom={2}
          className="block text-2xl md:text-4xl stroke-text "
        >
          READY TO START
        </motion.span>
        <motion.span
          variants={fadeIn}
          custom={3}
          className="block text-3xl mt-5 mb-5 md:text-5xl font-extrabold"
        >
          YOUR JOURNEY
        </motion.span>
        <motion.span
          variants={fadeIn}
          custom={4}
          className="block text-2xl md:text-4xl stroke-text"
        >
          NOW WITH US
        </motion.span>
      </motion.div>

      <div className="grid ml-7 mr-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plansData.map((plan, i) => (
          <motion.div
            key={i}
            variants={cardVariant}
            custom={i + 1}
            className={`rounded-2xl p-6 flex flex-col items-center text-center transition-transform duration-300 
      ${
        i === 1
          ? "bg-gradient-to-br from-purple-800 via-indigo-900 to-black"
          : "bg-gray-900"
      }
    `}
            whileHover={
              i === 1
                ? {
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(255,165,0,0.6)", // orange glow effect
                  }
                : { scale: 1.03, boxShadow: "0 0 25px rgba(255,165,0,0.6)" }
            }
            transition={{ type: "spring", stiffness: 120 }}
          >
            <div className="text-4xl mb-4">{plan.icon}</div>

            <motion.span
              className="text-xl font-semibold mb-1 text-orange-500"
              variants={fadeIn}
              custom={i + 2}
            >
              {plan.name}
            </motion.span>

            <motion.span
              className="text-3xl font-bold mb-4"
              variants={fadeIn}
              custom={i + 3}
            >
              ${plan.price}
            </motion.span>


            <div className="space-y-3 mb-6 w-full pl-25">
              {plan.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-left"
                  variants={fadeIn}
                  custom={index + 1}
                >
                  <img src={whiteTick} alt="check" className="w-5 h-5" />
                  <span className="text-sm text-gray-300 ">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.span
              whileHover={{ scale: 1.1 }}
              className="text-orange-400 font-medium inline-flex items-center gap-2 cursor-pointer hover:underline"
            >
              Join Now <FaArrowRight />
            </motion.span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Plans;
