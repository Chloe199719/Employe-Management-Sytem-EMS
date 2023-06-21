type Props = {};
function Table({}: Props) {
  return (
    <div className=" overflow-y-scroll overscroll-contain bg-base-100 rounded-xl">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Employee Name</th>

            <th>Employee Department</th>
            <th>Employee Salary</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
export default Table;
