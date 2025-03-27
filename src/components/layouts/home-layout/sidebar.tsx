import { SelectSeparator } from "@/components/ui/select";
import { Sidebar as ShadcnSidebar, SidebarContent } from "../../ui/sidebar";
import { SidebarMainSection } from "./sidebar-main-section";
import { SidebarPersonalSection } from "./sidebar-personal-section";

export const Sidebar = () => {
  return (
    <ShadcnSidebar className="z-40 border-none pt-16" collapsible="icon">
      <SidebarContent className="bg-background">
        <SidebarMainSection />
        <SelectSeparator />
        <SidebarPersonalSection />
      </SidebarContent>
    </ShadcnSidebar>
  );
};
