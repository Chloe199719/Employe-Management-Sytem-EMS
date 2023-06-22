import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
type Props = {};
function AddEmployerModal({}: Props) {
  console.log("AddEmployerModal");
  return (
    <SheetContent className="bg-base-100">
      <SheetHeader>
        <SheetTitle>Are you sure absolutely sure?</SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers. for
        </SheetDescription>
      </SheetHeader>
      <form className="p-4 space-y-4">
        <input type="text" />
      </form>
      <button>Test</button>
    </SheetContent>
  );
}
export default AddEmployerModal;
