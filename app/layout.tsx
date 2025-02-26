import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "0xhacker",
  description: "Geek Enthusiast and Web3 Idealist",
  icons: {
    icon: '/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <div className="scroll-container">
          {children}
        </div>
      </body>
    </html>
  );
}
