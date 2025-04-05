import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import Job from "./shared/Job";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/slices/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const randomJobs = [1, 2, 3,];

const Browse = () => {
  useGetAllJobs();
  const {allJobs} = useSelector(store=>store.job);
  const dispatch = useDispatch()
  useEffect(()=>{
    return () => {
      dispatch(setSearchedQuery(""))
    }
  }, [])
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl p-2 my-10">
          Search Results ({allJobs.length})
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2">
          {allJobs.map((job, index) => {
            return (
              <Job key={index} job={job}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
