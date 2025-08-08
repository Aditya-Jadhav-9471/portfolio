import React from "react";
import { experiences } from "../../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-white tracking-wide">
          EXPERIENCE
        </h2>
        <motion.div
          className="w-32 h-1 bg-purple-500 mx-auto mt-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          Showcasing my professional journey and the roles I’ve contributed to in the tech industry.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-gray-400 to-purple-500 h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={experience.id}
              className={`flex flex-col sm:flex-row items-center mb-16 relative ${
                isEven ? "sm:justify-end" : "sm:justify-start"
              }`}
              initial={{ opacity: 0, x: isEven ? 80 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Timeline Circle */}
              {/* <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-purple-500 bg-gray-800 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(130,69,236,0.6)]"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-10 h-10 object-cover rounded-full"
                />
              </motion.div> */}

              {/* Card */}
              <div
                className={`w-full sm:max-w-md p-6 rounded-2xl border border-gray-500 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md shadow-[0_0_20px_rgba(130,69,236,0.3)] hover:shadow-[0_0_30px_rgba(130,69,236,0.5)] transition-all duration-300 ${
                  isEven ? "sm:ml-0" : "sm:mr-0"
                } sm:ml-48 sm:mr-48 mt-10 sm:mt-0`}
              >
                {/* Header */}
                <div className="flex items-center space-x-4">
                  <div className="w-[76px] h-[56px] bg-white rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {experience.company}
                    </h4>
                    <p className="text-sm text-gray-500">{experience.date}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-gray-400 leading-relaxed">
                  {experience.desc}
                </p>

                {/* Skills */}
                <div className="mt-4">
                  <h5 className="font-medium text-white mb-2">Skills:</h5>
                  <ul className="flex flex-wrap">
                    {experience.skills.map((skill, idx) => (
                      <li
                        key={idx}
                        className="bg-purple-600 text-white px-3 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-purple-400 hover:bg-purple-500 transition-colors duration-200"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
