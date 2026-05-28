import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyaw Zin Lin | Backend-Focused Full-Stack Developer",
  description:
    "Backend-focused full-stack developer from Yangon building production-ready APIs, SaaS backends, and business web applications with ASP.NET Core, C#, SQL, React, and cloud tools.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
