import { User } from "@/app/types/userManagement";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
type Props = {
  user: User;
};

function UserDetails({ user }: Props) {
  return (
    <>
      {/* Profile */}
      <div className="bg-[#006022] h-40 w-full flex items-center px-20">
        <Avatar className="bg-green h-24 w-24 border-2 border-[#E8F7EC]">
          <AvatarFallback className="bg-[#4E7F57] text-white text-4xl">
            {user.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        {/* User Information */}
        <div className="ml-6 text-white">
          <h1 className="text-3xl font-semibold">{user.name}</h1>
          <p className="text-md">{user.position}</p>
          <p className="text-md">{user.email}</p>
        </div>
      </div>
    </>
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
