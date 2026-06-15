import React, { useState, useEffect } from "react";
import { projects } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <section
      id="work"
      className="
        py-24
        px-[8vw]
        md:px-[10vw]
        lg:px-[18vw]
      "
    >

      {/* Header */}

      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >

        <h2 className="text-4xl font-bold text-white">
          PROJECTS
        </h2>

        <div className="w-24 h-[3px] bg-[#8245ec] mx-auto mt-3" />

        <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
          Projects focused on development,
          deployment workflows and practical
          problem solving.
        </p>

      </motion.div>

      {/* Grid */}

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
        "
      >

        {projects.map((project, idx) => (

          <motion.div
            key={project.id}
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
              delay: idx * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
            }}
            onClick={() => openModal(project)}
            className="
              cursor-pointer
              overflow-hidden
              rounded-3xl
              bg-[#111]
              border
              border-[#8245ec30]
              hover:border-[#8245ec]
              transition
            "
          >

            <img
              src={project.image}
              alt={project.title}
              className="
                w-full
                h-[220px]
                object-cover
              "
            />

            <div className="p-6">

              <h3
                className="
                  text-2xl
                  font-bold
                  text-white
                "
              >
                {project.title}
              </h3>

              <p
                className="
                  text-gray-400
                  mt-4
                  line-clamp-3
                  leading-7
                "
              >
                {project.description}
              </p>

              <div
                className="
                  flex
                  flex-wrap
                  gap-2
                  mt-6
                "
              >

                {project.tags.map((tag) => (

                  <span
                    key={tag}
                    className="
                      px-3
                      py-1
                      rounded-full
                      bg-[#171717]
                      border
                      border-[#8245ec40]
                      text-sm
                      text-gray-300
                    "
                  >
                    {tag}
                  </span>

                ))}

              </div>

            </div>

          </motion.div>

        ))}

      </div>

      {/* Modal */}

      <AnimatePresence>

        {selectedProject && (

          <motion.div
            className="
              fixed
              inset-0
              z-50
              bg-black/80
              flex
              items-center
              justify-center
              p-4
            "
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
              }}
              className="
                w-full
                max-w-4xl
                rounded-3xl
                overflow-hidden
                bg-[#111]
                border
                border-[#8245ec40]
              "
            >

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="
                  w-full
                  max-h-[320px]
                  object-cover
                "
              />

              <div className="p-8">

                <h3
                  className="
                    text-3xl
                    font-bold
                    text-white
                  "
                >
                  {selectedProject.title}
                </h3>

                <p
                  className="
                    mt-5
                    text-gray-400
                    leading-8
                  "
                >
                  {selectedProject.description}
                </p>

                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    mt-6
                  "
                >

                  {selectedProject.tags.map((tag) => (

                    <span
                      key={tag}
                      className="
                        px-4
                        py-2
                        rounded-full
                        border
                        border-[#8245ec40]
                        text-gray-300
                      "
                    >
                      {tag}
                    </span>

                  ))}

                </div>

                <div className="flex gap-4 mt-8">

                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1
                      py-3
                      rounded-2xl
                      border
                      border-[#8245ec]
                      text-center
                      text-white
                    "
                  >
                    Source Code
                  </a>

                  {selectedProject.webapp && (

                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex-1
                        py-3
                        rounded-2xl
                        bg-[#8245ec]
                        text-center
                        text-white
                      "
                    >
                      Live Demo
                    </a>

                  )}

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
};

export default Work;