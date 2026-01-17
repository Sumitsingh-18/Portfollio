import React from "react";
import { motion } from "framer-motion";
import Button from "../Components/Button.jsx";

const About = () => {
  return (
   

    <section className="bg-gradient-to-r from-black-800 via-gray-900 to-black-800 text-white py-24 px-8 mt-5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* <div className="relative -white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl flex flex-col items-center mr-10">
  

        {/* Profile Card */}
        <motion.div
         id="about-header"
        
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
         

          <motion.img
            src="/images/bgimg.png"
            alt="Profile"
            className="w-[360px] h-[350px] shadow-xl mb-1 object-cover rounded-lg"
            initial={{ opacity: 0, x: -120, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            animate={{ y: [0, -6, 0] }} 
            transition={{
              duration: 1.3,
              ease: "easeOut",
              filter: { duration: 1.5 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
          />

         

          <motion.h1  id="name-block" className="text-4xl font-bold tracking-tight flex space-x-3">
            
            <motion.span
              id="first-line"
              className="text-transparent bg-clip-text bg-gradient-to-r from-white-50 to-gray-500"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Rathore
            </motion.span>

            
            <motion.span
            id="second-line"
              className="text-transparent bg-clip-text bg-gradient-to-r from-white-50 to-gray-700"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1 }}
              viewport={{ once: true }}
            >
              Sumit Singh
            </motion.span>
          </motion.h1>
        </motion.div>




        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase text-white-50 tracking-widest mb-3">
            About Me
          </h2>
          <h3 className="text-3xl font-semibold mb-6">Full Stack Developer</h3>
          <p className="text-gray-300 leading-relaxed mb-8">
            Hi, I’m Sumit Singh — a passionate Full Stack Web Developer
            specializing in building modern, scalable, and user-friendly
            Website. I’m passionate about solving
            problems, learning emerging technologies, and creating digital
            experiences that make an impact. Beyond writing clean and efficient
            code, I thrive on collaboration, innovation, and continuous
            learning.<br/>
            For a detailed overview, Download below resume.
          </p>
          
          

          <div className="md:w-80">
            <Button text="Download Resume" download="/resume.pdf" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
