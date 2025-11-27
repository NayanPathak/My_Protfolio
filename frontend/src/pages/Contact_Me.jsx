import React, { useState } from "react";
import { motion } from "framer-motion";


const API_URL = import.meta.env.VITE_BACKEND_URL;


export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setError("All fields are required.");
      return;
    }

    setStatus("sending");
    setError("");
     
    try {
      const res = await fetch(`${API_URL}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, message }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFullName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 py-20 bg-[#0a0a0a]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl"
      >
        <form
          onSubmit={handleSubmit}
          className="
            w-full p-8 rounded-2xl shadow-2xl 
            border border-cyan-500/40 
            bg-white/5 backdrop-blur-xl
            animate-float
            transition-all duration-300 
          "
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Contact Me
          </h2>

          {/* Full Name */}
          <div className="mb-5">
            <label className="text-gray-300 text-sm font-medium ml-1">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="
                w-full mt-2 p-3 rounded-lg 
                bg-black/30 border border-cyan-500/30 
                text-white placeholder-gray-500
                focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400
                transition
              "
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="text-gray-300 text-sm font-medium ml-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full mt-2 p-3 rounded-lg 
                bg-black/30 border border-cyan-500/30 
                text-white placeholder-gray-500
                focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400
                transition
              "
              placeholder="Enter your email address"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="text-gray-300 text-sm font-medium ml-1">
              Message
            </label>
            <textarea
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="
                w-full mt-2 p-3 rounded-lg 
                bg-black/30 border border-cyan-500/30 
                text-white placeholder-gray-500
                focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400
                transition resize-none
              "
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="
              w-full py-4 px-4 text-lg font-bold rounded-xl 
              bg-gradient-to-r from-cyan-600 to-blue-600 
              hover:from-cyan-500 hover:to-blue-500
              text-white transition-all transform active:scale-[0.98]
              shadow-[0_0_20px_rgba(6,182,212,0.4)]
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 text-center mt-4 font-medium"
            >
              Message sent successfully!
            </motion.p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
