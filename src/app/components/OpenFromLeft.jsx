"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import dynamic from "next/dynamic";

const TextAnimation = ({ children, right = false }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    console.log(controls);
    console.log(`,inView:${inView}`);
    if (inView) {
      controls.start({
        x: 0,
        transition: { type: "spring", stiffness: 300, damping: 20 },
        transitionDelay: 5,
      });
    }
    // else {
    //   controls.start({ x: -100 });
    // }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: right ? 100 : -100 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default dynamic(() => Promise.resolve(TextAnimation), { ssr: false });
