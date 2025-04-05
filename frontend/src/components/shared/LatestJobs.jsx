import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const LatestJobs = () => {
  const {allJobs} = useSelector(store => store.job);
  return (
    <div className="max-w-7xl mx-auto my-20 px-6">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top </span>Job Openings
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5 pl-12">
        {allJobs.length !== 0 ? allJobs?.slice(0, 6).map((job) => (
          <LatestJobCards key={job._id} job={job}/>
        )): <span>No Job Avaliable!</span>}
      </div>
    </div>
  );
};

export default LatestJobs;
