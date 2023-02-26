import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  buttonYoyo,
  homeAnimation,
  loaderAnimation,
} from "../animations/animation";

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={homeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button whileHover="hover" variants={buttonYoyo}>
          Create Your Pizza
        </motion.button>
      </Link>
      <div className="loaderContainer">
        <motion.div
          className="loader"
          variants={loaderAnimation}
          animate="hallo"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
