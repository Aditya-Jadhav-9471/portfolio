// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <motion.div
      className="text-center mb-8"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
        SKILLS
      </h2>
      <motion.div
        className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      />
      <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </motion.div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-4 lg:gap-8 py-10 justify-between">
      {SkillsInfo.map((category, idx) => (
        <motion.div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:shadow-[0_0_25px_2px_rgba(130,69,236,0.6)] transition-shadow duration-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: idx * 0.15 }}
          viewport={{ once: true }}
        >
          {/* Category Title */}
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6 text-center relative">
            {category.title}
            <span className="absolute left-1/2 -bottom-1 w-12 h-0.5 bg-[#8245ec] -translate-x-1/2"></span>
          </h3>

          {/* Skills List */}
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={800}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-3 text-center hover:border-[#8245ec] hover:shadow-[0_0_12px_rgba(130,69,236,0.8)] transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <span className="text-xs sm:text-sm text-gray-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </Tilt>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
