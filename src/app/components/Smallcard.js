import React from "react";

function Smallcard({ color = "bg-white", rotate = false }) {
  return (
    <div
      className={`flex  flex-col rounded-xl  p-5 h-52 justify-center ${color}`}
      style={{ width: "500px" }}
    >
      <p className="text-xl">😠️</p>
      <h1 className="font-semibold text-lg">You argue with a colleague</h1>
      <p className="text-sm">
        You get angry and defensive,instead of staying open and working towards
        common ground
      </p>
    </div>
  );
}

export default Smallcard;
