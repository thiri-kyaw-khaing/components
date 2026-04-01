// import PageHeader from "@/components/dashboard/pageHeader";

// import FilterGroup from "@/components/training-records/FilterGroup";

// import TrainingRecordTable from "@/components/training-records/TrainingRecordTable";
// import { Button } from "@/components/ui/button";
// import { getDepartments } from "@/lib/actions/AdminDepartment/getDepartment";

// async function TrainingRecords() {
//   const handleSearch = async () => {
//     // call API with filters
//   };
//   const departments = await getDepartments();
//   return (
//     <>
//       <div className="min-h-screen space-y-4 m-2">
//         <PageHeader
//           title="Training Records"
//           subtitle="Filter and view training records across the organization"
//         />

//         {/* <FilterGroup>
//           <RangeCalendar />
//         </FilterGroup> */}
//         <FilterGroup departments={departments.data.items} />

//         <div className="border rounded-md">
//           <TrainingRecordTable />
//         </div>

//         <Button className="items-center justify-center">Next</Button>
//       </div>
//     </>
//   );
// }

// export default TrainingRecords;

import PageHeader from "@/components/dashboard/pageHeader";
import TrainingRecordsClient from "@/components/training-records/trainingRecordClient";
import { getDepartments } from "@/lib/actions/AdminDepartment/getDepartment";

async function TrainingRecords() {
  const departments = await getDepartments();

  return (
    <div className="min-h-screen space-y-4 m-2">
      <PageHeader
        title="Training Records"
        subtitle="Filter and view training records across the organization"
      />

      <TrainingRecordsClient departments={departments.data.items} />
    </div>
  );
}

export default TrainingRecords;
