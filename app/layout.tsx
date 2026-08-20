import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "小D｜音视频转录整理助理",
  description: "把一段音视频，整理成一篇真正能读的中文分享式提纯稿。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
