import React from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

const fitlerData = [
    {
        fitlerType: "Location",
        array: ["Kathmandu", "Bhaktapur", "Nuwakot", "Lalitpur", "Gorkha"]
    },
    {
        fitlerType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
    {
        fitlerType: "Salary",
        array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
    },
]

const FilterCard = () => {
  return (
    <div className='p-3 w-full bg-white rounded-md'>
        <h1 className='font-bold text-lg'>Filter Jobs</h1>
        <hr className='mt-3'/>
        <RadioGroup>
            {
                fitlerData.map((data, index) => (
                    <div className="flex gap-1 sm:block" key={index}>
                        <h1 className='text-sm sm:text-xl sm:font-bold'>{data.fitlerType}</h1>
                        {
                            data.array.map((item, index) => {
                                return (
                                    <div className="flex items-center space-x-2 my-2">
                                        <RadioGroupItem className="flex" value={item} />
                                        <Label className="text-xs sm:text-base">{item}</Label>
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