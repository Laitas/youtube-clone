"use client";
import { SelectSeparator } from "@/components/ui/select";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { UserAvatar } from "@/components/ui/user-avatar";
import { isStudio } from "@/lib/constants";
import { useUser } from "@clerk/nextjs";
import { VideoIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Content",
    icon: VideoIcon,
    href: "/studio/content",
  },
];

export const SidebarStudioSection = () => {
  const pathname = usePathname();

  if (!isStudio(pathname)) return null;

  return (
    <>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarUserAvatar />
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  tooltip={item.title}
                  asChild
                  isActive={false}
                >
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
      <SelectSeparator />
    </>
  );
};

const SidebarUserAvatar = () => {
  const { user } = useUser();
  const { state } = useSidebar();

  if (!user)
    return (
      <SidebarHeader className="flex items-center justify-center pb-4">
        <Skeleton className="size-28 rounded-full" />
        <div className="mt-2 flex flex-col items-center gap-1">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-24" />
        </div>
      </SidebarHeader>
    );

  if (state === "collapsed")
    return (
      <SidebarMenuItem>
        <SidebarMenuButton tooltip="Your profile" asChild>
          <Link href="/users/current">
            <UserAvatar
              imageUrl={user.imageUrl}
              name={user.fullName ?? "User"}
              size="xs"
            />
            <span>Your profile</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );

  return (
    <SidebarHeader className="flex items-center justify-center pb-4">
      <SidebarMenuItem>
        <Link href="/users/current">
          <UserAvatar
            imageUrl={user.imageUrl}
            name={user.fullName ?? "User"}
            className="size-28 transition-opacity hover:opacity-80"
          />
        </Link>
        <section className="mt-2 flex flex-col items-center gap-1">
          <p className="text-sm font-medium">Your profile</p>
          {user.fullName && (
            <p className="text-muted-foreground text-xs">{user.fullName}</p>
          )}
        </section>
      </SidebarMenuItem>
    </SidebarHeader>
  );
};
