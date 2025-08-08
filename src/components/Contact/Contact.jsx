import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (isSending) return; // Prevent double click
    setIsSending(true);

    emailjs
      .sendForm(
        "service_xv6kpcz", // Your EmailJS Service ID
        "template_secdm6k", // Your EmailJS Template ID
        form.current,
        "GktAAkdR3fMB8t5dE" // Your EmailJS Public Key
      )
      .then(
        () => {
          form.current.reset();
          setIsSending(false);
          toast.success("🚀 Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          setIsSending(false);
          toast.error("❌ Failed to send message. Try again later.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-[#0b0718]"
    >
      <ToastContainer />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—drop me a message anytime!
        </p>
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-[#131025] p-6 rounded-lg shadow-lg border border-gray-700"
      >
        <h3 className="text-xl font-semibold text-white text-center">
          Let’s Connect <span className="ml-1">💌</span>
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-6 flex flex-col space-y-5"
        >
          {/* Input Fields */}
          {[
            { name: "user_email", type: "email", label: "Your Email" },
            { name: "user_name", type: "text", label: "Your Name" },
            { name: "subject", type: "text", label: "Subject" },
          ].map((field, i) => (
            <div key={i} className="relative">
              <input
                type={field.type}
                name={field.name}
                required
                placeholder=" "
                className="peer w-full p-3 rounded-md bg-[#1a1531] text-white border border-gray-600 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_8px_rgba(130,69,236,0.5)]"
              />
              <label
                className="absolute left-3 top-3 text-gray-500 text-sm transition-all 
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 
                peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-purple-400 peer-focus:text-sm bg-[#131025] px-1"
              >
                {field.label}
              </label>
            </div>
          ))}

          {/* Message Box */}
          <div className="relative">
            <textarea
              name="message"
              rows="4"
              required
              placeholder=" "
              className="peer w-full p-3 rounded-md bg-[#1a1531] text-white border border-gray-600 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_8px_rgba(130,69,236,0.5)]"
            />
            <label
              className="absolute left-3 top-3 text-gray-500 text-sm transition-all 
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 
              peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-purple-400 peer-focus:text-sm bg-[#131025] px-1"
            >
              Message
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isSending}
            className={`w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md transition 
              hover:opacity-90 flex items-center justify-center ${
                isSending ? "opacity-70 cursor-not-allowed" : ""
              }`}
          >
            {isSending ? (
              <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
