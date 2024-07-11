"use client";

import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter } from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Input } from "../../components/ui/input";

export default function Component() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I'm an AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const userMessage = {
      role: "user",
      content: input,
    };

    // Add user message to the state
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput("");

    // Construct the payload for the backend API
    const payload = {
      messages: [...messages, userMessage],
      useRag: true,
      llm: "gpt-3.5-turbo",
      similarityMetric: "cosine",
    };

    try {
      const response = await fetch("api/Chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.text();
      console.log(data)
      const assistantMessage = {
        role: "assistant",
        content: data,
      };
      setMessages(prevMessages => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      const errorMessage = {
        role: "assistant",
        content: "There was an error getting a response from the server.",
      };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    }
  };

  return (
    <div className="bg-white">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full fixed bottom-4 right-4 bg-dark"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircleIcon className="h-6 w-6" />
        <span className="sr-only">Open chatbot</span>
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen} className="bg-white" >
        <DialogContent className="sm:max-w-md w-full ">
          <div className="flex flex-col h-[600px]">
            <DialogHeader className="border-b px-4 py-3">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">AI Assistant</p>
                  <p className="text-sm text-muted-foreground">Online</p>
                </div>
              </div>
            </DialogHeader>
            <ScrollArea className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex w-max max-w-full flex-col gap-2 rounded-lg px-3 py-2 text-sm break-words ${
                    message.role === "user" ? "ml-auto bg-white " : "bg-blue-600"
                  }`}>
                    <p>{message.content}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <DialogFooter className="border-t px-4 py-3">
              <form onSubmit={handleSendMessage} className="flex items-center w-full space-x-2">
                <Input 
                  id="message" 
                  placeholder="Type your message..." 
                  className="flex-1" 
                  autoComplete="off"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <Button type="submit" size="icon">
                  <SendIcon className="h-5 w-5" />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
