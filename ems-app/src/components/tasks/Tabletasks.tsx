"use client";

import { useQuery } from "@tanstack/react-query";
import { DataTable } from "../Employes/DataTable";

import { Prisma } from "@prisma/client";
import { columns } from "./columnsTasks";

export const taskWith = Prisma.validator<Prisma.TeamTaskArgs>()({
  include: {
    team: true,
  },
});
export type taskWith = Prisma.TeamTaskGetPayload<typeof taskWith>;
type Props = {};
function Table({}: Props) {
  const Teams = useQuery({
    queryKey: ["tasks"],
  });
  if (Teams.isLoading) {
    return <div>Loading...</div>;
  }
  if (Teams.isError) {
    return <div>Error</div>;
  }
  console.log(Teams.data);
  return (
    <div className=" bg-base-100 rounded-xl shadow-xl shadow-base-30">
      <DataTable columns={columns} data={Teams.data as taskWith[]} />
    </div>
  );
}
export default Table;
