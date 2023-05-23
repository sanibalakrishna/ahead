import React from "react";

function VacanciesCard({ position, salary }) {
  return (
    <div className="w-[30%] group bg-red-50 p-10 rounded-lg flex flex-col gap-2  items-center hover:bg-red-200">
      <h1 className="font-bold text-xl text-start">{position}</h1>
      <ul className="list-disc list-inside text-sm space-y-2">
        <li>Full-time position</li>
        <li>Berlin-remote</li>
        <li>{salary}</li>
      </ul>
      <div className="hidden group-hover:block p-5">
        <button className="bg-black  text-white py-3 px-5 rounded-full text-xs font-semibold">
          See Details
        </button>
      </div>
    </div>
  );
}

export default VacanciesCard;
