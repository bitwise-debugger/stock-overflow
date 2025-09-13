"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  ClipboardList,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PackageSearch,
  PieChart,
  Settings2,
  SquareTerminal,
  UsersRound,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Accounts",
      url: "/accounts",
      icon: UsersRound,
      isActive: true,
      items: [
        {
          title: "Google Login Requests",
          url: "/admin/dashboard/accounts/google-login-requests",
        },
        {
          title: "Manage Accounts",
          url: "/admin/dashboard/accounts/manage-accounts",
        },
      ],
    },
    {
      title: "Products",
      url: "/products",
      icon: PackageSearch,
      items: [
        {
          title: "All Products",
          url: "/admin/dashboard/products/all-products",
        },
        {
          title: "Damaged Products",
          url: "/admin/dashboard/products/damaged-products",
        },
        {
          title: "On Low",
          url: "/admin/dashboard/products/low-products",
        },
      ],
    },
    {
      title: "Reports",
      url: "/reports",
      icon: ClipboardList,
      items: [
        {
          title: "Sales Report",
          url: "/admin/dashboard/reports/sales-reports",
        },
        {
          title: "Old Reports",
          url: "/admin/dashboard/reports/old-reports",
        },
      ],
    },
  ],
  projects: [
    // {
    //   name: "Design Engineering",
    //   url: "#",
    //   icon: Frame,
    // },
    // {
    //   name: "Sales & Marketing",
    //   url: "#",
    //   icon: PieChart,
    // },
    // {
    //   name: "Travel",
    //   url: "#",
    //   icon: Map,
    // },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
