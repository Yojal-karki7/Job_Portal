import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./shared/FilterCard";
import Job from "./shared/Job";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

// const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  const {allJobs, searchedQuery } = useSelector(store => store.job)
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(()=>{
    if(searchedQuery) {
      const filteredJobs = allJobs.filter((job) => {
        return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) || 
        job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchedQuery.toLowerCase())
      })
      setFilterJobs(filteredJobs)
    } else {
      setFilterJobs(allJobs)
    }
  }, [allJobs,searchedQuery])
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5 p-1 md:p-2 lg:p-3">
        <div className="flex flex-col md:flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          <div className="w-[20%]">
            <FilterCard />
          </div>
          {filterJobs.length <= 0 ? (
            <span>Job not found!</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filterJobs.length !== 0 ? filterJobs.map((job) => (
                  <motion.div 
                  initial={{opacity:0, x:100}}
                  animate={{opacity:1, x:0}} 
                  exit={{opacity:0, x: -100}}
                  transition={{duration:0.3}}
                  className="w-full" key={job._id}>
                    <Job  job={job}/>
                  </motion.div>
                )) : <span>No Jobs available!</span>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
