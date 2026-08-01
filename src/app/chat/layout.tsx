import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "AIチャットでメニュー作成 - サクトレ",
  description:
    "サクラとチャットしながら、その日の体調や使える器具に合わせたトレーニングメニューを作れます。",
  path: "/chat",
  type: "website",
  noindex: true,
});

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
