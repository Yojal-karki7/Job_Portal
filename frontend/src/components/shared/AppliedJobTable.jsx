import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from '../ui/badge'
import { useSelector } from 'react-redux';

const AppliedJobTable = () => {
    const {allAppliedJobs} = useSelector(store=>store.job);
  return (
    <div>
        <Table>
            <TableCaption>A list of your applied jobs</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Job Role</TableHead>
                    <TableHead>Comapny</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                allAppliedJobs < 0 ? <span>You haven't applied for any job yet!</span> : allAppliedJobs.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell>{item?.createdAt.split("T")[0]}</TableCell>
                        <TableCell>{item?.job?.title}</TableCell>
                        <TableCell>{item?.job?.company?.name}</TableCell>
                        <TableCell className="text-right capitalize"><Badge className={`${item?.status === 'rejected' ? 'bg-red-400' : item?.status === 'pending' ? 'bg-gray-400' : 'bg-green-400'} w-19`}>{item?.status}</Badge></TableCell>
                    </TableRow>
                ))
                }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable