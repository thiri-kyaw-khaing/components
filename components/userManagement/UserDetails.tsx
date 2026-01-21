import { User } from "@/app/types/userManagement";

type Props = {
  user: User;
};

function UserDetails({ user }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Detail label="Employee ID" value={user.id} />
      <Detail label="Name" value={user.name} />
      <Detail label="Email" value={user.email} />
      <Detail label="Phone" value={user.phone} />
      <Detail label="Department" value={user.department} />
      <Detail label="Role" value={user.role} />
      <Detail label="Position" value={user.position} />
      <Detail label="Agency" value={user.agency} />
      <Detail label="Cotton" value={user.cotton} />
      <Detail label="Line" value={user.line} />
      <Detail label="Status" value={user.status} />
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}

export default UserDetails;
