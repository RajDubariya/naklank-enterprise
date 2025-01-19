"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 py-12 px-6 md:px-0 max-w-2xl mx-auto"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <motion.h1
        className="text-3xl md:text-5xl lg:text-5xl text-center font-bold text-gray-800"
        variants={itemVariants}
      >
        <span className="inline-block pb-1 border-b-4 border-black">
          Contact Us
        </span>
      </motion.h1>

      <motion.div variants={itemVariants}>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          placeholder="Enter Your Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          placeholder="Enter Your Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Contact Number
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter Your Contact Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          placeholder="Message"
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand"
          rows={4}
        />
      </motion.div>

      <motion.button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 bg-brand text-white font-medium hover:bg-brand/80 transition disabled:opacity-40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </motion.button>

      {status === "success" && (
        <p className="text-gray-700 mt-4 text-center">
          Message sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="text-gray-700 mt-4 text-center">
          Error sending message. Please try again.
        </p>
      )}
    </motion.form>
  );
}
