import React from "react";
import { education } from "../../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
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
        className="text-center mb-16"
        initial={{
          opacity: 0,
          y: -30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        viewport={{ once: true }}
      >

        <h2 className="text-4xl font-bold text-white">
          EDUCATION
        </h2>

        <motion.div
          className="
            w-24
            h-[3px]
            bg-[#8245ec]
            mx-auto
            mt-3
          "
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          transition={{
            duration: 0.5,
          }}
        />

        <p
          className="
            text-gray-400
            mt-5
            max-w-3xl
            mx-auto
            leading-relaxed
          "
        >
          Academic foundation focused on software
          development, problem solving and building
          technical knowledge.
        </p>

      </motion.div>

      {/* Cards */}

      <div className="space-y-8">

        {education.map((edu, index) => (

          <motion.div
            key={edu.id}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              border
              border-[#8245ec35]
              bg-[#111]
              hover:border-[#8245ec]
              hover:shadow-[0_0_30px_rgba(130,69,236,0.2)]
              transition-all
            "
          >

            <div
              className="
                p-8
                flex
                flex-col
                md:flex-row
                gap-6
              "
            >

              {/* Logo */}

              <div
                className="
                  w-20
                  h-20
                  rounded-2xl
                  overflow-hidden
                  bg-white
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >

                <img
                  src={edu.img}
                  alt={edu.school}
                  className="
                    w-full
                    h-full
                    object-contain
                  "
                />

              </div>

              {/* Content */}

              <div className="flex-1">

                <div
                  className="
                    flex
                    flex-col
                    lg:flex-row
                    lg:justify-between
                    gap-3
                  "
                >

                  <div>

                    <h3
                      className="
                        text-2xl
                        font-bold
                        text-white
                      "
                    >
                      {edu.degree}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-[#8245ec]
                      "
                    >
                      {edu.school}
                    </p>

                  </div>

                  <div>

                    <p
                      className="
                        text-gray-500
                      "
                    >
                      {edu.date}
                    </p>

                    {edu.grade && (
                      <p
                        className="
                          mt-2
                          text-green-400
                          font-medium
                        "
                      >
                        {edu.grade}
                      </p>
                    )}

                  </div>

                </div>

                <p
                  className="
                    mt-6
                    text-gray-400
                    leading-8
                  "
                >
                  {edu.desc}
                </p>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Education;