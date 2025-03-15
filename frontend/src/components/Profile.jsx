import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./shared/AppliedJobTable";

const skills = ["HTML", "CSS", "JS", "REACT JS"];

const Profile = () => {
  const resume = true;
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://imgs.search.brave.com/dyHh5Cln-rDs8nRbzC50NGPTYBkgBHsFJWjerXs5BiM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDUvMDExMDQ3MzMv/NTEwMy03Njh4NTkx/LnBuZw" />
            </Avatar>
            <div className="">
              <h1 className="font-medium text-xl">FullName</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas, ex quae eos itaque doloremque quo?
              </p>
            </div>
          </div>
          <Button className="" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>johndoe@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>9347247232</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {skills.length !== 0 ? (
              skills.map((item, index) => <Badge key={index}>{item}</Badge>)
            ) : (
              <span>N/A</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {resume ? (
            <a target="_blank" href="https://www.facebook.com/yojalkarki7" className="text-blue-500 w-full hover:underline cursor-pointer">
              Yojal Karki
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
    </div>
  );
};

export default Profile;
