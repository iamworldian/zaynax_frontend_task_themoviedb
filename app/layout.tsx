"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import store from "./store/store";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Dramatic Movie Library",
  description: "A TMDB Consumer",
  icons : {
    icon: "https://illustoon.com/photo/dl/7622.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col">
      <Header/>
        <Provider store={store}>
          
          {children}
          
        </Provider>
        <Footer/>
        </body>
    </html>
  );
}
