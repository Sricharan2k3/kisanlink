import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
// import Navbar from "./components/navbar";
import { NavbarDemo } from "./components/navbar-main";
import Header from "./sample/header";
import Component from "../app/test/bot";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kisanlink",
  description:
    "We are an intermediary, working towards bringing together the Agri Companies and the farmers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <Header />

        {children}
        <Component></Component>
        <Footer />
      </body>
    </html>
  );
}
