"use client";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react";
import Link from "next/link";

const items = [
  {
    title: "Home",
    icon: HomeIcon,
    href: "/",
  },
  {
    title: "Subscriptions",
    icon: PlaySquareIcon,
    href: "/feed/subscriptions",
    auth: true,
  },
  {
    title: "Trending",
    icon: FlameIcon,
    href: "/feed/trending",
  },
];

export const SidebarMainSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title} asChild isActive={false}>
                <Link href={item.href} className="flex items-center gap-4">
                  <item.icon />
                  <span className="text-sm">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
