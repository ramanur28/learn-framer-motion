import "../style/about.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const aboutTar = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutTar,
    offset: ["end end", "end start"],
  });

  const aboutVal = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div className="about">
      <motion.div>
        <motion.h2>
          YOU CANT GET ALL THAT WEIGHT TAKE A BREAK AND COKE WITH US NOW
        </motion.h2>
      </motion.div>
    </motion.div>
  );
};

export default About;
