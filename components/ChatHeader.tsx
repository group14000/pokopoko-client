"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search, Phone, Video } from "lucide-react";

export default function ChatHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-background/95 px-3 backdrop-blur md:px-4">
      <div className="flex items-center gap-2.5">
        <SidebarTrigger className="md:hidden" />
        <Avatar className="size-9">
          <AvatarFallback>DT</AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">Design Team</p>
          <p className="text-xs text-muted-foreground">12 members online</p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon-sm" aria-label="Search chat">
          <Search className="size-4" />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Start voice call">
          <Phone className="size-4" />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Start video call">
          <Video className="size-4" />
        </Button>
      </div>
    </header>
  );
}
