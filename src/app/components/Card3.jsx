"use client";
import React, { useEffect, useRef } from "react";
import { IoFlowerSharp } from "react-icons/io5";
import { motion, useAnimation, useInView } from "framer-motion";
import dynamic from "next/dynamic";
function Card3() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    console.log(controls);
    console.log(`,inView:${inView}`);
    if (inView) {
      controls.start({
        scaleY: 1,
        transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.5 },
        transitionDuration: 10,
      });
    } else {
      controls.start({ scaleY: 0 });
    }
  }, [controls, inView]);
  return (
    <div className=" flex flex-col items-center w-full bg-violet-100  rounded-2xl py-28 px-10 mt-10">
      <h1>
        Let your friends,family,and co-workers (anonymously) rate your social
        skills.
      </h1>
      <h1 className="font-bold text-3xl">
        Ever wondered what others think of you?
      </h1>
      <motion.div
        ref={ref}
        initial={{ yscaleY: 0, transformOrigin: "top" }}
        animate={controls}
        className="flex justify-evenly w-full text-yellow-500 mt-10"
      >
        <IoFlowerSharp size={24} />
        <IoFlowerSharp size={24} />
        <IoFlowerSharp size={24} />
      </motion.div>
      <div className="w-[50%]">
        <hr className="border-dashed  border-yellow-500 -mt-3" />
      </div>
      <motion.div
        initial={{ scaleY: 0, transformOrigin: "top" }}
        animate={controls}
        className="flex justify-evenly w-full gap-5"
      >
        <p className="text-xs w-36 text-center">
          Answer questions on your social skills
        </p>
        <p className="text-xs w-36 text-center">
          Let others anonymously answer the same questions about you
        </p>
        <p className="text-xs w-36 text-center">
          find out where you and others see things the same way - and where not!
        </p>
      </motion.div>
      <motion.div
        initial={{ scaleY: 0, transformOrigin: "top" }}
        animate={controls}
        className="relative bg-white w-[50%] h-48 rounded-2xl shadow-lg flex items-center justify-center mt-10"
      >
        <hr className="border border-gray-300 w-[80%]"></hr>
        <div className="flex justify-between w-[80%] absolute left-[10%]">
          <div>
            <div className="h-5 w-5 bg-violet-900 rounded-full"></div>
            <div className="absolute -top-10 -left-12 py-2 px-3 bg-violet-900 rounded-xl text-white flex justify-center items-center">
              You
            </div>
          </div>
          <div>
            <div className="h-5 w-5 bg-blue-300 rounded-full"></div>
            <div className="absolute top-8 py-2 px-3 bg-blue-300  rounded-xl text-white flex justify-center items-center">
              Anonymous1
            </div>
          </div>
          <div>
            <div className="h-5 w-5 bg-orange-400 rounded-full"></div>
            <div className="absolute -top-12 py-2 px-3 bg-orange-400 rounded-xl text-white flex justify-center items-center">
              Anonymous2
            </div>
          </div>
          <div>
            <div className="h-5 w-5 bg-green-400 rounded-full"></div>
            <div className="absolute top-8 py-2 px-3 bg-green-400 rounded-xl text-white flex justify-center items-center">
              Anonymous3
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Card3), {
  ssr: false,
});
