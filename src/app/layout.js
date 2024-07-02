import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
// import Navbar from "./components/navbar";
import { NavbarDemo } from "./components/navbar-main";
import Header from "./sample/header";

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
        <Header />


        {children} <Footer />
      </body>
    </html>
  );
}
