import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/slices/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleSearchJob = ()=> {
    dispatch(setSearchedQuery(query));
    navigate('/browse');
  }
  return (
    <div className='text-center'>
        <div className="flex flex-col gap-5 my-10">
        <span className='font-medium px-4 py-2 mx-auto rounded-full bg-gray-100 text-[#F83002]'>No. 1 Job Hunt Website</span>
        <h1 className='text-5xl font-bold '>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
        <p className='text-sm text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quisquam voluptatem maiores vero dignissimos.</p>
            <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded items-center gap-4 mx-auto">
                <input 
                type='text'
                placeholder='Find your dream jobs'
                onChange={(e)=>setQuery(e.target.value)}
                className='outline-none border-none w-full px-1 py-2'
                />
                <Button onClick={handleSearchJob} className="rounded-r bg-[#6A38C2]">
                    <Search className='h-5 w-5'/>
                    </Button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection