import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./shared/AppliedJobTable";
import UpdateProfileDialog from "./shared/UpdateProfileDialog";
import { useSelector } from "react-redux";

const skills = ["HTML", "CSS", "JS", "REACT JS"];

const resume = true;
const Profile = () => {
  const [open, setOpen] = useState(false);
  const {user} = useSelector(store => store.auth);
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user?.profile?.profilePhoto || 'https://imgs.search.brave.com/RCee6HUBeX3xWQX3_76YnN-q-h6oRKTEbe4aBxvUcCE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvYXZhdGFyLXBy/b2ZpbGUtcGljdHVy/ZS1pY29uLWJsdWUt/YmFja2dyb3VuZC1m/bGF0LWRlc2lnbi1z/dHlsZS1yZXNvdXJj/ZXMtZ3JhcGhpYy1l/bGVtZW50LWRlc2ln/bl85OTE3MjAtNjUz/LmpwZz9zZW10PWFp/c19oeWJyaWQ'} className="object-cover" />
            </Avatar>
            <div className="">
              <h1 className="font-medium text-xl">{user?.fullname ? user?.fullname: <span>Please Log in</span>}</h1>
              <p>
                {
                  user?.profile?.bio
                }
              </p>
            </div>
          </div>
          <Button className="" variant="outline" onClick={()=> setOpen(true)}>
            <Pen />
          </Button>
        </div>
        <div className="">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {user?.profile?.skills.length !== 0 ? (
              user?.profile?.skills.map((item, index) => <Badge key={index}>{item}</Badge>)
            ) : (
              <span>N/A</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {resume ? (
            <a target="_blank" href={user?.profile?.resume} className="text-blue-500 w-full hover:underline cursor-pointer">
            {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span>N/A</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
          <h1 className="font-bold text-lg my-5">All Applied Jobs</h1>
          {/* Applied Job Table */}
          <AppliedJobTable />
        </div>
        <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  );
};

export default Profile;
