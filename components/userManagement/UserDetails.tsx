import { User } from "@/app/types/userManagement";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeftIcon, Award, Bookmark, Building, Mail } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";
import { CertificateCard } from "./certificationCard";
import Detail from "./detailText";
type Props = {
  user: any;
};

function UserDetails({ user }: Props) {
  return (
    <>
      <div className="bg-[#006022] h-40 w-full flex items-center px-12">
        <Button
          asChild
          variant="ghost"
          className="text-white hover:bg-transparent mr-4"
        >
          <Link href="/user-management">
            <ArrowLeftIcon className="mr-2 h-8 w-8" />
          </Link>
        </Button>
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
      {/* Profile */}
      {/* Content Area */}
      <div className="mx-12 mt-8 space-y-6">
        {/* Details Section */}
        <div className="flex flex-col md:flex-row gap-18">
          <Section icon={<Mail />} title="Contact Information">
            <div className="space-y-4">
              <Detail label="Email" value={user.email} />
              <Detail label="Phone" value={user.phone} />
            </div>
          </Section>

          <Section icon={<Building />} title="Work Details">
            <Detail label="Department" value={user.department.name} />
            <Detail label="Division" value={user.department.division} />
            <Detail label="Status" value={user.status} />
            <Detail label="Employee ID" value={user.id} />
          </Section>
        </div>

        {/* Certifications Title */}
        <div className="flex items-center gap-2 text-[#006022]">
          <Award className="h-6 w-6" />
          <h2 className="text-xl font-semibold">
            Certifications & Qualifications
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {user.certifications.map((cert: any) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </div>
    </>
  );
}

function Section({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#E8F7EC] p-2 rounded-md text-[#006022] w-[500px] p-6 space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2 mb-4 border-rounded-md">
        {icon}
        <span className="text-xl font-semibold">{title}</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
    </div>
  );
}

export default UserDetails;
