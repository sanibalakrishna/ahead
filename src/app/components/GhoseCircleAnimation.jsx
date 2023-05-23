"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { SiGhostery } from "react-icons/si";
import { FaGhost } from "react-icons/fa";
import { RiGhostFill } from "react-icons/ri";
import Image from "next/image";
import phone from "@/assets/phone.png";
import dynamic from "next/dynamic";
const GhostCircleAnimation = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    console.log(controls);
    console.log(`,inView:${inView}`);
    if (inView) {
      controls.start({
        rotate: -90,
        transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.5 },
        transitionDuration: 10,
      });
    }
    // else {
    //   controls.start({ x: -100 });
    // }
  }, [controls, inView]);
  return (
    <div className="  flex w-1/2 justify-center items-center">
      {/* Circle Animation */}
      <motion.div
        ref={ref}
        initial={{ rotate: 0 }}
        exit={{ rotate: -90 }}
        animate={controls}
        className="relative h-96 w-96  border-2 border-dashed border-white rounded-full"
      >
        <motion.div
          className="absolute top-0 left-8"
          initial={{ rotate: 0 }}
          animate={{ rotate: 90 }}
        >
          <SiGhostery className="text-blue-300 text-5xl " />
        </motion.div>
        <motion.div
          className="absolute top-0 right-8"
          initial={{ rotate: 0 }}
          animate={{ rotate: 90 }}
        >
          <FaGhost className="text-red-500 text-5xl " />
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-8"
          initial={{ rotate: 0 }}
          animate={{ rotate: 90 }}
        >
          <RiGhostFill className=" text-red-200 text-5xl " />
        </motion.div>
        <motion.div
          className="absolute bottom-0 right-8"
          initial={{ rotate: 0 }}
          animate={{ rotate: 90 }}
        >
          <SiGhostery className="text-5xl " />
        </motion.div>
      </motion.div>
      <div className="absolute top-[40%] left[20%]">
        <div className="bg-violet-400 h-80 w-80 rounded-full"></div>
        <Image
          src={phone}
          height={300}
          width={300}
          alt="phone"
          className="absolute top-0 "
        />
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(GhostCircleAnimation), {
  ssr: false,
});
