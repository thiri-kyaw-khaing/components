"use client";

import {
  ArchiveIcon,
  BookOpen,
  Calendar,
  DownloadIcon,
  GoalIcon,
  Home,
  Inbox,
  Notebook,
  PersonStandingIcon,
  SaveIcon,
  Search,
  Settings,
  User,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
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

  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
  },
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

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="none">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="m-4 space-y-4">
              <LogoCard />
              <UserInfo />
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
    </Sidebar>
  );
}
