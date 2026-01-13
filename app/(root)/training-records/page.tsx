import PageHeader from "@/components/dashboard/pageHeader";
import { Checkbox } from "@/components/ui/checkbox";

function TrainingRecords() {
  return (
    <>
      <div className="space-y-4 m-6">
        <PageHeader
          title="Training Records"
          subtitle="Filter and view training records across the organization"
        />
        {/* Filter Part */}
        <div className="border rounded-xl p-4 ">
          <h1 className="text-lg mb-2">Filter Options</h1>
          <p className="text-gray-500">Select Columns to Display</p>
          <div className="grid grid-cols-4 gap-4 mt-4">
            <div className="flex items-center gap-2">
              <Checkbox id="course-code" defaultChecked />
              <label htmlFor="course-code">Course Code</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="course-name" defaultChecked />
              <label htmlFor="course-name">Course Name</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="location" defaultChecked />
              <label htmlFor="location">Location</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="employee-id" defaultChecked />
              <label htmlFor="employee-id">Employee ID</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="name-surname" defaultChecked />
              <label htmlFor="name-surname">Name-Surname</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="position" defaultChecked />
              <label htmlFor="position">Position</label>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="division" defaultChecked />
              <label htmlFor="division">Division</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="line" defaultChecked />
              <label htmlFor="line">Line</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="cost-per-person" defaultChecked />
              <label htmlFor="cost-per-person">Cost(per person)</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="budget-code" defaultChecked />
              <label htmlFor="budget-code">Budget Code</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="evaluate-practical-application" defaultChecked />
              <label htmlFor="evaluate-practical-application">
                Evaluate the practical application of knowledge to work
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="pre-test-post-test" defaultChecked />
              <label htmlFor="pre-test-post-test">Pre-test/Post-test</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrainingRecords;
