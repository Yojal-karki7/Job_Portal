import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";

const CompaniesTable = () => {
  const { companies } = useSelector((store) => store.company);
  console.log(companies);

  return (
    <div>
      <Table>
        <TableCaption>A list of your registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-center lg:text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies?.map((company) => (
              <tr>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={company.logo || "https://imgs.search.brave.com/fU6JMimMSX5uhPjNUOGEJDRl1R74001yPAjHI-Ajta4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE4LzM5LzE1/LzM2MF9GXzIxODM5/MTU1OV9IN3ZIVGtu/b0JyVklndFY4UkF3/T1lzRmFidHpCSmpV/US5qcGc"} />
                  </Avatar>
                </TableCell>
                <TableCell>{company.name}</TableCell>
                <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                <TableCell className="text-center lg:text-right cursor-pointer">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      <div className="flex items-center gap-2 w-fit cursor-pointer">
                        <Edit2 />
                        <span>Edit</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
