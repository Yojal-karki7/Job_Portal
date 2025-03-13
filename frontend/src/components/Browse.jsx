import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./shared/Job";

const randomJobs = [1, 2, 3,];

const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl p-2 my-10">
          Search Results ({randomJobs.length})
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2">
          {randomJobs.map((item, index) => {
            return (
              <Job />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
