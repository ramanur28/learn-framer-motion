import "../style/jumbotron.css";
import { useRef, useEffect, useLayoutEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Jumbotron = () => {
  const jumboRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: jumboRef,
    offset: ["start 20%", "start -20%"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <motion.div
      ref={jumboRef}
      className="container-fluid jumbotron"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      <motion.h1 className="text title" id="home" style={{ x: scale, opacity }}>
        LIVE YOUR LIFE
      </motion.h1>
    </motion.div>
  );
};

export default Jumbotron;
