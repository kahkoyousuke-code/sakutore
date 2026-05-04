"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { saveMenuHistory } from "@/lib/menuHistory";
import { TrainingMenu } from "@/lib/mockResult";

const INITIAL_MESSAGE =
  "こんにちは！サクラだよ🌸 今日はあなた専用のトレーニングメニューを一緒に作ろう！\n\nまず、トレーニングの目的を教えて！筋肉をつけたい？ダイエットしたい？それとも健康のために体を動かしたい？なんでもOKだよ！";

type Message = {
  role: "user" | "assistant";
  content: string;
  options?: string[];
};

function TypingIndicator() {
  return (
    <div className="flex justify-start gap-2 items-end">
      <Image
        src="/sakura.png"
        alt="サクラ"
        width={32}
        height={32}
        className="rounded-full flex-shrink-0"
      />
      <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
        <div className="flex gap-1 items-center h-4">
          <span
            className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <span
            className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <span
            className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>
    </div>
  );
}

export default function ChatPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: INITIAL_MESSAGE,
      options: ["筋肥大（筋肉をつけたい）", "ダイエット（体脂肪を減らしたい）", "健康維持", "体力・スポーツ向上"],
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
  };

  const send = async (overrideText?: string) => {
    const text = overrideText ?? input.trim();
    if (!text || loading || redirecting) return;

    const userMessage: Message = { role: "user", content: text };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: data.error || "エラーが発生したよ。もう一度試してみて！",
          },
        ]);
        return;
      }

      if (data.type === "menu") {
        const menu = data.menu as TrainingMenu;
        localStorage.setItem("sakutore_chat_menu", JSON.stringify(menu));
        saveMenuHistory("chat", menu.title);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.message },
        ]);
        setRedirecting(true);
        setTimeout(() => router.push("/result?source=chat"), 2500);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.content, options: data.options },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "通信エラーが発生したよ。もう一度試してみて！",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <main className="flex flex-col h-screen bg-orange-50" style={{ height: "100dvh" }}>
      <div className="bg-white shadow-sm px-4 py-3 flex items-center gap-3 flex-shrink-0">
        <Link href="/" className="text-gray-400 hover:text-gray-600 mr-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <Image
          src="/sakura.png"
          alt="サクラ"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="font-bold text-gray-800 text-sm">サクラ</p>
          <p className="text-xs text-green-500">
            {redirecting ? "メニューを準備中..." : "オンライン"}
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.map((msg, i) => {
          const isLastAssistant =
            msg.role === "assistant" &&
            i === messages.reduce((acc, m, j) => (m.role === "assistant" ? j : acc), -1);
          return (
            <div key={i} className="space-y-2">
              <div
                className={`flex gap-2 items-end ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <Image
                    src="/sakura.png"
                    alt="サクラ"
                    width={32}
                    height={32}
                    className="rounded-full flex-shrink-0"
                  />
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap leading-relaxed ${
                    msg.role === "user"
                      ? "bg-orange-500 text-white rounded-br-sm"
                      : "bg-white text-gray-800 shadow-sm rounded-bl-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>

              {isLastAssistant && !loading && msg.options && msg.options.length > 0 && (
                <div className="flex flex-wrap gap-2 pl-10">
                  {msg.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => send(opt)}
                      disabled={redirecting}
                      className="px-3 py-1.5 rounded-full border border-orange-300 text-orange-600 text-sm bg-white hover:bg-orange-50 active:bg-orange-100 transition-colors disabled:opacity-40"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {loading && <TypingIndicator />}

        {redirecting && (
          <div className="text-center py-2">
            <p className="text-xs text-gray-400 animate-pulse">メニューページへ移動中...</p>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <div className="bg-white border-t border-gray-100 px-4 py-3 flex-shrink-0">
        <div className="max-w-md mx-auto flex gap-2 items-end">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder="メッセージを入力... (Enterで送信)"
            rows={1}
            disabled={loading || redirecting}
            className="flex-1 resize-none border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-orange-400 disabled:bg-gray-50 disabled:text-gray-400 leading-relaxed"
            style={{ maxHeight: "120px" }}
          />
          <button
            onClick={() => send()}
            disabled={!input.trim() || loading || redirecting}
            className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-200 text-white rounded-xl p-2.5 transition-colors flex-shrink-0"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}
