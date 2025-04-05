import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/slices/authSlice";
import { Loader2 } from "lucide-react";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {loading, user} = useSelector(store => store.auth)

  const handleEventChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    
    
  };
  const handleFileChange = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname)
    formData.append("email", input.email)
    formData.append("phoneNumber", input.phoneNumber)
    formData.append("password", input.password)
    formData.append("role", input.role)
    if(input.file) {
      formData.append("file", input.file)
    }
    try {
      dispatch(setLoading(true))
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        withCredentials: true
      });
      if(res.data.success) {
        navigate('/login')
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error)
      toast.error(error.res.data.message)
    } finally{
      dispatch(setLoading(false))
    }
  }
  useEffect(() => {
      if(user) {
        navigate('/')
      }
    }, [])
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto my-24">
        <form onSubmit={handleSubmit} className="w-1/2 border border-e-gray-200 rounded-md p-4 my-10">
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input 
            type="text" 
            value={input.fullname} 
            name="fullname" 
            onChange={handleEventChange} 
            placeholder="Jhon Doe" />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input 
            type="email" 
            value={input.email} 
            name="email" 
            onChange={handleEventChange} 
            placeholder="jhondoe@gmail.com" />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input 
            type="text" 
            value={input.phoneNumber} 
            name="phoneNumber" 
            onChange={handleEventChange} 
            placeholder="9876543210" />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input 
            type="password"
            value={input.password} 
            name="password" 
            onChange={handleEventChange} 
            placeholder="********" />
          </div>
          <div className="flex items-center justify-between gap-12">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="seeker"
                  checked={input.role === 'seeker'}
                  onChange={handleEventChange}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Seeker</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === 'recruiter'}
                  onChange={handleEventChange}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input 
              type="file" 
              onChange={handleFileChange}
              accept="image/*" 
              className="cursor-pointer" />
            </div>
          </div>
          {
            loading ? (
              <Button className="w-full my-4"><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait</Button>
            ) : (
            <Button type="submit" className="w-full my-4">Log in</Button>
          )
          }
          <span className="text-sm">
            Already have an account?{" "}
            <Link to={"/login"} className="text-blue-600 hover:underline">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
