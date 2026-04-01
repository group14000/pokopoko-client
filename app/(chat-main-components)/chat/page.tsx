import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Paperclip, SendHorizontal, Smile } from "lucide-react";

const messages = [
  {
    id: "m-1",
    sender: "other",
    text: "Morning team. Final check for today's handoff?",
    time: "10:01",
  },
  {
    id: "m-2",
    sender: "me",
    text: "Yes, spacing and typography are locked.",
    time: "10:03",
  },
  {
    id: "m-3",
    sender: "other",
    text: "Perfect. I will post the release note in 5 minutes.",
    time: "10:04",
  },
  {
    id: "m-4",
    sender: "me",
    text: "Great. Sharing the final screenshots now.",
    time: "10:06",
  },
];

export default function ChatPage() {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <ScrollArea className="min-h-0 flex-1 px-3 py-4 md:px-6">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
          {messages.map((message) => {
            const isMe = message.sender === "me";

            return (
              <div
                key={message.id}
                className={`flex items-end gap-2 ${isMe ? "justify-end" : "justify-start"}`}
              >
                {!isMe ? (
                  <Avatar className="size-7">
                    <AvatarFallback className="text-[10px]">DT</AvatarFallback>
                  </Avatar>
                ) : null}

                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm shadow-sm ${
                    isMe
                      ? "rounded-br-sm bg-primary text-primary-foreground"
                      : "rounded-bl-sm bg-card"
                  }`}
                >
                  <p>{message.text}</p>
                  <p
                    className={`mt-1 text-[11px] ${
                      isMe ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {message.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>

      <div className="border-t border-border bg-background p-3 md:p-4">
        <div className="mx-auto flex w-full max-w-3xl items-center gap-2">
          <Button size="icon-sm" variant="ghost" aria-label="Attach file">
            <Paperclip className="size-4" />
          </Button>
          <Input placeholder="Type a message" className="h-10" />
          <Button size="icon-sm" variant="ghost" aria-label="Open emoji picker">
            <Smile className="size-4" />
          </Button>
          <Button size="icon-sm" aria-label="Send message">
            <SendHorizontal className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
