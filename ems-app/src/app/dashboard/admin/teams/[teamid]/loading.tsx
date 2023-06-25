import LoadingNavBar from "@/components/Loading/LoadingNavBar";
import LoadingTeam from "@/components/Loading/LoadingTeam";

type Props = {};
function loading({}: Props) {
  return (
    <div className="flex flex-1 flex-col p-4">
      <div className="bg-base-100 p-4 rounded-lg flex flex-col gap-8 flex-1">
        <LoadingNavBar />
        <hr />
        <LoadingTeam />
      </div>
    </div>
  );
}
export default loading;
