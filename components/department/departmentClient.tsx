"use client";

import ButtonDialog from "@/components/dashboard/buttonDialog";
import DepartmentCard from "@/components/department/departmentCard";
import DialogForm from "@/components/dashboard/dialogForm";
import PageHeader from "@/components/dashboard/pageHeader";
import { Search, UsersIcon } from "lucide-react";
import { departments } from "@/lib/data";
import { Department } from "@/app/types/department";
import { useState } from "react";
import { useRouter } from "next/navigation";
import StaffDialog from "@/components/department/staffDialog";
import DeleteDepartmentDialog from "@/components/department/DeleteDepartmentDialog";
import EditDepartmentDialog from "@/components/department/EditDepartmentDialog";

function DepartmentPage({ departments }: { departments: Department[] }) {
  const router = useRouter();
  const [selectedDepartment, setSelectedDepartment] =
    useState<Department | null>(null);
  const [activeDialog, setActiveDialog] = useState<
    "staff" | "edit" | "delete" | null
  >(null);
  const [search, setSearch] = useState("");

  // const filteredDepartments = departments.filter((dept) =>
  //   dept.name.toLowerCase().includes(search.toLowerCase()),
  // );

  return (
    <div className="min-h-screen space-y-4 m-2">
      <PageHeader
        title="Department Management"
        subtitle="Manage departments, assign managers, and view staff"
        action={
          <ButtonDialog name="Add Department">
            <DialogForm />
          </ButtonDialog>
        }
      />
      {/* Search bar */}
      <div className="border border-[#006022] rounded-lg p-2 flex items-center gap-2 mt-6">
        <Search className="text-gray-400" />
        <input
          type="text"
          placeholder="Search departments..."
          className="w-full outline-none border-none focus:ring-0"
          value={search} // ✅ controlled value
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="mt-6 grid lg:grid-cols-3 gap-4">
        {departments.map((dept) => (
          <DepartmentCard
            key={dept.id}
            department={dept}
            onViewStaff={(department) => {
              // setSelectedDepartment(department);
              // setActiveDialog("staff");
              router.push(`/departments/${department.id}`); // navigate to staff page
            }}
            onEdit={(department) => {
              setSelectedDepartment(department);
              setActiveDialog("edit");
            }}
            onDelete={(department) => {
              setSelectedDepartment(department);
              setActiveDialog("delete");
            }}
          />
        ))}
      </div>

      {/* STAFF */}
      {/* {activeDialog === "staff" && selectedDepartment && (
        <StaffDialog
          department={selectedDepartment}
          onClose={() => {
            setActiveDialog(null);
            setSelectedDepartment(null);
          }}
        />
      )} */}

      {/* EDIT */}
      {activeDialog === "edit" && selectedDepartment && (
        <EditDepartmentDialog
          department={selectedDepartment}
          onClose={() => {
            setActiveDialog(null);
            setSelectedDepartment(null);
          }}
        />
      )}

      {/* DELETE */}
      {activeDialog === "delete" && selectedDepartment && (
        <DeleteDepartmentDialog
          department={selectedDepartment}
          onCancel={() => {
            setActiveDialog(null);
            setSelectedDepartment(null);
          }}
          onConfirm={() => {
            // deleteDepartment(selectedDepartment.id);
            setActiveDialog(null);
            setSelectedDepartment(null);
          }}
        />
      )}

      {/* <DeleteDepartmentDialog
      // open={mode === "delete"}
      // department={selectedDepartment}
      // onClose={() => setMode(null)}
      // onConfirm={handleDelete}
      /> */}
    </div>
  );
}

export default DepartmentPage;
// "use client";

// import ButtonDialog from "@/components/dashboard/buttonDialog";
// import DepartmentCard from "@/components/department/departmentCard";
// import DialogForm from "@/components/dashboard/dialogForm";
// import PageHeader from "@/components/dashboard/pageHeader";
// import { Search } from "lucide-react";
// import { Department } from "@/app/types/department";
// import { useEffect, useState } from "react";
// import StaffDialog from "@/components/department/staffDialog";
// import DeleteDepartmentDialog from "@/components/department/DeleteDepartmentDialog";
// import EditDepartmentDialog from "@/components/department/EditDepartmentDialog";

