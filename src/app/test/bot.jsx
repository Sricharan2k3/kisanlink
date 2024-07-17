"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../components/ui/avatar";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Input } from "../../components/ui/input";

export default function Component() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm an AI assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingDots, setLoadingDots] = useState(".");

  useEffect(() => {
    let interval;
    if (isLoading) {
      interval = setInterval(() => {
        setLoadingDots((prev) => (prev.length < 3 ? prev + "." : "."));
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1),
          { role: "assistant", content: loadingDots },
        ]);
      }, 500);
    } else {
      setLoadingDots(".");
    }
    return () => clearInterval(interval);
  }, [isLoading, loadingDots]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    const payload = {
      messages: [...messages, userMessage],
      useRag: true,
      llm: "gpt-3.5-turbo",
      similarityMetric: "cosine",
    };

    setIsLoading(true);

    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "assistant", content: loadingDots },
    ]);

    try {
      const chatResponse = await fetch("/api/Chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const chatData = await chatResponse.text();
     
      const assistantMessage = {
        role: "assistant",
        content: chatData,
      };

      console.log(chatData)

      const ttsResponse = await fetch("/api/TextToSpeech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: chatData }),
      });
      
      const ttsData = await ttsResponse.blob();
      const audioURL = URL.createObjectURL(ttsData);
      
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1), // Remove the loading indicator
        assistantMessage,
        {
          role: "assistant",
          content: (
            <audio controls>
              <source src={audioURL} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          ),
        },
      ]);
    } catch (error) {
      console.error("Error fetching response:", error);
      const errorMessage = {
        role: "assistant",
        content: "There was an error getting a response from the server.",
      };
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1), // Remove the loading indicator
        errorMessage,
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full fixed bottom-4 right-4 bg-white h-16 w-44 hover:bg-green-700 shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        AI Assistant
        <img className="h-16 w-16" src="./bot.png" alt="Bot Icon" />
        <span className="sr-only">Open chatbot</span>
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen} className="bg-white">
        <DialogContent className="lg:w-[465px] small:w-[350px] rounded-lg shadow-2xl">
          <div className="flex flex-col h-[600px]">
            <DialogHeader className="border-b px-4 py-3 bg-gray-100">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="Bot Avatar" />
                  <AvatarFallback>
                    <img src="./bot.png" alt="Bot" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-gray-900">
                    Digicrop - AI Crop Assistant
                  </p>
                  <p className="text-sm text-gray-600">Online</p>
                </div>
              </div>
            </DialogHeader>
            <ScrollArea className="flex-1 p-4 overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex w-max lg:max-w-96 small:max-w-64 flex-col gap-2 rounded-lg px-3 py-2 text-sm break-words shadow-sm ${
                      message.role === "user"
                        ? "ml-auto bg-blue-100 text-white"
                        : "bg-gray-200 text-gray-900"
                    }`}
                  >
                    <p style={{ whiteSpace: "pre-wrap" }}>
                      {typeof message.content === "string" ? message.content : ""}
                    </p>
                    {typeof message.content !== "string" && message.content}
                  </div>
                ))}
              </div>
            </ScrollArea>
            <DialogFooter className="border-t px-4 py-3 bg-gray-100">
              <form
                onSubmit={handleSendMessage}
                className="flex items-center w-full space-x-2"
              >
                <Input
                  id="message"
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  autoComplete="off"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <Button type="submit" className="rounded-full" size="icon">
                  <SendIcon className="text-blue-500 h-8 w-8" />
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
