import ButtonDialog from "@/components/dashboard/buttonDialog";
import PageHeader from "@/components/dashboard/pageHeader";
import UserForm from "@/components/userManagement/UserForm";
import UserTable from "@/components/userManagement/userTable";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { getUsers } from "@/lib/api/getUser";
import { User } from "@/app/types/userManagement";

function normalizeUsers(payload: unknown): User[] {
  const data = payload as {
    data?: {
      items?: User[];
    } | User[];
  };

  if (Array.isArray(payload)) {
    return payload;
  }

  if (Array.isArray(data?.data) && data.data.every((u) => !!u)) {
    return data.data;
  }

  if (
    data?.data &&
    !Array.isArray(data.data) &&
    Array.isArray(data.data.items)
  ) {
    return data.data.items;
  }

  return [];
}

async function UserManagement() {
  const userResponse = await getUsers();
  const users = normalizeUsers(userResponse);
  console.log("Fetched users:", users);

  return (
    <>
      <div className="min-h-screen space-y-4 m-2">
        <PageHeader
          title="User Management"
          subtitle="Manage users, assign roles, and view activity"
          action={
            <ButtonDialog name="Add User">
              <UserForm />
            </ButtonDialog>
          }
        />

        <div className="flex items-center gap-4 my-4 justify-between">
          {/* Search */}
          {/* <div className="relative w-[70%]"> */}
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search by name, email, or employee ID..."
              className="pl-9 border-[#006022]"
            />
          </div>

          {/* Filter */}
          {/* <Select>
            <SelectTrigger className="w-[180px] border-[#006022]">
              <SelectValue placeholder="Suspended" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="suspended">Suspended</SelectItem>
            </SelectContent>
          </Select> */}

          {/* Button */}
          {/* <Button className="bg-[#006022] hover:bg-[#005018] px-8">
            Search
          </Button> */}
        </div>
        <div className="">
          <UserTable users={users} />
        </div>
      </div>
    </>
  );
}

export default UserManagement;
