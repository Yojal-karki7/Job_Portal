import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/slices/jobSlice'

const fitlerData = [
    {
        fitlerType: "Location",
        array: ["Kathmandu", "Bhaktapur", "Nuwakot", "Lalitpur", "Gorkha"]
    },
    {
        fitlerType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
]

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch()
    const handleChange= (value) => {
        setSelectedValue(value)
    }
    useEffect(() => {
        dispatch(setSearchedQuery(selectedValue))
    }, [selectedValue])
  return (
    <div className='p-3 w-full bg-white rounded-md'>
        <h1 className='font-bold text-lg'>Filter Jobs</h1>
        <hr className='mt-3'/>
        <RadioGroup value={selectedValue} onValueChange={handleChange}>
            {
                fitlerData.map((data, index) => (
                    <div className="flex gap-1 sm:block" key={index}>
                        <h1 className='text-sm sm:text-xl sm:font-bold'>{data.fitlerType}</h1>
                        {
                            data.array.map((item, idx) => {
                                const itemId = `r${index} - ${idx}`
                                return (
                                    <div className="flex items-center space-x-2 my-2" key={idx}>
                                        <RadioGroupItem className="flex" value={item} id={itemId}/>
                                        <Label htmlFor={itemId} className="text-xs sm:text-base">{item}</Label>
                                    </div>
                                )
                            })
                        }
                    </div>
                ))
            }
        </RadioGroup>
    </div>
  )
}

export default FilterCard