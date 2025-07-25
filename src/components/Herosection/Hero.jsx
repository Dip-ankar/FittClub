import React, { useEffect, useState } from "react";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import { motion } from "framer-motion";
import Header from "../Header/Header";

const Hero = () => {
  const [hideHeader, setHideHeader] = useState(false);
  let prevScroll = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setHideHeader(currentScroll > prevScroll && currentScroll > 100);
      prevScroll = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden" id="home">
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${
          hideHeader ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <Header />
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-32 md:pt-40 gap-12">
        <div className="flex-1 space-y-6">
          <motion.div className="relative rounded-full ml-8 px-6 py-3 font-semibold text-sm md:text-base bg-gray-800 inline-block overflow-hidden w-64 h-10">
            <motion.span
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              className="absolute whitespace-nowrap"
            >
              <motion.span
                animate={{
                  color: [
                    "#f97316",
                    "#22c55e",
                    "#3b82f6",
                    "#eab308",
                    "#f97316",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="text-base font-bold"
              >
                Join the best program ever!
              </motion.span>
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-4xl ml-15 md:text-5xl lg:text-6xl font-bold space-y-5"
          >
            <div>
              <span className="stroke-text">Shape Your</span>
            </div>
            <div className="text-white">Ideal Body</div>
            <p className="text-gray-400 text-base md:text-lg max-w-md">
              We’ll help you shape your ideal body and live life to the fullest.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="flex gap-8 ml-15 mt-7 font-semibold text-sm"
          >
            <div>
              <span className="text-3xl text-orange-500">+140</span>
              <p>Expert Coaches</p>
            </div>
            <div>
              <span className="text-3xl text-orange-500">+978</span>
              <p>Members Joined</p>
            </div>
            <div>
              <span className="text-3xl text-orange-500">+50</span>
              <p>Fitness Programs</p>
            </div>
          </motion.div>

          <div className="flex ml-15 mt-15 gap-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-100 transition"
            >
              Learn More
            </motion.button>
          </div>
        </div>

        <div className="flex-1 relative flex items-center justify-center">
          <motion.img
            src={hero_image}
            alt="hero"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            whileHover={{
              scale: 1.05,
              rotateY: 10,
              rotateX: 5,
              transition: { duration: 0.5 },
            }}
            className=" .hero-image z-10 absolute right-4 h-150  sm:w-72 md:w-96 lg:w-[32rem] xl:w-[36rem]"
            style={{ transformStyle: "preserve-3d" }}
          />
          <motion.img
            src={hero_image_back}
            alt="hero-back"
            className=".hero-image-back absolute right-100 -z-20 w-60 md:w-72 opacity-80"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
