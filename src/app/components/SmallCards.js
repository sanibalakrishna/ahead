import React from "react";
import Smallcard from "./Smallcard";

function SmallCards() {
  return (
    <div className="flex overflow-x-auto  justify-between h-80  items-center gap-5 mt-10">
      <Smallcard color="bg-blue-200" />
      <Smallcard color="bg-gray-200" />
      <div className="-rotate-12 flex items-center relative w-1/4 -top-5">
        <Smallcard color="bg-blue-500" rotate={true} />
      </div>
      <Smallcard color="bg-red-100" />
    </div>
  );
}

export default SmallCards;
