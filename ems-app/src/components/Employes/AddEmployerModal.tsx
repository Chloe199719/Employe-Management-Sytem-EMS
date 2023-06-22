import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import fetchGuests from "@/lib/frontend/fetchGuests";
import { User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { use, useEffect, useState } from "react";

type Props = {
  trigger: boolean;
};
function AddEmployerModal({ trigger }: Props) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const users = useQuery({
    queryKey: ["guests"],
    queryFn: async () => fetchGuests(),
    enabled: trigger,
  });

  useEffect(() => {
    if (trigger === false) {
      setSelectedUser(null);
    }
  }, [trigger]);
  return (
    <SheetContent className="bg-base-100">
      <SheetHeader>
        <SheetTitle>Are you sure absolutely sure?</SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers. for
        </SheetDescription>
      </SheetHeader>
      {users.data && (
        <select
          onChange={(e) => {
            if (e.target.value === "Select a user") {
              setSelectedUser(null);
              return;
            }
            if (!users.data) {
              return;
            }
            setSelectedUser(users.data[parseInt(e.target.value)]);
          }}
        >
          <option>Select a user</option>
          {users.data.map((user, index) => {
            return (
              <option key={user.id} value={index}>
                {`${user.firstName} ${user.lastName} ${user.email}}`}
              </option>
            );
          })}
        </select>
      )}
      {selectedUser && (
        <form>
          <input type="text" value={selectedUser.firstName!} />
          <input type="text" value={selectedUser.lastName!} />
          <input type="text" value={selectedUser.email!} />
          <input type="text" /> {/* phone */}
          <input type="text" /> {/* role */}
          <input type="text" /> {/* salary */}
          <input type="text" /> {/* Bank Account IBAN */}
          <input type="text" /> {/* Position */}
          <input type="text" /> {/* taxId  */}
          <input type="text" /> {/* Address */}
          <input type="text" /> {/* Insurance */}
          <input type="text" /> {/* onBoarding */}
        </form>
      )}
    </SheetContent>
  );
}
export default AddEmployerModal;
