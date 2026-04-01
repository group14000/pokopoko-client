"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { UserButton } from "@clerk/nextjs";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { MessageCircleMore } from "lucide-react";

const chats = [
  {
    id: "c-1",
    name: "Design Team",
    preview: "Please review the final spacing before handoff.",
    time: "10:42",
    unread: 3,
  },
  {
    id: "c-2",
    name: "Rahul Sharma",
    preview: "Cool, let's sync after lunch.",
    time: "09:15",
    unread: 0,
  },
  {
    id: "c-3",
    name: "Product Updates",
    preview: "New release is now live for beta users.",
    time: "Yesterday",
    unread: 8,
  },
  {
    id: "c-4",
    name: "Family",
    preview: "Dinner at 8 PM. Don't be late.",
    time: "Yesterday",
    unread: 1,
  },
];

export default function ChatSidebar() {
  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="gap-3 p-3">
        <div className="flex items-center gap-2 px-1">
          <div className="rounded-md bg-primary/10 p-1.5 text-primary">
            <MessageCircleMore className="size-4" />
          </div>
          <div className="text-sm font-semibold">Poko Chat</div>
        </div>
        <SidebarInput placeholder="Search or start chat" />
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        <SidebarGroup className="p-2">
          <SidebarGroupContent>
            <SidebarMenu>
              {chats.map((chat) => (
                <SidebarMenuItem key={chat.id}>
                  <SidebarMenuButton
                    isActive={chat.id === "c-1"}
                    className="h-auto items-start gap-3 px-2 py-2"
                  >
                    <Avatar className="mt-0.5 size-8">
                      <AvatarFallback className="text-xs">
                        {chat.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1 text-left">
                      <div className="flex items-start justify-between gap-2">
                        <p className="truncate text-sm font-medium">{chat.name}</p>
                        <span className="text-[11px] text-muted-foreground">
                          {chat.time}
                        </span>
                      </div>
                      <p className="truncate text-xs text-muted-foreground">
                        {chat.preview}
                      </p>
                    </div>
                    {chat.unread > 0 ? (
                      <Badge className="h-5 min-w-5 rounded-full px-1 text-[10px]">
                        {chat.unread}
                      </Badge>
                    ) : null}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3">
        <div className="flex items-center justify-between rounded-md bg-sidebar-accent px-3 py-2">
          <span className="text-xs text-muted-foreground">Account</span>
          <UserButton />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
