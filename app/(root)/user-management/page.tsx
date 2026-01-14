import ButtonDialog from "@/components/dashboard/buttonDialog";
import PageHeader from "@/components/dashboard/pageHeader";
import UserForm from "@/components/userManagement/UserForm";
import UserTable from "@/components/userManagement/userTable";
import { Search, User } from "lucide-react";
import React from "react";

function UserManagement() {
  return (
    <>
      <div className="p-6 max-w-7xl mx-auto">
        <PageHeader
          title="User Management"
          subtitle="Manage users, assign roles, and view activity"
          action={
            <ButtonDialog name="Add User">
              <UserForm />
            </ButtonDialog>
          }
        />

        <div className="border border-[#006022] rounded-lg p-2 flex items-center gap-2 my-6">
          <Search className="text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, email, or employee ID..."
            className="w-full outline-none border-none focus:ring-0"
            // value={searchTerm} // ✅ controlled value
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <UserTable />
      </div>
    </>
  );
}

export default UserManagement;
