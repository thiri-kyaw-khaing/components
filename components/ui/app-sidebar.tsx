"use client";

import {
  BookOpen,
  DownloadIcon,
  Home,
  Inbox,
  LogOut,
  Notebook,
  User,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import LogoCard from "../logoCard";
import UserInfo from "../userInfo";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { logoutAction } from "@/lib/actions/AdminLogin/logout";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Departments",
    url: "/departments",
    icon: Inbox,
  },
  {
    title: "User Management",
    url: "/user-management",
    icon: User,
  },

  // {
  //   title: "Calendar",
  //   url: "/calendar",
  //   icon: Calendar,
  // },
  {
    title: "Training Plans",
    url: "/training-plans",
    icon: BookOpen,
  },
  {
    title: "Training Records",
    url: "/training-records",
    icon: Notebook,
  },
  {
    title: "Uploaded Certificates",
    url: "/uploaded-certificates",
    icon: DownloadIcon,
  },
];

type AppSidebarProps = {
  user: {
    name: string;
    position: string;
    employeeID: string;
  };
};

export function AppSidebar({ user }: AppSidebarProps) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <div className="m-4 space-y-4">
              <LogoCard />
              <UserInfo
                name={user.name}
                position={user.position}
                employeeID={user.employeeID}
              />
            </div>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className="
                        data-[active=true]:bg-[#006022]
                        data-[active=true]:text-white
                        text-md px-3 py-4 rounded-md 
                      "
                    >
                      <Link href={item.url} className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        <span className="">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <form action={logoutAction} className="p-2">
          <Button
            type="submit"
            variant="ghost"
            className="w-full justify-start gap-2 text-red-600 hover:text-red-700"
          >
            <LogOut className="h-4 w-4" />
            <span>Log out</span>
          </Button>
        </form>
      </SidebarFooter>
    </Sidebar>
  );
}
