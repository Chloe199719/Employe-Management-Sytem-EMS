import Canvas from "@/components/Dashboard/Canvas";
import LoadingNavBar from "@/components/Loading/LoadingNavBar";

type Props = {};
function loading({}: Props) {
  return (
    <Canvas>
      <LoadingNavBar />
    </Canvas>
  );
}
export default loading;