// function DepartmentPage() {
//   const [departments, setDepartments] = useState<Department[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [selectedDepartment, setSelectedDepartment] =
//     useState<Department | null>(null);

//   const [activeDialog, setActiveDialog] = useState<
//     "staff" | "edit" | "delete" | null
//   >(null);

//   const [search, setSearch] = useState("");

//   // 🔥 FETCH + TEST COOKIE
//   useEffect(() => {
//     fetch("http://localhost:8080/api/v1/admin/departments", {
//       method: "GET",
//       credentials: "include", // ✅ IMPORTANT (send cookie)
//     })
//       .then(async (res) => {
//         console.log("🔥 STATUS:", res.status);

//         const data = await res.json();
//         console.log("🔥 FULL RESPONSE:", data);

//         if (!res.ok) {
//           throw new Error("Unauthorized");
//         }

//         return data;
//       })
//       .then((data) => {
//         // ✅ FIX: handle different API shapes
//         if (Array.isArray(data)) {
//           setDepartments(data);
//         } else if (Array.isArray(data.data)) {
//           setDepartments(data.data);
//         } else {
//           console.error("❌ Unexpected data format:", data);
//           setDepartments([]);
//         }
//       })
//       .catch((err) => {
//         console.error("❌ FETCH ERROR:", err);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   // ✅ SAFE FILTER (no crash)
//   const filteredDepartments = Array.isArray(departments)
//     ? departments.filter((dept) =>
//         dept.name.toLowerCase().includes(search.toLowerCase()),
//       )
//     : [];

//   if (loading) return <p>Loading departments...</p>;

//   return (
//     <div className="min-h-screen space-y-4 m-2">
//       <PageHeader
//         title="Department Management"
//         subtitle="Manage departments, assign managers, and view staff"
//         action={
//           <ButtonDialog name="Add Department">
//             <DialogForm />
//           </ButtonDialog>
//         }
//       />

//       {/* 🔍 Search */}
//       <div className="border border-[#006022] rounded-lg p-2 flex items-center gap-2 mt-6">
//         <Search className="text-gray-400" />
//         <input
//           type="text"
//           placeholder="Search departments..."
//           className="w-full outline-none"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* 📦 Cards */}
//       <div className="mt-6 grid lg:grid-cols-3 gap-4">
//         {filteredDepartments.map((dept) => (
//           <DepartmentCard
//             key={dept.id}
//             department={dept}
//             onViewStaff={(department) => {
//               setSelectedDepartment(department);
//               setActiveDialog("staff");
//             }}
//             onEdit={(department) => {
//               setSelectedDepartment(department);
//               setActiveDialog("edit");
//             }}
//             onDelete={(department) => {
//               setSelectedDepartment(department);
//               setActiveDialog("delete");
//             }}
//           />
//         ))}
//       </div>

//       {/* 👥 STAFF */}
//       {activeDialog === "staff" && selectedDepartment && (
//         <StaffDialog
//           department={selectedDepartment}
//           onClose={() => {
//             setActiveDialog(null);
//             setSelectedDepartment(null);
//           }}
//         />
//       )}

//       {/* ✏️ EDIT */}
//       {activeDialog === "edit" && selectedDepartment && (
//         <EditDepartmentDialog
//           department={selectedDepartment}
//           onClose={() => {
//             setActiveDialog(null);
//             setSelectedDepartment(null);
//           }}
//         />
//       )}

//       {/* 🗑 DELETE */}
//       {activeDialog === "delete" && selectedDepartment && (
//         <DeleteDepartmentDialog
//           department={selectedDepartment}
//           onCancel={() => {
//             setActiveDialog(null);
//             setSelectedDepartment(null);
//           }}
//           onConfirm={() => {
//             console.log("Deleting:", selectedDepartment.id); // 🔥 test
//             setActiveDialog(null);
//             setSelectedDepartment(null);
//           }}
//         />
//       )}
//     </div>
//   );
// }

// export default DepartmentPage;
