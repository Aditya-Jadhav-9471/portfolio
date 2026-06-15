// src/components/Skills/Skills.jsx

import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        py-24
        px-[8vw]
        md:px-[10vw]
        lg:px-[18vw]
        font-sans
        bg-skills-gradient
        clip-path-custom
      "
    >
      {/* Section Heading */}

      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        <h2 className="text-4xl font-bold text-white">
          SKILLS
        </h2>

        <motion.div
          className="w-24 h-[3px] bg-[#8245ec] mx-auto mt-3"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />

        <p className="text-gray-400 mt-5 text-lg max-w-3xl mx-auto leading-relaxed">
          Cloud, DevOps, development and infrastructure
          technologies I use to build, automate and deploy
          applications.
        </p>

      </motion.div>

      {/* Skill Categories */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {SkillsInfo.map((category, idx) => (

          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: idx * 0.1,
            }}
            viewport={{ once: true }}
          >

            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              scale={1.02}
              transitionSpeed={800}
            >

              <div
                className="
                  bg-[#111111]
                  border
                  border-[#8245ec40]
                  rounded-3xl
                  p-8
                  h-full
                  hover:border-[#8245ec]
                  hover:shadow-[0_0_28px_rgba(130,69,236,0.30)]
                  transition-all
                "
              >

                {/* Category */}

                <h3
                  className="
                    text-2xl
                    font-semibold
                    text-center
                    text-white
                    mb-8
                  "
                >
                  {category.title}
                </h3>

                {/* Skills */}

                <div
                  className="
                    flex
                    flex-wrap
                    justify-center
                    gap-3
                  "
                >

                  {category.skills.map((skill, i) => (

                    <motion.div
                      key={skill.name}
                      initial={{
                        opacity: 0,
                        scale: 0.95,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.25,
                        delay: i * 0.04,
                      }}
                      viewport={{ once: true }}
                      className="
                        px-5
                        py-3
                        rounded-2xl
                        bg-[#181818]
                        border
                        border-[#2a2a2a]
                        text-gray-300
                        text-sm
                        font-medium
                        hover:text-white
                        hover:border-[#8245ec]
                        hover:-translate-y-1
                        hover:shadow-[0_0_15px_rgba(130,69,236,0.45)]
                        transition-all
                        duration-300
                        cursor-default
                      "
                    >
                      {skill.name}
                    </motion.div>

                  ))}

                </div>

              </div>

            </Tilt>

          </motion.div>

        ))}

      </div>
    </section>
  );
};

export default Skills;