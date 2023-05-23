"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const VerticalTimeline = () => {
  const items = [
    {
      heading: "Its not as easy as 1-2-3",
      content:
        "The Journey of change may be long,but are sessions are quick.We get to the point and tell you what you want to know (and nothing else)",
    },
    {
      heading: "Its not as easy as 1-2-3",
      content:
        "The Journey of change may be long,but are sessions are quick.We get to the point and tell you what you want to know (and nothing else)",
    },
    {
      heading: "Its not as easy as 1-2-3",
      content:
        "The Journey of change may be long,but are sessions are quick.We get to the point and tell you what you want to know (and nothing else)",
    },
    {
      heading: "Its not as easy as 1-2-3",
      content:
        "The Journey of change may be long,but are sessions are quick.We get to the point and tell you what you want to know (and nothing else)",
    },
    {
      heading: "Its not as easy as 1-2-3",
      content:
        "The Journey of change may be long,but are sessions are quick.We get to the point and tell you what you want to know (and nothing else)",
    },
    {
      heading: "Its not as easy as 1-2-3",
      content:
        "The Journey of change may be long,but are sessions are quick.We get to the point and tell you what you want to know (and nothing else)",
    },
  ];
  return (
    <div className="flex  overflow-scroll w-[60%]">
      <div className="flex flex-col  border-l-4 h-[200%] border-violet-700 ml-1 items-center ">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-item flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-violet-900 p-2 rounded-full -ml-6"></div>
            <div className="content ml-10">
              <h1 className="font-bold text-xl">{item.heading}</h1>
              <h2>{item.content}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(VerticalTimeline), {
  ssr: false,
});
