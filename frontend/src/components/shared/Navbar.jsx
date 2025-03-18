import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover } from "../ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/slices/authSlice";

const Navbar = () => {
  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogout = async() => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {withCredentials: true});
      if(res.data.success) {
        dispatch(setUser(null))
        navigate('/login');
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  }
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
                  src={user?.profile?.profilePhoto || 'https://imgs.search.brave.com/RCee6HUBeX3xWQX3_76YnN-q-h6oRKTEbe4aBxvUcCE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvYXZhdGFyLXBy/b2ZpbGUtcGljdHVy/ZS1pY29uLWJsdWUt/YmFja2dyb3VuZC1m/bGF0LWRlc2lnbi1z/dHlsZS1yZXNvdXJj/ZXMtZ3JhcGhpYy1l/bGVtZW50LWRlc2ln/bl85OTE3MjAtNjUz/LmpwZz9zZW10PWFp/c19oeWJyaWQ'}
                  alt="@shadcn"
                  className="object-cover"
                />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="">
                <div className="flex gap-4 space-y-2">
                  <Avatar>
                    <AvatarImage
                      src={user?.profile?.profilePhoto || 'https://imgs.search.brave.com/RCee6HUBeX3xWQX3_76YnN-q-h6oRKTEbe4aBxvUcCE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvYXZhdGFyLXBy/b2ZpbGUtcGljdHVy/ZS1pY29uLWJsdWUt/YmFja2dyb3VuZC1m/bGF0LWRlc2lnbi1z/dHlsZS1yZXNvdXJj/ZXMtZ3JhcGhpYy1l/bGVtZW50LWRlc2ln/bl85OTE3MjAtNjUz/LmpwZz9zZW10PWFp/c19oeWJyaWQ'}
                      alt="@shadcn"
                      className="object-cover"
                    />
                  </Avatar>
                  <div className="">
                    <h4 className="font-medium">{user?.fullname}</h4>
                    <p className="text-sm text-muted-foreground ">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                  <Button variant="link"><Link to={'/profile'}>View Profile</Link></Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut/>
                    <Button onClick={handleLogout} variant="link">Logout</Button>
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
