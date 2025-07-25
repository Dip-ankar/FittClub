import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Join = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Submitted Data:", formData);
      toast.success("Thanks for joining!");
      setFormData({ name: "", email: "", password: "" });
    } else {
      toast.error("Please fix the errors in the form.");
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <motion.div
      className="w-full mt-2 flex flex-col md:flex-row justify-between items-center px-6 py-12 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white"
      id="join"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        pauseOnHover
        theme="dark"
      />

      <motion.div className="mb-10 md:mb-0 md:w-1/2 space-y-4">
        <hr className="border-orange-500 w-76" />
        <div className="text-4xl font-bold">
          <span className="stroke-text">READY TO</span> <span>LEVEL UP</span>
        </div>
        <div className="text-4xl font-bold">
          <span className="stroke-text">YOUR BODY</span> <span>WITH US?</span>
        </div>
      </motion.div>

      <motion.form
        className="flex flex-col bg-gray-600 text-gray-200 p-6 mr-8 rounded-xl shadow-xl md:w-1/2 w-full max-w-md"
        onSubmit={handleSubmit}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 rounded px-4 py-2 mb-2 focus:outline-none focus:border-orange-500"
        />
        {errors.name && (
          <span className="text-red-500 text-sm mb-2">{errors.name}</span>
        )}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded px-4 py-2 mb-2 focus:outline-none focus:border-orange-500"
        />
        {errors.email && (
          <span className="text-red-500 text-sm mb-2">{errors.email}</span>
        )}

        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
          className="border border-gray-300 rounded px-4 py-2 mb-2 focus:outline-none focus:border-orange-500"
        />
        {errors.password && (
          <span className="text-red-500 text-sm mb-4">{errors.password}</span>
        )}

        <motion.button
          type="submit"
          className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-bold py-2 px-4 rounded hover:shadow-md transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Join Now
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Join;
