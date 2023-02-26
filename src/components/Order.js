import React from "react";
import { motion } from "framer-motion";
import {
  OrderChildAnimation,
  OrderTitleAnimation,
} from "../animations/animation";

import { useLocation } from "react-router-dom";

const Order = ({ pizza }) => {
  const location = useLocation();

  return (
    <motion.div
      className="container order"
      variants={OrderTitleAnimation}
      initial="initial"
      animate="animate"
    >
      {/* {fade && <DarkBG />} */}
      <motion.h2 variants={OrderChildAnimation}>
        Thank you for your order :)
      </motion.h2>
      <motion.p variants={OrderChildAnimation}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      {pizza.toppings.map((topping) => (
        <motion.div key={topping} variants={OrderChildAnimation}>
          {topping}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Order;
