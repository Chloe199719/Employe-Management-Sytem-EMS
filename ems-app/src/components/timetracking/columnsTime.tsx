"use client";

import { Teams } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { TimeWith } from "./TableTime";

export const columns: ColumnDef<TimeWith>[] = [
  {
    accessorKey: "startTime",
    header: "Start Time",
    cell: ({ row }) => {
      const formatted = `${new Date(row.original.timeIn).toLocaleString()}`;

      return <div className="">{formatted}</div>;
    },
  },
  {
    accessorKey: "endTime",
    header: "End Time",
    cell: ({ row }) => {
      if (row.original.timeOut === null) {
        return <div className="">-</div>;
      }
      const formatted = `${new Date(row.original.timeOut).toLocaleString()}`;

      return <div className="">{formatted}</div>;
    },
  },
  {
    accessorKey: "employeeName",
    header: "Employee Name",
    cell: ({ row }) => {
      const formatted = `${row.original.employee.firstName} ${row.original.employee.lastName}`;

      return (
        <div className="">
          <Link
            className="link link-primary link-hover"
            href={`/dashboard/admin/employee/${row.original.employeeID}`}
          >
            {formatted}
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: "employeeEmail",
    header: "Employee Email",
    cell: ({ row }) => {
      const formatted = `${row.original.employee.email}`;

      return <div className="">{formatted}</div>;
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const tasks = row.original;

      return (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className=" bg-base-100">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>INOP</DropdownMenuItem>
              <DropdownMenuSeparator />
              {/* <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
