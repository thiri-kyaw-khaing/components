import UserDetails from "@/components/userManagement/UserDetails";
import { getUserById } from "@/lib/api/getUser";
import { User } from "@/app/types/userManagement";

type Props = {
  params: Promise<{
    userId: string;
  }>;
};

export default async function UserDetailsPage({ params }: Props) {
  const { userId } = await params;
  const user = await getUserById(userId);

  if (!user) {
    return <div className="p-6">User not found</div>;
  }

  return (
    <div className="mx-auto">
      <UserDetails user={user.data} />
    </div>
  );
}
