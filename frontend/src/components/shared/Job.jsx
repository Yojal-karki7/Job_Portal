import React from "react";
import { Button } from "../ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({job}) => {
  const navigate = useNavigate();
  const daysAgo = (mongoDbTime) => {
    const createdAt = new Date(mongoDbTime);
    const currentTime = new Date();
    const timedifference = currentTime - createdAt;
    return Math.floor(timedifference/ (1000*24*60*60));
  }
  return (
    <div className="p-4 rounded-md shadow-xl bg-white border border-gray-100 w-full">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{daysAgo(job?.createdAt) === 0 ? "Today" : `${daysAgo(job?.createdAt)} days ago`}</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-1">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src={job?.company?.logo || "https://imgs.search.brave.com/fU6JMimMSX5uhPjNUOGEJDRl1R74001yPAjHI-Ajta4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE4LzM5LzE1/LzM2MF9GXzIxODM5/MTU1OV9IN3ZIVGtu/b0JyVklndFY4UkF3/T1lzRmFidHpCSmpV/US5qcGc"} />
          </Avatar>
        </Button>
        <div className="">
          <h1 className="text-md font-medium">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">Nepal</p>
        </div>
      </div>
      <div className="">
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">
          {job?.description}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          {job?.position} Position
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className={"text-[#7209B7] font-bold"} variant="ghost">
          {job?.salary}LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
            <Button variant="outline" onClick={()=>navigate(`/description/${job?._id}`)}>Details</Button>
            <Button className="bg-[#7209B7] sm:w-[55%]">Save for Later</Button>
        </div>
    </div>
  );
};

export default Job;
