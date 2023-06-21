"use client";

import { useQuery } from "@tanstack/react-query";
import { DataTable } from "./DataTable";
import { columns } from "./columns";
import fetchSearchResult from "@/lib/frontend/GetSearchEmploye";
import { Employee } from "@prisma/client";

type Props = {};
function Table({}: Props) {
  const employee = useQuery({
    queryKey: ["employee"],
  });
  if (employee.isLoading) {
    return <div>Loading...</div>;
  }
  const data = [
    {
      id: "1",
      firstName: "John",
      salary: 1000,
      role: "Software Engineer",
      email: "123@123.com",
    },
  ];
  console.log(employee.data);
  return (
    <div className=" bg-base-100 rounded-xl">
      <DataTable columns={columns} data={employee.data as Employee[]} />
      {/* <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Employee Name</th>

            <th>Employee Department</th>
            <th>Employee Salary</th>
          </tr>
        </thead>
      </table> */}
    </div>
  );
}
export default Table;
