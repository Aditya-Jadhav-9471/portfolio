import React from "react";
import { experiences } from "../../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="
        py-24
        px-[8vw]
        md:px-[10vw]
        lg:px-[18vw]
        font-sans
      "
    >

      {/* Header */}

      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        <h2 className="text-4xl font-bold text-white">
          EXPERIENCE
        </h2>

        <motion.div
          className="w-24 h-[3px] bg-[#8245ec] mx-auto mt-3"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />

        <p
          className="
            mt-5
            text-gray-400
            max-w-3xl
            mx-auto
            leading-relaxed
          "
        >
          Professional experience across software
          development, deployment workflows and
          production-ready application practices.
        </p>

      </motion.div>

      {/* Cards */}

      <div className="space-y-8">

        {experiences.map((exp, idx) => (

          <motion.div
            key={exp.id}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: idx * 0.1,
            }}
            viewport={{ once: true }}
            className="
              bg-[#111]
              border
              border-[#8245ec40]
              rounded-3xl
              p-8
              hover:border-[#8245ec]
              hover:shadow-[0_0_30px_rgba(130,69,236,0.25)]
              transition-all
            "
          >

            {/* Top */}

            <div
              className="
                flex
                flex-col
                md:flex-row
                gap-6
              "
            >

              <img
                src={exp.img}
                alt={exp.company}
                className="
                  w-20
                  h-20
                  rounded-2xl
                  object-cover
                  bg-white
                "
              />

              <div>

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  {exp.role}
                </h3>

                <p className="text-[#8245ec] mt-1">
                  {exp.company}
                </p>

                <p className="text-gray-500 text-sm">
                  {exp.date}
                </p>

              </div>

            </div>

            {/* Description */}

            <p
              className="
                mt-8
                text-gray-400
                leading-8
              "
            >
              {exp.desc}
            </p>

            {/* Skills */}

            <div className="mt-8">

              <div
                className="
                  flex
                  flex-wrap
                  gap-3
                "
              >

                {exp.skills.map((skill) => (

                  <span
                    key={skill}
                    className="
                      px-4
                      py-2
                      rounded-full
                      border
                      border-[#8245ec40]
                      bg-[#171717]
                      text-gray-300
                      text-sm
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Experience;