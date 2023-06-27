import AddEmployerBtn from "@/components/teamsID/AddEmployerBtn";
import WarningDialogRemove from "@/components/teamsID/WarningDialogRemove";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";

import { Prisma } from "@prisma/client";

const teamWith = Prisma.validator<Prisma.TeamsArgs>()({
  include: {
    members: {
      select: {
        firstName: true,
        lastName: true,
        email: true,
        id: true,
      },
    },
    TeamTask: true,
  },
});
type TeamWith = Prisma.TeamsGetPayload<typeof teamWith>;
type Props = {
  teamData: TeamWith;
};
function Team({ teamData }: Props) {
  return (
    <div className="flex pl-20 px-12 gap-10">
      <div className="flex flex-col flex-1 gap-8">
        <h2 className="text-lg uppercase text-primary/50">Team Members</h2>
        <ul className="flex flex-col w-full gap-5">
          {teamData.members.length > 0 ? (
            teamData.members.map((member) => {
              return (
                <li
                  key={member.id}
                  className="flex items-center justify-between w-2/3"
                >
                  <span className="">
                    {member.firstName} {member.lastName} - {member.email}
                  </span>
                  {/* PlaceHolder */}
                  <span>
                    <WarningDialogRemove id={member.id} />
                  </span>
                </li>
              );
            })
          ) : (
            <li>No members</li>
          )}
        </ul>
        <AddEmployerBtn id={teamData.id} />
      </div>
      <div className="flex flex-1 flex-col gap-8">
        <h2 className="text-lg uppercase text-primary/50">Tasks</h2>

        <ul className="flex flex-col w-full gap-5">
          {teamData.TeamTask.length > 0 ? (
            teamData.TeamTask.map((task) => {
              return (
                <li
                  key={task.id}
                  className="grid grid-cols-3 justify-between w-2/3"
                >
                  <span>{task.task}</span>
                  <span>{task.deadline.toDateString()} </span>
                  {/* PlaceHolder */}
                  <span className=" justify-self-end">X</span>
                </li>
              );
            })
          ) : (
            <li>No tasks</li>
          )}
        </ul>

        <Button className="w-2/3 bg-base-100 border border-primary text-primary  rounded-xl hover:bg-primary hover:text-base-100 active:translate-y-1">
          Add Task
        </Button>
      </div>
    </div>
  );
}
export default Team;
