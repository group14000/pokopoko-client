import { ReactNode } from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import ChatSidebar from '@/components/ChatSidebar';
import ChatHeader from '@/components/ChatHeader';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <ChatSidebar />
      <SidebarInset className="flex h-screen flex-col overflow-hidden">
        <ChatHeader />
        <main className="min-h-0 flex-1 overflow-hidden">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}