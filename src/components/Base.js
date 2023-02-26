import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  hoverNextOrderButton,
  nextAnimation,
  nextOrderAnimation,
  RightToLeftAnimation,
} from "../animations/animation";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      variants={RightToLeftAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              whileHover={{
                scale: 1.3,
                color: "yellow",
                originX: 0,
              }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <motion.button variants={nextOrderAnimation} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default Base;
