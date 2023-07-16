import Canvas from "@/components/Dashboard/Canvas";
import LoadingNavBar from "@/components/Loading/LoadingNavBar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import NavBar from "./NavBar";
import prismaClient from "@/lib/prisma/prisma";
import Comments from "@/components/taskid/Comments";
import { InputForm } from "@/components/taskid/Input";

type Props = {
  params: {
    taskid: string;
  };
};
async function getTaskData(taskid: string) {
  try {
    const data = await prismaClient.teamTask.findUniqueOrThrow({
      where: {
        id: taskid,
      },
      include: {
        TaskComments: true,
      },
    });
    return data;
  } catch (error) {
    return null;
  }
}

async function page({ params }: Props) {
  const taskdata = await getTaskData(params.taskid);
  if (!taskdata) {
    throw new Error("Task not found");
  }
  return (
    <Canvas>
      <NavBar
        task={taskdata.task}
        deadline={taskdata.deadline}
        taskissue={taskdata.createdAt}
      />

      <div className="flex  px-12 gap-16  flex-1">
        <div className="flex flex-col flex-1 gap-8 items-center">
          <h2 className="text-lg uppercase text-primary/50 w-full flex justify-center gap-2">
            {taskdata.task} <span>- </span>
            <span
              className={`${
                taskdata.done ? "text-green-400 " : "text-red-400"
              }`}
            >
              {taskdata.done ? " Done" : " Not Done"}
            </span>
          </h2>
          <div className="flex flex-col gap-3 w-full">
            <h3 className="text-base uppercase text-primary/50 w-full text-center">
              Description
            </h3>
            <div className="p-2 border border-primary rounded-xl h-96 overflow-y-scroll">
              <p className="text-left">{taskdata.description}</p>
            </div>
          </div>
          <div className="flex  gap-3 w-full">
            <Button
              disabled
              className="flex-1 bg-base-100 border border-primary text-primary  rounded-xl hover:bg-primary hover:text-base-100 active:translate-y-1"
            >
              Finish Task
            </Button>{" "}
            <Button
              disabled
              className="flex-1 bg-base-100 border border-primary text-primary  rounded-xl hover:bg-primary hover:text-base-100 active:translate-y-1"
            >
              Change Task
            </Button>{" "}
            <Button
              disabled
              className="flex-1 bg-base-100 border border-primary text-primary  rounded-xl hover:bg-primary hover:text-base-100 active:translate-y-1"
            >
              Change Deadline
            </Button>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-8 items-center my-10">
          <h2 className="text-lg uppercase text-primary/50 w-full text-center">
            Comments
          </h2>
          <div className="flex flex-1  gap-3  flex-col w-full  p-2 border border-primary rounded-xl">
            <Comments taskid={taskdata.id} teamid={taskdata.teamID} />
            <hr className="text-primary bg-primary border-primary" />
            <InputForm taskId={taskdata.id} />
          </div>
        </div>
      </div>
    </Canvas>
  );
}
export default page;
