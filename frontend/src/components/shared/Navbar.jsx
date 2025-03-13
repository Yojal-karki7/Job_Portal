import React from "react";
import { Link } from "react-router-dom";
import { Popover } from "../ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";

const Navbar = () => {
  const user = false;
  return (
    <div className="bg-white ">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 p-1 sm:p-2 md:p-4 lg:mx-auto flex-col sm:flex-row">
        <div className="">
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li><Link to={'/'} className="cursor-pointer">Home</Link></li>
            <li><Link to={'/jobs'} className="cursor-pointer">Jobs</Link></li>
            <li><Link to={'/browse'} className="cursor-pointer">Browse</Link></li>
          </ul>
          {
            !user ? (
                <div className="flex items-center gap-2">
                  <Link to={'/login'}><Button variant='outline' >Login</Button></Link>
                  <Link to={'/signup'}><Button className="bg-[#6A38C2] hover:bg-[#4a1f94]">Signup</Button></Link>
                </div>
            ) : (
              <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="">
                <div className="flex gap-4 space-y-2">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div className="">
                    <h4 className="font-medium">Yojal Karki</h4>
                    <p className="text-sm text-muted-foreground ">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                  <Button variant="link">View Profile</Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut/>
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
            )
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
