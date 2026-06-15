import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profileImage.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="
      px-[8vw]
      md:px-[10vw]
      lg:px-[18vw]
      pt-20
      pb-16
      min-h-screen
      flex
      items-center
      font-sans
    "
    >
      <div className="flex flex-col-reverse lg:flex-row items-center gap-16 w-full">

        {/* LEFT */}

        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* Greeting */}

          <p className="text-[#8245ec] font-semibold tracking-wider mb-4">
            HELLO THERE 👋
          </p>

          {/* Name */}

          <h1
            className="
            text-5xl
            sm:text-6xl
            lg:text-7xl
            font-black
            leading-tight
            text-white
          "
          >
            Aditya
            <br />

            <span
              className="
              bg-gradient-to-r
              from-purple-400
              to-purple-600
              bg-clip-text
              text-transparent
            "
            >
              Jadhav
            </span>
          </h1>

          {/* Role */}

          <div className="mt-8 min-h-[70px]">

            <h3
              className="
              text-xl
              sm:text-2xl
              font-semibold
              text-gray-300
            "
            >

                 <span>Focused on </span>

              <span className="text-[#8245ec]">

               <ReactTypingEffect
  text={[
          "Cloud & DevOps",
          "MERN Stack Development",
          "AWS & Automation",
          "Full Stack Development",
        ]}
  speed={80}
  eraseSpeed={40}
  typingDelay={500}
  eraseDelay={1800}
/>

              </span>

            </h3>

          </div>

          {/* About */}

          <p
            className="
            mt-8
            text-gray-400
            text-lg
            leading-9
            max-w-2xl
          "
          >

            Moving from
            <span className="text-white font-medium">
              {" "}Full Stack Development
            </span>
            {" "}toward
            <span className="text-[#8245ec] font-medium">
              {" "}Cloud & DevOps
            </span>
            .

            Building practical experience with
            <span className="text-white">
              {" "}AWS, Linux, Docker, Python,
              networking and deployment workflows
            </span>
            {" "}while leveraging my background in
            <span className="text-white">
              {" "}React and Node.js
            </span>
            .

          </p>

          {/* Tags */}

          <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">

            {[
              "AWS",
              "Linux",
              "Docker",
              "Python",
              "React",
              "Automation",
            ].map((item) => (
              <span
                key={item}
                className="
                  px-4
                  py-2
                  rounded-full
                  border
                  border-[#8245ec60]
                  bg-[#111]
                  text-gray-300
                  text-sm
                "
              >
                {item}
              </span>
            ))}

          </div>

          {/* Resume */}

          <a
            href="YOUR_UPDATED_RESUME_LINK"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              mt-10
              px-8
              py-4
              rounded-2xl
              text-white
              font-semibold
              bg-gradient-to-r
              from-[#8245ec]
              to-[#9b59ff]
              hover:scale-[1.03]
              transition
            "
          >
            Download Resume
          </a>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.02}
          >

            <div
              className="
                relative
                w-[280px]
                h-[280px]
                md:w-[420px]
                md:h-[420px]
              "
            >

              <div
                className="
                absolute
                inset-0
                rounded-full
                bg-purple-700
                blur-[120px]
                opacity-20
              "
              />

              <img
                src={profileImage}
                alt="Aditya Jadhav"
                className="
                  relative
                  w-full
                  h-full
                  rounded-full
                  object-cover
                  border
                  border-[#8245ec70]
                  shadow-[0_0_60px_rgba(130,69,236,0.3)]
                "
              />

            </div>

          </Tilt>

        </motion.div>

      </div>
    </section>
  );
};

export default About;