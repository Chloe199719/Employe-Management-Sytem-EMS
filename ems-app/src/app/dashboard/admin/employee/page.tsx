import Search from "@/components/Employes/Search";
import Table from "@/components/Employes/Table";

type Props = {};
async function page({}: Props) {
  return (
    <div className="flex flex-col text-primary bg-base-200 flex-1 p-4 gap-4">
      <Search />
      <Table />
      <dialog id="addEmployee" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box bg-base-300 text-primary">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
export default page;
