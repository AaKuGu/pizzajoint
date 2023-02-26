export const homeAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

export const RightToLeftAnimation = {
  initial: {
    x: "100vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.18,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

export const OrderTitleAnimation = {
  initial: {
    x: "100",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

export const OrderChildAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {},
  },
};

export const buttonYoyo = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 8px white",
    textShadow: "0px 0px 8px white",
    transition: {
      duration: 0.2,
      yoyo: Infinity,
    },
  },
};

export const hoverNextOrderButton = {
  initial: {
    x: "-100vw",
    opacity: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

// hover: {
//   scale: 1.1,
//   boxShadow: "0px 0px 8px white",
//   textShadow: "0px 0px 8px white",
//   transition: {
//     duration: 0.2,
//     yoyo: Infinity,
//   },
// },

export const nextOrderAnimation = {
  initial: {
    x: "-100vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  hover: {
    scale: 1.2,
    boxShadow: "0px 0px 8px white",
    textShadow: "0px 0px 8px white",
    transition: {
      duration: 0.2,
      yoyo: Infinity,
    },
  },
};

export const loaderAnimation = {
  hallo: {
    x: [-20, 20],
    y: [0, -30],

    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.3,
      },
      y: {
        yoyo: Infinity,
        duration: 0.15,
        ease: "easeOut",
      },
    },
  },
};
