import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Animesh's Blog",

  description: "Blog website, created, managed and operated by Animesh Acharya",
  keywords: [
    "blogs",
    "Animesh Acharya",
    "Animesh",
    "Acharya",
    "Next Js",
    "Sanity",
    "Sanity.io",
    "Next",
    "JavaScript",
    "Blog Design",
    "tailwindcss",
    "tailwind",
    "beginner",
    "simpleblog",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="md:w-3/5 mx-auto max-w-screen max-h-screen mt-8 w-4/5">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
