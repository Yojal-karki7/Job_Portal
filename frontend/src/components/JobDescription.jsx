import React, { useEffect } from "react";
import { Badge } from "./ui/badge";
import Navbar from "./shared/Navbar";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSingleJobs } from "@/redux/slices/jobSlice";
import axios from "axios";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";

const JobDescription = () => {
  
  
  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();
  const {user} = useSelector(store => store.auth)
  const {singleJob} = useSelector(store => store.job)
  const isApplied = 
  singleJob?.applications.some(application => application?.applicant === user?._id);
  

  const handleApplyJob = async () => {
    try {
      const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, {withCredentials: true});
      if(res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  }
  useEffect(()=> {
    const fetchSingleJobs = async () => {
        try {
            const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {withCredentials: true});
            
            if(res.data.success) {
                dispatch(setSingleJobs(res.data.job))
            }
        } catch (error) {
            console.log(error);
        }
    }
    fetchSingleJobs();
  }, [jobId, dispatch, user?._id]);


  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10 p-6 sm:p-2">
        <div className="flex items-center justify-between">
          <div className="">
            <h1 className="font-bold text-xl">{singleJob?.title}</h1>
            <div className="flex items-center gap-2 mt-4">
              <Badge className={"text-blue-700 font-bold"} variant="ghost">
                {singleJob?.position} Position
              </Badge>
              <Badge className={"text-[#F83002] font-bold"} variant="ghost">
                {singleJob?.jobType}
              </Badge>
              <Badge className={"text-[#7209B7] font-bold"} variant="ghost">
                {singleJob?.salary}LPA
              </Badge>
            </div>
          </div>
          <Button 
          disabled={isApplied} 
          className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209B7] hover:bg-[#561f7a]'}`}
          onClick={isApplied ? null : handleApplyJob}
          >
            {
                isApplied ? 'Applied' : 'Apply now'
            }
          </Button>
        </div>
        <h1 className="border-b-2 border-b-gray-300 font-medium my-4 py-4">Job Description</h1>
        <div className="my-4">
            <h1 className="font-bold my-1">Role: <span className="pl-4 font-normal text-gray-800">{singleJob?.title}</span></h1>
            <h1 className="font-bold my-1">Location: <span className="pl-4 font-normal text-gray-800">{singleJob?.location}</span></h1>
            <h1 className="font-bold my-1">Description: <span className="pl-4 font-normal text-gray-800">{singleJob?.description}</span></h1>
            <h1 className="font-bold my-1">Experience: <span className="pl-4 font-normal text-gray-800">{singleJob?.experienceLevel} yrs</span></h1>
            <h1 className="font-bold my-1">Salary: <span className="pl-4 font-normal text-gray-800">{singleJob?.salary}LPA</span></h1>
            <h1 className="font-bold my-1">Total Applicants: <span className="pl-4 font-normal text-gray-800">{singleJob?.applications?.length}</span></h1>
            <h1 className="font-bold my-1">Posted Date: <span className="pl-4 font-normal text-gray-800">{singleJob?.createdAt.split("T")[0]}</span></h1>
        </div>
      </div>
    </>
  );
};

export default JobDescription;
