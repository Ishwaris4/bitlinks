"use client";
import { FaBolt, FaLock, FaLink } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  // for the how it works
  const stepsContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const stepCard = {
    hidden: {
      opacity: 0,
      y: 120,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // for the meet the developer section
  const developerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const developerItem = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageVariant = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative bg-purple-100 px-8 py-10 overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-32 left-20 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute top-64 right-20 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          About BitLinks
        </h1>

        <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          BitLinks is a modern URL shortening platform built with Next.js and
          MongoDB. It allows users to generate fast, secure, and custom short
          URLs that are easy to share and manage.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-purple-100 hover:shadow-purple-300 hover:shadow-xl transition-all duration-300">
            <FaBolt className="text-yellow-500 text-4xl mb-4" />
            <h2 className="font-bold text-xl mb-2">Fast</h2>
            <p className="text-gray-600">
              Generate shortened URLs instantly with minimal effort.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-purple-100 hover:shadow-purple-300 hover:shadow-xl transition-all duration-300">
            <FaLock className="text-purple-600 text-4xl mb-4" />
            <h2 className="font-bold text-xl mb-2">Secure</h2>
            <p className="text-gray-600">
              Safely stored and managed using MongoDB.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-purple-100 hover:shadow-purple-300 hover:shadow-xl transition-all duration-300">
            <FaLink className="text-pink-500 text-4xl mb-4" />
            <h2 className="font-bold text-xl mb-2">Custom Links</h2>
            <p className="text-gray-600">
              Create personalized short URLs for easy sharing.
            </p>
          </div>
        </div>

        {/* tech stack */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Built With</h2>

          <div className="relative h-[420px] flex justify-center items-center">
            {/* Center Node */}
            <div className="absolute z-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-10 py-6 rounded-full shadow-xl font-bold text-xl">
              BitLinks
            </div>

            {/* Next.js */}
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 120 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
              className="absolute top-0 bg-white px-5 py-3 rounded-full shadow-lg float-slow"
            >
              Next.js
            </motion.div>

            {/* React */}
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 300 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="absolute left-55 bottom-55 bg-white px-6 py-3 rounded-full shadow-lg float-medium"
            >
              React
            </motion.div>

            {/* MongoDB */}
            <motion.div
              initial={{ opacity: 0, scale: 0, x: -300 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
              className="absolute right-55 bottom-55 bg-white px-5 py-3 rounded-full shadow-lg float-fast"
            >
              MongoDB
            </motion.div>

            {/* JavaScript */}
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 180, y: -120 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              className="absolute left-55 bottom-10 bg-white px-5 py-3 rounded-full shadow-lg float-medium"
            >
              JavaScript
            </motion.div>

            {/* Tailwind */}
            <motion.div
              initial={{ opacity: 0, scale: 0, x: -180, y: -120 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              className="absolute right-55 bottom-10 bg-white px-5 py-3 rounded-full shadow-lg float-slow"
            >
              Tailwind CSS
            </motion.div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-14">
            How It Works?
          </h2>

          <div className="overflow-hidden">
            <motion.div
              variants={stepsContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              className="flex flex-wrap justify-center items-center gap-6"
            >
              {/* Step 1 */}
              <motion.div
                variants={stepCard}
                whileHover={{ y: -8 }}
                className="bg-white w-58 h-72 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="font-bold text-2xl text-purple-600 mb-4">
                  1. Enter URL
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Paste any long website link such as a YouTube video,
                  portfolio, article, blog, or online document that you want to
                  share in a simpler and cleaner way.
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                variants={stepCard}
                whileHover={{ y: -8 }}
                className="bg-white w-58 h-72 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="font-bold text-2xl text-purple-600 mb-4">
                  2. Generate
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  BitLinks instantly creates a short and user-friendly URL. You
                  can even customize part of the link to make it easier to
                  recognize and remember.
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                variants={stepCard}
                whileHover={{ y: -8 }}
                className="bg-white w-58 h-72 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="font-bold text-2xl text-purple-600 mb-4">
                  3. Store
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Both the original and shortened URLs are securely stored in
                  MongoDB, ensuring that your links remain accessible whenever
                  someone visits them.
                </p>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                variants={stepCard}
                whileHover={{ y: -8 }}
                className="bg-white w-58 h-72 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="font-bold text-2xl text-purple-600 mb-4">
                  4. Share
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Share your short URL anywhere—social media, resumes,
                  presentations, messages, websites, or portfolios. Visitors are
                  redirected instantly to the original page.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-25 mb-25">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl px-18 py-6 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-20">
              {/* Left Side */}
              <div className="max-w-xl">
                <h2 className="text-4xl font-bold text-white">
                  Ready to Shorten Your Links?
                </h2>

                <p className="text-white/90 mt-3 text-lg">
                  Create fast, secure and shareable URLs with BitLinks.
                </p>
              </div>

              {/* Cat Section */}
              <div className="relative cat-float mix-blend-darken">
                <Image
                  src="/cat.jpg"
                  alt="BitLinks Cat"
                  width={220}
                  height={220}
                  // className="mix-blend-darken"
                />

                <button
                  onClick={() => (window.location.href = "/shorten")}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-xl text-black font-extrabold px-5 py-2 rounded-xl shadow-l hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  Try Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Developer */}
        <div className="mt-24 mb-16">
          <h2 className="text-4xl font-bold text-center mb-10">
            Meet The Developer
          </h2>

          <motion.div
            variants={developerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <motion.div variants={imageVariant} className="flex-shrink-0">
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-[0_0_20px_rgba(168,85,247,0.6),0_0_40px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.8),0_0_60px_rgba(236,72,153,0.6)] transition-all duration-500 profile-float">
                  <Image
                    src="/ish2.png"
                    alt="Ishwari Saddalgi"
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <div className="text-center md:text-left flex-1">
                <motion.h3
                  variants={developerItem}
                  className="text-3xl font-bold"
                >
                  Ishwari Basavraj Saddalgi
                </motion.h3>

                <motion.p
                  variants={developerItem}
                  className="text-purple-600 font-medium mt-2"
                >
                  Electronics & Communication Engineering Student
                </motion.p>

                <motion.p
                  variants={developerItem}
                  className="text-gray-600 mt-4 leading-relaxed"
                >
                  Passionate about Java Development, Web Development, Problem
                  Solving, UI/UX Design and Art. I enjoy building modern
                  applications that combine clean design with practical
                  functionality.
                </motion.p>

                <motion.div
                  variants={developerItem}
                  className="flex justify-center md:justify-start gap-4 mt-6"
                >
                  <a
                    href="https://github.com/Ishwaris4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:scale-105 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ishwari-saddalgi-607b25278"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:scale-105 transition"
                  >
                    LinkedIn
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
