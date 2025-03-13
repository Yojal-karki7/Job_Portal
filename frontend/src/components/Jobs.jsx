import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./shared/FilterCard";
import Job from "./shared/Job";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5 p-1 md:p-2 lg:p-3">
        <div className="flex flex-col md:flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          <div className="w-[20%]">
            <FilterCard />
          </div>
          {jobsArray.length <= 0 ? (
            <span>Job not found!</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {jobsArray.map((item, index) => (
                  <div className="w-full" key={index}>
                    <Job  />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
