import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import AdminJobsTable from './AdminJobsTable'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import { setSearchJobByText } from '@/redux/slices/jobSlice'

const AdminJobs = () => {
  useGetAllAdminJobs();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(setSearchJobByText(input));
  }, [input])
  return (
    <div>
      <Navbar />
      <div className="p-2 max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between my-5">
        <Input 
        className="w-fit"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Filter by name,role"
        />
        <Button className="" onClick={()=>navigate('/admin/jobs/create')}>New Job</Button>
        </div>
        <AdminJobsTable />
      </div>
    </div>
  )
}

export default AdminJobs