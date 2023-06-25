"use client";

import { useQuery } from "@tanstack/react-query";
import { DataTable } from "../Employes/DataTable";

import fetchSearchResult from "@/lib/frontend/GetSearchEmploye";
import { Teams } from "@prisma/client";
import { columns } from "./columnsTeams";

type Props = {};
function Table({}: Props) {
  const Teams = useQuery({
    queryKey: ["teams"],
  });
  if (Teams.isLoading) {
    return <div>Loading...</div>;
  }
  if (Teams.isError) {
    return <div>Error</div>;
  }

  return (
    <div className=" bg-base-100 rounded-xl shadow-xl shadow-base-30">
      <DataTable columns={columns} data={Teams.data as Teams[]} />
    </div>
  );
}
export default Table;
