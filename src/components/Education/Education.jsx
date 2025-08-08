import React from "react";
import { education } from "../../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[8vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My academic journey, building strong technical and problem-solving foundations.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-purple-400 to-purple-700"></div>

        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex flex-col sm:flex-row items-center mb-20 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gray-900 border-4 border-purple-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(130,69,236,0.6)] z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-10 h-10 object-contain rounded-full"
              />
            </div>

            {/* Card */}
            <div
              className={`w-full sm:max-w-md mt-10 sm:mt-0 p-6 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md hover:scale-105 hover:shadow-purple-500/40 transition-transform duration-300 ${
                index % 2 === 0 ? "sm:ml-0 sm:pl-20" : "sm:mr-0 sm:pr-20"
              }`}
            >
              {/* School Info */}
              <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
              <h4 className="text-md text-gray-300">{edu.school}</h4>
              <p className="text-sm text-gray-500 mt-1">{edu.date}</p>

              {/* Grade */}
              <p className="mt-4 text-purple-400 font-bold">Grade: {edu.grade}</p>

              {/* Description */}
              <p className="mt-3 text-gray-400 leading-relaxed">{edu.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
