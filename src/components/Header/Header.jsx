import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { Link } from "react-scroll";
import Logo from "../../assets/logo.png";

const Header = () => {
  const headerRef = useRef(null);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuLinks = [
    { name: "Home", link: "home" },
    { name: "Programs", link: "programs" },
    { name: "Why Us", link: "reasons" },
    { name: "Plans", link: "plans" },
    { name: "Testimonials", link: "testimonials" },
  ];

  return (
    <>
      <motion.header
        ref={headerRef}
        className={`fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-sm px-6 md:px-12 py-4 flex justify-between items-center transition-transform duration-500 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <motion.img
          src={Logo}
          alt="Logo"
          className="w-28 md:w-36"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />

        <ul className="hidden md:flex items-center gap-8 text-white font-semibold text-sm lg:text-base">
          {menuLinks.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.2, color: "#f97316" }}
              transition={{ type: "spring", stiffness: 400 }}
              className="cursor-pointer transition-colors duration-300"
            >
              <Link
                to={item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-orange-400"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        <div
          className="md:hidden text-white text-3xl font-bold cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-20 left-0 w-full bg-black/80 backdrop-blur-md flex flex-col items-center gap-6 py-6 z-40 text-white font-semibold"
          >
            {menuLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:text-orange-400 text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
