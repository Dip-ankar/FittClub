import React, { useEffect, useState, useRef } from "react";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  const imageRef = useRef(null);

  useEffect(() => {
    const img = imageRef.current;
    if (!img) return;

    const handleMouseMove = (e) => {
      const { width, height, left, top } = img.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 20;
      const y = ((e.clientY - top) / height - 0.5) * 20;
      gsap.to(img, {
        rotateY: x,
        rotateX: -y,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const reset = () =>
      gsap.to(img, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.5,
        ease: "power2.out",
      });

    img.addEventListener("mousemove", handleMouseMove);
    img.addEventListener("mouseleave", reset);

    return () => {
      img.removeEventListener("mousemove", handleMouseMove);
      img.removeEventListener("mouseleave", reset);
    };
  }, [selected]);

  const handleLeftClick = () => {
    setSelected((prev) => (prev === 0 ? tLength - 1 : prev - 1));
  };

  const handleRightClick = () => {
    setSelected((prev) => (prev === tLength - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      id="testimonials"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
      className="w-full py-16 px-4 md:px-12 flex flex-col lg:flex-row items-center justify-center gap-12"
    >
      <div className="flex-1 ml-9 text-center lg:text-left max-w-xl space-y-4">
        <motion.span
          className="text-orange-500 text-xl font-bold uppercase tracking-wide"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Testimonials
        </motion.span>

        <div className="space-y-1">
          <motion.h2
            className="text-4xl mt-7 stroke-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            What they
          </motion.h2>
          <motion.h2
            className="text-4xl font-extrabold text-white"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            say about us
          </motion.h2>
        </div>

        <motion.p
          key={selected}
          className="text-lg text-gray-400 italic mt-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          "{testimonialsData[selected].review}"
        </motion.p>

        <motion.div
          key={selected + "_name"}
          className="text-sm text-gray-600 pt-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <strong className="text-orange-500">
            {testimonialsData[selected].name}
          </strong>{" "}
          -{" "}
          <span className="text-gray-400">
            {testimonialsData[selected].status}
          </span>
        </motion.div>
      </div>

      <div className="flex-1 relative flex items-center justify-center">
        <div className="absolute w-64 h-64 border-4 border-orange-400 rounded-full animate-ping -z-10"></div>
        <div className="absolute w-72 h-72 bg-orange-100 rounded-full -z-20"></div>

        <img
          ref={imageRef}
          src={testimonialsData[selected].image}
          alt={testimonialsData[selected].name}
          className="w-64 h-64 object-cover rounded-full shadow-2xl transition-transform duration-300"
        />

        <div className="absolute flex gap-6 bottom-[-3.5rem]">
          <img
            onClick={handleLeftClick}
            src={leftArrow}
            alt="left"
            className="w-8 h-8 cursor-pointer hover:scale-125 transition-transform"
          />
          <img
            onClick={handleRightClick}
            src={rightArrow}
            alt="right"
            className="w-8 h-8 cursor-pointer hover:scale-125 transition-transform"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
