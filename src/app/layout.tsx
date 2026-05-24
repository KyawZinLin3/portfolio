import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyaw Zin Lin | Backend-Focused Full-Stack Developer",
  description: "A clean portfolio built with Next.js, React, TypeScript, Tailwind CSS, and GSAP.",
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
