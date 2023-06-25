import LoadingNavBar from "@/components/Loading/LoadingNavBar";
import LoadingTeam from "@/components/Loading/LoadingTeam";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";
import NavBar from "./NavBar";
import prismaClient from "@/lib/prisma/prisma";

type Props = {
  params: {
    teamid: string;
  };
};
async function getTeamData(teamid: string) {
  try {
    const data = await prismaClient.teams.findUniqueOrThrow({
      where: {
        id: teamid,
      },
      include: {
        members: true,
      },
    });
    return data;
  } catch (error) {
    return null;
  }
}
function delay() {
  return new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
}

async function page({ params }: Props) {
  await delay();
  const teamData = await getTeamData(params.teamid);
  if (!teamData) {
    throw new Error("Team not found");
  }
  return (
    <div className="flex flex-1 flex-col p-4">
      <div className="bg-base-100 p-4 rounded-lg flex flex-col gap-8 flex-1">
        <NavBar
          created={teamData.createdAt}
          teamName={teamData.name}
          teamId={teamData.id}
        />
        <hr />
      </div>
    </div>
  );
}
export default page;
