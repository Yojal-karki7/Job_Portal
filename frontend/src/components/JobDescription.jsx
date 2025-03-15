import React from "react";
import { Badge } from "./ui/badge";
import Navbar from "./shared/Navbar";
import { Button } from "./ui/button";

const JobDescription = () => {
  const isApplied = false;
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10 p-6 sm:p-2">
        <div className="flex items-center justify-between">
          <div className="">
            <h1 className="font-bold text-xl">Frontend Developer</h1>
            <div className="flex items-center gap-2 mt-4">
              <Badge className={"text-blue-700 font-bold"} variant="ghost">
                8 Position
              </Badge>
              <Badge className={"text-[#F83002] font-bold"} variant="ghost">
                Part Time
              </Badge>
              <Badge className={"text-[#7209B7] font-bold"} variant="ghost">
                12LPA
              </Badge>
            </div>
          </div>
          <Button 
          disabled={isApplied} 
          className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209B7] hover:bg-[#561f7a]'}`}>
            {
                isApplied ? 'Applied' : 'Apply now'
            }
          </Button>
        </div>
        <h1 className="border-b-2 border-b-gray-300 font-medium my-4 py-4">Job Description</h1>
        <div className="my-4">
            <h1 className="font-bold my-1">Role: <span className="pl-4 font-normal text-gray-800">Frontend Developer</span></h1>
            <h1 className="font-bold my-1">Location: <span className="pl-4 font-normal text-gray-800">Kathmandu</span></h1>
            <h1 className="font-bold my-1">Description: <span className="pl-4 font-normal text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id provident officiis assumenda adipisci sed nihil.</span></h1>
            <h1 className="font-bold my-1">Experience: <span className="pl-4 font-normal text-gray-800">2 yrs</span></h1>
            <h1 className="font-bold my-1">Salary: <span className="pl-4 font-normal text-gray-800">12 LPA</span></h1>
            <h1 className="font-bold my-1">Total Applicants: <span className="pl-4 font-normal text-gray-800">8</span></h1>
            <h1 className="font-bold my-1">Posted Date: <span className="pl-4 font-normal text-gray-800">15-0-2025</span></h1>
        </div>
      </div>
    </>
  );
};

export default JobDescription;
