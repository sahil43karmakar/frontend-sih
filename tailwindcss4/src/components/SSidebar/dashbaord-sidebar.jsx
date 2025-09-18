import {Link} from "react-router-dom";

import { Code2, Paperclip, Bell, ClipboardList , User , File } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarMenuItem,
  SidebarFooter,
  SidebarMenu,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenuButton,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";

const elements = [
  {
    title: "Dashboard",
    url: "/dashboard/dashboardPage",
    icon: Paperclip,
  },
  {
    title: "Upload",
    url: "/dashboard/upload",
    icon: Bell,
  },
  {
    title: "Economic Data ",
    url: "/dashboard/economic",
    icon: User,
  },
  {
    title: "History",
    url: "/dashboard/history",
    icon: User,
  },
  {
    title: "Voice Assistant",
    url: "/dashboard/voice",
    icon: File,
  },
  {
    title: "AI Assistant",
    url: "/dashboard/ai",
    icon: File,
  },
  {
    title: "Profile",
    url: "/admin/requests",
    icon: File,
  },
  {
    title: "Settings",
    url: "/admin/requests",
    icon: File,
  },

];

// const items = [
//   {
//     title: "Web development",
//     url: "#",
//     icon: Code2,
//   },
// ];

export function AdminSidebar() {
  return (
    <Sidebar className="pt-10 [&>div]:bg-[#DCE7F8] shadow-xl">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {elements.map((ele) => (
                <SidebarMenuItem key={ele.title}>
                  <SidebarMenuButton asChild>
                     <Link to={ele.url} className="flex items-center gap-3 px-3 py-2 rounded hover:bg-[#C5D7F8]">
                      <ele.icon className="w-5 h-5 text-[#2A2A4A]" />
                      <span className="font-madimi text-[#2A2A4A] text-[16px]">{ele.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-8">
          {/* <SidebarGroupLabel className="font-madimi
                          
                          text-bold
                          text-[16px]
                          
                          
                          text-[#2A2A4A] 
                          font-large
                          
                          ">Domains</SidebarGroupLabel> */}
          <SidebarGroupContent>
            {/* <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span
                        className="
                          font-madimi
                          font-normal
                          text-bold
                          text-[16px]
                          
                          
                          text-[#2A2A4A]
                          
                        "
                      >
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu> */}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
