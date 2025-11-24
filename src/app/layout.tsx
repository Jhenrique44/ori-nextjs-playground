import type { Metadata } from "next";
import "./globals.css";
import Menu from "../components/menu";


export const metadata: Metadata = {
  title: "Learn Next",
  description: "Learning Next.js step by step",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
