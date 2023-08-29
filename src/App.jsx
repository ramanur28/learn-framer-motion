import "./style/App.css";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Feature from "./components/Feature";
// framer motion import
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, forwardRef } from "react";

function App() {
  // use it as refference for your target
  const aboutRef = useRef(null);
  // getting benchmark for animation scroll
  // we can separate it in context with abstract hooks so that it can be use for any similar target
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "40% center"],
  });
  // convert to any range for animation
  const boxValue = useTransform(scrollYProgress, [0, 1], ["70vh", "35vh"]);
  const leftBox = useTransform(scrollYProgress, [0, 1], ["10", "55vw"]);
  const scaleVal = useTransform(scrollYProgress, [0, 1], ["25%", "200%"]);
  return (
    <>
      <Navbar />
      <Jumbotron />
      <motion.div
        className="box"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        style={{ top: boxValue, left: leftBox, scaleY: scaleVal }}
      ></motion.div>
      <About forwardRef={aboutRef} />
      <Feature />
    </>
  );
}

export default App;
