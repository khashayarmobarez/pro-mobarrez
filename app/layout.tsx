import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mobarrez Pro - Elite Engineering Squad",
  description: "Meet the elite squad that companies trust for precision engineering. Next.js experts, AI specialists, and design masters.",
  keywords: ["software development", "database development", "AI development", "elite engineering team", "trusted developers"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}