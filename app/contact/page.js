"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");

        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="bg-purple-100 py-10 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mt-3 mb-12">
          Feel free to reach out for collaboration, project discussions,
          internship opportunities, or any queries related to BitLinks.
        </p>

        {/* Main Section */}
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10">

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">

            <h2 className="text-2xl font-bold mb-8">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <textarea
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white py-3 rounded-xl font-semibold cursor-pointer"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">

            <h2 className="text-2xl font-bold mb-8">
              Contact Information
            </h2>

            <div className="space-y-8">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-purple-600 text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">
                    ishwarir2004@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaGithub className="text-purple-600 text-xl" />
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <a
                    href="https://github.com/Ishwaris4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-purple-700 hover:underline"
                  >
                    github.com/Ishwaris4
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaLinkedin className="text-purple-600 text-xl" />
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/ishwari-saddalgi-607b25278"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-purple-700 hover:underline"
                  >
                    linkedin.com/in/ishwari-saddalgi
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-purple-600 text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">
                    India
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}