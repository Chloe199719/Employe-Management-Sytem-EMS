import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
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
                <li className="flex items-center justify-between w-2/3">
                  <span>
                    {member.firstName} {member.lastName}
                  </span>
                  {/* PlaceHolder */}
                  <span>X</span>
                </li>
              );
            })
          ) : (
            <li>No members</li>
          )}
        </ul>
        <Button className="w-2/3 bg-base-100 border border-primary text-primary  rounded-xl hover:bg-primary hover:text-base-100 active:translate-y-1">
          Team Member
        </Button>
      </div>
      <div className="flex flex-1 flex-col gap-8">
        <h2 className="text-lg uppercase text-primary/50">Tasks</h2>

        <ul className="flex flex-col w-full gap-5">
          {teamData.TeamTask.length > 0 ? (
            teamData.TeamTask.map((task) => {
              return (
                <li className="flex items-center justify-between w-2/3">
                  <span>{task.task}</span>
                  <span>{task.deadline.toDateString()} </span>
                  {/* PlaceHolder */}
                  <span>X</span>
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
