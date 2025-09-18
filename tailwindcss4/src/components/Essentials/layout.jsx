import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "../SSidebar/dashbaord-sidebar";
import MemberTopNavbar from "../Navbar/navbar";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
       <div className="flex min-h-screen">
      <AdminSidebar/>
      <div className="flex-1 flex flex-col">
        <MemberTopNavbar/>
        <main className="flex-1 bg-[#fbf8f3] p-6">{children}</main>
      </div>
    </div>
  )
    </SidebarProvider>
    
  )
}

