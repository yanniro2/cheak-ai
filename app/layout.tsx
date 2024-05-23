import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Check AI",
    template: "%s | Check AI",
  },
  description:
    "Reap the Benefits of using the latest Artificial Intelligence Technologies. Contact us to learn more.Created by Niroyan.",

  keywords: ["AI", "Artificial Intelligence", "Technology", "Contact"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-open scroll-smooth bg-dark text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
