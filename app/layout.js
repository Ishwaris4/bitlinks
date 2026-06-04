import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bitlinks - Your trusted Url shortner",
  description: "Bitlinks helps you shorten your Urls easily",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-purple-50">
        <Navbar />
        <main className="flex-grow ">{children}</main>

        <footer className="bg-purple-700 text-white  text-center">
          <h2 className="text-lg font-bold">BitLinks</h2>

          {/* <p className="text-sm mt-1 flex justify-center">Made with ❤️ using Next.js & MongoDB  
          </p> */}

          <p className="text-xs mb-1">© 2026 BitLinks. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
